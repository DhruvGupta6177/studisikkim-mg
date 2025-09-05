
import Image from "next/image";
import { notFound } from "next/navigation";
import { monasteries } from "@/lib/monastery-data";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, BookOpen, Globe, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return monasteries.map((monastery) => ({
    id: monastery.id,
  }));
}

export default function MonasteryDetailPage({ params, searchParams }: { params: { id: string }, searchParams: { lang?: string } }) {
  const monastery = monasteries.find((m) => m.id === params.id);
  const lang = searchParams.lang === 'fr' ? 'fr' : 'en';
  const otherLang = lang === 'en' ? 'fr' : 'en';

  if (!monastery) {
    notFound();
  }
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${monastery.coordinates.lat},${monastery.coordinates.lng}`;

  return (
    <div className="flex flex-col">
      <section className="relative h-[50vh] flex items-end text-white">
        <Image
          src={monastery.imageUrl}
          alt={`A view of ${monastery.name}`}
          data-ai-hint="sikkim monastery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 p-8 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">{monastery.name}</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
                <Calendar className="w-4 h-4 mr-2" />
                Established: {monastery.established}
            </Badge>
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
                <CardDescription>Experience the monastery from anywhere with our 360° virtual tour.</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="relative h-[60vh] w-full bg-muted/50 rounded-lg overflow-hidden">
                    <iframe
                        className="w-full h-full border-0"
                        src={monastery.virtualTourUrl}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
              </CardContent>
            </Card>

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary" />
                  History & Significance
                </h2>
                <Button variant="outline" asChild>
                  <Link href={`/monasteries/${params.id}?lang=${otherLang}`} scroll={false}>
                    <Globe className="w-4 h-4 mr-2" />
                    {otherLang === 'fr' ? 'Voir en Français' : 'View in English'}
                  </Link>
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="prose dark:prose-invert max-w-none space-y-4 text-lg">
                <p>{monastery.history[lang]}</p>
                <p>{monastery.significance[lang]}</p>
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
                    <span className="font-medium text-lg">{monastery.name}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Location</span>
                    <span className="font-medium text-lg">{monastery.location}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Established</span>
                    <span className="font-medium text-lg">{monastery.established}</span>
                 </div>
                 <Separator/>
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Overview</span>
                    <p className="text-base">{monastery.description[lang]}</p>
                 </div>
                 <Separator/>
                 <Button asChild className="w-full">
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                        <Route className="w-4 h-4 mr-2"/>
                        Get Directions
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
