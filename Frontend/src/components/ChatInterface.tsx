
import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Plus,
  MessageSquare,
  Trash2,
  X,
  Menu,
  User,
  Bot,
} from 'lucide-react';
import { Message, Conversation, ChatHistoryItem, BotResponse } from '../types';
import { apiClient } from '../utils/apiClient';
import { useToast } from '../hooks/useToast';

function ChatInterface() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'New Conversation',
      messages: [],
      createdAt: new Date(),
    },
  ]);
  const [activeConversationId, setActiveConversationId] = useState('1');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { showError, showSuccess } = useToast();

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  // Fetch chat history from backend
  const fetchHistory = async () => {
    try {
      const user = localStorage.getItem('user');
      if (!user) return;
      const parsed = JSON.parse(user);
      const userId = parsed.id || parsed._id;
      if (!userId) return;

      const resp = await apiClient.get(`/auth/chat-history/${userId}`);
      if (resp && resp.success) {
        // resp.data can be either the array directly or an object like { success:true, data: [...] }
        const raw = resp.data as unknown;
        const payload: ChatHistoryItem[] = Array.isArray(raw)
          ? (raw as ChatHistoryItem[])
          : (typeof raw === 'object' && raw !== null && Array.isArray((raw as Record<string, unknown>)['data']))
          ? ((raw as Record<string, unknown>)['data'] as ChatHistoryItem[])
          : [];
        setHistory(payload);
      }
    } catch (err) {
      console.error('Failed to fetch chat history:', err);
    }
  };

  const deleteHistoryItem = async (idx: number) => {
    const item = history[idx];
    if (!item) return;

    // Optimistically remove item from UI first
    setHistory((prev) => prev.filter((_, i) => i !== idx));
    
    try {
      const user = localStorage.getItem('user');
      if (!user) return;
      const parsed = JSON.parse(user);
      const userId = parsed.id || parsed._id;

      const resp = await apiClient.delete(
        `/auth/chat-history/${userId}?query=${encodeURIComponent(item.query)}`
      );
      if (resp && resp.success) {
        showSuccess('Deleted', 'Chat history item removed');
      } else {
        // Revert the deletion if API call fails
        setHistory((prev) => {
          const newHistory = [...prev];
          newHistory.splice(idx, 0, item);
          return newHistory;
        });
        showError('Delete failed', 'Unable to remove history');
      }
    } catch (err) {
      // Revert the deletion on error
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.splice(idx, 0, item);
        return newHistory;
      });
      console.error('Error deleting history item:', err);
      showError('Delete failed', 'Network or server error');
    }
  };

  const loadHistoryItem = (idx: number) => {
    const item = history[idx];
    if (!item) return;
    const userMsg: Message = {
      id: `hist-user-${idx}-${Date.now()}`,
      role: 'user',
      content: item.query,
      timestamp: new Date(),
    };
    const botMsg: Message = {
      id: `hist-bot-${idx}-${Date.now()}`,
      role: 'assistant',
      content: item.response,
      timestamp: new Date(),
    };
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === activeConversationId
          ? { ...conv, messages: [userMsg, botMsg], title: item.query.slice(0, 30) + '...' }
          : conv
      )
    );
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [activeConversation?.messages]);

  

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Add user message to UI immediately
    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === activeConversationId) {
          const updatedMessages = [...conv.messages, userMessage];
          return {
            ...conv,
            messages: updatedMessages,
            title:
              conv.messages.length === 0 ? content.slice(0, 30) + '...' : conv.title,
          };
        }
        return conv;
      })
    );

    setIsTyping(true);

    try {
      // Forward the query to Node backend which proxies to Python service
      const resp = await apiClient.post<BotResponse>('/auth/chatbot/query', { query: content });

      // resp.data should contain { answer, citations, disclaimer } (see Python service)
      let botContent = 'Query is outside supported legal domains. This chatbot answers only legal (law-related) queries.';
      if (resp && resp.success) {
        // Normalize several possible shapes coming from backend/proxy:
        // 1) resp.data = { answer: '...' , citations: [...] }
        // 2) resp.data = { data: { answer: '...', ... } }
        // 3) resp.data = 'plain string'
        const body = resp.data as unknown;
        let inner: unknown = body;
        if (typeof body === 'object' && body !== null && (body as Record<string, unknown>)['data']) {
          inner = (body as Record<string, unknown>)['data'];
        }

        if (typeof inner === 'object' && inner !== null && typeof (inner as any).answer === 'string') {
          botContent = (inner as any).answer as string;
        } else if (typeof body === 'string') {
          botContent = body;
        } else {
          // Fallback: stringify minimal piece to avoid showing entire wrapper
          try {
            botContent = JSON.stringify(inner).slice(0, 200);
          } catch (e) {
            botContent = 'Sorry, the assistant returned an unexpected response.';
          }
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botContent,
        role: 'assistant',
        timestamp: new Date(),
      };

      // Append bot message to conversation
      setConversations((prev) =>
        prev.map((conv) => {
          if (conv.id === activeConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, botMessage],
            };
          }
          return conv;
        })
      );

      // Persist Q/A to backend chat history (if user logged in)
      (async () => {
        try {
          const user = localStorage.getItem('user');
          if (!user) return;
          const parsed = JSON.parse(user);
          const userId = parsed.id || parsed._id;
          if (!userId) return;

          // Save only the answer text to history, not the full JSON wrapper
          const payload = { userId, query: content, response: botMessage.content };
          const saveResp = await apiClient.post('/auth/chat-history', payload);
          if (saveResp && saveResp.success) {
            // Prepend to local history so sidebar updates immediately
            setHistory((prev) => [
              { query: content, response: botMessage.content, timestamp: new Date() },
              ...prev,
            ]);
            showSuccess('Saved', 'Conversation saved to history');
          }
        } catch (err) {
          console.error('Failed to save chat history:', err);
        }
      })();
    } catch (err) {
      console.error('Error calling chatbot endpoint:', err);
      const botMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: 'Sorry — the assistant is unavailable right now. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };

      setConversations((prev) =>
        prev.map((conv) => {
          if (conv.id === activeConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, botMessage],
            };
          }
          return conv;
        })
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleSendMessage(input.trim());
      setInput('');
      if (inputRef.current) inputRef.current.style.height = 'auto';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
  };

  const handleNewConversation = () => {
    const newConv: Conversation = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [],
      createdAt: new Date(),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConversationId(newConv.id);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
  };


  const parseMarkdown = (text: string) => {
    let html = text;
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>');
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    return html;
  };

  const formatDate = (date: string | Date) =>
    new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white flex flex-col transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 border-b border-gray-800">
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-800 rounded"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handleNewConversation}
              className="w-full flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">New Chat</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-2">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Conversations
            </h3>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`group relative mb-1 rounded-lg transition-all ${
                  conv.id === activeConversationId
                    ? 'bg-gray-800'
                    : 'hover:bg-gray-800'
                }`}
              >
                <button
                  onClick={() => setActiveConversationId(conv.id)}
                  className="w-full text-left px-3 py-3 pr-10"
                >
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 mt-0.5 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-gray-200">
                        {conv.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {formatDate(conv.createdAt)}
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleDeleteConversation(conv.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* History Section */}
            <div className="mt-5 border-t border-gray-700 pt-4">
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Saved History
              </h3>
              {history.length === 0 ? (
                <p className="text-gray-500 text-sm px-2">No saved history</p>
              ) : (
                history.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative mb-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <button
                      onClick={() => loadHistoryItem(idx)}
                      className="w-full text-left px-3 py-2"
                    >
                      <p className="text-sm text-gray-200 truncate">{item.query}</p>
                    </button>
                    <button
                      onClick={() => deleteHistoryItem(idx)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </aside>
      </>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-screen">
        <header className="border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ChatBot-AI Legal Assistant
              </h1>
            </div>
            <button
              onClick={() =>
                setConversations((prev) =>
                  prev.map((c) =>
                    c.id === activeConversationId
                      ? { ...c, messages: [], title: 'New Conversation' }
                      : c
                  )
                )
              }
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              title="Clear conversation"
            >
              <Trash2 className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {!activeConversation?.messages.length ? (
              <div className="text-center text-gray-600 py-20">
                <p>Start a conversation by typing below</p>
              </div>
            ) : (
              activeConversation.messages.map((msg: Message) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 mb-6 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white border'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
                      />
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white border rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Box */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <form onSubmit={handleSubmit} className="relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 bottom-2 p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
