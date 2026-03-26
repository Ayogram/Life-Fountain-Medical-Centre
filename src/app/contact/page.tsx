import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Got questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our support team is available 24/7 to assist you with appointments, emergency services, and general inquiries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hospital Address</h4>
                  <p className="text-sm text-gray-500">123 Medical Avenue, Lekki Phase 1, Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Numbers</h4>
                  <p className="text-sm text-gray-500 font-mono">+234 123 456 7890<br />+234 987 654 3210</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Address</h4>
                  <p className="text-sm text-gray-500">info@lifefountain.com<br />contact@lifefountain.com</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Working Hours</h4>
                  <p className="text-sm text-gray-500">Mon - Sun: 24/7<br />Emergencies: Always Open</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-50 space-y-10">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
              <p className="text-gray-500">Fill out the form and we'll reply as soon as possible.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary appearance-none">
                  <option>General Inquiry</option>
                  <option>Feedback/Suggestions</option>
                  <option>Billing Issues</option>
                  <option>Partnership</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea rows={5} placeholder="How can we help you today?" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary"></textarea>
              </div>
              
              <Button size="lg" className="w-full py-5 gap-3">
                <Send className="w-5 h-5" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4">
        <div className="h-[500px] w-full bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.455442564!2d3.47353135!3d6.44390665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da6c2873%3A0x3841961e687e836!2sLekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-xl space-y-4 max-w-sm hidden md:block">
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" /> Live Fountain Medical
            </h4>
            <p className="text-sm text-gray-600">Find us at the heart of Lekki, easily accessible for all residents.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
