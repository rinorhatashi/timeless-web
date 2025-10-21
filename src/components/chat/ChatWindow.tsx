"use client";

import { useState, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { QuickQuestions } from "./QuickQuestions";
import { Message } from "./types";
import questionsData from "@/lib/chat/questions-database.json";

interface ChatWindowProps {
  onClose: () => void;
  isOpen: boolean;
}

export const ChatWindow = ({ onClose, isOpen }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        role: "assistant",
        content: questionsData.welcomeMessage,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Find answer for a question
  const findAnswer = (userQuestion: string): Message | null => {
    const normalizedQuestion = userQuestion.toLowerCase().trim();
    
    // Try exact match first
    const exactMatch = questionsData.questions.find(
      (q) => q.question.toLowerCase() === normalizedQuestion
    );
    
    if (exactMatch) {
      return {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: exactMatch.answer,
        timestamp: new Date(),
        links: exactMatch.links,
        relatedQuestions: exactMatch.relatedQuestions?.map(
          (id) => questionsData.questions.find((q) => q.id === id)?.question || ""
        ).filter(Boolean),
      };
    }

    // Try keyword match
    const keywordMatch = questionsData.questions.find((q) =>
      q.keywords.some((keyword) => normalizedQuestion.includes(keyword.toLowerCase()))
    );

    if (keywordMatch) {
      return {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: keywordMatch.answer,
        timestamp: new Date(),
        links: keywordMatch.links,
        relatedQuestions: keywordMatch.relatedQuestions?.map(
          (id) => questionsData.questions.find((q) => q.id === id)?.question || ""
        ).filter(Boolean),
      };
    }

    // Fallback message
    return {
      id: `msg-${Date.now()}`,
      role: "assistant",
      content: questionsData.fallbackMessage,
      timestamp: new Date(),
    };
  };

  const handleSendMessage = (content: string) => {
    // Hide quick questions after first message
    setShowQuickQuestions(false);

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay and find answer
    setTimeout(() => {
      const answer = findAnswer(content);
      if (answer) {
        setMessages((prev) => [...prev, answer]);
      }
      setIsTyping(false);
    }, 800);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  // Quick questions to show initially
  const quickQuestions = [
    "What services does Timeless offer?",
    "Which industries do you serve?",
    "What are Agentic Systems?",
    "How can I contact Timeless?",
    "What platforms do you provide?",
    "Where are you located?",
  ];

  return (
    <div
      className={`fixed bottom-20 right-6 z-50 flex h-[580px] w-[380px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 dark:border-white/10 dark:bg-black dark:shadow-[0_20px_40px_rgba(255,255,255,0.06)] max-sm:fixed max-sm:inset-4 max-sm:bottom-20 max-sm:right-4 max-sm:h-auto max-sm:w-auto ${
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-label="Chat with Atlas"
    >
      <ChatHeader onClose={onClose} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <ChatMessages 
          messages={messages} 
          isTyping={isTyping}
          onQuestionClick={handleQuestionClick}
        />
        
        {showQuickQuestions && messages.length <= 1 && (
          <div className="border-t border-black/5 bg-white p-4 dark:border-white/5 dark:bg-black">
            <QuickQuestions
              questions={quickQuestions}
              onQuestionClick={handleQuestionClick}
            />
          </div>
        )}
      </div>

      <ChatInput 
        onSendMessage={handleSendMessage} 
        disabled={isTyping}
        placeholder="Ask me anything..."
      />
    </div>
  );
};

