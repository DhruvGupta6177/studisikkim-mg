import { Monastery as MonasteryType, LocalizedString } from '@/types/monasteries';

export type Monastery = MonasteryType;

export const monasteries: Monastery[] = [
  {
    id: 'enchey-monastery',
    name: {
      en: 'Enchey Monastery',
      hi: 'एनचे मोनास्ट्री',
      ne: 'एन्ची मोनास्ट्री'
    },
    location: {
      en: 'Gangtok, East Sikkim',
      hi: 'गंगटोक, पूर्वी सिक्किम',
      ne: 'गान्तोक, पूर्वी सिक्किम'
    },
    description: {
      en: 'Built on a site blessed by Lama Druptob Karpo, Enchey Monastery is known for its unique architectural style.',
      hi: 'लामा द्रुपतोब कर्पो द्वारा आशीर्वादित स्थल पर निर्मित, एनचे मोनास्ट्री अपनी अनूठी वास्तुकला शैली के लिए जाना जाता है।',
      ne: 'लामा ड्रुप्तोब कार्पोले आशीर्वाद दिएको स्थानमा बनेको एन्ची मोनास्ट्री आफ्नो अनौठो वास्तुकला शैलीको लागि प्रसिद्ध छ।'
    },
    coordinates: { lat: 27.3333, lng: 88.6167 },
    images: [
      {
        url: '/images/monasteries/enchey/main.jpg',
        alt: { en: 'Enchey Monastery', hi: 'एनचे मोनास्ट्री', ne: 'एन्ची मोनास्ट्री' }
      }
    ],
    yearFounded: 1909,
    isActive: true,
    visitingHours: {
      en: '6:00 AM - 4:00 PM',
      hi: 'सुबह 6:00 बजे - शाम 4:00 बजे',
      ne: 'बिहान 6:00 - बेलुका 4:00'
    },
    denomination: 'Nyingma',
    entryFee: {
      en: 'Free',
      hi: 'नि:शुल्क',
      ne: 'नि:शुल्क'
    }
  },
  {
    id: 'phensang-monastery',
    name: {
      en: 'Phensang Monastery',
      hi: 'फेनसांग मोनास्ट्री',
      ne: 'फेन्साङ मोनास्ट्री'
    },
    location: {
      en: 'North Sikkim',
      hi: 'उत्तरी सिक्किम',
      ne: 'उत्तरी सिक्किम'
    },
    description: {
      en: 'Known for its beautiful murals and traditional Tibetan architecture, Phensang Monastery is a serene spiritual retreat.',
      hi: 'अपनी सुंदर भित्तिचित्रों और पारंपरिक तिब्बती वास्तुकला के लिए प्रसिद्ध, फेनसांग मोनास्ट्री एक शांतिपूर्ण आध्यात्मिक आश्रय है।',
      ne: 'आफ्नो सुन्दर भित्ते चित्र र परम्परागत तिब्बती वास्तुकलाको लागि प्रसिद्ध, फेन्साङ मोनास्ट्री एक शान्त आध्यात्मिक केन्द्र हो।'
    },
    coordinates: { lat: 27.4000, lng: 88.6000 },
    images: [
      {
        url: '/images/monasteries/phensang/main.jpg',
        alt: { en: 'Phensang Monastery', hi: 'फेनसांग मोनास्ट्री', ne: 'फेन्साङ मोनास्ट्री' }
      }
    ],
    yearFounded: 1721,
    isActive: true,
    visitingHours: {
      en: '7:00 AM - 5:00 PM',
      hi: 'सुबह 7:00 बजे - शाम 5:00 बजे',
      ne: 'बिहान 7:00 - बेलुका 5:00'
    },
    denomination: 'Nyingma',
    entryFee: {
      en: 'Free',
      hi: 'नि:शुल्क',
      ne: 'नि:शुल्क'
    }
  },
  {
    id: 'rumtek-monastery',
    name: {
      en: 'Rumtek Monastery',
      hi: 'रुमटेक मोनास्ट्री',
      ne: 'रुम्टेक मोनास्ट्री'
    },
    location: {
      en: 'Gangtok, East Sikkim',
      hi: 'गंगटोक, पूर्वी सिक्किम',
      ne: 'गान्तोक, पूर्वी सिक्किम'
    },
    description: {
      en: 'One of the largest and most significant monasteries in Sikkim, Rumtek is the seat of the Karmapa Lama.',
      hi: 'सिक्किम के सबसे बड़े और महत्वपूर्ण मठों में से एक, रुमटेक कर्मापा लामा का मुख्यालय है।',
      ne: 'सिक्किमको सबैभन्दा ठूलो र महत्त्वपूर्ण गुम्बाहरू मध्ये एक, रुम्टेक कर्मापा लामाको मुख्यालय हो।'
    },
    coordinates: { lat: 27.2833, lng: 88.5667 },
    images: [
      {
        url: '/images/monasteries/rumtek/main.jpg',
        alt: { en: 'Rumtek Monastery', hi: 'रुमटेक मोनास्ट्री', ne: 'रुम्टेक मोनास्ट्री' }
      }
    ],
    yearFounded: 1740,
    isActive: true,
    visitingHours: {
      en: '6:00 AM - 6:00 PM',
      hi: 'सुबह 6:00 बजे - शाम 6:00 बजे',
      ne: 'बिहान 6:00 - बेलुका 6:00'
    },
    denomination: 'Karma Kagyu',
    entryFee: {
      en: 'Free',
      hi: 'नि:शुल्क',
      ne: 'नि:शुल्क'
    }
  },
  {
    id: 'pemayangtse-monastery',
    name: {
      en: 'Pemayangtse Monastery',
      hi: 'पेमायांग्त्से मोनास्ट्री',
      ne: 'पेमायाङ्त्से मोनास्ट्री'
    },
    location: {
      en: 'Pelling, West Sikkim',
      hi: 'पेल्लिंग, पश्चिमी सिक्किम',
      ne: 'पेल्लिङ, पश्चिमी सिक्किम'
    },
    description: {
      en: 'One of the oldest and most important monasteries in Sikkim, belonging to the Nyingma order of Tibetan Buddhism.',
      hi: 'सिक्किम के सबसे पुराने और महत्वपूर्ण मठों में से एक, जो तिब्बती बौद्ध धर्म के न्यिंगमा संप्रदाय से संबंधित है।',
      ne: 'सिक्किमको सबैभन्दा पुरानो र महत्त्वपूर्ण गुम्बाहरू मध्ये एक, जुन तिब्बती बौद्ध धर्मको न्यिङ्मा सम्प्रदायसँग सम्बन्धित छ।'
    },
    coordinates: { lat: 27.2833, lng: 88.2500 },
    images: [
      {
        url: '/images/monasteries/pemayangtse/main.jpg',
        alt: { en: 'Pemayangtse Monastery', hi: 'पेमायांग्त्से मोनास्ट्री', ne: 'पेमायाङ्त्से मोनास्ट्री' }
      }
    ],
    yearFounded: 1705,
    isActive: true,
    visitingHours: {
      en: '7:00 AM - 5:00 PM',
      hi: 'सुबह 7:00 बजे - शाम 5:00 बजे',
      ne: 'बिहान 7:00 - बेलुका 5:00'
    },
    denomination: 'Nyingma',
    entryFee: {
      en: 'INR 20',
      hi: '₹20',
      ne: '₹20'
    }
  }
];

export type Itinerary = {
  id: string;
  title: LocalizedString;
  duration: LocalizedString;
  description: LocalizedString;
  monasteries: string[];
  imageUrl: string;
};

export type CulturalEvent = {
  id: string;
  name: LocalizedString;
  date: string;
  monastery: string;
  description: LocalizedString;
  imageUrl: string;
};
