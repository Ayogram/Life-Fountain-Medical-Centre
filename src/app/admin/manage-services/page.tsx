"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Stethoscope, CheckCircle, XCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManageServices() {
  const [services, setServices] = useState([
    { id: 1, name: "General Medicine", status: "Active", patients: "450+" },
    { id: 2, name: "Pediatrics", status: "Active", patients: "320+" },
    { id: 3, name: "Maternity", status: "Active", patients: "180+" },
  ])

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">Hospital Services</h3>
          <p className="text-sm text-gray-500">Enable or disable core medical services</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-5 h-5" /> Add New Service
        </Button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <th className="px-8 py-4">Service Name</th>
              <th className="px-4 py-4">Volume</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {services.map((s) => (
              <tr key={s.id} className="hover:bg-blue-50/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-gray-900">{s.name}</span>
                  </div>
                </td>
                <td className="px-4 py-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-bold text-primary">{s.patients}</span> Patients
                  </div>
                </td>
                <td className="px-4 py-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-tighter">{s.status}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Edit className="w-5 h-5" /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Tip */}
      <div className="bg-accent p-8 rounded-[2.5rem] border border-blue-100 flex items-start gap-6">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-gray-900">Optimization Tip</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Maternity services have seen a 20% increase in inquiries this month. Consider updating the team roster or adding more detailed care information to the public page.
          </p>
        </div>
      </div>
    </div>
  )
}
