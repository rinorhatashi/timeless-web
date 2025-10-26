"use client";

import { useEffect, useRef } from "react";
import { Message } from "./types";
import { ChatMessage } from "./ChatMessage";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  onQuestionClick?: (question: string) => void;
}

export const ChatMessages = ({ messages, isTyping, onQuestionClick }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 space-y-3 overflow-y-auto bg-white p-4 dark:bg-black">
      {messages.map((message) => (
        <ChatMessage 
          key={message.id} 
          message={message} 
          onQuestionClick={onQuestionClick}
        />
      ))}
      
      {isTyping && (
        <div className="flex animate-fadeIn justify-start">
          <div className="rounded-xl border border-black/10 bg-gray-50 px-4 py-2.5 dark:border-white/10 dark:bg-gray-950">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s] dark:bg-gray-600"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s] dark:bg-gray-600"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-500">Atlas is thinking...</span>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

