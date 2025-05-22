"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PaintBucket, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <PaintBucket className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Devkar Paints</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Button
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href="/visualizer">Try Color Visualizer</Link>
          </Button>
          <Button asChild>
            <Link href="/booking">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/visualizer" onClick={() => setIsMenuOpen(false)}>
                  Try Color Visualizer
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 