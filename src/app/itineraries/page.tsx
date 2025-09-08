"use client";

import styles from './page.module.css';
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { itineraries } from "@/lib/monastery-data";
import { Clock, Route } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ItinerariesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12 relative overflow-hidden">
        <div className="relative inline-block animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-headline font-bold relative z-10">
            <span className="inline-block relative">
              <span className={`bg-gradient-to-r from-stone-600 via-yellow-700 to-stone-600 text-transparent bg-clip-text ${styles.shimmerEffect}`}>
                Curated Itineraries
              </span>
              <svg className="absolute top-full left-0 w-full h-1 mt-2" viewBox="0 0 400 4" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="2" x2="400" y2="2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" className={styles.drawLineEffect}/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#78716C"/>
                    <stop offset="50%" stopColor="#B4937A"/>
                    <stop offset="100%" stopColor="#78716C"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <div className={`absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-stone-200/30 via-yellow-100/30 to-stone-200/30 blur-2xl opacity-60 ${styles.floatEffect}`}></div>
        </div>
        <p className={`mt-8 text-lg text-muted-foreground max-w-3xl mx-auto transform transition-all duration-700 ${styles.fadeInSlideEffect}`}>
          Embark on a spiritual journey with our suggested travel plans. Each itinerary is designed to give you a deep and meaningful experience of Sikkim's monastic heritage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {itineraries.map((itinerary) => (
          <Card key={itinerary.id} className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border-purple-100">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={itinerary.imageUrl}
                alt={itinerary.title}
                data-ai-hint="sikkim landscape"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-600/90 hover:bg-purple-700 text-white backdrop-blur-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                    {itinerary.duration}
                  </Badge>
               </div>
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{itinerary.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{itinerary.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Route className="w-4 h-4 text-primary" />
                <span>Includes {itinerary.monasteries.length} monasteries</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
