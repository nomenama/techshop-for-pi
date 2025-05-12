import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
 const privacySections = [
  {
   title: "Information Collection",
   content: "We collect personal and technical information when you interact with our website, including name," +
       " email, address and payment details."
  },
  {
   title: "Information Usage",
   content: "We use your information to process orders, provide customer support, improve our services, and communicate with you about products and promotions."
  },
  {
   title: "Data Protection",
   content: "We implement robust security measures, including encrypted payment processing and secure server infrastructure, to protect your personal information."
  },
  {
   title: "Your Rights",
   content: "You have the right to access, correct, delete your personal information, and opt-out of marketing communications."
  }
 ]

 return (
     <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
        <Shield className="h-12 w-12 text-blue-600" />
        Privacy Policy
       </h1>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Your privacy and data protection are our top priorities at TechStore
       </p>
      </div>

      <Card className="w-full max-w-4xl mx-auto">
       <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Key Privacy Principles</CardTitle>
       </CardHeader>
       <CardContent>
        <Accordion type="single" collapsible className="w-full">
         {privacySections.map((section, index) => (
             <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-700">
               {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
               {section.content}
              </AccordionContent>
             </AccordionItem>
         ))}
        </Accordion>
       </CardContent>
      </Card>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
       <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
       <div className="text-gray-600">
        <p className="mb-2">
         <strong>Email:</strong> privacy@techstore.com
        </p>
        <p className="mb-2">
         <strong>Phone:</strong> +234 09461 4000
        </p>
        <p>
         <strong>Address:</strong> 3 Club Arcade Annex, Tafawa Balewa Square Complex, Marina, Lagos Island, Lagos
        </p>
       </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
       <p>Last Updated: Jan 2025</p>
      </div>
     </main>
 )
}
