export type LanguageCode = 'en' | 'hi' | 'bn' | 'ne' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' | 'it';

export interface MonasteryEvent {
  name: Partial<Record<LanguageCode, string>>;
  date: string;
  description: Partial<Record<LanguageCode, string>>;
}

export interface MonasteryData {
  id: string;
  name: Partial<Record<LanguageCode, string>>;
  description: Partial<Record<LanguageCode, string>>;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: {
    main: string;
    gallery: string[];
  };
  history?: Partial<Record<LanguageCode, string>>;
  timings?: Partial<Record<LanguageCode, string>>;
  events?: MonasteryEvent[];
}
