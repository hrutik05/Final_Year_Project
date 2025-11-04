import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Copy, ThumbsUp, ThumbsDown, BookOpen, Scale, X } from 'lucide-react';
import { useToast } from '../hooks/useToast';
import { logError, logUserAction } from '../utils/logger';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  citations?: string[];
}

const sampleResponses = [
  {
    query: "What are the fundamental rights under Indian Constitution?",
    response: "The fundamental rights under the Indian Constitution are enshrined in Part III (Articles 12-35). The six fundamental rights are:\n\n1. **Right to Equality** (Articles 14-18)\n2. **Right to Freedom** (Articles 19-22)\n3. **Right against Exploitation** (Articles 23-24)\n4. **Right to Freedom of Religion** (Articles 25-28)\n5. **Cultural and Educational Rights** (Articles 29-30)\n6. **Right to Constitutional Remedies** (Article 32)\n\nThese rights are justiciable and can be enforced through courts.",
    citations: ["Constitution of India, Part III", "Article 12-35", "Dr. Ambedkar's Constitutional Assembly Debates"]
  },
  {
    query: "What is Section 302 IPC?",
    response: "Section 302 of the Indian Penal Code, 1860 deals with **Murder**.\n\n**Definition**: Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.\n\n**Key Elements**:\n- Intentional causing of death\n- Knowledge that the act is likely to cause death\n- Done without any legal justification or excuse\n\n**Punishment**: Death penalty or life imprisonment + fine\n\nThis is one of the most serious offenses under Indian criminal law.",
    citations: ["Indian Penal Code, 1860 - Section 302", "Ratanlal & Dhirajlal's Law of Crimes", "Supreme Court judgments on murder"]
  }
];

interface ChatInterfaceProps {
  onClose?: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI Legal Assistant specialized in Indian Laws. I can help you with questions about Constitutional Law, Criminal Law, Civil Procedures, Corporate Law, and more. How can I assist you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { showError, showSuccess } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Log user action
    logUserAction('chat_message_sent', {
      component: 'ChatInterface',
      messageLength: inputMessage.length
    });

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    try {
      // Simulate potential API call failure
      const shouldFail = Math.random() < 0.1; // 10% chance of failure
      
      if (shouldFail) {
        throw new Error('API service temporarily unavailable');
      }

      setTimeout(() => {
        const matchedResponse = sampleResponses.find(sample => 
          inputMessage.toLowerCase().includes(sample.query.toLowerCase().split(' ')[0]) ||
          inputMessage.toLowerCase().includes('fundamental') ||
          inputMessage.toLowerCase().includes('302') ||
          inputMessage.toLowerCase().includes('murder')
        );

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: matchedResponse?.response || "I understand you're asking about Indian law. While I'm designed to provide comprehensive legal guidance, I'd recommend consulting with a qualified lawyer for specific legal advice. I can help explain general legal principles, procedures, and provisions under various Indian acts and codes. Could you please rephrase your question or ask about a specific legal topic?",
          timestamp: new Date(),
          citations: matchedResponse?.citations || ["Indian Constitution", "Various Legal Acts", "Supreme Court Judgments"]
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 2000);
    } catch (error) {
      setIsTyping(false);
      
      // Log the error
      logError(error as Error, {
        component: 'ChatInterface',
        action: 'send_message',
        userMessage: inputMessage
      });

      // Show user-friendly error message
      showError(
        'Message Failed',
        'Unable to send your message. Please check your connection and try again.',
        {
          action: {
            label: 'Retry',
            onClick: () => handleSendMessage()
          }
        }
      );

      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, but I'm having trouble processing your request right now. This could be due to a temporary service issue or connectivity problem. Please try again in a moment.",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        showSuccess('Copied!', 'Message copied to clipboard');
        logUserAction('message_copied', { component: 'ChatInterface' });
      })
      .catch((error) => {
        logError(error, { component: 'ChatInterface', action: 'copy_message' });
        showError('Copy Failed', 'Unable to copy message to clipboard');
      });
  };

  const quickQuestions = [
    "What are fundamental rights?",
    "Explain Section 302 IPC",
    "What is Article 21?",
    "Difference between IPC and CrPC",
    "What is bail procedure?",
    "Property rights in India"
  ];

  return (
    <section id="chat" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Legal Assistant
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ask any question about Indian laws and get instant, accurate responses with proper citations.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Legal AI Assistant</h3>
                  <p className="text-blue-100 text-sm">Specialized in Indian Laws</p>
                </div>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick questions to get started:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-600"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                  }`}>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.citations && (
                      <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Citations:</span>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {message.citations.map((citation, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-gray-500">•</span>
                              <span>{citation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {message.type === 'bot' && (
                      <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                        <button
                          onClick={() => copyMessage(message.content)}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-3 max-w-3xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <p className="text-xs text-yellow-800 dark:text-yellow-300">
                <strong>Translation Note:</strong> Legal advice is provided in English for accuracy. 
                Use the language selector above to translate the interface, but consult original legal texts for precise meanings.
              </p>
            </div>
            <div className="flex space-x-4">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask any question about Indian laws..."
                className="flex-1 resize-none border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              This AI assistant provides general legal information. Always consult a qualified lawyer for specific legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}