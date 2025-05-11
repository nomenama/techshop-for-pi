import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Users, Award, Globe, Clock, Heart } from 'lucide-react';

export default function AboutUsPage() {
	const team = [
		{
			name: "Sarah Johnson",
			role: "CEO & Founder",
			image: "/api/placeholder/300/300",
			bio: "Tech enthusiast with 15+ years in consumer electronics"
		},
		{
			name: "David Chen",
			role: "CTO",
			image: "/api/placeholder/300/300",
			bio: "Former lead engineer at major tech companies"
		},
		{
			name: "Michelle Rodriguez",
			role: "Head of Customer Experience",
			image: "/api/placeholder/300/300",
			bio: "Passionate about creating exceptional customer journeys"
		},
		{
			name: "James Wilson",
			role: "Product Manager",
			image: "/api/placeholder/300/300",
			bio: "Expert in bringing innovative tech products to market"
		}
	];

	const values = [
		{
			title: "Quality",
			description: "We source only the best products that meet our rigorous standards for performance and durability.",
			icon: <Award className="h-12 w-12 text-blue-600" />
		},
		{
			title: "Innovation",
			description: "Staying at the forefront of technology to bring you the latest and greatest products.",
			icon: <Globe className="h-12 w-12 text-blue-600" />
		},
		{
			title: "Reliability",
			description: "Fast shipping, secure payments, and responsive customer service you can count on.",
			icon: <Clock className="h-12 w-12 text-blue-600" />
		},
		{
			title: "Customer First",
			description: "Your satisfaction is our top priority, from browsing to unboxing and beyond.",
			icon: <Heart className="h-12 w-12 text-blue-600" />
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
			<header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-gray-800">TechStore</h1>
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
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About TechStore</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Your trusted destination for premium tech products since 2015.
					</p>
				</div>

				{/* Our Story */}
				<div className="mb-16">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="w-full md:w-1/2">
							<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
							<p className="text-gray-600 mb-4">
								TechStore was founded in 2015 with a simple mission: to make quality tech products accessible to everyone.
								What started as a small online shop has grown into a trusted retailer serving customers worldwide.
							</p>
							<p className="text-gray-600 mb-4">
								Our journey began when our founder, Sarah Johnson, noticed a gap in the market for a tech retailer that combined
								premium products with exceptional customer service and competitive pricing.
							</p>
							<p className="text-gray-600">
								Today, we continue to uphold these founding principles while expanding our product range and enhancing
								our customer experience. We're proud to be your go-to destination for all things tech.
							</p>
						</div>
						<div className="w-full md:w-1/2">
							<img src="/api/placeholder/600/400" alt="TechStore Office" className="rounded-lg shadow-md w-full h-auto" />
						</div>
					</div>
				</div>

				{/* Our Values */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
								<CardContent className="pt-6">
									<div className="flex justify-center mb-4">
										{value.icon}
									</div>
									<h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
									<p className="text-gray-600">{value.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Meet The Team */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{team.map((member, index) => (
							<Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
								<CardContent className="p-4">
									<h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
									<p className="text-blue-600 font-medium mb-2">{member.role}</p>
									<p className="text-gray-600 text-sm">{member.bio}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Stats */}
				<div className="bg-blue-600 rounded-lg shadow-md p-8 text-white">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold mb-2">10,000+</div>
							<div className="text-lg">Happy Customers</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">500+</div>
							<div className="text-lg">Products</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">15+</div>
							<div className="text-lg">Expert Team Members</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">99%</div>
							<div className="text-lg">Customer Satisfaction</div>
						</div>
					</div>
				</div>
			</main>

			<footer className="bg-gray-800 text-white py-8 mt-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">TechStore</h3>
							<p className="text-gray-300 text-sm">
								Your one-stop shop for premium tech products with competitive pricing and exceptional customer service.
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
