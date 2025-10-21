"use client";

import { Minus, X, Sparkles } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize?: () => void;
}

export const ChatHeader = ({ onClose, onMinimize }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3 text-black dark:border-white/5 dark:bg-black dark:text-white">
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 ring-2 ring-white dark:ring-black" />
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-tight">Atlas</h3>
          <p className="text-xs text-gray-500 dark:text-gray-500">Your Timeless Guide</p>
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        {onMinimize && (
          <button
            onClick={onMinimize}
            className="rounded-lg p-1.5 text-gray-400 transition-all duration-200 hover:bg-black/5 hover:text-black dark:text-gray-500 dark:hover:bg-white/5 dark:hover:text-white"
            aria-label="Minimize chat"
          >
            <Minus className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-gray-400 transition-all duration-200 hover:bg-black/5 hover:text-black dark:text-gray-500 dark:hover:bg-white/5 dark:hover:text-white"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

