import { MonasteryData } from './types';

export const monasteryData: MonasteryData[] = [
  {
    id: "rumtek",
    name: {
      en: "Rumtek Monastery",
      hi: "रुमटेक मठ",
      bn: "রুমটেক মঠ",
      ne: "रुम्टेक गुम्बा",
      zh: "仁庆寺",
      ja: "ルムテク寺",
      ko: "룸텍 사원",
      fr: "Monastère de Rumtek",
      de: "Rumtek-Kloster",
      es: "Monasterio Rumtek",
      ru: "Монастырь Румтек",
      it: "Monastero di Rumtek"
    },
    description: {
      en: "Rumtek Monastery, also called the Dharma Chakra Centre, is a gompa located in Sikkim, India. It is a focal point for the Karma Kagyu lineage of Tibetan Buddhism.",
      hi: "रुमटेक मठ, जिसे धर्म चक्र केंद्र भी कहा जाता है, भारत के सिक्किम में स्थित एक गोम्पा है। यह तिब्बती बौद्ध धर्म की कर्म काग्यु परंपरा का केंद्र बिंदु है।",
      bn: "রুমটেক মঠ, যাকে ধর্ম চক্র কেন্দ্রও বলা হয়, ভারতের সিকিমে অবস্থিত একটি গোম্পা। এটি তিব্বতী বৌদ্ধ ধর্মের কর্ম কাগ্যু ঐতিহ্যের কেন্দ্রবিন্দু।",
      zh: "仁庆寺，也被称为法轮中心，是位于印度锡金的一座藏传佛教寺院。它是噶玛噶举传承的重要中心。",
      ja: "ルムテク寺院（ダルマチャクラセンター）は、インドのシッキム州にある仏教寺院です。カルマ・カギュー派の重要な中心地となっています。",
      fr: "Le monastère de Rumtek, également appelé Centre Dharma Chakra, est un gompa situé au Sikkim, en Inde. C'est un point central pour la lignée Karma Kagyu du bouddhisme tibétain."
    },
    location: "Rumtek, East Sikkim",
    coordinates: {
      lat: 27.2828,
      lng: 88.5619
    },
    images: {
      main: "/images/monasteries/rumtek/main.jpg",
      gallery: [
        "/images/monasteries/rumtek/1.jpg",
        "/images/monasteries/rumtek/2.jpg",
        "/images/monasteries/rumtek/3.jpg"
      ]
    },
    history: {
      en: "Built in the 16th century by the 9th Karmapa Wangchuk Dorje, Rumtek served as the main seat of the Karma Kagyu lineage in exile after the Chinese occupation of Tibet.",
      hi: "16वीं शताब्दी में 9वें कर्मापा वांगचुक दोरजे द्वारा निर्मित, रुमटेक तिब्बत पर चीनी कब्जे के बाद निर्वासन में कर्म काग्यु परंपरा की मुख्य सीट के रूप में कार्य करता था।"
    },
    timings: {
      en: "Open daily from 6 AM to 6 PM",
      hi: "प्रतिदिन सुबह 6 बजे से शाम 6 बजे तक खुला"
    },
    events: [
      {
        name: {
          en: "Losar Festival",
          hi: "लोसार उत्सव"
        },
        date: "February/March",
        description: {
          en: "Tibetan New Year celebrations with masked dances and rituals",
          hi: "मुखौटा नृत्य और अनुष्ठानों के साथ तिब्बती नव वर्ष समारोह"
        }
      }
    ]
  },
  {
    id: "pemayangtse",
    name: {
      en: "Pemayangtse Monastery",
      hi: "पेमायांग्त्से मठ",
      bn: "পেমাইয়াংৎসে মঠ",
      ne: "पेमायांग्त्से गुम्बा",
      zh: "贝玛扬泽寺",
      ja: "ペマヤンツェ寺院",
      ko: "페마양체 사원",
      fr: "Monastère de Pemayangtse",
      de: "Pemayangtse-Kloster",
      es: "Monasterio Pemayangtse"
    },
    description: {
      en: "Pemayangtse Monastery is one of the oldest and most important monasteries in Sikkim, known for its intricate murals and sculptures.",
      hi: "पेमायांग्त्से मठ सिक्किम के सबसे पुराने और महत्वपूर्ण मठों में से एक है, जो अपनी जटिल भित्तिचित्रों और मूर्तियों के लिए जाना जाता है।",
      zh: "贝玛扬泽寺是锡金最古老和最重要的寺院之一，以其精致的壁画和雕塑而闻名。"
    },
    location: "Pelling, West Sikkim",
    coordinates: {
      lat: 27.3032,
      lng: 88.2523
    },
    images: {
      main: "/images/monasteries/pemayangtse/main.jpg",
      gallery: [
        "/images/monasteries/pemayangtse/1.jpg",
        "/images/monasteries/pemayangtse/2.jpg"
      ]
    }
  }
  // Add more monasteries here...
];
