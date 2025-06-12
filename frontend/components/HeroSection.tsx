
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Search, Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [destination, setDestination] = useState<string>("");
  const [guests, setGuests] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    // Add search parameters if they exist
    if (destination) params.append('location', destination);
    if (guests) params.append('guests', guests);
    if (checkIn) params.append('checkIn', checkIn.toISOString());
    if (checkOut) params.append('checkOut', checkOut.toISOString());
    
    // Navigate to hotels page with search params
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <img
          src="https://img.freepik.com/premium-photo/sunset-ancient-city-ait-benhaddou-morocco_165988-1453.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740"
          alt="Moroccan luxury hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 animate-fade-in-slow">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Exience Authentic Moroccan Luxury</h1>
          <p className="text-lg text-white/90 mb-8">
            tzqt the enchanting world of Moroccan hospitality with our curated selection of riads, palaces, and luxury desert camps
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location */}
            <div className="w-full md:w-1/4">
              <label className="text-sm font-medium mb-1 block text-gray-600">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Select onValueChange={(value) => setDestination(value)}>
                  <SelectTrigger className="pl-9">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marrakech">Marrakech</SelectItem>
                    <SelectItem value="fes">Fes</SelectItem>
                    <SelectItem value="Ouarzazate">Ouarzazate</SelectItem>
                    <SelectItem value="Sahara Desert">Sahara Desert</SelectItem>
                    <SelectItem value="Agafay Desert">Agafay Desert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Check In */}
            <div className="w-full md:w-1/5">
              <label className="text-sm font-medium mb-1 block text-gray-600">Check In</label>
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
            
            {/* Check Out */}
            <div className="w-full md:w-1/5">
              <label className="text-sm font-medium mb-1 block text-gray-600">Check Out</label>
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
            
            {/* Guests */}
            <div className="w-full md:w-1/6">
              <label className="text-sm font-medium mb-1 block text-gray-600">Guests</label>
              <Select onValueChange={(value) => setGuests(value)}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Guests" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Search Button */}
            <div className="w-full md:w-1/6 flex items-end">
              <Button className="w-full h-10 bg-gradient-gold text-navy hover:bg-gold" onClick={handleSearch}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
