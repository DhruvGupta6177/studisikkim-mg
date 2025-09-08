"use client";

import dynamic from 'next/dynamic';
import { MessageCircle } from "lucide-react";
import { ChatLoadingState } from "./chat-loading";

const ChatInterface = dynamic(() => import('./chat-interface'), {
  loading: () => <ChatLoadingState />
});

export function ChatSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>AI Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ask Anything About Sikkimese Monasteries</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question? Our AI assistant is here to provide you with instant information about the history, significance, and visiting details of any monastery.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ChatInterface />
        </div>
      </div>
    </section>
  );
}
