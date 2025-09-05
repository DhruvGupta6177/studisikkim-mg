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
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1600/900"
          alt="A serene monastery in Sikkim"
          data-ai-hint="serene monastery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            A Journey Through Sikkim&apos;s Sacred Monasteries
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Explore the spiritual heart of the Himalayas. Your guide to cultural treasures and serene landscapes.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/monasteries">Start Exploring</Link>
          </Button>
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