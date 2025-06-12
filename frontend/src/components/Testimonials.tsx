
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Travel Blogger",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2080&auto=format&fit=crop",
    rating: 5,
    text: "The service at LuxStay exceeded all my expectations. From the moment I checked in to the time I left, every detail was impeccable. I'll definitely be coming back for my next vacation!",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2080&auto=format&fit=crop",
    rating: 5,
    text: "As someone who travels frequently for work, I appreciate efficiency and comfort. This hotel delivered on both fronts. The amenities are top-notch and the staff is incredibly helpful.",
  },
  {
    id: 3,
    name: "Sophie Martinez",
    role: "Family Vacationer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
    rating: 4,
    text: "We had a fantastic family stay at the Mountain View Lodge. The rooms were spacious and the kids loved the activities. The views from our room were absolutely breathtaking!",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Luxury Traveler",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2080&auto=format&fit=crop",
    rating: 5,
    text: "The attention to detail is what sets this hotel apart. From the personalized welcome to the exceptional dining experiences, every moment felt curated and special.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover why travelers from around the world choose our luxury accommodations for their stays
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <Card className="bg-navy-light border-gold/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-gold" : "text-gray-400"
                          }`}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-gold/50">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="font-medium text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/70">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-white text-navy hover:bg-gold hover:text-navy" />
          <CarouselNext className="right-0 translate-x-1/2 bg-white text-navy hover:bg-gold hover:text-navy" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
