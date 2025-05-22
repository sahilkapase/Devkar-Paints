import Image from "next/image"
import { CheckCircle, Award, Users, Calendar } from "lucide-react"

import { BookingCta } from "@/components/booking-cta"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Devkar Paints</h1>
              <p className="text-xl text-muted-foreground">
                We are a premier painting company dedicated to transforming homes and businesses with exceptional
                craftsmanship and attention to detail.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/4.jpg?height=600&width=600"
                alt="Devkar Paints team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/profile1.jpg?height=600&width=800"
              alt="Devkar Paints founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2005 by ANIL Devkar, our company began with a simple mission: to provide exceptional painting
              services that transform spaces and exceed client expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience, we've grown from a small family business to one of Mumbai most trusted
              painting companies, serving hundreds of satisfied customers throughout Maharashtra.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to quality, attention to detail, and customer satisfaction has been the foundation of our
              success, and we continue to uphold these values in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, using premium materials and proven techniques to deliver exceptional
                results.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty and transparency, providing fair pricing and clear communication throughout
                every project.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                We prioritize your satisfaction, listening carefully to your needs and exceeding your expectations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                We honor our commitments, completing projects on time and standing behind our work with comprehensive
                warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our skilled professionals bring years of experience and dedication to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image src="/ceo.png?height=200&width=200" alt="Anil Devkar" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Anil Devkar</h3>
            <p className="text-teal-600 mb-3">Founder & CEO</p>
            <p className="text-muted-foreground">
              With over 20 years of experience in the painting industry, Anil leads our team with expertise and
              vision.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image src="/co-ceo.png?height=200&width=200" alt="Bhagyshree Devkar" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Bhagyshree Devkar</h3>
            <p className="text-teal-600 mb-3">Color Consultant</p>
            <p className="text-muted-foreground">
              Bhagyshree helps clients select the perfect colors to transform their spaces and reflect their personal style.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image src="/amit.webp?height=200&width=200" alt="Amit Patel" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Amit Patel</h3>
            <p className="text-teal-600 mb-3">Project Manager</p>
            <p className="text-muted-foreground">
              Amit ensures every project runs smoothly, coordinating our team and maintaining clear communication with
              clients.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image src="/sanjay.jpeg?height=200&width=200" alt="Sanjay Desai" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Sanjay Desai</h3>
            <p className="text-teal-600 mb-3">Lead Painter</p>
            <p className="text-muted-foreground">
              With his exceptional skill and attention to detail, Sanjay leads our painting team to deliver outstanding
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-teal-600 mb-3">20+</h3>
              <p className="text-lg font-medium">Years in Business</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-teal-600 mb-3">500+</h3>
              <p className="text-lg font-medium">Projects Completed</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-teal-600 mb-3">98%</h3>
              <p className="text-lg font-medium">Client Satisfaction</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-teal-600 mb-3">25+</h3>
              <p className="text-lg font-medium">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
