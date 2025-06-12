import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, MapPin, Coffee, Wifi, Bath, Utensils } from "lucide-react";
import { useParams, Link } from 'react-router-dom';

// Mock hotel data - in a real app, this would come from an API
const hotels = [
  {
    id: "1",
    name: "Royal Mansour Marrakech",
    location: "Marrakech, Morocco",
    mainImage: "https://images.unsplash.com/photo-1560564029-6eb181a872c4?q=80&w=2080&auto=format&fit=crop",
    rating: 4.9,
    price: 599,
    description: "The Royal Mansour Marrakech offers an unrivaled experience of luxury and privacy. Set within the walls of Marrakech's old city, the Royal Mansour is an oasis of 53 private riads, restaurants led by Michelin-starred chefs, and a world-class spa.",
    longDescription: "Commissioned by King Mohammed VI of Morocco, the Royal Mansour Marrakech is a showcase of Moroccan craftsmanship and architecture. Each of the 53 private riads (traditional Moroccan houses) spans three floors and features private courtyards, plunge pools, and rooftop terraces with views of the Atlas Mountains. The hotel's design is a masterpiece of zellige tilework, intricate stucco, and carved cedar wood, all handcrafted by over 1,500 Moroccan artisans. The Royal Mansour's spa is a haven of tranquility, featuring treatments that blend ancient traditions with modern techniques.",
    amenities: [
      "Private riads with plunge pools",
      "Michelin-starred restaurants",
      "Luxury spa with traditional hammam",
      "Stunning gardens with palm trees",
      "24-hour butler service",
      "Airport transfers in Bentley fleet",
      "Rooftop terraces with Atlas Mountain views",
      "Fine dining Moroccan and international cuisine"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560564029-6eb181a872c4?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590502592911-eb6463d5125f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2080&auto=format&fit=crop"
    ],
    rooms: [
      {
        id: "101",
        name: "Superior Riad",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        price: 599,
        capacity: 2,
        description: "One-bedroom riad with private courtyard and plunge pool"
      },
      {
        id: "102",
        name: "Privilege Riad",
        image: "https://img.freepik.com/premium-photo/modern-bedroom-interior-design_1278346-27663.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 899,
        capacity: 2,
        description: "Spacious one-bedroom riad with larger pool and garden"
      },
      {
        id: "103",
        name: "Prestige Riad",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        price: 1299,
        capacity: 4,
        description: "Two-bedroom riad with extensive living areas and large pool"
      }
    ]
  },
  {
    id: "2",
    name: "La Mamounia Palace",
    location: "Marrakech, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/experiencing-luxury-travel-destinations_810293-157855.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 499,
    description: "Historic luxury hotel with beautiful gardens and iconic Moroccan architecture.",
    longDescription: "La Mamounia is one of Morocco’s most legendary hotels, blending Moorish opulence with 21st-century comfort. Surrounded by 17 acres of lavish gardens, the palace has hosted celebrities, royals, and world leaders. Its architecture showcases intricate zellige tiles, carved wood ceilings, and grand arcades. Guests enjoy world-class service, a renowned spa, and exceptional culinary experiences from traditional Moroccan to international cuisine.",
    amenities: [
      "Luxurious rooms and suites with garden or city views",
      "Traditional Moroccan spa with hammam",
      "Fine dining restaurants and bars",
      "Expansive gardens with century-old olive trees",
      "Heated indoor and outdoor pools",
      "Fitness and wellness center",
      "Art deco-style casino",
      "Private event and wedding spaces"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/experiencing-luxury-travel-destinations_810293-157855.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559589689-577aabd1d925?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
    ],
    rooms: [
      {
        id: "201",
        name: "Deluxe Room",
        image: "https://img.freepik.com/premium-photo/double-bed-with-white-pillows_636537-199939.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 499,
        capacity: 2,
        description: "Elegant room with king-size bed, marble bathroom, and garden views"
      },
      {
        id: "202",
        name: "Executive Suite",
        image: "https://img.freepik.com/premium-photo/luxurious-marrakech-style-hotel-room-with-arched-headboard_536604-19029.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 799,
        capacity: 2,
        description: "Spacious suite with living area, terrace, and Moroccan décor"
      },
      {
        id: "203",
        name: "Prestige Suite",
        image: "https://img.freepik.com/premium-photo/high-angle-view-chairs-table-building_1048944-3690105.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 1199,
        capacity: 4,
        description: "Lavish suite with two bedrooms, private balcony, and garden access"
      }
    ]
  },
  {
  id: "3",
  name: "Kasbah Tamadot",
  location: "Atlas Mountains, Morocco",
  mainImage: "https://img.freepik.com/premium-photo/luxury-place-resort_119101-243.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
  rating: 4.7,
  price: 449,
  description: "Sir Richard Branson's Moroccan retreat offering stunning mountain views and authentic luxury.",
  longDescription: "Nestled in the breathtaking Atlas Mountains, Kasbah Tamadot is a magical escape owned by Sir Richard Branson. This award-winning boutique hotel combines traditional Moroccan charm with modern comfort. With sweeping views, beautifully decorated suites, and world-class service, it’s a serene destination for those seeking peace and luxury amidst nature.",
  amenities: [
    "Infinity pool with mountain views",
    "Luxury spa with hammam",
    "Gourmet Moroccan and international cuisine",
    "Berber tent suites",
    "Guided mountain treks",
    "Library & cultural lounge",
    "Hot tub and wellness center",
    "Tennis courts"
  ],
  gallery: [
    "https://img.freepik.com/premium-photo/luxury-place-resort_119101-243.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2080&auto=format&fit=crop",
    "https://img.freepik.com/premium-photo/beautiful-interior-design-hotel-tangier-city-morocco_69593-6747.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/interior-building_1048944-29204193.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
  ],
  rooms: [
    {
      id: "301",
      name: "Deluxe Suite",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      price: 449,
      capacity: 2,
      description: "Elegant suite with Moroccan decor and balcony overlooking the mountains"
    },
    {
      id: "302",
      name: "Berber Tent with Jacuzzi",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2080&auto=format&fit=crop",
      price: 599,
      capacity: 2,
      description: "Luxury tent suite with private terrace, hot tub, and panoramic views"
    }
  ]
  },
  {
    id: "4",
    name: "Riad Fes",
    location: "Fes, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/illuminated-restaurant-by-building-against-sky-night_1048944-30281377.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.6,
    price: 329,
    description: "Traditional riad in the heart of the Fes medina with ornate Andalusian architecture.",
    longDescription: "Riad Fes is a restored palace that blends traditional Andalusian design with modern luxury. Located in the heart of the Fes medina, this elegant property offers intricately tiled courtyards, tranquil fountains, and rooftop terraces overlooking the ancient city. It's an immersive experience into Morocco’s royal and cultural heritage.",
    amenities: [
      "Central courtyard with fountain",
      "Fine dining Moroccan restaurant",
      "Rooftop terrace with medina views",
      "Complimentary high-speed WiFi",
      "On-site spa and hammam",
      "Traditional Moroccan architecture"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/illuminated-restaurant-by-building-against-sky-night_1048944-30281377.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://img.freepik.com/premium-photo/bedroom-with-bed-wall-with-glass-window_214726-779.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    ],
    rooms: [
      {
        id: "401",
        name: "Classic Room",
        image: "https://img.freepik.com/premium-photo/beautiful-interior-design-hotel-tangier-city-morocco_69593-6749.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 329,
        capacity: 2,
        description: "Elegantly decorated room with traditional Moroccan tiles and furnishings."
      },
      {
        id: "402",
        name: "Ambassador Suite",
        image: "https://img.freepik.com/premium-photo/modern-bedroom-interior-design_1278346-27663.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 499,
        capacity: 3,
        description: "Spacious suite with private lounge area and panoramic views of the medina."
      }
    ]
  },
  {
    id: "5",
    name: "Amanjena Resort",
    location: "Marrakech, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/high-angle-view-palm-trees-dome-building-by-swimming-pool_1048944-29536811.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.9,
    price: 599,
    description: "Serene luxury resort inspired by ancient Moorish architecture and rose-hued walls.",
    longDescription: "Amanjena, meaning 'peaceful paradise,' is a tranquil resort just outside Marrakech. Surrounded by olive groves and palm trees, the property showcases pink-hued walls, elegant courtyards, and serene reflecting pools. It offers a peaceful retreat with unmatched privacy, wellness offerings, and access to an exclusive golf course.",
    amenities: [
      "Expansive swimming pool",
      "Luxury spa with Moroccan hammam",
      "Championship golf course access",
      "Fine dining and terrace bar",
      "Bespoke wellness and yoga programs",
      "Private pavilions with gardens"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/high-angle-view-palm-trees-dome-building-by-swimming-pool_1048944-29536811.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    
      "https://img.freepik.com/premium-photo/ottoman-era-house-interior_1092067-3680.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/interior-old-building_1048944-26720034.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/double-bed-with-white-pillows_636537-199939.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
    ],
    rooms: [
      {
        id: "501",
        name: "Pavilion",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        price: 599,
        capacity: 2,
        description: "Spacious room with vaulted ceilings, garden access, and private courtyard."
      },
      {
        id: "502",
        name: "Maison Jardin",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        price: 899,
        capacity: 4,
        description: "Luxurious two-bedroom suite with garden and private pool."
      }
    ]
  },
  {
    id: "6",
    name: "Desert Luxury Camp",
    location: "Sahara Desert, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/bedouin-village_52137-44479.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 399,
    description: "Luxury glamping in the Sahara Desert with all modern amenities under the stars.",
    longDescription: "Set amidst the golden dunes of the Sahara, Desert Luxury Camp offers an unforgettable glamping experience. Guests sleep in stylish tents equipped with modern comforts while enjoying the quiet majesty of the desert. Activities include camel rides, sandboarding, and traditional Berber music under the stars.",
    amenities: [
      "Luxury canvas tents",
      "Desert stargazing",
      "Camel and 4x4 excursions",
      "Private dining under the stars",
      "Berber cultural performances",
      "Campfire lounge area"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/bedouin-village_52137-44479.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/illuminated-lamp-night_1048944-29579007.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/dressing-table-with-mirror-bedroom-middle-eastern-design-3d-rendering_295714-3210.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/serene-moroccan-lounge_1375194-14025.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
    ],
    rooms: [
      {
        id: "601",
        name: "Standard Tent",
        image: "https://img.freepik.com/premium-photo/serene-moroccan-lounge_1375194-14025.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 399,
        capacity: 2,
        description: "Comfortable tent with king-size bed and private bathroom."
      },
      {
        id: "602",
        name: "Royal Tent Suite",
        image: "https://img.freepik.com/premium-photo/dressing-table-with-mirror-bedroom-middle-eastern-design-3d-rendering_295714-3210.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 649,
        capacity: 4,
        description: "Spacious suite with lounge area, premium bedding, and panoramic desert views."
      }
    ]
  },
  {
    id: "7",
    name: "Dar Ahlam",
    location: "Ouarzazate, Morocco",
    mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 479,
    description: "A restored 19th-century kasbah offering bespoke experiences in southern Morocco.",
    longDescription: "Dar Ahlam, 'House of Dreams', is a luxurious retreat set in a 19th-century kasbah near the gateway to the Sahara. The property offers tailor-made desert excursions, gourmet cuisine, and lush gardens amid arid landscapes. With no set schedule, guests enjoy a uniquely curated experience of Moroccan hospitality, comfort, and heritage.",
    amenities: [
      "Private swimming pool",
      "Customized desert excursions",
      "Gourmet Moroccan and French fusion dining",
      "Lush palm gardens",
      "Traditional hammam and massage services",
      "Exclusive cultural and adventure experiences"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/interior-design-futuristic-amazing_1260728-8676.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/vintage-arabic-ceiling-night-chandelier_379858-11127.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/beautiful-interior-minimalist-view-photo_1036536-13238.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/low-angle-view-illuminated-lights-hanging-from-ceiling-building-corridor_1048944-6296485.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
    ],
    rooms: [
      {
        id: "701",
        name: "Garden Suite",
        image: "https://img.freepik.com/premium-photo/lobby-luxury-hotel-dubai_1073257-2293.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 479,
        capacity: 2,
        description: "Elegant suite with garden views, local crafts, and traditional decor."
      },
      {
        id: "702",
        name: "Desert Villa",
        image: "https://img.freepik.com/premium-photo/oriental-bedroom-arab-style-with-wooden-headboard-green-walls-tv-unit-dressing-table-armchair-with-coffee-table-3d-rendering_295714-3239.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 749,
        capacity: 4,
        description: "Private villa with a plunge pool, fireplace, and outdoor lounge area under the stars."
      }
    ]
  },  
  {
    id: "8",
    name: "Mandarin Oriental Marrakech",
    location: "Marrakech, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/beautiful-evening-hotel-arabic-egypt-sharm-elsheikh_121943-3562.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 589,
    description: "Contemporary luxury with private villas set among olive groves and stunning gardens.",
    longDescription: "Mandarin Oriental Marrakech is an opulent oasis nestled among ancient olive groves and fragrant gardens. The resort features spacious private villas with plunge pools, state-of-the-art wellness facilities, and world-class dining. Blending Moroccan charm with modern design, it offers a peaceful retreat just minutes from the bustling medina.",
    amenities: [
      "Private villas with pools",
      "World-class spa and hammam",
      "Championship golf nearby",
      "Gourmet dining restaurants",
      "Lush landscaped gardens",
      "Concierge and butler service"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/luxury-resort-pool-dusk-tranquil-oasis-with-palm-trees-architectural-design_1112176-11138.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/luxurious-moroccan-courtyard-night-with-reflective-pool_536604-18243.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/decorations-resort-hotel-uae_379858-21425.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    ],
    rooms: [
      {
        id: "801",
        name: "Atlas Villa",
        image: "https://img.freepik.com/premium-photo/hotel-pool-area-showcasing-elegant-design-with-sparkling-water-shaded-cabanas_1230681-14817.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 589,
        capacity: 2,
        description: "Luxurious one-bedroom villa with private garden, plunge pool, and open-air lounge."
      },
      {
        id: "802",
        name: "Infinity Pool Suite",
        image: "https://img.freepik.com/premium-photo/pool-with-row-palm-trees_1179130-183245.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 849,
        capacity: 4,
        description: "Spacious suite with private infinity pool, mountain views, and indoor-outdoor living spaces."
      }
    ]
  },
  {
    id: "9",
    name: "Riad Kniza",
    location: "Marrakech, Morocco",
    mainImage: "https://img.freepik.com/premium-photo/beautiful-white-modern-hotel-with-palm-trees-sunny-day_2221-7381.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.7,
    price: 289,
    description: "Elegant 18th-century riad in the heart of the Marrakech medina with authentic Moroccan decor.",
    longDescription: "Riad Kniza is a beautifully restored 18th-century mansion offering an authentic Moroccan experience in the heart of the Marrakech medina. Owned by one of the city's most renowned antique dealers, the riad features handcrafted décor, intimate courtyards, and personalized service. It's a peaceful retreat from the lively souks, perfect for culture lovers.",
    amenities: [
      "Rooftop terrace with city views",
      "Authentic Moroccan restaurant",
      "Traditional hammam and spa",
      "Shaded interior courtyard",
      "Complimentary Moroccan tea",
      "Airport transfer on request"
    ],
    gallery: [
      "https://img.freepik.com/premium-photo/place-relaxation-near-pool-with-sun-beds-palm-trees-egypt-sharm-el-sheikh_79087-86.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/coconut-palm-tree-blue-sky-background_661495-28639.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/egyptian-tropical-hotel_133748-3874.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
      "https://img.freepik.com/premium-photo/white-curtain-bed-home_1048944-12954019.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
    ],
    rooms: [
      {
        id: "901",
        name: "Deluxe Room",
        image: "https://img.freepik.com/premium-photo/luxurious-interior-very-expensive-rich-water-villa-maldives-decorated-with-natural-wood_267786-1939.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 289,
        capacity: 2,
        description: "Charming room with Moroccan detailing and views of the courtyard."
      },
      {
        id: "902",
        name: "Royal Suite",
        image: "https://img.freepik.com/premium-photo/luxurious-interior-very-expensive-rich-water-villa-maldives-decorated-with-natural-wood_267786-1949.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
        price: 429,
        capacity: 3,
        description: "Spacious suite with antique furnishings, lounge area, and private balcony."
      }
    ]
  }
  
  
];
 
const HotelDetails = () => {
  const { id } = useParams<{id: string}>();
  const hotel = hotels.find(h => h.id === id);
  
  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-navy mb-4">Hotel Not Found</h1>
            <p className="text-gray-600 mb-6">The hotel you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/hotels">Browse All Hotels</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full">
          <img 
            src={hotel.mainImage} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between text-white">
                <div>
                  <div className="flex items-center mb-2">
                    <Badge className="bg-gold text-navy mr-2">Luxury</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{hotel.name}</h1>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-lg mb-1">Starting from</p>
                  <p className="text-3xl font-bold">${hotel.price} <span className="text-sm font-normal">/ night</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hotel Details */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-navy">About {hotel.name}</h2>
                  <p className="text-gray-700 mb-6">{hotel.longDescription}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Coffee className="h-8 w-8 text-gold mb-2" />
                      <span className="text-sm text-center">Breakfast Included</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Wifi className="h-8 w-8 text-gold mb-2" />
                      <span className="text-sm text-center">Free Wi-Fi</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Bath className="h-8 w-8 text-gold mb-2" />
                      <span className="text-sm text-center">Private Pools</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Utensils className="h-8 w-8 text-gold mb-2" />
                      <span className="text-sm text-center">Fine Dining</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-navy">Quick Facts</h3>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Check-in</TableCell>
                          <TableCell>3:00 PM</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Check-out</TableCell>
                          <TableCell>12:00 PM</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pets</TableCell>
                          <TableCell>Not allowed</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Cancellation</TableCell>
                          <TableCell>Free up to 7 days before arrival</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <Separator className="my-6" />
                    
                    <Button className="w-full bg-navy hover:bg-navy-light">Book Now</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rooms">
              <h2 className="text-2xl font-bold mb-6 text-navy">Available Rooms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotel.rooms.map((room) => (
                  <div key={room.id} className="border rounded-lg overflow-hidden hotel-card">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy mb-2">{room.name}</h3>
                      <p className="text-gray-600 mb-4">{room.description}</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-gray-500">Price per night</p>
                          <p className="text-xl font-bold text-navy">${room.price}</p>
                        </div>
                        <Button asChild>
                          <Link to={`/rooms/${room.id}`}>Select</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="amenities">
              <h2 className="text-2xl font-bold mb-6 text-navy">Hotel Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center py-2 border-b border-gray-100">
                    <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <h2 className="text-2xl font-bold mb-6 text-navy">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotel.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${hotel.name} - Image ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelDetails;
