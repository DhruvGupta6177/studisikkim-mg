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
            <Card key={monastery.id} className="group hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:-translate-y-1 transition-all duration-500 rounded-2xl border-0 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 backdrop-blur-lg hover:bg-gradient-to-br hover:from-white hover:via-blue-50/40 hover:to-indigo-50/30">
              <div className="relative">
                {/* Main Monastery Image */}
                <div className="relative h-72 overflow-hidden rounded-t-2xl">
                  {monastery.images && monastery.images.length > 0 && monastery.images[0].url ? (
                    <img
                      src={monastery.images[0].url}
                      alt={monastery.images[0].alt?.en || `${monastery.name.en} monastery`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                      <span className="text-indigo-400">No image available</span>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
                </div>

                {/* Monastery Name Card - Always visible but transforms on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/40 transform group-hover:-translate-y-2 transition-all duration-500">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {monastery.name.en}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-indigo-600 font-medium">{monastery.name.hi}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-blue-600 font-medium">{monastery.name.ne}</span>
                    </div>
                  </div>
                </div>

                {/* Location Tag */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-900">{monastery.location.en}</span>
                  </div>
                </div>
              </div>
              </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-lg border border-white/40">
                      <p className="text-sm text-gray-700 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{monastery.description.en}</p>
                    </div>
                  </div>
                </div>
              )}
              <CardHeader className="relative z-10 p-6">
                <CardTitle className="text-2xl font-headline bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent transform group-hover:translate-x-1 transition-all duration-300">
                  <span className="relative inline-block font-bold">
                    {monastery.name.en}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </span>
                  <span className="text-base font-medium bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent ml-3">
                    ({monastery.name.hi} / {monastery.name.ne})
                  </span>
                </CardTitle>
                <CardDescription>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                      <MapPin className="w-4 h-4 text-stone-600 group-hover:text-stone-700 transition-colors duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{monastery.location.en}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{monastery.description.en}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 group-hover:from-blue-100/70 group-hover:to-indigo-100/50 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <div className="absolute -top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Founded
                        </div>
                        <span className="text-indigo-900 mt-1 block text-lg font-medium">{monastery.yearFounded}</span>
                      </div>
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/50 group-hover:from-indigo-100/70 group-hover:to-blue-100/50 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <div className="absolute -top-3 left-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Tradition
                        </div>
                        <span className="text-indigo-900 mt-1 block text-lg font-medium">{monastery.denomination}</span>
                      </div>
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 group-hover:from-blue-100/70 group-hover:to-indigo-100/50 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <div className="absolute -top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Hours
                        </div>
                        <span className="text-indigo-900 mt-1 block text-lg font-medium">{monastery.visitingHours?.en}</span>
                      </div>
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/50 group-hover:from-indigo-100/70 group-hover:to-blue-100/50 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <div className="absolute -top-3 left-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Entry
                        </div>
                        <span className="text-indigo-900 mt-1 block text-lg font-medium">{monastery.entryFee?.en || 'Free'}</span>
                      </div>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/monasteries/${monastery.id}`} className="block">
                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white border-0 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-xl py-6"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center gap-3 text-lg font-medium">
                      Explore Monastery
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
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
