import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
 return (
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
						 <li><Link href="/about" prefetch={false}>About Us</Link></li>
						 <li><Link href="/privacy" prefetch={false}>Privacy Policy</Link></li>
						 <li><Link href="/terms" prefetch={false}>Terms and Conditions</Link></li>
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
 );}
