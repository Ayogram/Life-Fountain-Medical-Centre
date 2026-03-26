"use client"

import { useState } from "react"
import { Search, Filter, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const specialties = ["All", "Cardiology", "Pediatrics", "Obstetrics", "Surgery", "Orthopedics", "General Medicine"]

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    qualifications: "MD, FACC - Harvard Medical School",
    experience: "15+ Years",
    img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=500&q=80",
    availability: "Mon, Wed, Fri (09:00 - 15:00)"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    qualifications: "MD, DCH - Johns Hopkins",
    experience: "10+ Years",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
    availability: "Tue, Thu, Sat (10:00 - 16:00)"
  },
  {
    name: "Dr. Emily Brown",
    specialty: "Obstetrics",
    qualifications: "MD, FACOG - Stanford Medicine",
    experience: "12+ Years",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
    availability: "Mon - Fri (08:00 - 14:00)"
  },
  {
    name: "Dr. David Wilson",
    specialty: "Surgery",
    qualifications: "MD, FACS - Yale University",
    experience: "20+ Years",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
    availability: "Mon, Wed (07:00 - 13:00)"
  },
  {
    name: "Dr. Amanda Lee",
    specialty: "Orthopedics",
    qualifications: "MD, FAAOS - Oxford Medical",
    experience: "8+ Years",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=500&q=80",
    availability: "Tue, Fri (09:00 - 17:00)"
  },
  {
    name: "Dr. James Miller",
    specialty: "General Medicine",
    qualifications: "MD, MRCP - University of Lagos",
    experience: "18+ Years",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80",
    availability: "Mon - Sat (08:00 - 20:00)"
  }
]

export default function Doctors() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDoctors = doctors.filter(doc => 
    (activeTab === "All" || doc.specialty === activeTab) &&
    (doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-bold">Our Expert Doctors</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet the team of dedicated professionals committed to providing you with the best medical care possible.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="container mx-auto px-4 pt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setActiveTab(s)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === s 
                  ? "bg-primary text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-gray-600 hover:bg-blue-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or specialty..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm">
                  {doc.experience}
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">{doc.specialty}</p>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><Filter className="w-4 h-4 text-primary" /> {doc.qualifications}</p>
                  <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {doc.availability}</p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex gap-4">
                  <Button variant="outline" className="flex-1 gap-2"><Phone className="w-4 h-4" /> Profile</Button>
                  <Button className="flex-1">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
            <Button variant="ghost" className="mt-4" onClick={() => {setActiveTab("All"); setSearchQuery("");}}>Clear all filters</Button>
          </div>
        )}
      </section>
    </div>
  )
}
