import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Clock, Heart } from 'lucide-react';

export default function AboutUsPage() {
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
		<main className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About TechStore</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Your trusted destination for premium tech products since 2025.
				</p>
			</div>

			{/* Our Story */}
			<div className="mb-16">
				<h2 className="text-center text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
				<p className="text-gray-600 mb-4">
					TechStore was founded in 2025 with a simple mission: to make quality tech products accessible to everyone.
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
	);
}
