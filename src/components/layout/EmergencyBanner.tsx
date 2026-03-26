"use client"

import { Phone, AlertCircle, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-red-600 text-white py-3 px-4 relative z-[60] border-b border-white/10"
        >
          <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base font-bold">
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span>24/7 Emergency Care Available</span>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Phone className="w-4 h-4" />
              <a href="tel:+23412345678" className="hover:underline">+234 123 4567 890</a>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-4 hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
