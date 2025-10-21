"use client";

import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
}

export const ChatButton = ({ isOpen, onClick, unreadCount = 0 }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:ring-white"
      aria-label={isOpen ? "Close chat" : "Open chat"}
      tabIndex={0}
    >
      {isOpen ? (
        <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" aria-hidden="true" />
      ) : (
        <>
          <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-bold text-white dark:bg-white dark:text-black">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </>
      )}
    </button>
  );
};

