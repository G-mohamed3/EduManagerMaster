import { GraduationCap } from "lucide-react"
import Link from "next/link"
import { Twitter, Github, Linkedin } from "lucide-react"

const footerLinks = {
  plateforme: {
    title: "Plateforme",
    links: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Tarifs", href: "#" },
      { label: "Sécurité", href: "#" },
      { label: "Intégrations", href: "#" }
    ]
  },
  ressources: {
    title: "Ressources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Support", href: "#" }
    ]
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "RGPD", href: "#" }
    ]
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#0c1426] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">EduManager</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              La plateforme complète pour la gestion de vos formations et le suivi pédagogique.
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 EduManager. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
