"use client";

import {useEffect, useState} from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import {createPayment} from "@/lib/pi-network/payment";
import {getAccessToken} from "@/lib/auth/access-token";

export default function ProductsPage() {
  const [favorites, setFavorites] = useState({});
  const [user, setUser] = useState(null);

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
    return `π ${price.toFixed(2)}`;
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

  const handleBuyNow = (product) => {
    void createPayment(`1x ${product.name}`, product.price, product);
  }

  const authenticateUser = async () => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      });

      if (!response.ok) return alert("Failed to authenticate!");

      return await response.json();
    } catch (error) {
      return alert(`Authentication error: ${error}`);
    }
  };

  useEffect(() => {
    let interval;
    let timeout;

    const waitForPi = () => {
      if (typeof window !== "undefined" && window.Pi) {
        clearInterval(interval);
        clearTimeout(timeout);

        authenticateUser().then((authenticatedUser) => {
          if (authenticatedUser) {
            setUser(authenticatedUser);
            sessionStorage.setItem("access_token", authenticatedUser.accessToken);
            alert("Signed in.")
          } else {
            alert.error("Failed to sign in.");
          }
        });
      }
    };

    interval = setInterval(waitForPi, 200);
    timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
      <main className="relative container mx-auto px-4 py-8">
        {user?.username && <span className="absolute top-0 right-2 p-1 text-sm font-medium">@{user.username}</span>}
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
      <p className="text-gray-600">Discover our selection of premium tech products</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
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
              <Button onClick={() => handleBuyNow(product)} disabled={!user} size="sm" className="cursor-pointer bg-blue-600 hover:bg-blue-700">
                <ShoppingCart size={16} className="mr-2" />
                Buy Now
              </Button>
            </CardFooter>
          </Card>
      ))}
    </div>
  </main>

  );
}
