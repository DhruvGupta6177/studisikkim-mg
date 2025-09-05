import Link from "next/link";
import { MountainSnow } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <MountainSnow className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">Sikkim Monastery Guide</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Government of Sikkim. All rights reserved.</p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/monasteries" className="hover:text-foreground">Monasteries</Link>
            <Link href="/itineraries" className="hover:text-foreground">Itineraries</Link>
            <Link href="/calendar" className="hover:text-foreground">Calendar</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
