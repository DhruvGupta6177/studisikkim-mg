"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenText, Map, Route, Sparkles } from "lucide-react";

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

export function FeaturesSection() {
  return (
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
  );
}
