import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Send, Sparkles } from 'lucide-react';

interface ChatPromptProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  input: string;
  setInput: (value: string) => void;
}

export function ChatPrompt({ isLoading, onSubmit, input, setInput }: ChatPromptProps) {
  return (
    <form onSubmit={onSubmit} className="relative group">
      {/* Glowing background effect */}
      <div className="absolute inset-0 chat-prompt-glow rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main prompt container */}
      <div className="relative flex gap-2 chat-prompt-glow p-1 rounded-full">
        <div className="flex-1 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 rounded-full px-3 py-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Seek wisdom about monasteries, traditions, or plan your spiritual journey..."
            disabled={isLoading}
            className="border-0 bg-transparent focus-visible:ring-0 text-rose-800 placeholder:text-rose-600/50 text-lg"
          />
        </div>
        
        {/* Send button */}
        <Button 
          type="submit" 
          disabled={isLoading}
          className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-amber-50 shadow-md hover:shadow-lg transition-all duration-300 px-6"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
          <span className="sr-only">Send message</span>
        </Button>
      </div>

      {/* Decorative elements */}
      <Sparkles className="absolute right-16 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400/70 animate-pulse" />
      
      {/* Animated ring on focus */}
      <div className="absolute inset-0 rounded-full border border-amber-200/30 group-hover:border-amber-300/50 transition-colors duration-300"></div>
    </form>
  );
}
