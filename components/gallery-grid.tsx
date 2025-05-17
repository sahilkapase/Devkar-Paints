import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function GalleryPreview() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Recent Projects</h2>
        <p className="text-muted-foreground max-w-2xl">
          Browse through some of our recent painting projects to see the quality of our work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Modern Living Room Transformation", alt: "Interior painting project", image: "1.jpg" },
          { title: "Exterior Home Painting", alt: "Exterior painting project", image: "exterior-home.jpg" },
          { title: "Kitchen Cabinet Refinishing", alt: "Kitchen cabinet refinishing", image: "3.jpg" },
        ].map((project, index) => (
          <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
            <Image
              src={`${project.image}?height=600&width=600`}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white font-medium text-lg">{project.title}</p>
              <Link
                href="/gallery"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm mt-2 inline-flex items-center"
              >
                View Project <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild size="lg" className="gap-2">
          <Link href="/gallery">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

interface GalleryImage {
  src: string;
  alt: string;
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image: GalleryImage, index) => (
        <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-white font-medium text-lg">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}