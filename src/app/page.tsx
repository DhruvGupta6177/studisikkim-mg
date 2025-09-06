import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MountainSnow, Map, Route, Sparkles, BookOpenText, CalendarDays, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChatInterface from "./chat/chat-interface";

export default function Home() {
  const features = [
    {
      icon: <BookOpenText className="w-8 h-8 text-primary" />,
      title: "Explore Monasteries",
      description: "Discover the rich history and cultural significance of Sikkim's monasteries.",
      href: "/monasteries",
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: "Interactive Map",
      description: "Find monasteries, plan your travel, and explore nearby attractions with our map.",
      href: "/map",
    },
    {
      icon: <Route className="w-8 h-8 text-primary" />,
      title: "Curated Itineraries",
      description: "Follow our suggested itineraries to make the most of your spiritual journey.",
      href: "/itineraries",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Discover Artifacts",
      description: "Use our AI tool to learn more about the artifacts and murals you encounter.",
      href: "/discover",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://www.designveloper.com/wp-content/uploads/2023/04/00c3df3362baac58a6f6dc35b1aeea5a.webp"
          alt="Beautiful waterfront with colorful buildings"
          fill
          className="object-cover scale-105 transition-transform duration-[30s] hover:scale-110 brightness-100 contrast-105"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30 backdrop-blur-[0.5px]" />
        <div className="relative z-10 px-4 max-w-4xl mx-auto transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-8 animate-slideInFromTop">
            <span className="block text-slate-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)] hover:text-slate-800 transition-all duration-500">
              A Journey Through Sikkim&apos;s Sacred Monasteries
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-800 font-medium animate-slideInFromBottom py-4 px-6 rounded-full bg-white/80 shadow-xl transform hover:scale-105 transition-all duration-500">
            Explore the spiritual heart of the Himalayas. Your guide to cultural treasures and serene landscapes.
          </p>
          <div className="mt-16 animate-fadeIn">
            <Link href="/monasteries" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-lg transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <Button 
                size="lg" 
                className="relative px-8 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all duration-500 ease-out group-hover:scale-105 shadow-xl"
              >
                <span className="relative inline-flex items-center gap-3 text-lg font-medium">
                  Start Exploring
                  <span className="relative w-7 h-7 rounded-full bg-slate-700 group-hover:rotate-90 transition-transform duration-500 hover:shadow-lg">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 p-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
             <ChatInterface initialMessages={[]} />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Discover, Plan, and Experience</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              All the tools you need for an unforgettable journey into Sikkim&apos;s cultural heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.description}</CardDescription>
                  <Button asChild variant="link" className="mt-4 text-accent">
                    <Link href={feature.href}>Learn more &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                <CalendarDays className="w-4 h-4" />
                <span>Cultural Calendar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Never Miss a Festival</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the schedules of vibrant festivals, sacred rituals, and cultural events happening at monasteries across Sikkim.
              </p>
              <Button asChild className="mt-6">
                <Link href="/calendar">View Calendar</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/600/400"
                alt="Sikkimese festival"
                data-ai-hint="sikkim festival"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
