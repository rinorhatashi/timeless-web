"use client";

import { useState, KeyboardEvent } from "react";
import { Send, ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = ({ 
  onSendMessage, 
  disabled = false,
  placeholder = "Ask me anything..." 
}: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-black/5 bg-white p-4 dark:border-white/5 dark:bg-black">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 rounded-xl border border-black/10 bg-gray-50 px-4 py-3 text-sm text-black placeholder-gray-400 transition-all focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500 dark:focus:border-white dark:focus:bg-black dark:focus:ring-white/5"
          aria-label="Chat message input"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !inputValue.trim()}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:scale-100 dark:bg-white dark:text-black"
          aria-label="Send message"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

