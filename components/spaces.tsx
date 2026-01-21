import { Building2, GraduationCap, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const spaces = [
  {
    icon: Building2,
    title: "Espace Directeur",
    description: "Pilotez votre centre de formation avec une vue d'ensemble complète.",
    color: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-500",
    features: [
      "Gestion complète des promotions",
      "Affectation des formateurs",
      "Tableaux de bord analytiques",
      "Gestion des espaces pédagogiques",
      "Administration des utilisateurs"
    ]
  },
  {
    icon: GraduationCap,
    title: "Espace Formateur",
    description: "Gérez vos cours et suivez la progression de vos étudiants.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500",
    features: [
      "Planning des cours",
      "Suivi des étudiants",
      "Partage de ressources",
      "Évaluation et notation",
      "Communication directe"
    ]
  },
  {
    icon: User,
    title: "Espace Étudiant",
    description: "Accédez à vos cours, ressources et suivez votre progression.",
    color: "from-sky-400 to-sky-600",
    bgColor: "bg-sky-500",
    features: [
      "Emploi du temps personnel",
      "Accès aux ressources",
      "Suivi de progression",
      "Notifications importantes",
      "Communication avec les formateurs"
    ]
  }
]

export default function Spaces() {
  return (
    <section id="espaces" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-medium mb-4">
            Espaces dédiés
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Un espace adapté à chaque rôle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chaque utilisateur bénéficie d&apos;une interface personnalisée avec les fonctionnalités adaptées à ses besoins.
          </p>
        </div>

        {/* Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Colored Header */}
              <div className={`h-32 bg-gradient-to-br ${space.color} flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <space.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {space.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {space.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {space.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full ${space.bgColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 bg-transparent"
                >
                  Découvrir l&apos;espace
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
