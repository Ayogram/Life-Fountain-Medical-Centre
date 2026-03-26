import { ShieldCheck, Target, Eye, Heart, Award } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">About Life Fountain Medical Centre</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Founded on the principles of compassion, excellence, and integrity, we have been serving our community with world-class healthcare for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Our Rich History</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Life Fountain Medical Centre started as a small clinic in 2010 with a single goal: to make quality healthcare accessible to everyone. Over the years, we have grown into a multi-specialty hospital, equipped with state-of-the-art technology and a team of dedicated professionals.
            </p>
            <div className="p-8 bg-accent rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Medical Philosophy</h3>
              <p className="text-gray-700 italic">
                "We believe that healing is not just about treating symptoms, but about caring for the whole person. Our approach combines advanced medical science with genuine human empathy."
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80" 
              alt="Hospital Interior" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional clinical care and promote wellness through innovation, education, and compassionate service.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the healthcare provider of choice, recognized for clinical excellence and our commitment to the communities we serve.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2 italic"> <ShieldCheck className="w-4 h-4 text-green-600" /> Integrity in all actions</li>
                <li className="flex items-center gap-2 italic"> <ShieldCheck className="w-4 h-4 text-green-600" /> Compassion for every patient</li>
                <li className="flex items-center gap-2 italic"> <ShieldCheck className="w-4 h-4 text-green-600" /> Excellence in healthcare</li>
                <li className="flex items-center gap-2 italic"> <ShieldCheck className="w-4 h-4 text-green-600" /> Innovation in treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Recognition */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Recognized for Excellence</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <Award className="w-12 h-12" />
            <span className="font-bold">ISO 9001 Certified</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="w-12 h-12" />
            <span className="font-bold">Best Hospital 2023</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="w-12 h-12" />
            <span className="font-bold">Global Health Partner</span>
          </div>
        </div>
      </section>
    </div>
  )
}
