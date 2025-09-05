export type Monastery = {
  id: string;
  name: string;
  location: string;
  established: string;
  description: string;
  history: string;
  significance: string;
  imageUrl: string;
  virtualTourUrl: string;
};

export type Itinerary = {
  id: string;
  title: string;
  duration: string;
  description: string;
  monasteries: string[];
  imageUrl: string;
};

export type CulturalEvent = {
  id: string;
  name: string;
  date: string;
  monastery: string;
  description: string;
  imageUrl: string;
};

export const monasteries: Monastery[] = [
  {
    id: "rumtek-monastery",
    name: "Rumtek Monastery",
    location: "Gangtok, Sikkim",
    established: "16th century",
    description: "One of the largest and most significant monasteries in Sikkim, Rumtek is the seat of the Karmapa Lama.",
    history: "Originally built in the mid-16th century, the monastery was rebuilt in the 1960s. It is a replica of the original Kagyu headquarters in Tibet.",
    significance: "It houses a golden stupa containing the relics of the 16th Karmapa, along with many other sacred artifacts and religious scriptures.",
    imageUrl: "https://picsum.photos/seed/rumtek/800/600",
    virtualTourUrl: "https://picsum.photos/seed/rumtek-tour/1200/800",
  },
  {
    id: "pemayangtse-monastery",
    name: "Pemayangtse Monastery",
    location: "Pelling, Sikkim",
    established: "1705",
    description: "One of the oldest and premier monasteries of Sikkim, belonging to the Nyingma order of Tibetan Buddhism.",
    history: "Founded by Lama Lhatsun Chempo in 1705, it was conceived and designed for 'ta-tshang' or 'pure monks'.",
    significance: "Famous for its magnificent collection of Buddhist art, sculptures, and a seven-tiered wooden model of the Guru Rinpoche's Heavenly Palace, Zangdok Palri.",
    imageUrl: "https://picsum.photos/seed/pemayangtse/800/600",
    virtualTourUrl: "https://picsum.photos/seed/pemayangtse-tour/1200/800",
  },
  {
    id: "tashiding-monastery",
    name: "Tashiding Monastery",
    location: "West Sikkim",
    established: "1641",
    description: "Considered the most sacred and holiest monastery in Sikkim, perched on a heart-shaped hilltop.",
    history: "Founded in 1641 by Ngadak Sempa Chempo, one of the three lamas who consecrated the first Chogyal of Sikkim.",
    significance: "It is believed that a single glimpse of the monastery can cleanse one of all sins. It is home to the sacred 'Thongwa Rangdrol' chorten, the sight of which is said to grant liberation.",
    imageUrl: "https://picsum.photos/seed/tashiding/800/600",
    virtualTourUrl: "https://picsum.photos/seed/tashiding-tour/1200/800",
  },
  {
    id: "enchy-monastery",
    name: "Enchey Monastery",
    location: "Gangtok, Sikkim",
    established: "1909",
    description: "An important seat of the Nyingma order, its name means 'the solitary temple'.",
    history: "The present monastery was built in 1909. It is believed that Lama Druptob Karpo, a tantric master known for his flying abilities, established a hermitage here.",
    significance: "The monastery is home to a number of images of Gods, Goddesses and other religious objects. It is believed that the protecting deities, Khangchendzonga and Yabdean, reside in this monastery.",
    imageUrl: "https://picsum.photos/seed/enchy/800/600",
    virtualTourUrl: "https://picsum.photos/seed/enchy-tour/1200/800",
  },
];

export const itineraries: Itinerary[] = [
  {
    id: "east-sikkim-spiritual-tour",
    title: "East Sikkim Spiritual Tour",
    duration: "3 Days / 2 Nights",
    description: "Explore the major monasteries around the capital city of Gangtok, including the magnificent Rumtek Monastery.",
    monasteries: ["Rumtek Monastery", "Enchey Monastery"],
    imageUrl: "https://picsum.photos/seed/east-sikkim/600/400",
  },
  {
    id: "west-sikkim-heritage-trail",
    title: "West Sikkim Heritage Trail",
    duration: "4 Days / 3 Nights",
    description: "A journey through the historical heart of Sikkim, visiting some of the oldest and most revered monasteries.",
    monasteries: ["Pemayangtse Monastery", "Tashiding Monastery"],
    imageUrl: "https://picsum.photos/seed/west-sikkim/600/400",
  },
  {
    id: "complete-sikkim-monastery-circuit",
    title: "Complete Sikkim Monastery Circuit",
    duration: "7 Days / 6 Nights",
    description: "An immersive tour covering the most significant monasteries across East and West Sikkim for a comprehensive cultural experience.",
    monasteries: ["Rumtek Monastery", "Pemayangtse Monastery", "Tashiding Monastery", "Enchey Monastery"],
    imageUrl: "https://picsum.photos/seed/complete-sikkim/600/400",
  },
];

export const culturalEvents: CulturalEvent[] = [
  {
    id: "losar-festival",
    name: "Losar Festival",
    date: "February / March",
    monastery: "Across all monasteries",
    description: "The Tibetan New Year is celebrated with great fervor, marked by traditional music, masked dances (Chaam), and elaborate rituals.",
    imageUrl: "https://picsum.photos/seed/losar/600/400",
  },
  {
    id: "saga-dawa",
    name: "Saga Dawa",
    date: "May / June",
    monastery: "Across all monasteries",
    description: "The most sacred Buddhist festival, commemorating the birth, enlightenment, and death of Lord Buddha. Processions of monks carrying holy texts are a common sight.",
    imageUrl: "https://picsum.photos/seed/saga-dawa/600/400",
  },
  {
    id: "bumchu-festival",
    name: "Bumchu Festival",
    date: "January / February",
    monastery: "Tashiding Monastery",
    description: "A unique festival where a sacred pot of water is opened to predict the future of Sikkim for the coming year. Thousands of devotees gather to witness the event.",
    imageUrl: "https://picsum.photos/seed/bumchu/600/400",
  },
  {
    id: "kagyed-dance-festival",
    name: "Kagyed Dance Festival",
    date: "December",
    monastery: "Rumtek & Enchey Monasteries",
    description: "A spectacular masked dance-drama performed by monks, symbolizing the destruction of evil forces and ushering in peace and prosperity for the new year.",
    imageUrl: "https://picsum.photos/seed/kagyed/600/400",
  },
];
