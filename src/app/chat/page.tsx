import { MessageCircle } from "lucide-react";
import ChatInterface from "./chat-interface";
import { monasteries } from "@/lib/monastery-data";

export default function ChatPage() {
    const initialMessages = [
        { role: 'model' as const, content: `Hello! I am an expert on Sikkimese monasteries. You can ask me anything about the ${monasteries.length} monasteries I have information on. For example, "Tell me about Rumtek Monastery" or "Which monastery is the oldest?".` },
    ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <MessageCircle className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Monastery Assistant</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ask me anything about the monasteries of Sikkim. I can provide details on their history, significance, location, and more.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <ChatInterface initialMessages={initialMessages} />
      </div>
    </div>
  );
}