
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Star, 
  Search, 
  Heart,
  Filter,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

// Currency conversion (1 USD ≈ 10 MAD)
const usdToMad = (amount: number) => amount * 10;

// Expanded hotels data
const hotels = [
  {
    id: 1,
    name: "Royal Mansour Marrakech",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/beautiful-evening-hotel-arabic-egypt-sharm-el-sheikh_121943-1393.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.9,
    price: 599,
    category: "luxury",
    amenities: ["Pool", "Spa", "Restaurant", "WiFi"],
    description: "An oasis of luxury in the heart of Marrakech with private riads and world-class service."
  },
  {
    id: 2,
    name: "La Mamounia Palace",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/experiencing-luxury-travel-destinations_810293-157855.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 499,
    category: "luxury",
    amenities: ["Pool", "Spa", "Restaurant", "Bar"],
    description: "Historic luxury hotel with beautiful gardens and iconic Moroccan architecture."
  },
  {
    id: 3,
    name: "Kasbah Tamadot",
    location: "Atlas Mountains, Morocco",
    image: "https://img.freepik.com/premium-photo/luxury-place-resort_119101-243.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.7,
    price: 449,
    category: "mountain",
    amenities: ["Pool", "Spa", "Views", "Restaurant"],
    description: "Sir Richard Branson's Moroccan retreat offering stunning mountain views and authentic luxury."
  },
  {
    id: 4,
    name: "Riad Fes",
    location: "Fes, Morocco",
    image: "https://img.freepik.com/premium-photo/illuminated-restaurant-by-building-against-sky-night_1048944-30281377.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.6,
    price: 329,
    category: "riad",
    amenities: ["Courtyard", "Restaurant", "WiFi", "Terrace"],
    description: "Traditional riad in the heart of the Fes medina with ornate Andalusian architecture."
  },
  {
    id: 5,
    name: "Amanjena Resort",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/high-angle-view-palm-trees-dome-building-by-swimming-pool_1048944-29536811.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.9,
    price: 599,
    category: "luxury",
    amenities: ["Pool", "Spa", "Golf", "Restaurant"],
    description: "Serene luxury resort inspired by ancient Moorish architecture and rose-hued walls."
  },
  {
    id: 6,
    name: "Desert Luxury Camp",
    location: "Sahara Desert, Morocco",
    image: "https://img.freepik.com/premium-photo/bedouin-village_52137-44479.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 399,
    category: "desert",
    amenities: ["Stargazing", "Camel Rides", "Dining", "Cultural Activities"],
    description: "Luxury glamping in the Sahara Desert with all modern amenities under the stars."
  },
  {
    id: 7,
    name: "Dar Ahlam",
    location: "Ouarzazate, Morocco",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 479,
    category: "kasbah",
    amenities: ["Pool", "Desert Excursions", "Gourmet Dining", "Gardens"],
    description: "A restored 19th-century kasbah offering bespoke experiences in southern Morocco."
  },
  {
    id: 8,
    name: "Mandarin Oriental Marrakech",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/beautiful-evening-hotel-arabic-egypt-sharm-elsheikh_121943-3562.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 589,
    category: "luxury",
    amenities: ["Pool", "Spa", "Golf", "Fine Dining"],
    description: "Contemporary luxury with private villas set among olive groves and stunning gardens."
  },
  {
    id: 9,
    name: "Riad Kniza",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/beautiful-white-modern-hotel-with-palm-trees-sunny-day_2221-7381.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.7,
    price: 289,
    category: "riad",
    amenities: ["Rooftop Terrace", "Restaurant", "Hammam", "Courtyard"],
    description: "Elegant 18th-century riad in the heart of the Marrakech medina with authentic Moroccan decor."
  },  
];

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const location = useLocation();
  
  const { toast } = useToast();
  
  // Parse URL search parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    // Get the location parameter
    const locationParam = params.get('location');
    if (locationParam) {
      setSearchQuery(locationParam);
    }
    
    // Handle other parameters if needed (can be expanded)
    // For now, we'll just use location for filtering
  }, [location.search]);

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = 
      !searchQuery || 
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'all' || hotel.category === selectedCategory;
    
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleFavoriteToggle = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      toast({
        title: "Removed from favorites",
        description: "Hotel removed from your favorites list"
      });
    } else {
      setFavorites([...favorites, id]);
      toast({
        title: "Added to favorites",
        description: "Hotel added to your favorites list"
      });
    }
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'riad', name: 'Riads' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'desert', name: 'Desert' },
    { id: 'kasbah', name: 'Kasbah' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-navy to-navy-light">
          <div className="absolute inset-0 opacity-10">
            <div className="moroccan-pattern absolute inset-0"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Discover Morocco's Finest Hotels</h1>
              <p className="text-lg text-white/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Explore our handpicked collection of Morocco's most beautiful accommodations
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search for hotels..." 
                  className="pl-9 border-gold/30 focus-visible:ring-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filter Toggle Button (Mobile) */}
              <Button 
                onClick={toggleFilters} 
                variant="outline" 
                className="md:hidden w-full flex items-center justify-center border-gold/30 text-navy"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
                {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
              </Button>
              
              {/* Categories (Desktop) */}
              <div className="hidden md:flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <Badge 
                    key={category.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id 
                        ? 'bg-gold hover:bg-gold/90 text-navy' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm md:hidden animate-fade-in">
                <div className="mb-4">
                  <h3 className="font-medium mb-2 text-navy">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Badge 
                        key={category.id}
                        className={`cursor-pointer ${
                          selectedCategory === category.id 
                            ? 'bg-gold hover:bg-gold/90 text-navy' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 text-navy">Price Range (USD)</h3>
                  <div className="flex items-center justify-between">
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-24 border-gold/30"
                    />
                    <span className="mx-2">to</span>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 0])}
                      className="w-24 border-gold/30"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Hotels List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-navy">
                  {filteredHotels.length} {filteredHotels.length === 1 ? 'Property' : 'Properties'} Found
                </h2>
              </div>
            </div>
          
            {filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHotels.map((hotel, index) => (
                  <Card key={hotel.id} className="hotel-card border-0 shadow-md overflow-hidden animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="relative h-64">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleFavoriteToggle(hotel.id);
                        }}
                        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300"
                      >
                        <Heart
                          className={`h-5 w-5 transition-colors ${
                            favorites.includes(hotel.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                          }`}
                        />
                      </button>
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-navy">{hotel.name}</h3>
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                          <span className="text-sm font-medium">{hotel.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 3).map((amenity, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                            {amenity}
                          </Badge>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                            +{hotel.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.description}</p>
                      <div className="border-t border-gray-100 pt-4 mt-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-xl font-bold text-navy">
                              {usdToMad(hotel.price).toLocaleString()} MAD
                              <span className="text-sm font-normal text-gray-500"> / night</span>
                            </p>
                          </div>
                          <Button className="bg-gradient-gold text-navy hover:opacity-90 transition-all" asChild>
                            <Link to={`/hotels/${hotel.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in">
                <X className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">No hotels found</h3>
                <p className="text-gray-500 mb-6">Try changing your search or filters</p>
                <Button 
                  className="bg-gradient-gold text-navy hover:opacity-90 transition-all"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hotels;
