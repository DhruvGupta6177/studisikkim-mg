"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Clock, Calendar } from "lucide-react";
import { MonasteryData, LanguageCode } from "@/data/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages: { code: LanguageCode; name: string }[] = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "bn", name: "বাংলা" },
  { code: "ne", name: "नेपाली" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "ru", name: "Русский" },
  { code: "it", name: "Italiano" }
];

interface MonasteryCardProps {
  monastery: MonasteryData;
  variant?: "default" | "map";
}

export function MonasteryCard({ monastery, variant = "default" }: MonasteryCardProps) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={monastery.images.main}
          alt={monastery.name[language] || monastery.name.en || ""}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30"
              >
                <Globe className="h-4 w-4 text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map(lang => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  disabled={!monastery.name[lang.code]}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <CardHeader className="relative">
        <h3 className="text-xl font-headline font-bold">
          {monastery.name[language] || monastery.name.en}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{monastery.location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {monastery.description[language] || monastery.description.en}
        </p>
        {monastery.timings && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <Clock className="h-4 w-4" />
            <span>{monastery.timings[language] || monastery.timings.en}</span>
          </div>
        )}
        {monastery.events && monastery.events.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <Calendar className="h-4 w-4" />
              <span>Upcoming Events</span>
            </div>
            <ul className="space-y-2">
              {monastery.events.map((event, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">
                    {event.name[language] || event.name.en}:
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {event.description[language] || event.description.en}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
