import { BookingForm } from "@/components/booking-form"

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation with our experts to discuss your painting project.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Schedule Your Free Consultation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form below with details about your project, and we'll contact you to confirm your
              consultation appointment.
            </p>

            <BookingForm />
          </div>

          <div className="lg:col-span-2 bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold tracking-tight mb-6">What to Expect</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Initial Consultation</h4>
                  <p className="text-muted-foreground text-sm">
                    Our expert will visit your property to assess the space, discuss your vision, and answer any
                    questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Detailed Quote</h4>
                  <p className="text-muted-foreground text-sm">
                    Within 24-48 hours, you'll receive a comprehensive quote outlining the scope of work, materials,
                    timeline, and cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Planning</h4>
                  <p className="text-muted-foreground text-sm">
                    Once you approve the quote, we'll schedule your project and discuss color options and preparation
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Execution</h4>
                  <p className="text-muted-foreground text-sm">
                    Our professional team will complete your project with minimal disruption, keeping you updated
                    throughout the process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4 shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Final Inspection</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll conduct a walkthrough with you to ensure your complete satisfaction before finalizing the
                    project.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-teal-50 border border-teal-100 rounded-lg">
              <h4 className="font-semibold mb-2 text-teal-700">Our Guarantee</h4>
              <p className="text-sm text-teal-600">
                We stand behind our work with a 100% satisfaction guarantee. If you're not
                completely satisfied, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
