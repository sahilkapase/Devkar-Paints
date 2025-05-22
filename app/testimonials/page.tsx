import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "MUMBAI",
    quote: "Devkar Paints transformed our living room with their attention to detail. The team was professional and completed the work ahead of schedule.",
    rating: 5
  },
  {
    name: "Bhagyshree Patel",
    location: "Mumbai",
    quote: "We hired Devkar Paints for our exterior painting project. The quality of work was exceptional, and they were very accommodating with our schedule.",
    rating: 5
  },
  {
    name: "Amit Desai",
    location: "MUMBAI",
    quote: "The color consultation service was incredibly helpful. The team helped us choose the perfect colors for our home, and the execution was flawless.",
    rating: 4
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    quote: "I was impressed by their professionalism and attention to detail. They took care of everything, from moving furniture to cleaning up after the job.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    location: "MUMBAI",
    quote: "The cabinet refinishing work exceeded our expectations. Our kitchen looks brand new at a fraction of the cost of replacement.",
    rating: 5
  },
  {
    name: "Neha Singh",
    location: "Mumbai",
    quote: "Great experience from start to finish. The team was punctual, professional, and the quality of work was outstanding.",
    rating: 5
  },
  {
    name: "Vikram Patel",
    location: "MUMBAI",
    quote: "They did an amazing job on our office space. Minimal disruption to our business and excellent results.",
    rating: 4
  },
  {
    name: "Anita Shah",
    location: "Mumbai",
    quote: "The texture work on our feature wall is stunning. The team was creative and helped us achieve exactly what we wanted.",
    rating: 5
  },
  {
    name: "Suresh Reddy",
    location: "MUMBAI",
    quote: "Very impressed with their work ethic and quality. They completed our entire house painting project on time and within budget.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What Our Clients Say</h1>
            <p className="text-xl text-slate-600">
              Read about the experiences of our satisfied customers who have transformed their spaces with Devkar Paints.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 