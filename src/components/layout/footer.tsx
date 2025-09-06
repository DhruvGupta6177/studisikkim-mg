import Link from "next/link";
import { MountainSnow } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t overflow-hidden bg-gradient-to-b from-cyan-900 via-teal-900 to-emerald-950">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/15 via-emerald-300/15 to-cyan-300/15 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="container relative mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="group perspective-1000">
            <div className="flex items-center gap-3 transition-transform duration-700 transform-gpu group-hover:[transform:rotateY(360deg)]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <MountainSnow className="h-7 w-7 text-cyan-50 relative drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
              <span className="font-headline text-xl font-bold relative">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></span>
                <span className="relative bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  Sikkim Monastery Guide
                </span>
              </span>
            </div>
          </div>
          
          <p className="text-sm text-cyan-200/90 relative group backdrop-blur-sm py-2 px-4 rounded-full bg-white/5">
            <span className="relative inline-block group-hover:animate-float">
              &copy; {new Date().getFullYear()} Government of Sikkim.
            </span>
            <span className="relative inline-block group-hover:animate-float [animation-delay:0.2s] ml-1">
              All rights reserved.
            </span>
          </p>

          <nav className="flex gap-8 text-sm perspective-1000">
            {[
              { href: "/monasteries", label: "Monasteries" },
              { href: "/itineraries", label: "Itineraries" },
              { href: "/calendar", label: "Calendar" }
            ].map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative text-teal-300/90 hover:text-cyan-100 transition-all duration-300 group"
              >
                <span className="relative inline-block transition-transform duration-500 group-hover:[transform:rotateX(360deg)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 transition-all duration-300 group-hover:w-full opacity-70 group-hover:opacity-100 blur-[0.5px]"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
