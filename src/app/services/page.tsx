import Link from "next/link"
import { ArrowRight, Stethoscope, Baby, HeartPulse, Pill, Activity, FlaskConical, Syringe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const allServices = [
  {
    title: "General Medicine",
    slug: "general-medicine",
    description: "Comprehensive health checkups, chronic disease management, and preventive care for adults and seniors.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Pediatrics",
    slug: "pediatrics",
    description: "Expert medical care for children from birth through adolescence, including immunizations and development tracking.",
    icon: Baby,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Maternity Care",
    slug: "maternity",
    description: "Comprehensive prenatal, delivery, and postnatal care provided by our expert obstetricians and midwifes.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Surgery",
    slug: "surgery",
    description: "Advanced surgical procedures using minimally invasive techniques for faster recovery and better outcomes.",
    icon: Syringe,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Diagnostics",
    slug: "diagnostics",
    description: "State-of-the-art imaging including MRI, CT scans, and X-rays for accurate diagnosis.",
    icon: Activity,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Laboratory",
    slug: "laboratory",
    description: "Fully automated clinical laboratory providing accurate and timely test results for all medical needs.",
    icon: FlaskConical,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Pharmacy",
    slug: "pharmacy",
    description: "24/7 pharmacy service with a wide range of genuine medications and professional counseling.",
    icon: Pill,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Emergency Care",
    slug: "emergency",
    description: "Immediate life-saving interventions for critical medical conditions, available 24 hours a day.",
    icon: Clock,
    color: "bg-red-100 text-red-700"
  }
]

export default function Services() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494140681-8917dec289ee?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Our Medical Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We provide a full spectrum of healthcare services, from routine checkups to complex specialized treatments, all delivered with the highest level of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                {service.description}
              </p>
              <Link href={`/services/${service.slug}`}>
                <Button variant="ghost" className="w-full justify-between group/btn px-0 hover:bg-transparent hover:text-primary">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <section className="container mx-auto px-4">
        <div className="medical-gradient rounded-[3rem] p-12 md:p-20 text-white text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-bold relative z-10">Can't Find What You Need?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
            Contact our front desk for inquiries about specific treatments or specialized care not listed here.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary">Contact Us Now</Button>
            </Link>
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
