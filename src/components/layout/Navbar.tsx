"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism py-3 shadow-xl" : "bg-white py-5 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Life Fountain <span className="text-primary">Medical</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/appointment">
            <Button size="sm">Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-600 px-4 py-2 hover:bg-accent hover:text-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Book Appointment</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
