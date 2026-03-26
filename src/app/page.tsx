import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive healthcare for patients of all ages, focusing on prevention and wellness.",
    icon: ShieldCheck,
  },
  {
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents with a gentle touch.",
    icon: Users,
  },
  {
    title: "Diagnostics",
    description: "Advanced diagnostic imaging and laboratory services for accurate health assessments.",
    icon: Clock,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and expert critical care.",
    icon: Award,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Now Open: 24/7 Specialist Consultations
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Your Health, <br />
              <span className="text-primary">Our Priority</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class healthcare at Life Fountain Medical Centre. We provide compassionate care, advanced technology, and expert medical professionals committed to your well-being.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment">
                <Button size="lg" className="gap-2">
                  Book an Appointment <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary">20k+</p>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-500">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-500">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Services</h2>
          <p className="text-gray-600">We offer a wide range of medical services designed to meet the unique needs of every patient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <Link href="/services" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Why Choose Life Fountain Medical Centre?</h2>
            <p className="text-gray-400 text-lg">We are dedicated to providing the highest standard of medical care through a combination of expert knowledge and advanced technology.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Expert Doctors", desc: "Our team consists of highly qualified and experienced medical specialists." },
                { title: "Modern Facilities", desc: "We use the latest medical technology for diagnosis and treatment." },
                { title: "Patient First", desc: "We prioritize patient comfort and personalized care in everything we do." },
                { title: "Quick Response", desc: "Our emergency and diagnostic services are optimized for speed and accuracy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-3xl p-8 backdrop-blur-3xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Professional" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Specialists</h2>
            <p className="text-gray-600">Our doctors are world-class experts in their respective fields, dedicated to providing exceptional care.</p>
          </div>
          <Link href="/doctors">
            <Button variant="outline">View All Doctors</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Dr. Sarah Johnson", role: "Chief Cardiologist", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=500&q=80" },
            { name: "Dr. Michael Chen", role: "Senior Pediatrician", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80" },
            { name: "Dr. Emily Brown", role: "Obstetrics Specialist", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80" },
            { name: "Dr. David Wilson", role: "Orthopedic Surgeon", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80" }
          ].map((doctor, i) => (
            <div key={i} className="group text-center">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-gray-100">
                <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="primary" className="w-full py-2">View Profile</Button>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
              <p className="text-primary font-medium text-sm">{doctor.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
            <p className="text-gray-600">Real stories from people who trusted us with their health.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The care I received at Life Fountain was exceptional. The staff were professional and the facilities are top-notch.", author: "Jane Doe" },
              { text: "Dr. Chen is amazing with kids! My son was so comfortable during his visit. Highly recommend the pediatrics department.", author: "John Smith" },
              { text: "From the emergency room to recovery, everything was handled with extreme care and professionalism. Thank you!", author: "Robert Johnson" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm relative italic text-gray-700 leading-relaxed">
                <span className="text-6xl text-primary/10 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {t.author[0]}
                  </div>
                  <span className="font-bold text-gray-900">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
