
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!", {
      description: "You'll receive our latest deals and offers directly to your inbox.",
    });
  };

  return (
    <section className="py-16 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Get Exclusive Offers</h2>
          <p className="text-navy-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about special deals, new property listings, and travel inspiration
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/80 text-navy"
              required
            />
            <Button type="submit" className="bg-navy text-white hover:bg-navy-light">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-navy-light/80 mt-4">
            By subscribing you agree to receive our promotional emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
