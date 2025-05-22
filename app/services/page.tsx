import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ServiceDetailCard } from "@/components/service-detail-card"
import { BookingCta } from "@/components/booking-cta"

// Define services with consistent data and proper categorization
const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description: "Our interior painting services cover walls, ceilings, trim, doors, and more. We use premium paints that are low-VOC and provide excellent coverage and durability.",
    features: [
      "Wall and ceiling painting",
      "Trim, door, and window painting",
      "Cabinet painting and refinishing",
      "Color consultation",
      "Texture application",
      "Minor drywall repairs",
    ],
    image: "/1.jpg"
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with our comprehensive painting services. We prepare surfaces properly to ensure long-lasting results that stand up to the elements.",
    features: [
      "House exterior painting",
      "Deck and fence staining/painting",
      "Garage and shed painting",
      "Pressure washing",
      "Caulking and sealing",
      "Minor wood repairs",
    ],
    image: "/exterior-home.jpg"
  },
  {
    id: "specialty",
    title: "Specialty Finishes",
    description: "Add character and style to your home with our specialty painting techniques and decorative finishes that create unique visual interest.",
    features: [
      "Faux finishing",
      "Textured walls",
      "Accent walls",
      "Decorative painting",
      "Metallic finishes",
      "Glazing techniques",
    ],
    image: "/4.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    description: "We provide professional painting services for businesses, offices, retail spaces, and multi-unit residential properties with minimal disruption.",
    features: [
      "Office and retail spaces",
      "Restaurants and hotels",
      "Medical facilities",
      "Schools and institutions",
      "Apartment complexes",
      "Industrial facilities",
    ],
    image: "/office.png"
  },
  {
    id: "cabinet",
    title: "Cabinet Refinishing",
    description: "Transform your kitchen or bathroom with our cabinet refinishing services. A cost-effective alternative to full replacement that delivers stunning results.",
    features: [
      "Cabinet painting",
      "Staining and refinishing",
      "Glazing and antiquing",
      "Hardware replacement",
      "Minor repairs",
      "Custom color matching",
    ],
    image: "/kitchen.jpg"
  },
  {
    id: "color",
    title: "Color Consultation",
    description: "Our professional color consultants will help you select the perfect colors for your home, considering your style, lighting, and existing elements.",
    features: [
      "In-home color consultation",
      "Color scheme development",
      "Sample testing",
      "Trend and style guidance",
      "Exterior color selection",
      "Color flow planning",
    ],
    image: "/bedroom.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Our Professional Painting Services</h1>
              <p className="text-xl text-slate-600 mb-8">
                We offer comprehensive painting solutions tailored to your specific needs, delivering exceptional
                quality and lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-all duration-300">
                  <Link href="/booking">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-300">
                  <Link href="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
              <Image
                src="/10.jpg"
                alt="Professional painting service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of painting and finishing services for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service) => (
            <ServiceDetailCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              className="transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden bg-white"
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Our Painting Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              We follow a systematic approach to ensure exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transform transition-transform hover:translate-y-[-8px] hover:shadow-lg">
              <div className="absolute -top-6 h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                1
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">Consultation</h3>
              <p className="text-slate-600">
                We meet to discuss your vision, provide expert advice, and prepare a detailed quote.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transform transition-transform hover:translate-y-[-8px] hover:shadow-lg">
              <div className="absolute -top-6 h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                2
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">Preparation</h3>
              <p className="text-slate-600">
                We carefully prepare surfaces, protect your belongings, and make necessary repairs.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transform transition-transform hover:translate-y-[-8px] hover:shadow-lg">
              <div className="absolute -top-6 h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                3
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">Painting</h3>
              <p className="text-slate-600">
                Our skilled painters apply premium paints with precision and attention to detail.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transform transition-transform hover:translate-y-[-8px] hover:shadow-lg">
              <div className="absolute -top-6 h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                4
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">Final Inspection</h3>
              <p className="text-slate-600">
                We conduct a thorough inspection and walkthrough to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Find answers to common questions about our painting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">How long will my painting project take?</h3>
            <p className="text-slate-600">
              Project timelines vary based on the scope of work. A typical room can be completed in 1-2 days, while
              larger projects may take 1-2 weeks. We'll provide a specific timeline during your consultation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">What type of paint do you use?</h3>
            <p className="text-slate-600">
              We use premium, low-VOC paints from trusted brands like Asian Paints, Berger, and Nerolac. We select the
              appropriate paint type based on the surface and your specific needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Do I need to move my furniture?</h3>
            <p className="text-slate-600">
              Our team will move and protect furniture as part of our service. For larger items, we may ask for
              assistance or recommend they be moved before we begin.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Do you offer a warranty?</h3>
            <p className="text-slate-600">
              Yes, we provide a warranty on our workmanship and materials for most projects. Details will be
              included in your service agreement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">How do I prepare for my painting project?</h3>
            <p className="text-slate-600">
              Remove personal items, pictures, and fragile objects. We'll handle furniture moving and protection of
              larger items. We'll provide a detailed preparation checklist before your project begins.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">What payment methods do you accept?</h3>
            <p className="text-slate-600">
              We accept cash, checks, bank transfers, and all major credit cards. We typically require a deposit to
              schedule your project, with the balance due upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}