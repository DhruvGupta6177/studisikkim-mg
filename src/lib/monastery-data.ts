
export type Monastery = {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  established: string;
  description: Record<string, string>;
  history: Record<string, string>;
  significance: Record<string, string>;
  imageUrl: string;
  virtualTourUrl: string;
  entranceViewUrl: string;
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
    id: 'rumtek-monastery',
    name: 'Rumtek Monastery',
    location: 'Gangtok, Sikkim',
    coordinates: { lat: 27.3006, lng: 88.5701 },
    established: '16th century',
    description: {
      en: 'One of the largest and most significant monasteries in Sikkim, Rumtek is the seat of the Karmapa Lama.',
      fr: 'Un des plus grands et des plus importants monastères du Sikkim, Rumtek est le siège du Karmapa Lama.',
    },
    history: {
      en: 'Originally built in the mid-16th century, the monastery was rebuilt in the 1960s. It is a replica of the original Kagyu headquarters in Tibet.',
      fr: "Construit à l'origine au milieu du XVIe siècle, le monastère a été reconstruit dans les années 1960. C'est une réplique du siège original de Kagyu au Tibet.",
    },
    significance: {
      en: 'It houses a golden stupa containing the relics of the 16th Karmapa, along with many other sacred artifacts and religious scriptures.',
      fr: 'Il abrite un stupa doré contenant les reliques du 16ème Karmapa, ainsi que de nombreux autres artefacts sacrés et écritures religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/rumtek/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634360212!6m8!1m7!1sCAoSLEFGMVFpcE5qTTVOWnNfN2xfUnotOFJzY2d2V2dQOEpYVlZWSjVfSnZEVjFJ!2m2!1d27.3006249!2d88.5701463!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309547514!6m8!1m7!1sCAoSLEFGMVFpcE5ucGdtc1VpSDBGcVo0TnhYdk50SzZJNXNfNEdXdk5URkpfSnRI!2m2!1d27.3006!2d88.5701!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'pemayangtse-monastery',
    name: 'Pemayangtse Monastery',
    location: 'Pelling, Sikkim',
    coordinates: { lat: 27.3074, lng: 88.2565 },
    established: '1705',
    description: {
      en: "One of the oldest and premier monasteries of Sikkim, belonging to the Nyingma order of Tibetan Buddhism.",
      fr: "L'un des plus anciens et des plus importants monastères du Sikkim, appartenant à l'ordre Nyingma du bouddhisme tibétain.",
    },
    history: {
      en: "Founded by Lama Lhatsun Chempo in 1705, it was conceived and designed for 'ta-tshang' or 'pure monks'.",
      fr: "Fondé par le Lama Lhatsun Chempo en 1705, il a été conçu et dessiné pour les 'ta-tshang' ou 'moines purs'.",
    },
    significance: {
      en: "Famous for its magnificent collection of Buddhist art, sculptures, and a seven-tiered wooden model of the Guru Rinpoche's Heavenly Palace, Zangdok Palri.",
      fr: "Célèbre pour sa magnifique collection d'art bouddhiste, ses sculptures et une maquette en bois à sept niveaux du palais céleste du Guru Rinpoche, Zangdok Palri.",
    },
    imageUrl: 'https://picsum.photos/seed/pemayangtse/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634509421!6m8!1m7!1sCAoSLEFGMVFpcE5tVUtzQ3B6Q2FwcE1tWmxaSnhzX19Gc2dGR2dJNXdPX3l5QmpV!2m2!1d27.307491!2d88.256512!3f359.33!4f-20!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309656818!6m8!1m7!1sCAoSLEFGMVFpcE1XN2RGOFlmVnFaZ3ZtRmtfX2hOd0ZINkNUT3lWZVlfcGRNVnBE!2m2!1d27.3074!2d88.2565!3f282.89!4f-1.57!5f0.7820865974627469',
  },
  {
    id: 'tashiding-monastery',
    name: 'Tashiding Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2435, lng: 88.3049 },
    established: '1641',
    description: {
      en: 'Considered the most sacred and holiest monastery in Sikkim, perched on a heart-shaped hilltop.',
      fr: 'Considéré comme le monastère le plus sacré et le plus saint du Sikkim, perché sur une colline en forme de cœur.',
    },
    history: {
      en: 'Founded in 1641 by Ngadak Sempa Chempo, one of the three lamas who consecrated the first Chogyal of Sikkim.',
      fr: 'Fondé en 1641 par Ngadak Sempa Chempo, l\'un des trois lamas qui ont consacré le premier Chogyal du Sikkim.',
    },
    significance: {
      en: 'It is believed that a single glimpse of the monastery can cleanse one of all sins. It is home to the sacred \'Thongwa Rangdrol\' chorten, the sight of which is said to grant liberation.',
      fr: 'On croit qu\'un simple aperçu du monastère peut purifier de tous les péchés. Il abrite le chorten sacré \'Thongwa Rangdrol\', dont la vue est censée accorder la libération.',
    },
    imageUrl: 'https://picsum.photos/seed/tashiding/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634603838!6m8!1m7!1sCAoSLEFGMVFpcE96NEs2dG54S21rUllzc3otZkNMejVEWflRejFUbU91ZXVzN2pF!2m2!1d27.243555!2d88.304911!3f0!4f0!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309712166!6m8!1m7!1sCAoSLEFGMVFpcE5aQjRCN1lYcGZfS1h6UWlBdk1Lelg2VFZCT3dRbU5fcHlHODlM!2m2!1d27.2435!2d88.3049!3f269.86!4f-12.75!5f0.7820865974627469',
  },
  {
    id: 'enchy-monastery',
    name: 'Enchey Monastery',
    location: 'Gangtok, Sikkim',
    coordinates: { lat: 27.3429, lng: 88.6197 },
    established: '1909',
    description: {
      en: "An important seat of the Nyingma order, its name means 'the solitary temple'.",
      fr: "Un siège important de l'ordre Nyingma, son nom signifie 'le temple solitaire'.",
    },
    history: {
      en: 'The present monastery was built in 1909. It is believed that Lama Druptob Karpo, a tantric master known for his flying abilities, established a hermitage here.',
      fr: 'Le monastère actuel a été construit en 1909. On croit que le Lama Druptob Karpo, un maître tantrique connu pour ses capacités de vol, a établi un ermitage ici.',
    },
    significance: {
      en: 'The monastery is home to a number of images of Gods, Goddesses and other religious objects. It is believed that the protecting deities, Khangchendzonga and Yabdean, reside in this monastery.',
      fr: 'Le monastère abrite un certain nombre d\'images de dieux, de déesses et d\'autres objets religieux. On croit que les divinités protectrices, Khangchendzonga et Yabdean, résident dans ce monastère.',
    },
    imageUrl: 'https://picsum.photos/seed/enchy/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634676450!6m8!1m7!1sCAoSLEFGMVFpcE1PQkRGNXBCYTNwelJtWnotVmtDRkRFWE13NTZTelQxTWhRVkpI!2m2!1d27.342931!2d88.619731!3f0!4f0!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309756656!6m8!1m7!1sCAoSLEFGMVFpcE5uLVY0LVk1eHViQlZLcmhBLVFsNnZ5N282aGJJQ2VfNlZ2aGNG!2m2!1d27.3429!2d88.6197!3f262.29!4f-12.08!5f0.7820865974627469',
  },
  {
    id: 'dubdi-monastery',
    name: 'Dubdi Monastery',
    location: 'Yuksom, Sikkim',
    coordinates: { lat: 27.3668, lng: 88.2255 },
    established: '1701',
    description: {
      en: "Also known as the 'Hermit's Cell', this is the oldest monastery in Sikkim.",
      fr: 'Aussi connu sous le nom de "Cellule de l\'Ermite", c\'est le plus ancien monastère du Sikkim.',
    },
    history: {
      en: 'Established in 1701 by the Chogyar Namgyal, it was the first monastery established after the consecration of the first Chogyal.',
      fr: 'Établi en 1701 par le Chogyar Namgyal, ce fut le premier monastère établi après la consécration du premier Chogyal.',
    },
    significance: {
      en: 'It is a highly revered site and an important place of pilgrimage for Buddhists.',
      fr: 'C\'est un site très vénéré et un lieu de pèlerinage important pour les bouddhistes.',
    },
    imageUrl: 'https://picsum.photos/seed/dubdi/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634749363!6m8!1m7!1sCAoSLEFGMVFpcE96VzctYnpuMXdBRXJNVnJ6c2J0TjdMV1YxZmpwSmNHbTJWUDRr!2m2!1d27.36681!2d88.22557!3f0!4f0!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309796031!6m8!1m7!1sCAoSLEFGMVFpcE5EeVdSbFk2bXRlYVJhX1h4bU1tTEtRM1J5WjR2SkQzSm5WbVlP!2m2!1d27.3668!2d88.2255!3f269.96!4f-1.57!5f0.7820865974627469',
  },
  {
    id: 'sangachoeling-monastery',
    name: 'Sanga Choeling Monastery',
    location: 'Pelling, Sikkim',
    coordinates: { lat: 27.3111, lng: 88.2443 },
    established: '17th century',
    description: {
      en: 'The "Place of Secret Spells", this monastery is one of the oldest in Sikkim, located on a ridge top.',
      fr: 'Le "Lieu des Sorts Secrets", ce monastère est l\'un des plus anciens du Sikkim, situé au sommet d\'une crête.',
    },
    history: {
      en: 'Built in 1697, it is accessible only by walking and offers stunning views of the surrounding mountains.',
      fr: 'Construit en 1697, il n\'est accessible qu\'à pied et offre une vue imprenable sur les montagnes environnantes.',
    },
    significance: {
      en: 'It is particularly important for the Nyingma sect and was originally reserved for men only.',
      fr: 'Il est particulièrement important pour la secte Nyingma et était à l\'origine réservé aux hommes uniquement.',
    },
    imageUrl: 'https://picsum.photos/seed/sangachoeling/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1628634812328!6m8!1m7!1sCAoSLEFGMVFpcE5qLVd2eGVmV2pYQ1pQSnotTThUVkZiaWdkc096RVFqV3ZCaDN3!2m2!1d27.31114!2d88.24436!3f0!4f0!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309836384!6m8!1m7!1sCAoSLEFGMVFpcE1UaVZEVlE5eVZpTmVYVmxfZ0ZfN05iUkJpZkZzZktCUXNBclJt!2m2!1d27.3111!2d88.2443!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'phodong-monastery',
    name: 'Phodong Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5025, lng: 88.6186 },
    established: '18th century',
    description: {
      en: 'A beautiful monastery of the Kagyupa order, known for its intricate murals and frescoes.',
      fr: 'Un beau monastère de l\'ordre Kagyupa, connu pour ses peintures murales et fresques complexes.',
    },
    history: {
      en: 'The monastery was founded by the 4th Chogyal Gyurmed Namgyal. The current building is a reconstruction as the original was destroyed by an earthquake.',
      fr: 'Le monastère a été fondé par le 4ème Chogyal Gyurmed Namgyal. Le bâtiment actuel est une reconstruction car l\'original a été détruit par un tremblement de terre.',
    },
    significance: {
      en: 'It is one of the most important monasteries in North Sikkim and follows the Karma Kagyu lineage.',
      fr: 'C\'est l\'un des monastères les plus importants du nord du Sikkim et il suit la lignée Karma Kagyu.',
    },
    imageUrl: 'https://picsum.photos/seed/phodong/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936495208!6m8!1m7!1sCAoSLEFGMVFpcE1kZG5uSjVjUlgtcE54d2otZ2hQeHlCbkl2c2ZuXzJ0MmVfNVpF!2m2!1d27.5025!2d88.6186!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309873618!6m8!1m7!1sCAoSLEFGMVFpcE5vWWZ3bU1XbHlNM1FqVlZfQ2ZuZXVzX2xYVzU5S3ZmVHpJd3hY!2m2!1d27.5025!2d88.6186!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'ralang-monastery',
    name: 'Ralang Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.3093, lng: 88.3845 },
    established: '1768',
    description: {
      en: 'Home to a large collection of paintings and thangkas, it is an important monastery for the Kagyu sect.',
      fr: 'Abritant une grande collection de peintures et de thangkas, c\'est un monastère important pour la secte Kagyu.',
    },
    history: {
      en: 'It was built in 1768 after the 4th Chogyal returned from his pilgrimage. The monastery hosts the annual Pang Lhabsol festival.',
      fr: 'Il a été construit en 1768 après le retour du 4ème Chogyal de son pèlerinage. Le monastère accueille le festival annuel de Pang Lhabsol.',
    },
    significance: {
      en: 'The monastery is famous for its annual festival where the Kagyed dance is performed.',
      fr: 'Le monastère est célèbre pour son festival annuel où la danse Kagyed est exécutée.',
    },
    imageUrl: 'https://picsum.photos/seed/ralang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936563604!6m8!1m7!1sCAoSLEFGMVFpcE5VcnZtYlpfZjdUWnFqWlItNk5fN3lQOHFkU1d3Z1hwbF9GblNq!2m2!1d27.3093!2d88.3845!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309908638!6m8!1m7!1sCAoSLEFGMVFpcE53S0R2d1BVeFh2c1hJLVJ0UHY0Q3FkUzh0eGZfM3d2X2w5eG1R!2m2!1d27.3093!2d88.3845!3f322.25!4f-2.73!5f0.7820865974627469',
  }
];

export const itineraries: Itinerary[] = [
  {
    id: "east-sikkim-spiritual-tour",
    title: "East Sikkim Spiritual Tour",
    duration: "3 Days / 2 Nights",
    description: "Explore the major monasteries around the capital city of Gangtok, including the magnificent Rumtek Monastery.",
    monasteries: ["Rumtek Monastery", "Enchey Monastery", "Phodong Monastery"],
    imageUrl: "https://picsum.photos/seed/east-sikkim/600/400",
  },
  {
    id: "west-sikkim-heritage-trail",
    title: "West Sikkim Heritage Trail",
    duration: "4 Days / 3 Nights",
    description: "A journey through the historical heart of Sikkim, visiting some of the oldest and most revered monasteries.",
    monasteries: ["Pemayangtse Monastery", "Tashiding Monastery", "Dubdi Monastery", "Sanga Choeling Monastery"],
    imageUrl: "https://picsum.photos/seed/west-sikkim/600/400",
  },
  {
    id: "complete-sikkim-monastery-circuit",
    title: "Complete Sikkim Monastery Circuit",
    duration: "7 Days / 6 Nights",
    description: "An immersive tour covering the most significant monasteries across East and West Sikkim for a comprehensive cultural experience.",
    monasteries: ["Rumtek Monastery", "Pemayangtse Monastery", "Tashiding Monastery", "Enchey Monastery", "Dubdi Monastery", "Sanga Choeling Monastery", "Phodong Monastery", "Ralang Monastery"],
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
