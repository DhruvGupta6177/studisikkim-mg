export interface LocalizedString {
  en: string;
  hi?: string;
  ne?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MonasteryImage {
  url: string;
  alt: LocalizedString;
  caption?: LocalizedString;
}

export interface Monastery {
  id: string;
  name: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  coordinates: Coordinates;
  images: MonasteryImage[];
  yearFounded?: number;
  denomination?: string;
  isActive: boolean;
  visitingHours?: LocalizedString;
  entryFee?: LocalizedString;
  significance?: LocalizedString;
  architecturalStyle?: LocalizedString;
  festivals?: {
    name: LocalizedString;
    description: LocalizedString;
    date?: string;
  }[];
}
