import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text, lat, lng }: { text: string; lat: number; lng: number }) => (
  <div className="text-navy font-bold">
    <MapPin className="h-6 w-6" />
    {text}
  </div>
);

const defaultProps = {
  center: {
    lat: 31.6295,  // Marrakech coordinates
    lng: -7.9811
  },
  zoom: 11
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-white/80">
                Have questions about our accommodations or need help planning your Moroccan getaway?
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-navy">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="bg-navy hover:bg-navy-light w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-navy">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is available to answer your questions and provide assistance with your travel plans. 
                    Feel free to reach out through any of the channels below.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Our Office</h3>
                        <p className="text-gray-600">17 Avenue Mohammed VI, Marrakech, Morocco</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Phone</h3>
                        <p className="text-gray-600">+212 524 123 456</p>
                        <p className="text-gray-600">Available daily: 9am - 8pm (GMT+1)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Email</h3>
                        <p className="text-gray-600">info@morocstay.com</p>
                        <p className="text-gray-600">bookings@morocstay.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-12 lg:mt-0">
                  <h3 className="font-semibold text-navy mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                      <Button key={social} variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                        {social}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section (placeholder) */}
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapMarker
            lat={31.6295}
            lng={-7.9811}
            text="Our Location"
          />
        </GoogleMapReact>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gray-300 h-96 w-full rounded-lg flex items-center justify-center">
              
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
