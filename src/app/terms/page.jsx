import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen } from "lucide-react"

export default function TermsAndConditionsPage() {
 const termsSections = [
  {
   title: "Website Usage",
   content: "You must be 18+ to use our services. You agree to provide accurate information and maintain account confidentiality. Prohibited activities include illegal use, system interference, or unauthorized access."
  },
  {
   title: "Product and Pricing",
   content: "We strive to display accurate product descriptions and pricing. Prices are subject to change. We reserve the right to modify product details and availability without prior notice."
  },
  {
   title: "Orders and Shipping",
   content: "Placing an order constitutes a purchase offer. We may refuse or cancel orders. Shipping costs and delivery times vary. We are not responsible for carrier-related delays."
  },
  {
   title: "Returns and Refunds",
   content: "Unopened items can be returned within 30 days. Products must be in original condition. Refunds are processed to the original payment method. Return shipping costs are the customer's responsibility."
  }
 ]

 return (
     <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
        <BookOpen className="h-12 w-12 text-blue-600" />
        Terms and Conditions
       </h1>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Clear guidelines for a transparent shopping experience at TechStore
       </p>
      </div>

      <Card className="w-full max-w-4xl mx-auto">
       <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Key Terms Overview</CardTitle>
       </CardHeader>
       <CardContent>
        <Accordion type="single" collapsible className="w-full">
         {termsSections.map((section, index) => (
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
       <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Contact</h2>
       <div className="text-gray-600">
        <p className="mb-2">
         <strong>Email:</strong> legal@techstore.com
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
