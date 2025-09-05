import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { itineraries } from "@/lib/monastery-data";
import { Clock, Route } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ItinerariesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Curated Itineraries</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Embark on a spiritual journey with our suggested travel plans. Each itinerary is designed to give you a deep and meaningful experience of Sikkim's monastic heritage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {itineraries.map((itinerary) => (
          <Card key={itinerary.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={itinerary.imageUrl}
                alt={itinerary.title}
                data-ai-hint="sikkim landscape"
                fill
                className="object-cover"
              />
               <div className="absolute top-4 right-4">
                 <Badge className="flex items-center gap-2">
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
