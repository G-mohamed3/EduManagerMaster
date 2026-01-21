import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Spaces from "@/components/spaces"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Spaces />
      <CTA />
      <Footer />
    </main>
  )
}
