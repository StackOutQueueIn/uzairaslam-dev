import Sidebar from '@/components/portfolio/sidebar'
import Hero from '@/components/portfolio/hero'
import About from '@/components/portfolio/about'
import Experience from '@/components/portfolio/experience'
import Projects from '@/components/portfolio/projects'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'

export default function Home() {
  return (
    <div className="flex bg-background min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-64">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
