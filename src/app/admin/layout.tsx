"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Users, 
  Settings, 
  LogOut, 
  Hospital,
  ChevronRight,
  FileText,
  Stethoscope
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user && pathname !== "/admin/login") {
        router.push("/admin/login")
      } else {
        setUser(user)
      }
      setLoading(false)
    }
    checkUser()
  }, [pathname, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (pathname === "/admin/login") return <>{children}</>

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
    { name: "Doctors", href: "/admin/manage-doctors", icon: Users },
    { name: "Services", href: "/admin/manage-services", icon: Stethoscope },
    { name: "Blog Posts", href: "/admin/manage-blog", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col shadow-sm">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg">
              <Hospital className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Admin <span className="text-primary">Portal</span>
            </span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                pathname === item.href 
                ? "bg-primary text-white shadow-lg shadow-blue-100" 
                : "text-gray-500 hover:bg-blue-50 hover:text-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wide">{item.name}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${pathname === item.href ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`} />
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-colors font-bold text-sm"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-bold text-gray-900">
            {navItems.find(i => i.href === pathname)?.name || "Page"}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{user?.email?.split('@')[0]}</p>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">System Administrator</p>
            </div>
            <div className="w-10 h-10 bg-accent rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-primary italic">
              A
            </div>
          </div>
        </header>
        
        <div className="flex-grow overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
