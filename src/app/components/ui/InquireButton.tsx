"use client";

import { ArrowUpRight } from "lucide-react";

interface InquireButtonProps {
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function InquireButton({
  onClick,
  className = "",
  size = "md",
}: InquireButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`group relative z-[1000] bg-primary-600 text-white rounded-lg font-semibold transition-all duration-700 hover:shadow-lg hover:bg-primary-700 flex items-center gap-2 ${sizeClasses[size]} ${className}`}
    >
      <span>Inquire Now</span>
      <div className="relative overflow-hidden flex items-center justify-center w-5 h-5">
        <ArrowUpRight
          className="w-5 h-5 transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0"
          strokeWidth={2.5}
        />
        <ArrowUpRight
          className="w-5 h-5 absolute transition-all duration-700 -translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
}
