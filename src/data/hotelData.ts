export interface Room {
  id: string;
  name: string;
  category: 'standard' | 'deluxe' | 'family' | 'suite';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  pricePerNight: string;
  priceNumeric: number;
  size: string;
  capacity: string;
  bedInfo: string;
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
}

export interface Attraction {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  distance: string;
  image: string;
  category: string;
}

export const HOTEL_INFO = {
  name: "Güner Hotel",
  tagline: "Comfort, Elegance & Authentic Turkish Hospitality in Bursa",
  phone: "+90 530 377 7516",
  phoneRaw: "+905303777516",
  email: "info@gunerhotel.com",
  address: {
    street: "General, Karaağaç, Gn. Şükrü Nailli Cd. No:10",
    postalDistrict: "16360 Yıldırım",
    city: "Bursa",
    country: "Türkiye",
    full: "General, Karaağaç, Gn. Şükrü Nailli Cd. No:10, 16360 Yıldırım/Bursa, Türkiye"
  },
  coordinates: {
    lat: 40.1828,
    lng: 29.0669
  },
  checkIn: "14:00",
  checkOut: "12:00",
  reception: "24/7 Front Desk",
  wifi: "High-Speed Wi-Fi Included",
  parking: "Free On-Site & Nearby Guest Parking"
};

import heroImg from '../assets/images/guner_hotel_hero_1790844278998.jpg';
import welcomeImg from '../assets/images/guner_hotel_welcome_1790844298393.jpg';
import standardImg from '../assets/images/guner_room_standard_1790844315700.jpg';
import deluxeImg from '../assets/images/guner_room_deluxe_1790844331262.jpg';
import familyImg from '../assets/images/guner_room_family_1790844346985.jpg';
import bursaImg from '../assets/images/bursa_city_landscape_1790844362401.jpg';

export const HOTEL_IMAGES = {
  hero: heroImg,
  welcome: welcomeImg,
  standard: standardImg,
  deluxe: deluxeImg,
  family: familyImg,
  bursa: bursaImg
};

export const ROOMS_DATA: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    tagline: "Serene, modern space designed for effortless rest and total comfort.",
    shortDescription: "A thoughtfully appointed room with modern Turkish aesthetic, plush bedding, and contemporary guest amenities.",
    fullDescription: "Our Standard Room offers guests a restful sanctuary in the heart of Bursa. Designed with warm neutral tones, natural wood finishes, and premium soundproofing, it features a comfortable queen-size bed or twin beds, climate control, high-speed Wi-Fi, and a sleek en-suite bathroom with luxury toiletries.",
    pricePerNight: "₺1,850",
    priceNumeric: 1850,
    size: "24 m²",
    capacity: "Up to 2 Guests",
    bedInfo: "1 Queen Bed or 2 Single Beds",
    image: standardImg,
    gallery: [standardImg, welcomeImg, heroImg],
    features: [
      "City or Garden View",
      "Soundproofed Double-Glazed Windows",
      "Orthopedic Mattress & Premium Linens",
      "Ergonomic Work Desk & Chair",
      "Modern En-suite Bathroom"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "Individual Climate Control AC",
      "43-inch Smart HD TV",
      "Complimentary Tea & Coffee Maker",
      "Mini Refrigerator",
      "In-room Safe Deposit Box",
      "Hairdryer & Bath Amenities",
      "Daily Housekeeping Service"
    ]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "deluxe",
    tagline: "Expanded luxury featuring a plush seating corner and premium city views.",
    shortDescription: "Spacious boutique layout with refined interiors, velvet lounge seating, and enhanced room amenities.",
    fullDescription: "Experience elevated boutique living in our Deluxe Room. Offering extra floor space and a comfortable velvet armchair seating corner, this room is perfect for couples or business travelers seeking extra luxury. Enjoy custom mood lighting, soft Turkish cotton bathrobes, and stunning vistas of historical Bursa.",
    pricePerNight: "₺2,450",
    priceNumeric: 2450,
    size: "32 m²",
    capacity: "Up to 3 Guests",
    bedInfo: "1 King Bed + Extra Sofa Bed Option",
    image: deluxeImg,
    gallery: [deluxeImg, welcomeImg, standardImg],
    features: [
      "Panoramic Bursa City View",
      "Lounge Corner with Velvet Armchair",
      "Spacious Designer Bathroom with Rain Shower",
      "Plush Turkish Cotton Bathrobes & Slippers",
      "Nespresso Coffee Machine"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "Individual Climate Control AC",
      "50-inch 4K Smart TV",
      "Nespresso & Tea Selection",
      "Stocked Mini Bar",
      "Laptop-sized Digital Safe",
      "Premium Toiletries & Rain Shower",
      "Daily Housekeeping & Turndown"
    ]
  },
  {
    id: "family-room",
    name: "Family Room",
    category: "family",
    tagline: "Generous multi-bed layout offering space, privacy, and warmth for families.",
    shortDescription: "Ideal choice for families visiting Bursa, featuring connected sleeping zones and generous floor space.",
    fullDescription: "Designed specifically for family comfort, our Family Room combines generous space with homely Turkish warmth. Featuring a master king bed plus two single beds or a convertible sofa bed, everyone enjoys their own space to relax after exploring Bursa's historic landmarks and mountain attractions.",
    pricePerNight: "₺3,200",
    priceNumeric: 3200,
    size: "42 m²",
    capacity: "Up to 4 Guests",
    bedInfo: "1 King Bed + 2 Single Beds",
    image: familyImg,
    gallery: [familyImg, deluxeImg, standardImg],
    features: [
      "Two Flexible Bedding Zones",
      "Spacious Family Seating Area",
      "Double Vanities in Large Bathroom",
      "Child-friendly Room Setup Available",
      "Quiet Courtyard or City Outlook"
    ],
    amenities: [
      "High-Speed Wi-Fi",
      "Dual Climate Control AC",
      "55-inch Smart HD TV",
      "Family Tea Kettle & Coffee Bar",
      "Large Mini Refrigerator",
      "In-room Safe Box",
      "Spacious Rain Shower Bathroom",
      "24/7 Room Service & Housekeeping"
    ]
  }
];

export const EXPERIENCE_FEATURES = [
  {
    id: "comfort",
    title: "Comfortable Rooms",
    subtitle: "Restful Night's Sleep",
    description: "Orthopedic mattresses, quiet soundproofing, crisp Turkish cotton linens, and climate control ensure complete relaxation.",
    iconName: "BedDouble"
  },
  {
    id: "hospitality",
    title: "Turkish Hospitality",
    subtitle: "Warm & Attentive Service",
    description: "Our dedicated team provides authentic Turkish warmth, local recommendations, and 24/7 personalized care.",
    iconName: "HeartHandshake"
  },
  {
    id: "location",
    title: "Convenient Location",
    subtitle: "Heart of Yıldırım, Bursa",
    description: "Situated centrally in Yıldırım with swift transport access to historical bazaars, Uludağ cable car, and local dining.",
    iconName: "MapPin"
  },
  {
    id: "relaxing",
    title: "Relaxing Stay",
    subtitle: "Tranquil Ambiance",
    description: "Peaceful atmosphere designed for both leisure tourists exploring Bursa and business guests needing quiet efficiency.",
    iconName: "Sparkles"
  }
];

export const BURSA_HIGHLIGHTS = [
  {
    id: "grand-mosque",
    title: "Bursa Grand Mosque (Ulu Cami)",
    subtitle: "Ottoman Architectural Masterpiece",
    description: "Built in 1399, famous for its 20 domes and stunning indoor fountain beneath an open skylight.",
    distance: "10 mins drive",
    category: "Historical Landmark"
  },
  {
    id: "koza-han",
    title: "Silk Bazaar (Koza Han)",
    subtitle: "Historic Silk Trade Courtyard",
    description: "Step into the 15th-century courtyard where merchants traded silk, now home to cozy tea gardens and silk boutiques.",
    distance: "12 mins drive",
    category: "Culture & Shopping"
  },
  {
    id: "uludag-mountain",
    title: "Mount Uludağ & Cable Car",
    subtitle: "Winter Skiing & Summer Alpine Trails",
    description: "Take the iconic Teleferik cable car from Bursa up to Mount Uludağ for skiing in winter or cool mountain breezes in summer.",
    distance: "15 mins to Teleferik station",
    category: "Nature & Adventure"
  },
  {
    id: "cumalikizik",
    title: "Cumalıkızık UNESCO Village",
    subtitle: "700-Year-Old Ottoman Village",
    description: "Famous cobblestone streets, preserved colorful wooden houses, and famous rich Turkish village breakfasts.",
    distance: "18 mins drive",
    category: "UNESCO Heritage"
  }
];
