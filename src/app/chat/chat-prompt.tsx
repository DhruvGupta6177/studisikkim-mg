'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';

interface ChatPromptProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  input: string;
  setInput: (value: string) => void;
}

export function ChatPrompt({ isLoading, onSubmit, input, setInput }: ChatPromptProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 pt-4 border-t">
      <div className="relative flex-1">
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about a monastery..."
          disabled={isLoading}
          className="flex-1 pr-10 bg-gradient-to-r from-background to-muted border-muted-foreground/20 focus-visible:ring-primary/20"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {isLoading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={isLoading || !input.trim()} 
        size="icon"
        className="bg-gradient-to-r from-primary to-primary-foreground hover:opacity-90 transition-opacity"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}
