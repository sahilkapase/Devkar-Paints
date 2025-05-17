import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { BookingCta } from "@/components/booking-cta"
import { GalleryPreview } from "@/components/gallery-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Professional Services</h2>
          <p className="text-muted-foreground max-w-2xl">
            We offer a wide range of painting services to transform your home with quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Interior Painting"
            description="Transform your living spaces with our premium interior painting services, including walls, ceilings, and trim."
            icon="paint-bucket"
          />
          <ServiceCard
            title="Exterior Painting"
            description="Enhance your home's curb appeal with our durable exterior painting solutions that protect against the elements."
            icon="home"
          />
          <ServiceCard
            title="Texture & Designs"
            description="Add character to your walls with our custom texture applications and decorative painting techniques."
            icon="palette"
          />
          <ServiceCard
            title="Cabinet Refinishing"
            description="Revitalize your kitchen and bathroom cabinets with our professional refinishing services."
            icon="cabinet"
          />
          <ServiceCard
            title="Wallpaper Installation"
            description="Update your space with our expert wallpaper installation services featuring modern designs."
            icon="wallpaper"
          />
          <ServiceCard
            title="Color Consultation"
            description="Get professional advice on color schemes that complement your home's architecture and your personal style."
            icon="color-swatch"
          />
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Devkar Paints</h2>
            <p className="text-muted-foreground max-w-2xl">
              We deliver exceptional quality with attention to detail on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-muted-foreground">We use premium paints and materials for lasting results.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Completion</h3>
              <p className="text-muted-foreground">We respect your time and complete projects on schedule.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5-Year Warranty</h3>
              <p className="text-muted-foreground">We stand behind our work with a comprehensive warranty.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-muted-foreground">Get expert advice and detailed quotes at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Testimonials */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Society Says</h2>
          <p className="text-muted-foreground max-w-2xl">
            See what our community and clients have shared about their experiences with Devkar Paints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TestimonialCard
            name="Rahul Sharma"
            location="MUMBAI"
            quote="Devkar Paints transformed our living room with their attention to detail. The team was professional and completed the work ahead of schedule."
            rating={5}
          />
          <TestimonialCard
            name="Bhagyshree Patel"
            location="Mumbai"
            quote="We hired Devkar Paints for our exterior painting project. The quality of work was exceptional, and they were very accommodating with our schedule."
            rating={5}
          />
          <TestimonialCard
            name="Amit Desai"
            location="MUMBAI"
            quote="The color consultation service was incredibly helpful. The team helped us choose the perfect colors for our home, and the execution was flawless."
            rating={4}
          />
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/testimonials">
              Read More Testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Location */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl flex items-center gap-2 justify-center">
              <MapPin className="h-5 w-5 text-primary" />
              MUMBAI, Maharashtra, India
            </p>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0044457899176!2d72.98825407520727!3d19.151282682068885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf5de479d5bd%3A0x80e06f584d655354!2sDevkar%20Painting%20Works!5e0!3m2!1sen!2sin!4v1747427531127!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Devkar Paints Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
