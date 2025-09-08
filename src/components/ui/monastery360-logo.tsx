"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Monastery360Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn(sizes[size], "aspect-square")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 4L4 20V28L32 12L60 28V20L32 4Z"
          className="fill-current"
        />
        <path
          d="M8 24V48H56V24L32 8L8 24Z"
          className="fill-current opacity-80"
        />
        <path
          d="M32 60C45.2548 60 56 49.2548 56 36C56 22.7452 45.2548 12 32 12C18.7452 12 8 22.7452 8 36C8 49.2548 18.7452 60 32 60Z"
          className="fill-current opacity-60"
        />
        <text
          x="32"
          y="42"
          className="text-background font-bold"
          textAnchor="middle"
          fontSize="12"
        >
          360
        </text>
      </svg>
      <span className={cn("font-headline font-bold tracking-tight", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}>
        Monastery360
      </span>
    </div>
  );
}
