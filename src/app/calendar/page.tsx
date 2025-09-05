import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { culturalEvents } from "@/lib/monastery-data";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Cultural Calendar</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Experience the vibrant traditions of Sikkim. Find information on upcoming festivals, rituals, and cultural events at monasteries across the state.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalEvents.map((event) => (
          <Card key={event.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={event.imageUrl}
                alt={event.name}
                data-ai-hint="sikkim festival"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{event.name}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{event.description}</CardDescription>
            </CardContent>
            <CardFooter>
               <Badge variant="secondary" className="flex items-center gap-2">
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
