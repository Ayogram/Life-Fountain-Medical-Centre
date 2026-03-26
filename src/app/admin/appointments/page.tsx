"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Check, X, Trash2, Search, Filter, Loader2, Calendar, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppointmentsManager() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error("Error fetching appointments:", error)
    } else {
      setAppointments(data || [])
    }
    setLoading(false)
  }

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('appointments')
      .update({ status: newStatus })
      .eq('id', id)

    if (error) {
      console.error("Error updating status:", error)
      alert("Failed to update status. Check Supabase connection.")
    } else {
      setAppointments(appointments.map(a => a.id === id ? { ...a, status: newStatus } : a))
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return

    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id)

    if (error) {
      console.error("Error deleting appointment:", error)
    } else {
      setAppointments(appointments.filter(a => a.id !== id))
    }
  }

  const filteredAppointments = appointments.filter(a => {
    const matchesFilter = filter === "all" || a.status === filter
    const matchesSearch = a.patient_name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex gap-2">
          {["all", "pending", "approved", "rejected"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                filter === s ? "bg-primary text-white" : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search patients..." 
            className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        {loading ? (
          <div className="flex items-center justify-center h-[400px]">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-gray-400 space-y-4">
            <Calendar className="w-12 h-12 opacity-20" />
            <p>No appointments found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-8 py-4">Patient Details</th>
                  <th className="px-4 py-4">Schedule</th>
                  <th className="px-4 py-4">Message</th>
                  <th className="px-4 py-4 text-center">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {filteredAppointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-8 py-6 space-y-1">
                      <p className="font-bold text-gray-900">{apt.patient_name}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {apt.phone}</span>
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {apt.email}</span>
                      </div>
                    </td>
                    <td className="px-4 py-6 font-mono text-xs">
                      <p className="font-bold text-gray-700">{apt.appointment_date}</p>
                      <p className="text-gray-400">{apt.appointment_time}</p>
                    </td>
                    <td className="px-4 py-6 max-w-xs">
                      <p className="text-gray-600 line-clamp-2 italic">"{apt.message || "No message"}"</p>
                    </td>
                    <td className="px-4 py-6">
                      <div className={`mx-auto w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        apt.status === 'approved' ? 'bg-green-100 text-green-700' : 
                        apt.status === 'rejected' ? 'bg-red-100 text-red-700' : 
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {apt.status}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        {apt.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleStatusUpdate(apt.id, 'approved')}
                              className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all shadow-sm"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleStatusUpdate(apt.id, 'rejected')}
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => handleDelete(apt.id)}
                          className="p-2 bg-gray-50 text-gray-400 rounded-lg hover:bg-gray-900 hover:text-white transition-all shadow-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
