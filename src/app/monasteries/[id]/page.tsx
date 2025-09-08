'use client';

import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import { monasteries } from "@/lib/monastery-data";
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

  if (!monastery) {
    notFound();
  }

  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const otherLang = lang === 'en' ? 'fr' : 'en';

  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const handleViewEntranceClick = () => {
    if (monastery.images.length > 0) {
      setSelectedImage(0); // Show the first image
    }
  };
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${monastery.coordinates.lat},${monastery.coordinates.lng}`;

  return (
    <div className="flex flex-col">
      <section className="relative h-[50vh] flex items-end text-white">
        {monastery.images && monastery.images.length > 0 ? (
          <Image
            src={monastery.images[0].url}
            alt={monastery.images[0].alt[lang] || `A view of ${monastery.name[lang]}`}
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
          <h1 className="text-4xl md:text-6xl font-headline font-bold">{monastery.name[lang]}</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            {monastery.yearFounded && (
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
                <Calendar className="w-4 h-4 mr-2" />
                Founded: {monastery.yearFounded}
              </Badge>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-headline font-bold flex items-center gap-3">
                  <Camera className="w-7 h-7 text-primary" />
                  Virtual Tour
                </CardTitle>
                <CardDescription>Experience the monastery from anywhere with our image gallery.</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="relative h-[60vh] w-full bg-muted/50 rounded-lg overflow-hidden">
                    {monastery.images.length > 0 ? (
                      <Image
                          src={monastery.images[selectedImage].url}
                          alt={monastery.images[selectedImage].alt[lang] || "View of the monastery"}
                          fill
                          className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">No images available</p>
                      </div>
                    )}
                  </div>
                  {monastery.images.length > 0 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {monastery.images.map((image, index) => (
                        <button
                          key={image.url}
                          onClick={() => setSelectedImage(index)}
                          className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                        >
                          <Image
                            src={image.url}
                            alt={image.alt[lang] || `Monastery image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
              </CardContent>
            </Card>

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary" />
                  About the Monastery
                </h2>
                <Button variant="outline" asChild>
                  <Link href={`/monasteries/${resolvedParams.id}?lang=${otherLang}`} scroll={false}>
                    <Globe className="w-4 h-4 mr-2" />
                    {otherLang === 'fr' ? 'Voir en Français' : 'View in English'}
                  </Link>
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="prose dark:prose-invert max-w-none space-y-4 text-lg">
                <p>{monastery.description[lang]}</p>
              </div>
            </div>

          </div>
          
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Monastery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Name</span>
                    <span className="font-medium text-lg">{monastery.name[lang]}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Location</span>
                    <span className="font-medium text-lg">{monastery.location[lang]}</span>
                 </div>
                 {monastery.yearFounded && (
                   <div className="flex flex-col">
                      <span className="font-semibold text-muted-foreground">Founded</span>
                      <span className="font-medium text-lg">{monastery.yearFounded}</span>
                   </div>
                 )}
                 <Separator/>
                 {monastery.visitingHours && (
                   <>
                     <div className="flex flex-col">
                        <span className="font-semibold text-muted-foreground">Visiting Hours</span>
                        <p className="text-base">{monastery.visitingHours[lang]}</p>
                     </div>
                     <Separator/>
                   </>
                 )}
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Overview</span>
                    <p className="text-base">{monastery.description[lang]}</p>
                 </div>
                 <Separator/>
                 {monastery.images.length > 0 && (
                   <Button onClick={handleViewEntranceClick} className="w-full">
                     <Camera className="w-4 h-4 mr-2"/>
                     View Entrance
                   </Button>
                 )}
                 <Button asChild className="w-full" variant="outline">
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                        <Route className="w-4 h-4 mr-2"/>
                        Get Directions on Map
                    </a>
                 </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
