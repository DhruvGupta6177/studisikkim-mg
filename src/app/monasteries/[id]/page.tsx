import Image from "next/image";
import { notFound } from "next/navigation";
import { monasteries } from "@/lib/monastery-data";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateStaticParams() {
  return monasteries.map((monastery) => ({
    id: monastery.id,
  }));
}

export default function MonasteryDetailPage({ params }: { params: { id: string } }) {
  const monastery = monasteries.find((m) => m.id === params.id);

  if (!monastery) {
    notFound();
  }

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
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                History & Significance
              </h2>
              <Separator className="my-4" />
              <div className="prose dark:prose-invert max-w-none space-y-4 text-lg">
                <p>{monastery.history}</p>
                <p>{monastery.significance}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                <Camera className="w-7 h-7 text-primary" />
                Virtual Tour
              </h2>
              <Separator className="my-4" />
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-96 w-full flex items-center justify-center bg-muted/50">
                    <Image
                        src={monastery.virtualTourUrl}
                        alt={`Virtual tour of ${monastery.name}`}
                        data-ai-hint="monastery interior"
                        fill
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center text-white p-4 bg-black/50 rounded-lg">
                            <Camera className="mx-auto h-12 w-12 mb-2" />
                            <p className="font-bold text-lg">360° Virtual Tour</p>
                            <p className="text-sm">Experience the monastery from anywhere.</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <aside className="lg:col-span-1">
            <Card>
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
                 <div className="flex flex-col">
                    <span className="font-semibold text-muted-foreground">Overview</span>
                    <span className="font-medium text-lg">{monastery.description}</span>
                 </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
