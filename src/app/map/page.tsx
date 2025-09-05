import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { monasteries } from "@/lib/monastery-data";
import { MapPin } from "lucide-react";

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Interactive Monastery Map</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Visualize the locations of Sikkim's monasteries, plan your routes, and discover hidden gems along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="h-[600px] w-full flex items-center justify-center bg-muted/50">
            <div className="text-center text-muted-foreground">
              <MapPin className="mx-auto h-16 w-16" />
              <p className="mt-4 text-lg font-medium">Interactive Map Coming Soon</p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 h-[600px] overflow-y-auto pr-2">
            <h2 className="text-2xl font-headline font-bold mb-4">Monastery List</h2>
            <div className="space-y-4">
            {monasteries.map((monastery) => (
                <Card key={monastery.id}>
                    <CardHeader>
                        <CardTitle className="text-lg font-headline">{monastery.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {monastery.location}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
