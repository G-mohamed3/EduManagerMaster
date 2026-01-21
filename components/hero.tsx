import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Infinity, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#0c1426] via-[#111b2e] to-[#1a2744] pt-32 pb-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-teal-500/20 to-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
          <span className="text-sm text-gray-300">Plateforme de gestion pédagogique</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Gérez vos formations avec{" "}
          <span className="text-orange-500">simplicité</span> et{" "}
          <span className="text-orange-500">efficacité</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Une plateforme centralisée pour les directeurs, formateurs et étudiants. 
          Simplifiez l&apos;organisation pédagogique et le suivi des formations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-base flex items-center gap-2">
            Démarrer gratuitement
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg text-base bg-transparent">
            Voir la démo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-12 md:gap-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-teal-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">3</div>
            <div className="text-sm text-gray-400">Types d&apos;utilisateurs</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Infinity className="w-6 h-6 text-teal-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-400">Formations</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-teal-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-400">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  )
}
