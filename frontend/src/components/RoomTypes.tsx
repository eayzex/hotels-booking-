
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

// Room types data with Moroccan theme
const roomTypes = [
  {
    id: 1,
    name: "Moroccan Palace Suite",
    description: "Opulent suite with traditional Moroccan decor and private terrace",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    price: 299,
    capacity: 2,
    size: "48 m²",
    amenities: ["Free Wi-Fi", "Private Terrace", "Hammam Access", "Air Conditioning"],
  },
  {
    id: 2,
    name: "Riad Courtyard Room",
    description: "Authentic room overlooking a serene courtyard with fountain",
    image: "https://img.freepik.com/premium-photo/beautiful-interior-oriental-style_593276-368.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    price: 249,
    capacity: 2,
    size: "35 m²",
    amenities: ["Free Wi-Fi", "Courtyard View", "Breakfast", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Atlas Mountain View Suite",
    description: "Stunning panoramic views of the Atlas Mountains with luxury amenities",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    price: 349,
    capacity: 3,
    size: "55 m²",
    amenities: ["Free Wi-Fi", "Mountain View", "Room Service", "Private Pool"],
  },
  {
    id: 4,
    name: "Desert Luxury Tent",
    description: "Experience glamping in the Sahara with all modern comforts",
    image: "https://img.freepik.com/premium-photo/beautiful-interior-oriental-style_593276-368.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740",
    price: 399,
    capacity: 4,
    size: "60 m²",
    amenities: ["Free Wi-Fi", "Desert View", "Private Dining", "Stargazing Deck"],
  },
];

const RoomTypes: React.FC = () => {
  return (
    <section className="py-16" id="rooms">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-navy text-center">Authentic Moroccan Accommodation</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            From traditional riads to luxury desert camps, experience the unique charm of Moroccan hospitality
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {roomTypes.map((room) => (
                <CarouselItem key={room.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="hotel-card border-0 shadow-md overflow-hidden h-full">
                    <div className="relative h-64">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-navy">
                          <Users className="h-3 w-3 mr-1" /> Up to {room.capacity}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-navy mb-2">{room.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-sm text-gray-500">Price per night</p>
                          <p className="text-xl font-bold text-navy">${room.price}</p>
                        </div>
                        <Button className="bg-gradient-gold text-navy hover:bg-gold-light" asChild>
                          <Link to={`/rooms/${room.id}`}>Book Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RoomTypes;
