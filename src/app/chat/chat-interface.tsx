'use client';

import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Loader2, Send, MountainSnow, User, Bot} from 'lucide-react';
import {chatAboutMonasteries} from '@/ai/flows/chat-about-monasteries';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export default function ChatInterface({ initialMessages = [] }: { initialMessages?: Message[] }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {role: 'user', content: input};
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages;
      const result = await chatAboutMonasteries({history: chatHistory, query: input});
      
      if (result.response) {
        const modelMessage: Message = {role: 'model', content: result.response};
        setMessages(prev => [...prev, modelMessage]);
      } else {
        throw new Error('No response from AI.');
      }
    } catch (error) {
      console.error('Error chatting with AI:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get a response from the AI. Please try again.',
      });
       // Revert to previous messages state on error
       setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col h-[70vh]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MountainSnow className="text-primary" />
          Sikkim Monastery Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto pr-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'model' && (
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <Bot size={20} />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  msg.role === 'user'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
               {msg.role === 'user' && (
                <div className="bg-blue-500 rounded-full p-2 text-white">
                  <User size={20} />
                </div>
              )}
            </div>
          ))}
           {isLoading && (
            <div className="flex items-start gap-3 justify-start">
               <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <Bot size={20} />
                </div>
              <div className="bg-muted rounded-lg p-3 flex items-center">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-4 border-t">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about a monastery..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
