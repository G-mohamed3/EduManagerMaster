"use client"

import { GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1426]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">EduManager</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#fonctionnalites" className="text-gray-300 hover:text-white transition-colors text-sm">
              Fonctionnalités
            </Link>
            <Link href="#espaces" className="text-gray-300 hover:text-white transition-colors text-sm">
              Espaces
            </Link>
            <Link href="#apropos" className="text-gray-300 hover:text-white transition-colors text-sm">
              À propos
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm hidden sm:block">
              Se connecter
            </Link>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-4 py-2 text-sm">
              Commencer
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
