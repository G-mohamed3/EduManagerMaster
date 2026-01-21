import { 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  FolderOpen, 
  Shield, 
  Bell, 
  FileText 
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Gestion des promotions",
    description: "Créez et gérez facilement vos promotions, assignez des étudiants et suivez leur progression."
  },
  {
    icon: BookOpen,
    title: "Suivi des formations",
    description: "Organisez vos modules de formation, planifiez les cours et suivez les objectifs pédagogiques."
  },
  {
    icon: Calendar,
    title: "Planning intégré",
    description: "Visualisez et gérez les emplois du temps des formateurs, salles et étudiants en temps réel."
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord",
    description: "Analysez les performances avec des statistiques détaillées et des rapports personnalisables."
  },
  {
    icon: FolderOpen,
    title: "Espaces pédagogiques",
    description: "Centralisez les ressources pédagogiques et facilitez le partage de documents."
  },
  {
    icon: Shield,
    title: "Gestion des droits",
    description: "Contrôlez les accès avec un système de rôles adapté à chaque type d'utilisateur."
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Restez informé avec des alertes en temps réel sur les événements importants."
  },
  {
    icon: FileText,
    title: "Documents administratifs",
    description: "Générez automatiquement les documents officiels : attestations, certificats, relevés."
  }
]

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une suite complète d&apos;outils pour simplifier la gestion de vos formations et améliorer l&apos;expérience pédagogique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
