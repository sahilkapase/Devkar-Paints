'use client';

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-primary text-white overflow-hidden min-h-screen flex items-center">
      {/* Interactive background with parallax effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/bedroom.jpg"
          alt="Professional painting service"
          fill  
          className="object-cover transform scale-110"
          sizes="100vw"
          priority
          quality={85}
        />
      </div>

      {/* Enhanced animated decorative elements with parallax */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800/30 via-transparent to-blue-700/30"></div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-purple-500/10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-indigo-500/10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-blue-500/10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-effect"></div>

      <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced heading with animated gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              <motion.span 
                className="text-gradient inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Transform
              </motion.span>{" "}
              Your Space with Professional Painting
            </h1>
            
            {/* Enhanced paragraph with fade-in effect */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Devkar Paints delivers premium painting services for homes and businesses in{" "}
              <motion.span 
                className="font-semibold inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MUMBAI
              </motion.span>
              . Quality materials, expert craftsmanship, and exceptional results.
            </motion.p>
            
            {/* Interactive stats section */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-6 w-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Clock className="h-6 w-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </motion.div>

            {/* Enhanced button layout with hover effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300 rounded-full py-6 text-base font-medium hover:scale-105"
              >
                <Link href="/booking">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent !bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 rounded-full py-6 text-base font-medium hover:scale-105"
              >
                <Link href="/services" className="flex items-center justify-center gap-2">
                  Our Services <ArrowRight className="h-4 w-4 animate-bounce-right" />
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced testimonial badge */}
            <motion.div
              className="mt-8 inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20 max-w-xs mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-300 mr-2">★★★★★</span>
              <span className="font-medium">Trusted by 500+ happy customers</span>
            </motion.div>
          </motion.div>

          {/* Enhanced image section with interactive hover effect */}
          <motion.div
            className="relative mt-8 lg:mt-0 lg:h-[400px] h-[250px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
            <Image
              src="/profile1.jpg"
              alt="Interior painting showcase"
              fill
              className="object-contain object-center transition-transform duration-10000 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />

            {/* Enhanced feature badges with hover effects */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between z-20">
              <motion.div
                className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
              
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced wave divider with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
      
      {/* Enhanced mobile CTA with animation */}
      <motion.div 
        className="fixed bottom-6 left-0 right-0 z-50 flex justify-center transform transition-transform duration-300 ease-in-out lg:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.a 
          href="tel:+919820931585" 
          className="flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Call Now
        </motion.a>
      </motion.div>
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