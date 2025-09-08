"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  BookOpenText,
  CalendarDays, 
  Globe,
  Map,
  Menu,
  MessageCircle,
  Route,
  Sparkles,
  LandPlot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Monastery360Logo } from "@/components/ui/monastery360-logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/monasteries", label: "Monasteries", icon: BookOpenText },
  { href: "/map", label: "Map", icon: Map },
  { href: "/itineraries", label: "Itineraries", icon: Route },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/discover", label: "Discover", icon: Sparkles },
  { href: "/chat", label: "AI Chat", icon: MessageCircle },
];

function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentLang = searchParams.get('lang') || 'en';

  const setLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', lang);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage('en')} disabled={currentLang === 'en'}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('fr')} disabled={currentLang === 'fr'}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('hi')} disabled={currentLang === 'hi'}>
          हिन्दी (Hindi)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('es')} disabled={currentLang === 'es'}>
          Español (Spanish)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('de')} disabled={currentLang === 'de'}>
          Deutsch (German)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('zh')} disabled={currentLang === 'zh'}>
          中文 (Chinese)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ja')} disabled={currentLang === 'ja'}>
          日本語 (Japanese)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ko')} disabled={currentLang === 'ko'}>
          한국어 (Korean)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ar')} disabled={currentLang === 'ar'}>
          العربية (Arabic)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('pt')} disabled={currentLang === 'pt'}>
          Português (Portuguese)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ru')} disabled={currentLang === 'ru'}>
          Русский (Russian)
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('it')} disabled={currentLang === 'it'}>
          Italiano (Italian)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-lg bg-gradient-to-r from-purple-600 to-blue-500 animate-fadeIn">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-white group">
            <Monastery360Logo 
              size="lg"
              className="transition-all duration-300 group-hover:scale-110"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium",
                    "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-110",
                    "animate-slideInFromTop",
                    isActive 
                      ? "bg-white text-purple-600 shadow-glow" 
                      : "text-white hover:bg-white/20"
                  )}
                >
                  <LinkIcon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-gradient-to-br from-purple-600 to-blue-500 border-none"
              >
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;
                    
                    return (
                      <Link key={link.href} href={link.href}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-2 transition-colors",
                            isActive 
                              ? "bg-white text-purple-600" 
                              : "text-white hover:bg-white/20"
                          )}
                        >
                          <LinkIcon className="h-5 w-5" />
                          <span>{link.label}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
