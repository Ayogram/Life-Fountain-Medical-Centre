import { 
  Users, 
  CalendarCheck, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  CheckCircle,
  XCircle,
  MoreVertical,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const stats = [
    { name: "Total Appointments", value: "1,284", change: "+12.5%", trending: "up", icon: CalendarCheck, color: "bg-blue-500" },
    { name: "Active Doctors", value: "52", change: "+2", trending: "up", icon: Users, color: "bg-purple-500" },
    { name: "Patient Satisfaction", value: "98.2%", change: "+0.5%", trending: "up", icon: Activity, color: "bg-green-500" },
    { name: "Pending Requests", value: "14", change: "-5", trending: "down", icon: Clock, color: "bg-orange-500" },
  ]

  const recentAppointments = [
    { patient: "John Doe", doctor: "Dr. Sarah Johnson", service: "Cardiology", date: "2024-03-26", time: "10:30 AM", status: "pending" },
    { patient: "Jane Smith", doctor: "Dr. Michael Chen", service: "Pediatrics", date: "2024-03-26", time: "11:45 AM", status: "approved" },
    { patient: "Robert Wilson", doctor: "Dr. Emily Brown", service: "Maternity", date: "2024-03-25", time: "09:00 AM", status: "rejected" },
    { patient: "Mary Taylor", doctor: "Dr. David Wilson", service: "Surgery", date: "2024-03-25", time: "02:15 PM", status: "approved" },
  ]

  return (
    <div className="space-y-8 pb-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} p-3 rounded-2xl shadow-lg shadow-${stat.color.split('-')[1]}-100`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.trending === 'up' ? 'text-green-600' : 'text-orange-600'}`}>
                {stat.change}
                {stat.trending === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">{stat.name}</p>
            <h4 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments Table */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Recent Appointments</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-8 py-4">Patient</th>
                  <th className="px-4 py-4">Service & Doctor</th>
                  <th className="px-4 py-4">Schedule</th>
                  <th className="px-4 py-4 text-center">Status</th>
                  <th className="px-8 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentAppointments.map((apt, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <p className="font-bold text-gray-900">{apt.patient}</p>
                    </td>
                    <td className="px-4 py-5">
                      <p className="text-sm font-bold text-gray-700">{apt.service}</p>
                      <p className="text-xs text-primary font-medium">{apt.doctor}</p>
                    </td>
                    <td className="px-4 py-5 font-mono text-xs text-gray-500">
                      <div>{apt.date}</div>
                      <div className="font-bold text-gray-900">{apt.time}</div>
                    </td>
                    <td className="px-4 py-5">
                      <div className={`mx-auto w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        apt.status === 'approved' ? 'bg-green-100 text-green-700' : 
                        apt.status === 'rejected' ? 'bg-red-100 text-red-700' : 
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {apt.status}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-gray-300 hover:text-gray-600 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Tools / Quick Links */}
        <div className="space-y-8">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-xl font-bold mb-4 italic">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-white text-primary hover:bg-gray-100 border-none justify-start gap-3 py-6">
                <CalendarCheck className="w-5 h-5" /> New Appointment
              </Button>
              <Button className="w-full bg-white/20 hover:bg-white/30 border-none justify-start gap-3 py-6">
                <Users className="w-5 h-5" /> Add New Doctor
              </Button>
              <Button className="w-full bg-white/20 hover:bg-white/30 border-none justify-start gap-3 py-6">
                <FileText className="w-5 h-5" /> Post Health Tip
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">System Health</h3>
            <div className="space-y-4">
              {[
                { n: "Supabase DB", s: "Operational", c: "text-green-500" },
                { n: "Vercel Edge", s: "Normal", c: "text-green-500" },
                { n: "Email Service", s: "Degraded", c: "text-orange-500" }
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-600">{h.n}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${h.c}`}>{h.s}</span>
                    <div className={`w-2 h-2 rounded-full ${h.c.replace('text', 'bg')}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
