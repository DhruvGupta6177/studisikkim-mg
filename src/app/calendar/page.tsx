"use client";

import styles from './page.module.css';
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { culturalEvents } from "@/lib/monastery-data";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12 relative">
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-headline font-bold relative z-10">
            <span className={`bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 text-transparent bg-clip-text ${styles.gradientText}`}>
              Cultural Calendar
            </span>
            <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 transform origin-left ${styles.scaleInLine}`}></div>
          </h1>
          <div className={`absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-rose-500/10 blur-xl ${styles.glowPulse}`}></div>
        </div>
        <p className={`mt-8 text-lg text-muted-foreground max-w-3xl mx-auto ${styles.fadeInUp}`}>
          Experience the vibrant traditions of Sikkim. Find information on upcoming festivals, rituals, and cultural events at monasteries across the state.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalEvents.map((event) => (
          <Card key={event.id} className={`group relative overflow-hidden flex flex-col bg-gradient-to-br from-gray-50 via-white to-slate-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer ${styles.floatEffect}`}>
            <div className={`absolute inset-0 bg-gradient-to-r from-gray-50/40 via-slate-100/40 to-gray-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.sparkleEffect}`} />
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={event.imageUrl}
                alt={event.name}
                data-ai-hint="sikkim festival"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              <Badge className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-600 to-slate-700 text-white backdrop-blur-md border-0 shadow-lg transition-all duration-300 group-hover:from-gray-700 group-hover:to-slate-800 group-hover:scale-105">
                Upcoming Event
              </Badge>
              <div className={styles.sparkleContainer}>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
              </div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="font-headline text-2xl relative">
                <span className={`bg-gradient-to-r from-gray-700 via-slate-600 to-gray-700 bg-clip-text text-transparent ${styles.shimmerEffect}`}>
                  {event.name}
                </span>
                <div className="h-0.5 w-20 bg-gradient-to-r from-gray-400 via-slate-300 to-gray-400 mt-2 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500" />
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600 pt-3 group-hover:text-gray-800 transition-colors duration-300">
                <div className={`flex items-center gap-2 bg-gradient-to-r from-gray-50 to-slate-100 p-2 rounded-lg ${styles.pulseEffect}`}>
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span>{event.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow relative">
              <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {event.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="pb-4">
               <Badge variant="secondary" className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 hover:text-gray-900 border border-gray-200/50 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <MapPin className="w-4 h-4" />
                  {event.monastery}
               </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
