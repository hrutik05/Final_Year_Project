export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string | Date;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string | Date;
}

export interface ChatHistoryItem {
  query: string;
  response: string;
  timestamp: string | Date;
}

export interface BotResponse {
  answer: string;
  citations?: unknown[];
  disclaimer?: string;
}
