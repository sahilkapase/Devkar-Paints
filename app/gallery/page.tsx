"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingCta } from "@/components/booking-cta"
import { GalleryGrid } from "@/components/gallery-grid"

// Define all gallery images in one place for better organization and consistency
const galleryImages = [
  {
    src: "/1.jpg",
    alt: "Interior living room painting",
    category: "Interior",
  },
  {
    src: "/exterior-home.jpg",
    alt: "Exterior home painting",
    category: "Exterior"
  },
  {
    src: "/kitchen.jpg",
    alt: "Kitchen cabinet refinishing",
    category: "Interior",
  },
  {
    src: "/4.jpg",
    alt: "Decorative wall painting",
    category: "Specialty",
  },
  {
    src: "/office.png",
    alt: "Office space painting",
    category: "Commercial"
  },
  {
    src: "/bedroom.jpg",
    alt: "Bedroom painting",
    category: "Interior"
  },
  {
    src: "/fence.jpg",
    alt: "Fence painting",
    category: "Exterior"
  },
  {
    src: "/8.jpg",
    alt: "Textured wall finish",
    category: "Specialty"
  },
  {
    src: "/retailstore.webp",
    alt: "Retail store painting",
    category: "Commercial"
  },
  {
    src: "/bathroom3.jpg",
    alt: "Bathroom painting",
    category: "Interior"
  },
  {
    src: "/Deck staining.jpg",
    alt: "Deck staining",
    category: "Exterior"
  },
  {
    src: "/Faux finish application.jpeg",
    alt: "Faux finish application",
    category: "Specialty"
  },
  {
    src: "/13.jpg",
    alt: "Living room painting",
    category: "Interior"
  },
  {
    src: "/14.jpg",
    alt: "House painting",
    category: "Exterior"
  },
  {
    src: "/wallfinish.jpg",
    alt: "Wall finish",
    category: "Specialty"
  },
  {
    src: "/office.png",
    alt: "Office painting",
    category: "Commercial"
  },
  {
    src: "/19.jpg",
    alt: "Decorative finish",
    category: "Specialty"
  },
  {
    src: "/pop.jpg",
    alt: "POP ceiling work",
    category: "Commercial"
  },
]

export default function GalleryPage() {
  // Filter images by category
  const interiorImages = galleryImages.filter(img => img.category === "Interior");
  const exteriorImages = galleryImages.filter(img => img.category === "Exterior");
  const specialtyImages = galleryImages.filter(img => img.category === "Specialty");
  const commercialImages = galleryImages.filter(img => img.category === "Commercial");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Work Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Browse through our gallery of completed projects to see the quality and craftsmanship we bring to every
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="all" className="transition-transform hover:scale-105">All Projects</TabsTrigger>
              <TabsTrigger value="interior" className="transition-transform hover:scale-105">Interior</TabsTrigger>
              <TabsTrigger value="exterior" className="transition-transform hover:scale-105">Exterior</TabsTrigger>
              <TabsTrigger value="specialty" className="transition-transform hover:scale-105">Specialty</TabsTrigger>
              <TabsTrigger value="commercial" className="transition-transform hover:scale-105">Commercial</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <GalleryGrid images={galleryImages} />
          </TabsContent>

          <TabsContent value="interior">
            <GalleryGrid images={interiorImages} />
          </TabsContent>

          <TabsContent value="exterior">
            <GalleryGrid images={exteriorImages} />
          </TabsContent>

          <TabsContent value="specialty">
            <GalleryGrid images={specialtyImages} />
          </TabsContent>

          <TabsContent value="commercial">
            <GalleryGrid images={commercialImages} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}