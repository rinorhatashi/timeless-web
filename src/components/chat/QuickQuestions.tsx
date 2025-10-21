"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface QuickQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export const QuickQuestions = ({ questions, onQuestionClick }: QuickQuestionsProps) => {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
        <Sparkles className="h-3 w-3" />
        <span>Quick Questions</span>
      </div>
      <div className="grid gap-1.5">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="group flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2 text-left text-[13px] text-gray-900 transition-all duration-200 hover:border-black hover:bg-gray-50 dark:border-white/10 dark:bg-black dark:text-white dark:hover:border-white dark:hover:bg-gray-950"
          >
            <span className="font-normal">{question}</span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          </button>
        ))}
      </div>
    </div>
  );
};

