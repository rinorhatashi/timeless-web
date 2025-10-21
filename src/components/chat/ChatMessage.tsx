"use client";

import { Message, MessageLink } from "./types";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ChatMessageProps {
  message: Message;
  onQuestionClick?: (question: string) => void;
}

export const ChatMessage = ({ message, onQuestionClick }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full animate-fadeIn ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 transition-all duration-300 ${
          isUser
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "border border-black/10 bg-gray-50 text-gray-900 dark:border-white/10 dark:bg-gray-950 dark:text-white"
        }`}
      >
        <div className="whitespace-pre-line text-[13px] leading-relaxed">
          {message.content}
        </div>

        {/* Links */}
        {message.links && message.links.length > 0 && (
          <div className="mt-2.5 flex flex-col gap-1.5">
            {message.links.map((link: MessageLink, index: number) => (
              <Link
                key={index}
                href={link.url}
                className={`group inline-flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  isUser
                    ? "border-white/20 bg-white/10 hover:bg-white/20"
                    : "border-black/10 bg-white hover:border-black hover:bg-gray-50 dark:border-white/10 dark:bg-black dark:hover:border-white dark:hover:bg-gray-900"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3" />
                  {link.text}
                </span>
                <ArrowRight className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        )}

        {/* Related Questions */}
        {message.relatedQuestions && message.relatedQuestions.length > 0 && onQuestionClick && (
          <div className={`mt-2.5 border-t pt-2.5 ${isUser ? "border-white/20" : "border-black/10 dark:border-white/10"}`}>
            <p className="mb-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-500">You might also ask:</p>
            <div className="flex flex-col gap-1">
              {message.relatedQuestions.map((question: string, index: number) => (
                <button
                  key={index}
                  onClick={() => onQuestionClick(question)}
                  className={`group rounded-lg px-2.5 py-1.5 text-left text-xs transition-all duration-200 ${
                    isUser
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-white hover:bg-gray-50 dark:bg-black dark:hover:bg-gray-900"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{question}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

