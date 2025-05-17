import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-primary text-white overflow-hidden">
      {/* Background image with optimized loading */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/bedroom.jpg"
          alt="Professional painting service"
          fill  
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />
      </div>

      {/* Optimized animated decorative elements - reduced size for mobile */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800/30 via-transparent to-blue-700/30"></div>
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-purple-500/10 animate-float-up"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-indigo-500/10 animate-float-down animate-delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-blue-500/10 animate-float-up animate-delay-700"></div>

      {/* Mobile-optimized shimmer effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-mobile"></div>

      <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Mobile-optimized heading with better text balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in">
              <span className="text-gradient">Transform</span> Your Space with Professional Painting
            </h1>
            
            {/* Improved paragraph for readability on mobile */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animate-delay-200 leading-relaxed">
              Devkar Paints delivers premium painting services for homes and businesses in <span className="font-semibold">MUMBAI</span>. Quality materials, expert craftsmanship, and exceptional results.
            </p>
            
            {/* Mobile-friendly button layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-400">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300 rounded-full py-6 text-base font-medium"
              >
                <Link href="/booking">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 rounded-full py-6 text-base font-medium"
              >
                <Link href="/services" className="flex items-center justify-center gap-2">
                  Our Services <ArrowRight className="h-4 w-4 animate-bounce-right" />
                </Link>
              </Button>
            </div>
            
            {/* Mobile testimonial badge */}
            <div className="mt-8 inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20 animate-fade-in animate-delay-600 max-w-xs mx-auto lg:mx-0">
              <span className="text-yellow-300 mr-2">★★★★★</span>
              <span className="font-medium">Trusted by 500+ happy customers</span>
            </div>
          </div>
          
          {/* Mobile-optimized image section */}
          <div className="relative mt-8 lg:mt-0 lg:h-[400px] h-[250px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in animate-delay-500 mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
            <Image
              src="/4.jpg"
              alt="Interior painting showcase"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
            
            {/* Feature highlight badges - visible on mobile */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between z-20">
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                Premium Quality
              </div>
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                5-Year Warranty
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-optimized wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Mobile-visible CTA for immediate action */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center transform transition-transform duration-300 ease-in-out lg:hidden animate-fade-in animate-delay-1000" id="mobile-cta">
        <a 
          href="tel:+919876543210" 
          className="flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Call Now
        </a>
      </div>
    </section>
  )
}

/* Add these custom styles to your global CSS */
/*
.text-gradient {
  background: linear-gradient(to right, #ffffff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animate-bounce-right {
  animation: bounce-right 1.5s infinite;
}

@keyframes bounce-right {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

.shimmer-mobile {
  background-size: 200% 100%;
  animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 300% 0;
  }
}
*/