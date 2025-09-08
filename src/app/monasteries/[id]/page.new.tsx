'use client';

import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import { monasteries } from "@/lib/monastery-data-new";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, BookOpen, Globe, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useMemo, use } from "react";

export default function MonasteryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const monastery = useMemo(() => monasteries.find((m) => m.id === resolvedParams.id), [resolvedParams.id]);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const [selectedImage, setSelectedImage] = useState(0);

  if (!monastery) {
    notFound();
  }
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${monastery.coordinates.lat},${monastery.coordinates.lng}`;

  return (
    <div className="flex flex-col">
      <section className="relative h-[50vh] flex items-end text-white">
        {monastery.images && monastery.images.length > 0 ? (
          <Image
            src={monastery.images[selectedImage].url}
            alt={monastery.images[selectedImage].alt?.en || `A view of ${monastery.name.en}`}
            data-ai-hint="sikkim monastery"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
            <span className="text-indigo-600 text-xl">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 p-8 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">{monastery.name.en}</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
              <Calendar className="w-4 h-4 mr-2" />
              Founded: {monastery.yearFounded}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
              <BookOpen className="w-4 h-4 mr-2" />
              Tradition: {monastery.denomination}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
              <Globe className="w-4 h-4 mr-2" />
              Location: {monastery.location.en}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About the Monastery</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>{monastery.description.en}</p>
              </CardContent>
            </Card>

            {monastery.images && monastery.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {monastery.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index ? 'border-blue-500 scale-105' : 'border-transparent hover:border-blue-300'
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={image.alt?.en || `${monastery.name.en} view ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Visit Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Visiting Hours</h3>
                  <p>{monastery.visitingHours?.en || 'Contact monastery for details'}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Entry Fee</h3>
                  <p>{monastery.entryFee?.en || 'Free'}</p>
                </div>
                <Separator className="my-4" />
                <Link href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" variant="default">
                    <Route className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
