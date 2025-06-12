
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Updated featured hotels data with Moroccan theme
const featuredHotels = [
  {
    id: 1,
    name: "Royal Mansour Marrakech",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/beautiful-evening-hotel-arabic-egypt-sharm-el-sheikh_121943-1393.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.9,
    price: 599,
    discount: true,
    discountPercent: 15,
  },
  {
    id: 2,
    name: "La Mamounia Palace",
    location: "Marrakech, Morocco",
    image: "https://img.freepik.com/premium-photo/experiencing-luxury-travel-destinations_810293-157855.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.8,
    price: 499,
    discount: false,
    discountPercent: 0,
  },
  {
    id: 3,
    name: "Kasbah Tamadot",
    location: "Atlas Mountains, Morocco",
    image: "https://img.freepik.com/premium-photo/luxury-place-resort_119101-243.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    rating: 4.7,
    price: 449,
    discount: true,
    discountPercent: 10,
  },
];

const FeaturedHotels: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-navy">Luxury Moroccan Retreats</h2>
          <p className="text-gray-600">
            Experience the magic of Morocco with our handpicked selection of premium riads and luxury hotels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel, index) => (
            <Card key={hotel.id} className="hotel-card border-0 shadow-md overflow-hidden animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative h-64">
                {hotel.discount && (
                  <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                    {hotel.discountPercent}% OFF
                  </Badge>
                )}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover"
                />
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
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-navy">
                        ${hotel.price}
                        <span className="text-sm font-normal text-gray-500"> / night</span>
                      </p>
                    </div>
                    <Button className="bg-navy hover:bg-navy-light" asChild>
                      <Link to={`/hotels/${hotel.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-transparent text-navy border border-navy hover:bg-navy hover:text-white transition-colors" asChild>
            <Link to="/hotels">Explore All Moroccan Hotels</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
