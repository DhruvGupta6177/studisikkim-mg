import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface MonasteryCardProps {
  monastery: {
    id: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
  };
}

export function MonasteryCard({ monastery }: MonasteryCardProps) {
  return (
    <Link href={`/monasteries/${monastery.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6] relative bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={monastery.imageUrl}
            alt={monastery.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/90 to-transparent"></div>
        </div>
        <CardHeader className="relative z-10">
          <CardTitle className="font-monastery text-2xl bg-gradient-to-br from-amber-700 via-rose-700 to-purple-800 bg-clip-text text-transparent">
            {monastery.name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-amber-700">
            <MapPin className="w-4 h-4" />
            <span className="font-description text-lg italic">{monastery.location}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-description text-lg leading-relaxed text-rose-800 line-clamp-3">
            {monastery.description}
          </p>
          <div className="mt-4 flex justify-end">
            <span className="inline-flex items-center text-purple-700 font-semibold text-sm tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300">
              Explore More
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
