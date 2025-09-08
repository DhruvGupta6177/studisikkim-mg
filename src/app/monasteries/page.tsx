'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { monasteries } from "@/lib/monastery-data";
import { MapPin } from "lucide-react";
import { LanguageSelector } from "@/components/ui/language-selector";
import styles from "./monastery-cards.module.css";

export default function MonasteriesPage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'en';

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12 relative">
        <div className="relative inline-block animate-slideInFromTop">
          <h1 className="text-4xl md:text-6xl font-headline font-bold relative z-10 p-2">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-slideInFromLeft">
              Monasteries
            </span>
            <span className="inline-block mx-2 animate-float">of</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-transparent bg-clip-text animate-slideInFromRight">
              Sikkim
            </span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-3xl -z-10 transform scale-150"></div>
        </div>
        <div className="mt-8 space-y-2 animate-slideInFromBottom">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the rich cultural and spiritual heritage of Sikkim through its ancient and revered monasteries.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fadeIn">
            <span className="inline 
            w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></span>
            <span>Sacred Spaces • Ancient Wisdom • Living Traditions</span>
            <span className="inline w-8 h-[1px] bg-gradient-to-l from-purple-500 to-transparent"></span>
          </div>
        </div>
      </div>

      <div className={styles.monasteriesGrid}>
        {monasteries.map((monastery) => (
          <Link href={`/monasteries/${monastery.id}`} key={monastery.id} className={`group ${styles.monasteryCard}`}>
            <Card className="h-full overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 relative">
              {/* Decorative animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Top decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-60" />
                <div className="relative w-full h-full">
                  {monastery.images?.map((image, index) => (
                    <div key={`${monastery.id}-image-${index}`} className="absolute inset-0">
                      <Image
                        src={image.url}
                        alt={image.alt[lang] || image.alt.en || monastery.name[lang] || monastery.name.en}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-cover transition-all duration-500
                          ${index === 0 ? 'opacity-100' : 'opacity-0'} 
                          group-hover:scale-110`}
                        priority={index === 0 && monastery.id === monasteries[0].id}
                        quality={75}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = 'https://picsum.photos/800/600?blur=2';
                        }}
                      />
                    </div>
                  ))}
                  {(!monastery.images || monastery.images.length === 0) && (
                    <Image
                      src="https://picsum.photos/800/600?blur=2"
                      alt={monastery.name[lang] || monastery.name.en}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="relative w-full h-full">
                  {monastery.images?.map((image, index) => (
                    <div key={image.url} className="absolute inset-0">
                      <Image
                        src={image.url}
                        alt={image.alt[lang] || image.alt.en || monastery.name[lang] || monastery.name.en}
                        data-ai-hint={`sikkim monastery - ${monastery.name[lang]}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-110
                          ${index === 0 ? 'opacity-100' : 'opacity-0'} 
                          group-hover:opacity-0 group-hover:group-[&:nth-child(${(index + 1) % (monastery.images?.length || 1) + 1})]:opacity-100`}
                        priority={monastery.id === monasteries[0].id && index === 0}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = 'https://picsum.photos/800/600?grayscale';
                        }}
                      />
                    </div>
                  ))}
                  {(!monastery.images || monastery.images.length === 0) && (
                    <Image
                      src="https://picsum.photos/800/600?blur=2"
                      alt={monastery.name[lang] || monastery.name.en}
                      data-ai-hint="monastery placeholder"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Monastery name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                  {monastery.images && monastery.images.length > 1 && (
                    <div className="absolute -top-8 right-4">
                      <span className="text-xs bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                        {monastery.images.length} photos
                      </span>
                    </div>
                  )}
                  <div className="bg-gradient-to-t from-black/90 to-transparent pt-16 pb-4 px-4">
                    <h3 className="text-xl font-bold text-white">
                      {monastery.name[lang] || monastery.name.en}
                      {monastery.yearFounded && (
                        <span className="text-sm font-normal ml-2 opacity-75">
                          • Est. {monastery.yearFounded}
                        </span>
                      )}
                    </h3>
                    {monastery.images?.[0]?.caption && (
                      <p className="text-sm text-white/80 mt-1 line-clamp-2">
                        {monastery.images[0].caption[lang] || monastery.images[0].caption.en}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="relative z-20 pb-4">
                <CardDescription className="flex items-center gap-2 pt-2 text-amber-200/90">
                  <MapPin className="h-4 w-4" />
                  <span className="text-amber-100/90">{monastery.location[lang] || monastery.location.en}</span>
                </CardDescription>
                {monastery.denomination && (
                  <CardDescription className="text-amber-100/70 mt-1">
                    {monastery.denomination}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="relative z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-300/10 blur-xl -z-10"></div>
                  <p className="text-amber-100/80 line-clamp-3 leading-relaxed">
                    {monastery.description[lang] || monastery.description.en}
                  </p>
                </div>

                {/* Decorative bottom element */}
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-400/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
