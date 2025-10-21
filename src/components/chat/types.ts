export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  links?: MessageLink[];
  relatedQuestions?: string[];
}

export interface MessageLink {
  text: string;
  url: string;
}

export interface QuickQuestion {
  id: string;
  category: string;
  question: string;
  keywords: string[];
  answer: string;
  links?: MessageLink[];
  relatedQuestions?: string[];
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
}

