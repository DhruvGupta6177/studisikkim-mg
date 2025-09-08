"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InteractiveMap } from "@/components/map/interactive-map";
import { monasteries } from "@/lib/monastery-data-new";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function MapPage() {
    return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Explore Sacred Locations
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the locations of Sikkim&apos;s most significant monasteries and plan your spiritual journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="sticky top-20 h-[600px] rounded-lg overflow-hidden border">
            <InteractiveMap />
          </div>
        </div>
        
        <div className="space-y-6 overflow-auto max-h-[600px] pr-4">
          {monasteries.map((monastery) => (
            <Card key={monastery.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-headline">
                  {monastery.name.en}
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({monastery.name.hi} / {monastery.name.ne})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{monastery.location.en}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{monastery.description.en}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Founded:</span>
                      <span>{monastery.yearFounded}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Tradition:</span>
                      <span>{monastery.denomination}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Hours:</span>
                      <span>{monastery.visitingHours?.en}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Entry:</span>
                      <span>{monastery.entryFee?.en}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <Link href={`/monasteries/${monastery.id}`}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
