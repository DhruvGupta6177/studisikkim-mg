import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChatSection } from "@/components/chat/chat-section";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white">
        <Image
          src="/images/Mountain Temple Path.jpeg"
          alt="Monks walking towards a monastery in the mountains of Sikkim"
          fill
          sizes="100vw"
          className="object-cover w-full h-full brightness-110 contrast-105 saturate-105"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight mb-8 animate-slideInFromTop">
            <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:text-white/90 transition-all duration-500">
              A Journey Through Sikkim&apos;s Sacred Monasteries
            </span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-white font-medium animate-slideInFromBottom py-6 px-8 rounded-2xl bg-black/10 backdrop-blur-[2px] shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10">
            Explore the spiritual heart of the Himalayas. Your guide to cultural treasures and serene landscapes.
          </p>
          <div className="mt-16 animate-fadeIn">
            <Link href="/monasteries" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-lg transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <Button 
                size="lg" 
                className="relative px-10 py-7 bg-white/15 hover:bg-white/25 text-white rounded-full transition-all duration-500 ease-out group-hover:scale-105 shadow-2xl backdrop-blur-md border border-white/30"
              >
                <span className="relative inline-flex items-center gap-4 text-xl font-medium tracking-wide">
                  Start Exploring
                  <span className="relative w-8 h-8 rounded-full bg-white/30 group-hover:rotate-90 transition-transform duration-500 hover:shadow-lg flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 p-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ChatSection />
      <FeaturesSection />

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                <CalendarDays className="w-4 h-4" />
                <span>Cultural Calendar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Never Miss a Festival</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the schedules of vibrant festivals, sacred rituals, and cultural events happening at monasteries across Sikkim.
              </p>
              <Button asChild className="mt-6">
                <Link href="/calendar">View Calendar</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Tibet.jpeg"
                alt="Sikkimese festival celebration with traditional dance and music"
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
