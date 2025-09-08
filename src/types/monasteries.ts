export interface LocalizedString {
  en: string;
  hi?: string;
  ne?: string;
  fr?: string;
  es?: string;
  de?: string;
  zh?: string;
  ja?: string;
  ko?: string;
  ar?: string;
  pt?: string;
  ru?: string;
  it?: string;
  [key: string]: string | undefined;
}

export interface MonasteryLocation {
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
  coordinates: MonasteryLocation;
  images: MonasteryImage[];
  yearFounded?: number;
  isActive: boolean;
  visitingHours?: LocalizedString;
  denomination?: string;
  entryFee?: LocalizedString;
  history?: LocalizedString;
  significance?: LocalizedString;
}
