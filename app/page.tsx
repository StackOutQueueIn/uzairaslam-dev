import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Experience from '@/components/portfolio/experience';
import Projects from '@/components/portfolio/projects';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="w-full flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
