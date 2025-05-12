"use client"

import {Button} from "@/components/ui/button";
import {ShoppingCart} from "lucide-react";
import Link from "next/link";
import {useUser} from "@/app/context/use-user";

export default function Header() {
	const {user} = useUser();

 return (
	 <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
		 <div className="container mx-auto px-4 py-4 flex justify-between items-center">
			 <h1 className="text-2xl font-bold text-gray-800"><Link href="/">TechStore</Link></h1>
			 <div className="flex items-center space-x-4">
				 <Button variant="ghost" size="sm" className="hidden md:flex">
					 Products
				 </Button>
				 <Button variant="ghost" size="sm" className="hidden md:flex">
					 About
				 </Button>
				 <Button variant="ghost" size="sm" className="hidden md:flex">
					 Contact
				 </Button>
				 {user?.username ? <span className="p-1 text-sm font-medium">@{user.username}</span> : (
					 <Button variant="ghost" size="sm" className="relative">
						 <ShoppingCart size={20} />
						 <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
					 </Button>
				 )}

			 </div>
		 </div>
	 </header>
 );}
