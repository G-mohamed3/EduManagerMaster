import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileCheck, HeadphonesIcon } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c1426] via-[#111b2e] to-[#1a2744] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Prêt à transformer votre{" "}
              <span className="text-orange-500">gestion pédagogique</span> ?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Rejoignez les établissements qui ont choisi EduManager pour simplifier leur organisation et améliorer l&apos;expérience de formation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-base flex items-center gap-2">
                Commencer maintenant
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg text-base bg-transparent">
                Demander une démo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-6">
                Faites confiance à une solution pensée pour l&apos;éducation
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-teal-400 mb-2" />
                  <span className="text-xl font-bold text-white">100%</span>
                  <span className="text-xs text-gray-400">Sécurisé</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileCheck className="w-6 h-6 text-teal-400 mb-2" />
                  <span className="text-xl font-bold text-white">RGPD</span>
                  <span className="text-xs text-gray-400">Conforme</span>
                </div>
                <div className="flex flex-col items-center">
                  <HeadphonesIcon className="w-6 h-6 text-teal-400 mb-2" />
                  <span className="text-xl font-bold text-white">24/7</span>
                  <span className="text-xs text-gray-400">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
