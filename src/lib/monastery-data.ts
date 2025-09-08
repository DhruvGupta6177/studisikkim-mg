
import { Monastery as MonasteryType, LocalizedString, MonasteryLocation, MonasteryImage } from '@/types/monasteries';

export type Monastery = MonasteryType;

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
    coordinates: { lat: 27.3333, lng: 88.6167 },
    yearFounded: 1840,
    description: {
      en: 'A beautiful monastery built on the site blessed by Lama Druptob Karpo, known for its unique architectural style.',
      fr: 'Un beau monastère construit sur le site béni par Lama Druptob Karpo, connu pour son style architectural unique.',
      hi: 'लामा द्रुपतोब कार्पो द्वारा आशीर्वादित स्थल पर निर्मित एक सुंदर मठ, जो अपनी अनूठी वास्तुकला शैली के लिए जाना जाता है।',
      ne: 'लामा द्रुपतोब कार्पोले आशीर्वाद दिएको स्थानमा निर्मित एक सुन्दर गुम्बा, जो आफ्नो अनौठो वास्तुकला शैलीको लागि प्रसिद्ध छ।'
    },
    isActive: true,
    visitingHours: {
      en: '6:00 AM - 6:00 PM',
      hi: 'सुबह 6:00 बजे - शाम 6:00 बजे',
      ne: 'बिहान 6:00 बजे - बेलुका 6:00 बजे'
    },
    entryFee: {
      en: 'Free entry',
      hi: 'निःशुल्क प्रवेश',
      ne: 'निःशुल्क प्रवेश'
    },
    denomination: 'Nyingma',
    images: [
      {
        url: 'https://picsum.photos/800/600?monastery=1',
        alt: { 
          en: 'Enchey Monastery Front View',
          hi: 'एनचे मोनास्ट्री का सामने का दृश्य',
          ne: 'एन्ची मोनास्ट्रीको अगाडिको दृश्य'
        },
        caption: {
          en: 'The majestic front view of Enchey Monastery in Gangtok',
          hi: 'गंगटोक में एनचे मोनास्ट्री का भव्य सामने का दृश्य',
          ne: 'गान्तोकमा एन्ची मोनास्ट्रीको भव्य अगाडिको दृश्य'
        }
      },
      {
        url: 'https://picsum.photos/800/600?monastery=2',
        alt: {
          en: 'Interior of Enchey Monastery',
          hi: 'एनचे मोनास्ट्री का आंतरिक दृश्य',
          ne: 'एन्ची मोनास्ट्रीको भित्री दृश्य'
        },
        caption: {
          en: 'The ornate interior decorations of the monastery',
          hi: 'मठ की सजावटी आंतरिक सजावट',
          ne: 'मठको सजावटी भित्री सजावट'
        }
      },
      {
        url: 'https://picsum.photos/800/600?monastery=3',
        alt: {
          en: 'Prayer Wheels',
          hi: 'प्रार्थना चक्र',
          ne: 'प्रार्थना चक्र'
        },
        caption: {
          en: 'Traditional prayer wheels at the monastery entrance',
          hi: 'मठ के प्रवेश द्वार पर पारंपरिक प्रार्थना चक्र',
          ne: 'मठको प्रवेश द्वारमा परम्परागत प्रार्थना चक्र'
        }
      }
    ],
    visitingHours: {
      en: '6:00 AM - 6:00 PM',
      hi: '6:00 पूर्वाह्न - 6:00 अपराह्न',
      ne: '6:00 बिहान - 6:00 साँझ'
    },
    entryFee: {
      en: '₹10 for Indians, ₹100 for foreigners',
      hi: 'भारतीयों के लिए ₹10, विदेशियों के लिए ₹100',
      ne: 'भारतीयहरूका लागि ₹10, विदेशीहरूका लागि ₹100'
    },
    isActive: true,
    denomination: 'Nyingma'
  },

  {
    id: 'phensang-monastery',
    name: {
      en: 'Phensang Monastery',
      hi: 'फेनसांग मोनास्ट्री',
      ne: 'फेन्साङ गुम्बा'
    },
    location: {
      en: 'North Sikkim',
      hi: 'उत्तर सिक्किम',
      ne: 'उत्तर सिक्किम'
    },
    coordinates: { lat: 27.4516, lng: 88.5324 },
    yearFounded: 1721,
    description: {
      en: 'A serene monastery known for its beautiful murals and traditional Tibetan architecture.',
      hi: 'अपनी सुंदर भित्तिचित्रों और पारंपरिक तिब्बती वास्तुकला के लिए प्रसिद्ध एक शांत मठ।',
      ne: 'आफ्नो सुन्दर भित्तेचित्र र परम्परागत तिब्बती वास्तुकलाको लागि प्रसिद्ध एक शान्त गुम्बा।'
    },
    history: {
      en: 'Founded in 1721 during the reign of Gyurmed Namgyal, it belongs to the Nyingmapa order.',
      hi: 'ग्युरमेड नामग्याल के शासनकाल के दौरान 1721 में स्थापित, यह न्यिंगमापा संप्रदाय से संबंधित है।',
      ne: 'ग्युर्मेड नामग्यालको शासनकालमा 1721 मा स्थापित, यो न्यिङ्गमापा सम्प्रदायसँग सम्बन्धित छ।'
    },
    significance: {
      en: 'Celebrates annual Chaam festival with unique masked dances and religious ceremonies.',
      hi: 'विशिष्ट मुखौटा नृत्य और धार्मिक समारोहों के साथ वार्षिक छाम उत्सव मनाता है।',
      ne: 'विशिष्ट मुखौटा नृत्य र धार्मिक समारोहका साथ वार्षिक छाम उत्सव मनाउँछ।'
    },
    images: [
      {
        url: 'https://picsum.photos/800/600?monastery=5',
        alt: {
          en: 'Phensang Monastery',
          hi: 'फेनसांग मोनास्ट्री',
          ne: 'फेन्साङ गुम्बा'
        },
        caption: {
          en: 'Beautiful Phensang Monastery in North Sikkim',
          hi: 'उत्तर सिक्किम में सुंदर फेनसांग मोनास्ट्री',
          ne: 'उत्तर सिक्किममा सुन्दर फेन्साङ गुम्बा'
        }
      }
    ],
    visitingHours: {
      en: '6:00 AM - 6:00 PM',
      hi: 'सुबह 6:00 बजे - शाम 6:00 बजे',
      ne: 'बिहान 6:00 बजे - बेलुका 6:00 बजे'
    },
    entryFee: {
      en: '₹10 for Indians, ₹100 for foreigners',
      hi: 'भारतीयों के लिए ₹10, विदेशियों के लिए ₹100',
      ne: 'भारतीयहरूका लागि ₹10, विदेशीहरूका लागि ₹100'
    },
    isActive: true,
    denomination: 'Nyingma'
  },
  {
    id: 'ralang-monastery',
    name: {
      en: 'Ralang Monastery',
      hi: 'रालंग मोनास्ट्री',
      ne: 'रालाङ गुम्बा'
    },
    location: {
      en: 'Ravangla, South Sikkim',
      hi: 'रावंगला, दक्षिण सिक्किम',
      ne: 'रावङ्गला, दक्षिण सिक्किम'
    },
    coordinates: { lat: 27.3028, lng: 88.3681 },
    yearFounded: 1768,
    description: {
      en: 'A magnificent monastery featuring traditional Tibetan architecture and intricate murals depicting Buddhist teachings.',
      fr: 'Un magnifique monastère présentant une architecture tibétaine traditionnelle et des peintures murales complexes illustrant les enseignements bouddhistes.',
    },
    history: {
      en: 'Founded in 1768 by the fourth Chogyal of Sikkim, it houses many rare Buddhist artifacts.',
      fr: 'Fondé en 1768 par le quatrième Chogyal du Sikkim, il abrite de nombreux artefacts bouddhistes rares.',
    },
    significance: {
      en: 'Known for its annual Pang Lhabsol festival celebrating the unity of Sikkim.',
      fr: 'Connu pour son festival annuel Pang Lhabsol célébrant l\'unité du Sikkim.',
    },
    imageUrl: 'https://placehold.co/600x400/monasteries/ralang',
    virtualTourUrl: '/virtual-tours/ralang',
    entranceViewUrl: '/entrance-views/ralang',
  },
  {
    id: 'lingdum-monastery',
    name: 'Lingdum Monastery',
    location: 'Ranka, East Sikkim',
    coordinates: { lat: 27.2895, lng: 88.5937 },
    established: '1999',
    description: {
      en: 'A relatively new monastery known for its modern interpretation of traditional Buddhist architecture.',
      fr: 'Un monastère relativement nouveau connu pour son interprétation moderne de l\'architecture bouddhiste traditionnelle.',
    },
    history: {
      en: 'Built in 1999, it represents the continuing evolution of Buddhist monasteries in Sikkim.',
      fr: 'Construit en 1999, il représente l\'évolution continue des monastères bouddhistes au Sikkim.',
    },
    significance: {
      en: 'Houses important religious texts and hosts regular meditation retreats.',
      fr: 'Abrite des textes religieux importants et organise régulièrement des retraites de méditation.',
    },
    imageUrl: 'https://placehold.co/600x400/monasteries/lingdum',
    virtualTourUrl: '/virtual-tours/lingdum',
    entranceViewUrl: '/entrance-views/lingdum',
  },
  {
    id: 'karma-monastery',
    name: 'Karma Monastery',
    location: 'Gangtok, East Sikkim',
    coordinates: { lat: 27.3412, lng: 88.6062 },
    established: '1912',
    description: {
      en: 'A peaceful monastery featuring unique blend of traditional and contemporary Buddhist art.',
      fr: 'Un monastère paisible présentant un mélange unique d\'art bouddhiste traditionnel et contemporain.',
    },
    history: {
      en: 'Established in 1912, it serves as an important center for Buddhist studies.',
      fr: 'Établi en 1912, il sert de centre important pour les études bouddhistes.',
    },
    significance: {
      en: 'Notable for its collection of rare Buddhist manuscripts and regular teaching sessions.',
      fr: 'Notable pour sa collection de manuscrits bouddhistes rares et ses sessions d\'enseignement régulières.',
    },
    imageUrl: 'https://placehold.co/600x400/monasteries/karma',
    virtualTourUrl: '/virtual-tours/karma',
    entranceViewUrl: '/entrance-views/karma',
  },
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
      hi: 'सिक्किम का सबसे पवित्र और पावन मठ, जो एक हृदय के आकार की पहाड़ी पर स्थित है।',
      es: 'Considerado el monasterio más sagrado y santo de Sikkim, ubicado en una colina en forma de corazón.',
      de: 'Das heiligste und bedeutendste Kloster in Sikkim, thront auf einem herzförmigen Hügel.',
      zh: '被认为是锡金最神圣的寺院，坐落在一个心形山顶上。',
      ja: 'シッキムで最も神聖な寺院とされ、ハート型の丘の上に位置しています。',
      ko: '시킴에서 가장 신성하고 거룩한 수도원으로 여겨지며, 하트 모양의 언덕 위에 자리잡고 있습니다.',
      ar: 'يعتبر أقدس وأطهر دير في سيكيم، يقع على قمة تل على شكل قلب.',
      pt: 'Considerado o mosteiro mais sagrado e santo de Sikkim, localizado no topo de uma colina em forma de coração.',
      ru: 'Считается самым священным и святым монастырем в Сиккиме, расположенным на вершине холма в форме сердца.',
      it: 'Considerato il monastero più sacro e santo del Sikkim, arroccato su una collina a forma di cuore.',
    },
    history: {
      en: 'Founded in 1641 by Ngadak Sempa Chempo, one of the three lamas who consecrated the first Chogyal of Sikkim.',
      fr: 'Fondé en 1641 par Ngadak Sempa Chempo, l\'un des trois lamas qui ont consacré le premier Chogyal du Sikkim.',
      hi: '1641 में नगदाक सेम्पा चेम्पो द्वारा स्थापित, जो सिक्किम के प्रथम चोग्याल को दीक्षित करने वाले तीन लामाओं में से एक थे।',
      es: 'Fundado en 1641 por Ngadak Sempa Chempo, uno de los tres lamas que consagraron al primer Chogyal de Sikkim.',
      de: 'Gegründet 1641 von Ngadak Sempa Chempo, einem der drei Lamas, die den ersten Chogyal von Sikkim weihten.',
      zh: '由恩加达克·森帕·钦波于1641年创建，他是为锡金第一位乔格耶尔加冕的三位喇嘛之一。',
      ja: '1641年、シッキム初代チョギャル（王）を聖別した3人のラマの1人であるガダク・センパ・チェンポによって設立されました。',
      ko: '1641년 시킴의 첫 번째 초갸르를 축성한 세 명의 라마 중 한 명인 가닥 셈파 켐포가 설립했습니다.',
      ar: 'تأسس عام 1641 على يد نجاداك سيمبا تشيمبو، أحد اللامات الثلاثة الذين كرسوا أول تشوجيال لسيكيم.',
      pt: 'Fundado em 1641 por Ngadak Sempa Chempo, um dos três lamas que consagraram o primeiro Chogyal de Sikkim.',
      ru: 'Основан в 1641 году Нгадаком Семпа Чемпо, одним из трех лам, освятивших первого Чогьяла Сиккима.',
      it: 'Fondato nel 1641 da Ngadak Sempa Chempo, uno dei tre lama che consacrarono il primo Chogyal del Sikkim.',
    },
    significance: {
      en: 'It is believed that a single glimpse of the monastery can cleanse one of all sins. It is home to the sacred \'Thongwa Rangdrol\' chorten, the sight of which is said to grant liberation.',
      fr: 'On croit qu\'un simple aperçu du monastère peut purifier de tous les péchés. Il abrite le chorten sacré \'Thongwa Rangdrol\', dont la vue est censée accorder la libération.',
      hi: 'माना जाता है कि मठ की एक झलक सभी पापों को धो सकती है। यह पवित्र \'थोंगवा रंगड्रोल\' चोर्टेन का घर है, जिसका दर्शन मोक्ष प्रदान करता है।',
      es: 'Se cree que una sola mirada al monasterio puede limpiar todos los pecados. Alberga el sagrado chorten \'Thongwa Rangdrol\', cuya vista se dice que otorga la liberación.',
      de: 'Es wird geglaubt, dass ein einziger Blick auf das Kloster von allen Sünden reinigen kann. Es beherbergt den heiligen \'Thongwa Rangdrol\' Chörten, dessen Anblick Befreiung gewähren soll.',
      zh: '据信只要一瞥这座寺院就能洗清所有罪孽。这里供奉着神圣的"通瓦让卓"佛塔，据说观其一眼就能获得解脱。',
      ja: '寺院を一目見るだけで全ての罪が浄化されると信じられています。聖なる「トンワ・ランドロル」チョルテンがあり、その光景を見ることで解脱が得られるとされています。',
      ko: '수도원을 한번 보는 것만으로도 모든 죄가 정화된다고 믿어집니다. 성스러운 \'통와 랑드롤\' 초르텐이 있으며, 이를 보면 해탈을 얻을 수 있다고 합니다.',
      ar: 'يُعتقد أن نظرة واحدة إلى الدير يمكن أن تطهر المرء من كل الذنوب. وهو موطن تشورتن \'ثونغوا رانغدرول\' المقدس، الذي يقال إن رؤيته تمنح التحرر.',
      pt: 'Acredita-se que um único vislumbre do mosteiro pode limpar todos os pecados. Abriga o sagrado chorten \'Thongwa Rangdrol\', cuja visão dizem conceder libertação.',
      ru: 'Считается, что один взгляд на монастырь может очистить от всех грехов. Здесь находится священный чортен \'Тхонгва Рангдрол\', взгляд на который, как говорят, дарует освобождение.',
      it: 'Si crede che un solo sguardo al monastero possa purificare da tutti i peccati. Ospita il sacro chorten \'Thongwa Rangdrol\', la cui vista si dice conceda la liberazione.',
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
    id: 'gonjang-monastery',
    name: 'Gonjang Monastery',
    location: 'Gangtok, East Sikkim',
    coordinates: { lat: 27.3519, lng: 88.6066 },
    established: '1981',
    description: {
      en: 'A modern monastery known for its excellent Buddhist studies program and peaceful environment.',
      fr: 'Un monastère moderne connu pour son excellent programme d\'études bouddhistes et son environnement paisible.',
    },
    history: {
      en: 'Built in 1981, this relatively new monastery follows the Nyingma tradition and serves as an important educational center.',
      fr: 'Construit en 1981, ce monastère relativement nouveau suit la tradition Nyingma et sert de centre éducatif important.',
    },
    significance: {
      en: 'Houses a significant collection of Buddhist texts and serves as a center for Buddhist philosophy studies.',
      fr: 'Abrite une importante collection de textes bouddhistes et sert de centre d\'études de la philosophie bouddhiste.',
    },
    imageUrl: 'https://picsum.photos/seed/gonjang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936621234!6m8!1m7!1sCAoSLEFGMVFpcE5xWnZfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3519!2d88.6066!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309943384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3519!2d88.6066!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'lingthem-monastery',
    name: 'Lingthem Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5361, lng: 88.5347 },
    established: '1850',
    description: {
      en: 'A picturesque monastery located in the remote valleys of North Sikkim, known for its traditional architecture.',
      fr: 'Un monastère pittoresque situé dans les vallées reculées du Nord Sikkim, connu pour son architecture traditionnelle.',
    },
    history: {
      en: 'Established in the mid-19th century, it has been an important center for the Nyingma tradition in North Sikkim.',
      fr: 'Établi au milieu du XIXe siècle, il a été un centre important pour la tradition Nyingma dans le Nord Sikkim.',
    },
    significance: {
      en: 'Famous for its annual masked dance festival and collection of ancient Buddhist manuscripts.',
      fr: 'Célèbre pour son festival annuel de danse masquée et sa collection de manuscrits bouddhistes anciens.',
    },
    imageUrl: 'https://picsum.photos/seed/lingthem/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936672345!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.5361!2d88.5347!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716309977384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.5361!2d88.5347!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'simick-monastery',
    name: 'Simick Monastery',
    location: 'Lingee, South Sikkim',
    coordinates: { lat: 27.2123, lng: 88.4789 },
    established: '1725',
    description: {
      en: 'An ancient monastery featuring unique architectural elements and colorful murals depicting Buddhist teachings.',
      fr: 'Un ancien monastère présentant des éléments architecturaux uniques et des peintures murales colorées illustrant les enseignements bouddhistes.',
    },
    history: {
      en: 'Founded in 1725 by a renowned Buddhist master, it has survived several natural calamities and renovations.',
      fr: 'Fondé en 1725 par un maître bouddhiste renommé, il a survécu à plusieurs calamités naturelles et rénovations.',
    },
    significance: {
      en: 'Known for its rare collection of Buddhist artifacts and traditional medical texts.',
      fr: 'Connu pour sa rare collection d\'artefacts bouddhistes et de textes médicaux traditionnels.',
    },
    imageUrl: 'https://picsum.photos/seed/simick/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936723456!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2123!2d88.4789!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310012384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2123!2d88.4789!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'tashiding-old-monastery',
    name: 'Tashiding Old Monastery',
    location: 'Yuksom, West Sikkim',
    coordinates: { lat: 27.3301, lng: 88.2199 },
    established: '1716',
    description: {
      en: 'One of the oldest monasteries in West Sikkim, known for its historical significance and sacred relics.',
      fr: 'L\'un des plus anciens monastères du Sikkim occidental, connu pour son importance historique et ses reliques sacrées.',
    },
    history: {
      en: 'Built in 1716, this monastery has been an important center for Buddhist learning and meditation.',
      fr: 'Construit en 1716, ce monastère a été un centre important pour l\'apprentissage et la méditation bouddhistes.',
    },
    significance: {
      en: 'Houses several important Buddhist artifacts and is a significant pilgrimage site.',
      fr: 'Abrite plusieurs artefacts bouddhistes importants et est un site de pèlerinage important.',
    },
    imageUrl: 'https://picsum.photos/seed/tashiding-old/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936774567!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3301!2d88.2199!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310047384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3301!2d88.2199!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'zong-monastery',
    name: 'Zong Monastery',
    location: 'Pelling, West Sikkim',
    coordinates: { lat: 27.2988, lng: 88.2456 },
    established: '1716',
    description: {
      en: 'A small but historically significant monastery featuring unique architectural elements from the early 18th century.',
      fr: 'Un petit monastère historiquement important présentant des éléments architecturaux uniques du début du XVIIIe siècle.',
    },
    history: {
      en: 'Established in 1716, it played a crucial role in spreading Buddhism in the region.',
      fr: 'Établi en 1716, il a joué un rôle crucial dans la diffusion du bouddhisme dans la région.',
    },
    significance: {
      en: 'Known for its collection of rare Buddhist texts and traditional religious ceremonies.',
      fr: 'Connu pour sa collection de textes bouddhistes rares et ses cérémonies religieuses traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/zong/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936825678!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2988!2d88.2456!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310082384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2988!2d88.2456!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'tumin-monastery',
    name: 'Tumin Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.2845, lng: 88.5912 },
    established: '1926',
    description: {
      en: 'A peaceful monastery known for its meditation retreats and traditional Buddhist education programs.',
      fr: 'Un monastère paisible connu pour ses retraites de méditation et ses programmes d\'éducation bouddhiste traditionnelle.',
    },
    history: {
      en: 'Founded in 1926 by a renowned meditation master, it has been a center for contemplative practices.',
      fr: 'Fondé en 1926 par un maître de méditation renommé, il a été un centre de pratiques contemplatives.',
    },
    significance: {
      en: 'Important center for Buddhist meditation and traditional healing practices.',
      fr: 'Centre important pour la méditation bouddhiste et les pratiques de guérison traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/tumin/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936876789!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2845!2d88.5912!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310117384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2845!2d88.5912!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'ralong-monastery',
    name: 'Ralong Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.2856, lng: 88.3567 },
    established: '1768',
    description: {
      en: 'A historic monastery renowned for its collection of ancient Buddhist scriptures and artifacts.',
      fr: 'Un monastère historique renommé pour sa collection d\'anciennes écritures et artefacts bouddhistes.',
    },
    history: {
      en: 'Built in 1768, it has been an important center for the preservation of Buddhist texts.',
      fr: 'Construit en 1768, il a été un centre important pour la préservation des textes bouddhistes.',
    },
    significance: {
      en: 'Houses rare Buddhist manuscripts and hosts important religious ceremonies.',
      fr: 'Abrite de rares manuscrits bouddhistes et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/ralong/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936927890!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2856!2d88.3567!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310152384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2856!2d88.3567!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'kartok-monastery',
    name: 'Kartok Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.3145, lng: 88.2234 },
    established: '1840',
    description: {
      en: 'A serene monastery known for its beautiful location and traditional Buddhist architecture.',
      fr: 'Un monastère serein connu pour son bel emplacement et son architecture bouddhiste traditionnelle.',
    },
    history: {
      en: 'Established in 1840, it has been an important center for Buddhist studies and meditation.',
      fr: 'Établi en 1840, il a été un centre important pour les études bouddhistes et la méditation.',
    },
    significance: {
      en: 'Famous for its annual religious festivals and traditional Buddhist ceremonies.',
      fr: 'Célèbre pour ses festivals religieux annuels et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/kartok/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714936978901!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3145!2d88.2234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310187384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3145!2d88.2234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'lachen-monastery',
    name: 'Lachen Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.7223, lng: 88.5512 },
    established: '1858',
    description: {
      en: 'A high-altitude monastery known for its unique architecture and spectacular mountain views.',
      fr: 'Un monastère d\'altitude connu pour son architecture unique et ses vues spectaculaires sur les montagnes.',
    },
    history: {
      en: 'Built in 1858, it serves the spiritual needs of the Lachen valley and preserves local Buddhist traditions.',
      fr: 'Construit en 1858, il répond aux besoins spirituels de la vallée de Lachen et préserve les traditions bouddhistes locales.',
    },
    significance: {
      en: 'Important center for Buddhist studies and traditional Tibetan medicine.',
      fr: 'Centre important pour les études bouddhistes et la médecine tibétaine traditionnelle.',
    },
    imageUrl: 'https://picsum.photos/seed/lachen/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937029012!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.7223!2d88.5512!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310222384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.7223!2d88.5512!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'lachung-monastery',
    name: 'Lachung Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.6889, lng: 88.7456 },
    established: '1880',
    description: {
      en: 'A peaceful monastery situated in the scenic Lachung valley, known for its traditional architecture.',
      fr: 'Un monastère paisible situé dans la pittoresque vallée de Lachung, connu pour son architecture traditionnelle.',
    },
    history: {
      en: 'Established in 1880, it has been a center for Buddhist learning and meditation in North Sikkim.',
      fr: 'Établi en 1880, il a été un centre d\'apprentissage et de méditation bouddhiste dans le Nord Sikkim.',
    },
    significance: {
      en: 'Known for its collection of Buddhist scriptures and traditional religious ceremonies.',
      fr: 'Connu pour sa collection d\'écritures bouddhistes et ses cérémonies religieuses traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/lachung/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937080123!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.6889!2d88.7456!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310257384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.6889!2d88.7456!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'dzongu-monastery',
    name: 'Dzongu Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5123, lng: 88.5234 },
    established: '1900',
    description: {
      en: 'A remote monastery preserving the unique Buddhist traditions of the Lepcha community.',
      fr: 'Un monastère isolé préservant les traditions bouddhistes uniques de la communauté Lepcha.',
    },
    history: {
      en: 'Built in 1900, it serves as an important cultural center for the indigenous Lepcha people.',
      fr: 'Construit en 1900, il sert de centre culturel important pour le peuple indigène Lepcha.',
    },
    significance: {
      en: 'Preserves unique Lepcha-Buddhist traditions and hosts important cultural festivals.',
      fr: 'Préserve les traditions uniques lepcha-bouddhistes et accueille d\'importants festivals culturels.',
    },
    imageUrl: 'https://picsum.photos/seed/dzongu/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937131234!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.5123!2d88.5234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310292384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.5123!2d88.5234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'ringhim-monastery',
    name: 'Ringhim Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.4789, lng: 88.5345 },
    established: '1730',
    description: {
      en: 'A historic monastery known for its collection of ancient Buddhist scriptures and traditional architecture.',
      fr: 'Un monastère historique connu pour sa collection d\'anciennes écritures bouddhistes et son architecture traditionnelle.',
    },
    history: {
      en: 'Founded in 1730, it has played a crucial role in preserving Buddhist teachings in North Sikkim.',
      fr: 'Fondé en 1730, il a joué un rôle crucial dans la préservation des enseignements bouddhistes dans le Nord Sikkim.',
    },
    significance: {
      en: 'Houses rare Buddhist texts and hosts important religious ceremonies.',
      fr: 'Abrite des textes bouddhistes rares et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/ringhim/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937182345!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.4789!2d88.5345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310327384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.4789!2d88.5345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'lingza-monastery',
    name: 'Lingza Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3234, lng: 88.6123 },
    established: '1840',
    description: {
      en: 'A picturesque monastery known for its peaceful environment and traditional Buddhist practices.',
      fr: 'Un monastère pittoresque connu pour son environnement paisible et ses pratiques bouddhistes traditionnelles.',
    },
    history: {
      en: 'Built in 1840, it has been an important center for meditation and Buddhist studies.',
      fr: 'Construit en 1840, il a été un centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Known for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Connu pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/lingza/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937233456!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3234!2d88.6123!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310362384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3234!2d88.6123!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'barmiok-monastery',
    name: 'Barmiok Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2789, lng: 88.2345 },
    established: '1837',
    description: {
      en: 'A serene monastery known for its unique architectural style and religious significance.',
      fr: 'Un monastère serein connu pour son style architectural unique et son importance religieuse.',
    },
    history: {
      en: 'Established in 1837, it has been an important center for Buddhist learning and culture.',
      fr: 'Établi en 1837, il a été un centre important pour l\'apprentissage et la culture bouddhistes.',
    },
    significance: {
      en: 'Famous for its collection of Buddhist artifacts and annual religious festivals.',
      fr: 'Célèbre pour sa collection d\'artefacts bouddhistes et ses festivals religieux annuels.',
    },
    imageUrl: 'https://picsum.photos/seed/barmiok/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937284567!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2789!2d88.2345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310397384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2789!2d88.2345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'namchi-monastery',
    name: 'Namchi Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.1678, lng: 88.3456 },
    established: '1975',
    description: {
      en: 'A modern monastery known for its blend of traditional and contemporary Buddhist architecture.',
      fr: 'Un monastère moderne connu pour son mélange d\'architecture bouddhiste traditionnelle et contemporaine.',
    },
    history: {
      en: 'Built in 1975, it represents the continuing evolution of Buddhist monasteries in Sikkim.',
      fr: 'Construit en 1975, il représente l\'évolution continue des monastères bouddhistes au Sikkim.',
    },
    significance: {
      en: 'Important center for Buddhist studies and cultural preservation.',
      fr: 'Centre important pour les études bouddhistes et la préservation culturelle.',
    },
    imageUrl: 'https://picsum.photos/seed/namchi/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937335678!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.1678!2d88.3456!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310432384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.1678!2d88.3456!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'yangang-monastery',
    name: 'Yangang Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.2234, lng: 88.4567 },
    established: '1848',
    description: {
      en: 'A historic monastery known for its traditional architectural style and peaceful atmosphere.',
      fr: 'Un monastère historique connu pour son style architectural traditionnel et son atmosphère paisible.',
    },
    history: {
      en: 'Founded in 1848, it has been a center for Buddhist learning and cultural preservation.',
      fr: 'Fondé en 1848, il a été un centre d\'apprentissage bouddhiste et de préservation culturelle.',
    },
    significance: {
      en: 'Known for its collection of sacred texts and traditional religious ceremonies.',
      fr: 'Connu pour sa collection de textes sacrés et ses cérémonies religieuses traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/yangang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937386789!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2234!2d88.4567!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310467384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2234!2d88.4567!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'pabyuk-monastery',
    name: 'Pabyuk Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3567, lng: 88.6789 },
    established: '1865',
    description: {
      en: 'A serene monastery nestled in the mountains, known for its meditation programs.',
      fr: 'Un monastère serein niché dans les montagnes, connu pour ses programmes de méditation.',
    },
    history: {
      en: 'Built in 1865, it has been an important center for Buddhist meditation and studies.',
      fr: 'Construit en 1865, il a été un centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Famous for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Célèbre pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/pabyuk/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937437890!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3567!2d88.6789!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310502384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3567!2d88.6789!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'kewzing-monastery',
    name: 'Kewzing Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.2890, lng: 88.3789 },
    established: '1882',
    description: {
      en: 'A beautiful monastery known for its traditional murals and peaceful surroundings.',
      fr: 'Un beau monastère connu pour ses peintures murales traditionnelles et son environnement paisible.',
    },
    history: {
      en: 'Established in 1882, it has played an important role in preserving Buddhist art and culture.',
      fr: 'Établi en 1882, il a joué un rôle important dans la préservation de l\'art et de la culture bouddhistes.',
    },
    significance: {
      en: 'Houses significant Buddhist artifacts and hosts important religious festivals.',
      fr: 'Abrite d\'importants artefacts bouddhistes et accueille d\'importants festivals religieux.',
    },
    imageUrl: 'https://picsum.photos/seed/kewzing/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937488901!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2890!2d88.3789!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310537384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2890!2d88.3789!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'doling-monastery',
    name: 'Doling Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2912, lng: 88.2456 },
    established: '1850',
    description: {
      en: 'A historic monastery known for its collection of ancient Buddhist texts and traditional architecture.',
      fr: 'Un monastère historique connu pour sa collection de textes bouddhistes anciens et son architecture traditionnelle.',
    },
    history: {
      en: 'Built in 1850, it has been a significant center for Buddhist studies and cultural preservation.',
      fr: 'Construit en 1850, il a été un centre important pour les études bouddhistes et la préservation culturelle.',
    },
    significance: {
      en: 'Houses rare Buddhist manuscripts and hosts important religious ceremonies.',
      fr: 'Abrite de rares manuscrits bouddhistes et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/doling/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937539012!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2912!2d88.2456!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310572384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2912!2d88.2456!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'linkey-monastery',
    name: 'Linkey Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3234, lng: 88.5890 },
    established: '1894',
    description: {
      en: 'A picturesque monastery known for its scenic location and traditional Buddhist practices.',
      fr: 'Un monastère pittoresque connu pour son emplacement scénique et ses pratiques bouddhistes traditionnelles.',
    },
    history: {
      en: 'Established in 1894, it has been an important center for meditation and Buddhist studies.',
      fr: 'Établi en 1894, il a été un centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Known for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Connu pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/linkey/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937590123!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3234!2d88.5890!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310607384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3234!2d88.5890!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'mangan-monastery',
    name: 'Mangan Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5089, lng: 88.5234 },
    established: '1905',
    description: {
      en: 'A serene monastery in North Sikkim known for its traditional architecture and peaceful atmosphere.',
      fr: 'Un monastère serein dans le Nord Sikkim connu pour son architecture traditionnelle et son atmosphère paisible.',
    },
    history: {
      en: 'Built in 1905, it has been an important center for Buddhist studies and meditation.',
      fr: 'Construit en 1905, il a été un centre important pour les études bouddhistes et la méditation.',
    },
    significance: {
      en: 'Known for its collection of Buddhist artifacts and traditional ceremonies.',
      fr: 'Connu pour sa collection d\'artefacts bouddhistes et ses cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/mangan/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937641234!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.5089!2d88.5234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310642384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.5089!2d88.5234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'samdong-monastery',
    name: 'Samdong Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3456, lng: 88.5678 },
    established: '1878',
    description: {
      en: 'A historic monastery featuring beautiful murals and traditional Buddhist architecture.',
      fr: 'Un monastère historique présentant de belles peintures murales et une architecture bouddhiste traditionnelle.',
    },
    history: {
      en: 'Established in 1878, it has been a significant center for Buddhist learning and culture.',
      fr: 'Établi en 1878, il a été un centre important pour l\'apprentissage et la culture bouddhistes.',
    },
    significance: {
      en: 'Houses important Buddhist texts and hosts regular meditation retreats.',
      fr: 'Abrite des textes bouddhistes importants et organise régulièrement des retraites de méditation.',
    },
    imageUrl: 'https://picsum.photos/seed/samdong/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937692345!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3456!2d88.5678!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310677384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3456!2d88.5678!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'tinkitam-monastery',
    name: 'Tinkitam Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.2345, lng: 88.3789 },
    established: '1888',
    description: {
      en: 'A peaceful monastery known for its traditional Buddhist practices and scenic location.',
      fr: 'Un monastère paisible connu pour ses pratiques bouddhistes traditionnelles et son emplacement pittoresque.',
    },
    history: {
      en: 'Built in 1888, it serves as an important center for Buddhist meditation and studies.',
      fr: 'Construit en 1888, il sert de centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Famous for its annual religious festivals and traditional ceremonies.',
      fr: 'Célèbre pour ses festivals religieux annuels et ses cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/tinkitam/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937743456!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2345!2d88.3789!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310712384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2345!2d88.3789!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'hee-gyathang-monastery',
    name: 'Hee Gyathang Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2890, lng: 88.2345 },
    established: '1869',
    description: {
      en: 'A historic monastery known for its unique architectural features and religious significance.',
      fr: 'Un monastère historique connu pour ses caractéristiques architecturales uniques et son importance religieuse.',
    },
    history: {
      en: 'Established in 1869, it has been an important center for Buddhist learning and culture.',
      fr: 'Établi en 1869, il a été un centre important pour l\'apprentissage et la culture bouddhistes.',
    },
    significance: {
      en: 'Houses important Buddhist artifacts and hosts significant religious ceremonies.',
      fr: 'Abrite d\'importants artefacts bouddhistes et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/hee-gyathang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937794567!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2890!2d88.2345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310747384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2890!2d88.2345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'chaang-monastery',
    name: 'Chaang Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3789, lng: 88.6234 },
    established: '1855',
    description: {
      en: 'A serene monastery known for its meditation programs and traditional Buddhist practices.',
      fr: 'Un monastère serein connu pour ses programmes de méditation et ses pratiques bouddhistes traditionnelles.',
    },
    history: {
      en: 'Built in 1855, it has served as an important center for Buddhist meditation and studies.',
      fr: 'Construit en 1855, il a servi de centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Known for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Connu pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/chaang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937845678!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3789!2d88.6234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310782384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3789!2d88.6234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'thongmogang-monastery',
    name: 'Thongmogang Monastery',
    location: 'South Sikkim',
    coordinates: { lat: 27.2123, lng: 88.3567 },
    established: '1880',
    description: {
      en: 'A historic monastery known for its traditional architecture and peaceful environment.',
      fr: 'Un monastère historique connu pour son architecture traditionnelle et son environnement paisible.',
    },
    history: {
      en: 'Founded in 1880, it has been an important center for Buddhist studies and meditation.',
      fr: 'Fondé en 1880, il a été un centre important pour les études bouddhistes et la méditation.',
    },
    significance: {
      en: 'Houses significant Buddhist artifacts and hosts traditional ceremonies.',
      fr: 'Abrite d\'importants artefacts bouddhistes et accueille des cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/thongmogang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937896789!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2123!2d88.3567!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310817384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2123!2d88.3567!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'buriakop-monastery',
    name: 'Buriakop Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2789, lng: 88.2123 },
    established: '1872',
    description: {
      en: 'A picturesque monastery known for its unique architectural style and scenic location.',
      fr: 'Un monastère pittoresque connu pour son style architectural unique et son emplacement scénique.',
    },
    history: {
      en: 'Built in 1872, it has been a significant center for Buddhist learning and culture.',
      fr: 'Construit en 1872, il a été un centre important pour l\'apprentissage et la culture bouddhistes.',
    },
    significance: {
      en: 'Known for its collection of Buddhist texts and traditional ceremonies.',
      fr: 'Connu pour sa collection de textes bouddhistes et ses cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/buriakop/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937947890!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2789!2d88.2123!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310852384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2789!2d88.2123!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'mangthang-monastery',
    name: 'Mangthang Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5234, lng: 88.5123 },
    established: '1895',
    description: {
      en: 'A serene monastery known for its traditional Buddhist practices and peaceful environment.',
      fr: 'Un monastère serein connu pour ses pratiques bouddhistes traditionnelles et son environnement paisible.',
    },
    history: {
      en: 'Established in 1895, it has been an important center for meditation and Buddhist studies.',
      fr: 'Établi en 1895, il a été un centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Famous for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Célèbre pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/mangthang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714937998901!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.5234!2d88.5123!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310887384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.5234!2d88.5123!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'ranka-monastery',
    name: 'Ranka Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3012, lng: 88.5789 },
    established: '1959',
    description: {
      en: 'A modern monastery known for its beautiful architecture and educational programs.',
      fr: 'Un monastère moderne connu pour sa belle architecture et ses programmes éducatifs.',
    },
    history: {
      en: 'Built in 1959, it represents the modern evolution of Buddhist monasteries in Sikkim.',
      fr: 'Construit en 1959, il représente l\'évolution moderne des monastères bouddhistes au Sikkim.',
    },
    significance: {
      en: 'Important center for Buddhist education and cultural preservation.',
      fr: 'Centre important pour l\'éducation bouddhiste et la préservation culturelle.',
    },
    imageUrl: 'https://picsum.photos/seed/ranka/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938049012!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3012!2d88.5789!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310922384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3012!2d88.5789!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'tingchim-monastery',
    name: 'Tingchim Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.4567, lng: 88.5345 },
    established: '1908',
    description: {
      en: 'A historic monastery known for its traditional architecture and peaceful surroundings.',
      fr: 'Un monastère historique connu pour son architecture traditionnelle et son environnement paisible.',
    },
    history: {
      en: 'Founded in 1908, it has been an important center for Buddhist learning and meditation.',
      fr: 'Fondé en 1908, il a été un centre important pour l\'apprentissage et la méditation bouddhistes.',
    },
    significance: {
      en: 'Houses important Buddhist artifacts and hosts traditional ceremonies.',
      fr: 'Abrite d\'importants artefacts bouddhistes et accueille des cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/tingchim/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938100123!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.4567!2d88.5345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310957384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.4567!2d88.5345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'chakung-monastery',
    name: 'Chakung Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2567, lng: 88.2345 },
    established: '1885',
    description: {
      en: 'A serene monastery known for its beautiful murals and traditional Buddhist practices.',
      fr: 'Un monastère serein connu pour ses belles peintures murales et ses pratiques bouddhistes traditionnelles.',
    },
    history: {
      en: 'Built in 1885, it has been a significant center for Buddhist art and culture.',
      fr: 'Construit en 1885, il a été un centre important pour l\'art et la culture bouddhistes.',
    },
    significance: {
      en: 'Known for its collection of religious artifacts and traditional ceremonies.',
      fr: 'Connu pour sa collection d\'artefacts religieux et ses cérémonies traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/chakung/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938151234!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2567!2d88.2345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716310992384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2567!2d88.2345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'kabi-monastery',
    name: 'Kabi Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.5678, lng: 88.5567 },
    established: '1920',
    description: {
      en: 'A peaceful monastery known for its meditation programs and traditional architecture.',
      fr: 'Un monastère paisible connu pour ses programmes de méditation et son architecture traditionnelle.',
    },
    history: {
      en: 'Established in 1920, it has been an important center for Buddhist meditation and studies.',
      fr: 'Établi en 1920, il a été un centre important pour la méditation et les études bouddhistes.',
    },
    significance: {
      en: 'Famous for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Célèbre pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/kabi/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938202345!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.5678!2d88.5567!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311027384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.5678!2d88.5567!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'phensang-new-monastery',
    name: 'Phensang New Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.4234, lng: 88.5234 },
    established: '1980',
    description: {
      en: 'A modern monastery known for its blend of traditional and contemporary Buddhist architecture.',
      fr: 'Un monastère moderne connu pour son mélange d\'architecture bouddhiste traditionnelle et contemporaine.',
    },
    history: {
      en: 'Built in 1980, it represents the continuing evolution of Buddhist monasteries in Sikkim.',
      fr: 'Construit en 1980, il représente l\'évolution continue des monastères bouddhistes au Sikkim.',
    },
    significance: {
      en: 'Important center for Buddhist education and cultural preservation.',
      fr: 'Centre important pour l\'éducation bouddhiste et la préservation culturelle.',
    },
    imageUrl: 'https://picsum.photos/seed/phensang-new/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938253456!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.4234!2d88.5234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311062384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.4234!2d88.5234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'kyongsa-monastery',
    name: 'Kyongsa Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2890, lng: 88.2012 },
    established: '1862',
    description: {
      en: 'A historic monastery known for its traditional architecture and religious significance.',
      fr: 'Un monastère historique connu pour son architecture traditionnelle et son importance religieuse.',
    },
    history: {
      en: 'Founded in 1862, it has been an important center for Buddhist studies and culture.',
      fr: 'Fondé en 1862, il a été un centre important pour les études et la culture bouddhistes.',
    },
    significance: {
      en: 'Houses significant Buddhist artifacts and hosts important religious ceremonies.',
      fr: 'Abrite d\'importants artefacts bouddhistes et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/kyongsa/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938304567!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2890!2d88.2012!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311097384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2890!2d88.2012!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'chungthang-monastery',
    name: 'Chungthang Monastery',
    location: 'North Sikkim',
    coordinates: { lat: 27.6012, lng: 88.6345 },
    established: '1935',
    description: {
      en: 'A serene monastery known for its beautiful location and traditional Buddhist practices.',
      fr: 'Un monastère serein connu pour son bel emplacement et ses pratiques bouddhistes traditionnelles.',
    },
    history: {
      en: 'Built in 1935, it serves as an important center for Buddhist learning and meditation.',
      fr: 'Construit en 1935, il sert de centre important pour l\'apprentissage et la méditation bouddhistes.',
    },
    significance: {
      en: 'Known for its meditation programs and traditional Buddhist ceremonies.',
      fr: 'Connu pour ses programmes de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/chungthang/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938355678!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.6012!2d88.6345!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311132384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.6012!2d88.6345!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'hungri-monastery',
    name: 'Hungri Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2456, lng: 88.2234 },
    established: '1891',
    description: {
      en: 'A peaceful monastery known for its traditional architecture and scenic surroundings.',
      fr: 'Un monastère paisible connu pour son architecture traditionnelle et son environnement pittoresque.',
    },
    history: {
      en: 'Established in 1891, it has been a significant center for Buddhist learning and culture.',
      fr: 'Établi en 1891, il a été un centre important pour l\'apprentissage et la culture bouddhistes.',
    },
    significance: {
      en: 'Houses important Buddhist texts and hosts traditional religious ceremonies.',
      fr: 'Abrite des textes bouddhistes importants et accueille des cérémonies religieuses traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/hungri/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938406789!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2456!2d88.2234!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311167384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2456!2d88.2234!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'lingdok-monastery',
    name: 'Lingdok Monastery',
    location: 'East Sikkim',
    coordinates: { lat: 27.3678, lng: 88.6123 },
    established: '1940',
    description: {
      en: 'A monastery known for its meditation programs and traditional Buddhist education.',
      fr: 'Un monastère connu pour ses programmes de méditation et son éducation bouddhiste traditionnelle.',
    },
    history: {
      en: 'Built in 1940, it has been an important center for Buddhist studies and meditation.',
      fr: 'Construit en 1940, il a été un centre important pour les études bouddhistes et la méditation.',
    },
    significance: {
      en: 'Famous for its meditation retreats and traditional Buddhist ceremonies.',
      fr: 'Célèbre pour ses retraites de méditation et ses cérémonies bouddhistes traditionnelles.',
    },
    imageUrl: 'https://picsum.photos/seed/lingdok/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938457890!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.3678!2d88.6123!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311202384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.3678!2d88.6123!3f322.25!4f-2.73!5f0.7820865974627469',
  },
  {
    id: 'bermiok-monastery',
    name: 'Bermiok Monastery',
    location: 'West Sikkim',
    coordinates: { lat: 27.2789, lng: 88.2567 },
    established: '1876',
    description: {
      en: 'A historic monastery featuring unique Buddhist architecture and religious artifacts.',
      fr: 'Un monastère historique présentant une architecture bouddhiste unique et des artefacts religieux.',
    },
    history: {
      en: 'Founded in 1876, it has played an important role in preserving Buddhist culture.',
      fr: 'Fondé en 1876, il a joué un rôle important dans la préservation de la culture bouddhiste.',
    },
    significance: {
      en: 'Houses rare Buddhist manuscripts and hosts significant religious ceremonies.',
      fr: 'Abrite de rares manuscrits bouddhistes et accueille d\'importantes cérémonies religieuses.',
    },
    imageUrl: 'https://picsum.photos/seed/bermiok/800/600',
    virtualTourUrl: 'https://www.google.com/maps/embed?pb=!4v1714938508901!6m8!1m7!1sCAoSLEFGMVFpcE5mV2JfYXJrV3lOVzJzX2tRZ1ZuYzRfWE1aeVdfQ2ZfWGpHbWpZ!2m2!1d27.2789!2d88.2567!3f237.93!4f-12.89!5f0.7820865974627469',
    entranceViewUrl: 'https://www.google.com/maps/embed?pb=!4v1716311237384!6m8!1m7!1sCAoSLEFGMVFpcE5RWktnZl9mUEk2OVIyYkJ2TFJwTXpaTEdzV3BNTDlCbE5QY2Nz!2m2!1d27.2789!2d88.2567!3f322.25!4f-2.73!5f0.7820865974627469',
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
