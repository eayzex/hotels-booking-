
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin, Calendar as CalendarIcon, Check } from "lucide-react";
import { useParams, Link } from 'react-router-dom';
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Mock rooms data - in a real app, this would come from an API
const rooms = [
  {
    id: "101",
    hotelId: "1",
    name: "Superior Riad",
    hotelName: "Royal Mansour Marrakech",
    location: "Marrakech, Morocco",
    mainImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    price: 599,
    capacity: 2,
    size: "140 m²",
    description: "The Superior Riad offers an intimate and luxurious Moroccan experience. This one-bedroom riad features a private courtyard with a plunge pool, a rooftop terrace with views of the medina, and elegant Moroccan decor throughout.",
    amenities: [
      "Private courtyard with plunge pool",
      "Rooftop terrace",
      "Butler service",
      "King-size bed",
      "Marble bathroom with rain shower",
      "Separate living area",
      "Traditional Moroccan decor",
      "Air conditioning",
      "Mini bar",
      "Wi-Fi"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590502592911-eb6463d5125f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560564029-6eb181a872c4?q=80&w=2080&auto=format&fit=crop"
    ]
  }
];

const RoomDetails = () => {
  const { id } = useParams<{id: string}>();
  const room = rooms.find(r => r.id === id);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  
  const handleBook = () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    
    toast.success("Booking successful!", {
      description: `Your stay at ${room?.name} has been confirmed.`,
    });
  };
  
  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-navy mb-4">Room Not Found</h1>
            <p className="text-gray-600 mb-6">The room you're looking for doesn't exist or has been removed.</p>
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
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <img 
            src={room.mainImage} 
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="container mx-auto">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{room.name}</h1>
                <div className="flex items-center space-x-2">
                  <Link to={`/hotels/${room.hotelId}`} className="text-lg underline hover:text-gold">
                    {room.hotelName}
                  </Link>
                  <span>•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{room.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Room Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-navy">About this Room</h2>
                <p className="text-gray-700">{room.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-navy">Room Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Room Size</p>
                    <p className="text-navy font-medium">{room.size}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Capacity</p>
                    <p className="text-navy font-medium">Up to {room.capacity} guests</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Bed Type</p>
                    <p className="text-navy font-medium">King Size</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-navy">Room Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center py-2">
                      <Check className="h-4 w-4 text-gold mr-2" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-navy">Photo Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {room.gallery.map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${room.name} - Image ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-navy">Book this Room</h3>
                <p className="text-3xl font-bold text-navy mb-4">${room.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                
                <Separator className="my-4" />
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Check In</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd, yyyy") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Check Out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd, yyyy") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Guests</label>
                    <div className="flex border border-gray-200 rounded-md">
                      <button 
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100" 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                      >
                        -
                      </button>
                      <div className="flex-1 text-center py-2">{guests}</div>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100" 
                        onClick={() => setGuests(Math.min(room.capacity, guests + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">${room.price} x 1 night</span>
                    <span className="text-gray-600">${room.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & fees</span>
                    <span className="text-gray-600">${Math.round(room.price * 0.12)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${Math.round(room.price * 1.12)}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-gold text-navy hover:bg-gold" onClick={handleBook}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomDetails;
