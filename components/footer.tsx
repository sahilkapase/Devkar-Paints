"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { PaintBucket, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function Footer() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleContactClick = () => {
    // If we're on the contact page, scroll to the form
    if (window.location.pathname === '/contact') {
      const formElement = document.getElementById('contact-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Otherwise navigate to contact page
      router.push('/contact')
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsSubscribing(true)
    try {
      // Here you would typically send this to your newsletter service
      // For now, we'll just simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Thank you for subscribing to our newsletter!")
      setEmail("")
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.")
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <PaintBucket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-white">Devkar Paints</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Professional painting services for homes and businesses in MUMBAI and surrounding areas.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/booking", label: "Book a Consultation" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-white text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  Devkar Painting Works, flat No.3, Pooja Co housing, A-21, Ichaputi Ganpati Mandir Cha Behind,
                  <br />
                  Sector 15, Airoli, Navi Mumbai, Maharashtra 400708
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919820931585" className="text-slate-400 hover:text-primary transition-colors">
                  +91 9820931585
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:anilpdeokar9820@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                  anilpdeokar9820@gmail.com
                </a>
              </li>
            </ul>
            <Button 
              onClick={handleContactClick}
              className="mt-6 w-full bg-primary hover:bg-primary/90 text-white"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-white text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for tips, trends, and special offers.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} developed by Sahil Kapase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
