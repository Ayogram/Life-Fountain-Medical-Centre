"use client"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, UserPlus, GraduationCap, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManageDoctors() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", experience: "15+ Years", availability: "Mon, Wed, Fri" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Pediatrics", experience: "10+ Years", availability: "Tue, Thu, Sat" },
  ])
  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">Medical Staff Directory</h3>
        <Button onClick={() => setIsAdding(true)} className="gap-2">
          <UserPlus className="w-5 h-5" /> Add New Doctor
        </Button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/20 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Doctor Name</label>
              <input type="text" placeholder="Dr. John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Specialty</label>
              <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary appearance-none">
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Surgery</option>
                <option>General Medicine</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Experience</label>
              <input type="text" placeholder="e.g. 12+ Years" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Qualifications</label>
              <input type="text" placeholder="MD, PhD, etc." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button type="submit" className="flex-[2]">Save Doctor Profile</Button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doc) => (
          <div key={doc.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center font-bold text-primary text-xl italic">
                  {doc.name.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{doc.name}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider">{doc.specialty}</p>
                </div>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Edit className="w-4 h-4" /></button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 bg-slate-50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 font-medium">
                <Award className="w-4 h-4 text-primary" /> {doc.experience}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-primary" /> {doc.availability}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
