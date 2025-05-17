import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to transform your space? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form below, and one of our representatives will contact you shortly to discuss your painting
              needs.
            </p>

            <ContactForm />
          </div>

          <div className="lg:pl-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
            <div className="grid gap-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                   A-21, Pooja Co Housing society, Pooja Housing Society, Sector 15, Airoli
                   Navi Mumbai, Maharashtra 400708
                  
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-teal-600">
                      +91 98765 43210
                    </a>
                    <br />
                    <a href="tel:+919892576983" className="hover:text-teal-600">
                      +91 98925 76983
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto: anilpdeokar9820@gmail.com" className="hover:text-teal-600">
                    anilpdeokar9820@gmail.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
     <section className="py-16">
  {/* Devkar Painting Works Map */}
  <div className="aspect-[21/9] w-full mb-8">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0044457899176!2d72.98825407520727!3d19.151282682068885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf5de479d5bd%3A0x80e06f584d655354!2sDevkar%20Painting%20Works!5e0!3m2!1sen!2sin!4v1747503310755!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Devkar Painting Works Location"
    ></iframe>
  </div>
</section>

    </div>
  )
}
