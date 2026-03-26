import Link from "next/link"
import { HeartPulse, Mail, Phone, MapPin, MessageSquare, Globe, Users } from "lucide-react"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Meet Doctors", href: "/doctors" },
      { name: "Health Blog", href: "/blog" },
      { name: "Career", href: "/career" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "General Medicine", href: "/services/general" },
      { name: "Pediatrics", href: "/services/pediatrics" },
      { name: "Maternity Care", href: "/services/maternity" },
      { name: "Surgery", href: "/services/surgery" },
      { name: "Laboratory", href: "/services/laboratory" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Life Fountain <span className="text-primary">Medical</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Providing world-class healthcare with compassion and excellence. Your health is our priority, ensuring a healthier future for all.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors"><MessageSquare className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Users className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><HeartPulse className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Medical Avenue, Lekki, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3 text-sm italic">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+234 123 4567 890</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@lifefountain.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Life Fountain Medical Centre. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
