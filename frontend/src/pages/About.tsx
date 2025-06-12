
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MorocStay</h1>
              <p className="text-lg text-white/80">
                Your luxury gateway to authentic Moroccan hospitality
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-navy">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, MorocStay began with a passion for sharing the rich cultural heritage and 
                  hospitality of Morocco with travelers seeking authentic experiences in comfort and luxury.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of local experts has personally visited and vetted each property in our collection, 
                  ensuring that every stay offers the perfect blend of authentic Moroccan charm and modern luxury.
                </p>
                <p className="text-gray-600 mb-6">
                  From traditional riads in the ancient medinas to luxury desert camps under the stars, 
                  we curate experiences that connect travelers with the soul of Morocco.
                </p>
                <Button className="bg-navy hover:bg-navy-light" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://img.freepik.com/premium-photo/staircase_692498-2083.jpg?ga=GA1.1.1750431640.1746809956&semt=ais_hybrid&w=740" 
                  alt="Moroccan Riad" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            
            <Separator className="my-16" />
            
            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 text-navy text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Authentic Experiences</h3>
                  <p className="text-gray-600">
                    We believe in providing genuine Moroccan hospitality that honors traditions while offering modern comfort.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Cultural Respect</h3>
                  <p className="text-gray-600">
                    We promote responsible tourism that respects local cultures and contributes positively to communities.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-navy">Exceptional Service</h3>
                  <p className="text-gray-600">
                    We are committed to providing attentive service and personalized experiences for every guest.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team */}
            <div>
              <h2 className="text-3xl font-bold mb-10 text-navy text-center">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {name: "Yasmine Benali", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"},
                  {name: "Karim Idrissi", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"},
                  {name: "Laila Mansouri", role: "Customer Experience", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"},
                  {name: "Hassan Tazi", role: "Property Relations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"},
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 relative overflow-hidden rounded-full aspect-square w-48 h-48 mx-auto">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-navy">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
