import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MonasteryCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

export function MonasteryCard({ id, name, location, description, imageUrl }: MonasteryCardProps) {
  return (
    <Link href={`/monasteries/${id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-500 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-none relative">
        {/* Animated top border */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        
        {/* Image section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/90 via-orange-50/50 to-transparent"></div>
        </div>

        {/* Content section */}
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-['Cinzel'] bg-gradient-to-br from-amber-800 via-orange-700 to-rose-800 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            {name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-orange-700 mt-2">
            <MapPin className="w-5 h-5" />
            <span className="font-['Cormorant_Garamond'] text-lg italic">{location}</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="font-['Cormorant_Garamond'] text-lg leading-relaxed text-rose-700/90 line-clamp-3">
            {description}
          </p>
          <div className="flex justify-end mt-4 group/btn">
            <span className="inline-flex items-center text-amber-700 font-medium tracking-wider text-sm uppercase group-hover/btn:translate-x-1 transition-transform duration-300">
              Discover More
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M5 12h13" />
              </svg>
            </span>
          </div>
        </CardContent>

        {/* Decorative border */}
        <div className="absolute inset-0 border-2 border-amber-200/20 rounded-lg pointer-events-none group-hover:border-amber-300/30 transition-colors duration-500"></div>
      </Card>
    </Link>
  );
}
