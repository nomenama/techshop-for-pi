"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";

export default function ProductsPage() {
  const [favorites, setFavorites] = useState({});

  const products = [
    {
      id: 1,
      name: "Retro Console",
      description: "Classic gaming system with modern features and pre-loaded games",
      price: 150,
      rating: 4.9,
      image: "/images/retro-console.jpg",
      badge: "Premium",
    },
    {
      id: 2,
      name: "New Console",
      description: "Portable gaming console with high-resolution display and long battery life",
      price: 100,
      rating: 4.7,
      image: "/images/new-console.jpg",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Premium Headphones",
      description: "Noise-cancelling wireless headphones with superior sound quality",
      price: 50,
      rating: 4.5,
      image: "/images/new-headset.jpg",
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "New Controller",
      description: "Wireless bluetooth controller compatible with PS5 Pro and PC",
      price: 30,
      rating: 4.6,
      image: "/images/new-controller.jpg",
    },
    {
      id: 5,
      name: "Phone Case",
      description: "Durable protection with sleek design for your smartphone",
      price: 20,
      rating: 4.3,
      image: "/images/phone-case-1.png",
    },
    {
      id: 6,
      name: "USB Cable",
      description: "Durable braided USB-C charging cable with fast data transfer",
      price: 10,
      rating: 4.4,
      image: "/images/usb.jpg",
      badge: "New",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const renderStars = (rating) => {
    return (
        <div className="flex items-center">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    className={`${
                        i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    } ${i + 1 > rating && i < rating ? "text-yellow-400 fill-yellow-400" : ""}`}
                />
            ))}
          </div>
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
    );
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">TechStore for Pi</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Categories
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Deals
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                0
                            </span>
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our selection of premium tech products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.reverse().map((product) => (
                <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                        onClick={() => toggleFavorite(product.id)}>
                      <Heart
                          size={20}
                          className={
                            favorites[product.id] ? "fill-red-500 text-red-500" : "text-gray-600"
                          }
                      />
                    </Button>
                    {product.badge && (
                        <Badge
                            className="absolute top-2 left-2"
                            variant={product.badge === "Premium" ? "default" : "secondary"}>
                          {product.badge}
                        </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <CardDescription className="text-sm">
                        {product.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-2">{renderStars(product.rating)}</CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <div className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart size={16} className="mr-2" />
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">TechStore</h3>
                <p className="text-gray-300 text-sm">
                  Your one-stop shop for premium tech products with competitive pricing and exceptional
                  customer service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Shipping Policy</li>
                  <li>Return Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Subscribe to receive updates on new products and special promotions.
                </p>
                <div className="flex mt-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400 text-center">
              © 2025 TechStore. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  );
}
