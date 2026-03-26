"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, ChevronLeft, Stethoscope, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

const services = ["General Medicine", "Pediatrics", "Maternity", "Surgery", "Diagnostics", "Laboratory", "Emergency Care", "Pharmacy"]
const doctors = ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Brown", "Dr. David Wilson", "Dr. Amanda Lee", "Dr. James Miller"]

export default function Appointment() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    email: "",
    service_needed: "",
    preferred_doctor: "",
    appointment_date: "",
    appointment_time: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            patient_name: formData.patient_name,
            phone: formData.phone,
            email: formData.email,
            appointment_date: formData.appointment_date,
            appointment_time: formData.appointment_time,
            message: formData.message,
            status: 'pending'
          }
        ])

      if (error) throw error
      setSubmitted(true)
    } catch (error) {
      console.error("Error booking appointment:", error)
      alert("Failed to book appointment. Please check your connection or environment variables.")
      // Even if it fails (due to missing keys), let's show the success UI for the demo if in a real environment
      // setSubmitted(true) 
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Appointment Requested!</h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Thank you, <span className="font-bold text-primary">{formData.patient_name}</span>. Your request has been received. We will contact you shortly to confirm your slot.
          </p>
        </div>
        <Button size="lg" onClick={() => window.location.href = '/'}>Return Home</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-16 pb-20">
      <section className="bg-slate-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10 space-y-4">
          <h1 className="text-5xl font-bold">Book an Appointment</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take the first step towards better health. Fill out the form below and our team will get back to you within 2 hours.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          {/* Progress Sidebar */}
          <div className="bg-primary p-8 md:w-1/3 text-white space-y-8">
            <h3 className="text-2xl font-bold mb-8">Booking Process</h3>
            <div className="space-y-6">
              {[
                { s: 1, t: "Patient Details", i: User },
                { s: 2, t: "Medical Service", i: Stethoscope },
                { s: 3, t: "Date & Time", i: CalendarIcon }
              ].map((item) => (
                <div key={item.s} className={`flex items-center gap-4 transition-all duration-300 ${step === item.s ? "opacity-100 translate-x-2" : "opacity-40"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${step === item.s ? "bg-white text-primary border-white" : "border-white/30"}`}>
                    <item.i className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{item.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12 flex-grow">
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <h2 className="text-3xl font-bold text-gray-900">Personal Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" name="patient_name" required placeholder="Ayo Balogun" className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.patient_name} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="tel" name="phone" required placeholder="+234..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.phone} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="email" name="email" required placeholder="ayo@example.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.email} onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button type="button" className="w-full py-4 gap-2" onClick={handleNext}>
                    Next Step <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <h2 className="text-3xl font-bold text-gray-900">Service Selection</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Service Needed</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select name="service_needed" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary appearance-none" value={formData.service_needed} onChange={handleInputChange}>
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Preferred Doctor</label>
                      <div className="relative">
                        <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select name="preferred_doctor" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary appearance-none" value={formData.preferred_doctor} onChange={handleInputChange}>
                          <option value="">Select a doctor</option>
                          {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" className="flex-1 py-4 gap-2" onClick={handleBack}>
                      <ChevronLeft className="w-5 h-5" /> Back
                    </Button>
                    <Button type="button" className="flex-[2] py-4 gap-2" onClick={handleNext}>
                      Next Step <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <h2 className="text-3xl font-bold text-gray-900">Schedule & Message</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Preferred Date</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="date" name="appointment_date" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.appointment_date} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Preferred Time</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="time" name="appointment_time" required className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.appointment_time} onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Additional Message (Optional)</label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea name="message" rows={4} placeholder="Tell us more about your concerns..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary" value={formData.message} onChange={handleInputChange}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" className="flex-1 py-4 gap-2" onClick={handleBack}>
                      <ChevronLeft className="w-5 h-5" /> Back
                    </Button>
                    <Button type="submit" disabled={loading} className="flex-[2] py-4 gap-2 bg-green-600 hover:bg-green-700">
                      {loading ? "Processing..." : "Confirm Appointment"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
