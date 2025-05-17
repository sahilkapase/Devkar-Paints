"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, PaintBucket, Phone, X, Home, Wrench, Image as ImageIcon, User, Mail, Calendar } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const closeSheet = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Add this line to trigger the scroll handler on initial load
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <PaintBucket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Devkar Paints</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/gallery", label: "Gallery" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/919820931585?text=Hello%20sir%2C%20we%20want%20your%20painting%20service!!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors shadow-md"
            title="Chat on WhatsApp"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold">+91 9820931585</span>
            <span className="text-xs font-light">(WhatsApp)</span>
          </Link>
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src="/ceo.png"
              alt="Anil Devkar"
              fill
              className="object-cover object-[center_60%]"
              sizes="32px"
            />
          </div>
          <Button asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* WhatsApp button for mobile, always visible at the top right */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="https://wa.me/919820931585?text=Hello%20sir%2C%20we%20want%20your%20painting%20service!!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors shadow-md"
            title="Chat on WhatsApp"
          >
            <Phone className="h-3 w-3" />
            <span className="text-sm font-semibold">WhatsApp</span>
          </Link>
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src="/ceo.png"
              alt="Anil Devkar"
              fill
              className="object-cover object-[center_60%]"
              sizes="32px"
              priority
            />
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-0 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm p-0">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full bg-white dark:bg-white/95">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
                  <PaintBucket className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">Devkar Paints</span>
                </Link>
              </div>

              <nav className="flex flex-col p-4 gap-1 flex-1">
                {[
                  { href: "/", label: "Home", icon: Home },
                  { href: "/services", label: "Services", icon: Wrench },
                  { href: "/gallery", label: "Gallery", icon: ImageIcon },
                  { href: "/about", label: "About", icon: User },
                  { href: "/contact", label: "Contact", icon: Mail },
                ].map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                        pathname === link.href 
                          ? "bg-primary/10 text-primary font-semibold shadow-sm" 
                          : "hover:bg-secondary/50 hover:translate-x-1"
                      }`}
                      onClick={closeSheet}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="border-t mx-4 my-2" />

              <div className="p-6 pt-2 border-t-0 mt-auto bg-secondary/20">
                <div className="flex justify-center mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-md">
                    <Image
                      src="/ceo.png"
                      alt="Anil Devkar"
                      fill
                      className="object-cover object-[center_60%]"
                      sizes="56px"
                      priority
                    />
                  </div>
                </div>
                <Link
                  href="https://wa.me/919820931585?text=Hello%20sir%2C%20we%20want%20your%20painting%20service!!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-200 shadow-md mb-4 hover:shadow-lg"
                  title="Chat on WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-base font-semibold">+91 9820931585</span>
                  <span className="text-xs font-light">(WhatsApp)</span>
                </Link>
                <Button asChild className="w-full gap-2 py-6 text-base" onClick={closeSheet}>
                  <Link href="/booking">
                    <Calendar className="h-5 w-5" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
