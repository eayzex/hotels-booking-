
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Search, Calendar, MapPin, User, Hotel, LogOut, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { toast } = useToast();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleBookNow = () => {
    toast({
      title: "Booking process started",
      description: "Please select your desired property to proceed."
    });
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-1">
          <Hotel className={`h-6 w-6 ${isScrolled ? 'text-gold' : 'text-white'}`} />
          <span className={`text-xl font-semibold ${isScrolled ? 'text-navy' : 'text-white'}`}>MorocStay</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/hotels" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Destinations
          </Link>
          <a href="#rooms" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Rooms
          </a>
          <Link to="/about" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            About
          </Link>
          <Link to="/contact" className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className={`hidden md:flex ${isScrolled ? 'text-navy' : 'text-white'}`}>
            <Search className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={`rounded-full ${isScrolled ? 'text-navy' : 'text-white'}`}>
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex flex-col space-y-1 p-2">
                <p className="text-sm font-medium leading-none">
                  {user?.name || "Guest User"}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email || "guest@example.com"}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" /> My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Calendar className="mr-2 h-4 w-4" /> My Bookings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Heart className="mr-2 h-4 w-4" /> Wishlist
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            className={`hidden md:flex ${isScrolled ? 'bg-navy hover:bg-navy-light' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20'}`}
            onClick={handleBookNow}
          >
            Book Now
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-lg font-medium">Home</Link>
                <Link to="/hotels" className="text-lg font-medium">Destinations</Link>
                <a href="/rooms" className="text-lg font-medium">Rooms</a>
                <Link to="/about" className="text-lg font-medium">About</Link>
                <Link to="/contact" className="text-lg font-medium">Contact</Link>
                <Button className="mt-4 w-full" onClick={handleBookNow}>Book Now</Button>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Sign Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
