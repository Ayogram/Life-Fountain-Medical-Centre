import { Camera, CheckCircle } from "lucide-react"

const facilities = [
  {
    title: "Modern Operating Theatre",
    desc: "Equipped with advanced surgical instruments and robotic assistance for high-precision procedures.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Advanced Laboratory",
    desc: "Fully automated laboratory providing rapid and highly accurate clinical test results.",
    img: "https://images.unsplash.com/photo-1579154235820-213958046714?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Maternity Ward",
    desc: "Personalized, comfortable birthing suites with 24/7 neonatal support.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Diagnostics Imaging Center",
    desc: "Comprehensive imaging services including MRI, CT-Scan, and digital X-rays.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Emergency Care Unit",
    desc: "Dedicated trauma center with immediate life-support and monitoring capabilities.",
    img: "https://images.unsplash.com/photo-1581594658210-c5c85d9f06d1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Patient Recovery Wards",
    desc: "Spacious, semi-private and private wards designed for peaceful recovery.",
    img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80"
  }
]

export default function Facilities() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-5xl font-bold">World-Class Facilities</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our state-of-the-art medical infrastructure designed to provide unparalleled safety, comfort, and clinical precision.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {facilities.map((fac, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[400px]">
              <img 
                src={fac.img} 
                alt={fac.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent p-12 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-4">
                  <h3 className="text-3xl font-bold text-white mb-2">{fac.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {fac.desc}
                  </p>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Technologically Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature List */}
      <section className="bg-accent py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            "Fully Integrated Electronic Medical Records",
            "Central Sterilization Services Department",
            "Advanced Trauma Resuscitation Units",
            "Dedicated Pediatrics Emergency Wing",
            "Silent Recovery Zones",
            "Interactive Patient Terminals"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
