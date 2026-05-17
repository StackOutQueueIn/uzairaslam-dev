'use client';

import Typewriter from './typewriter';

export default function Hero() {
  return (
    <section id="hero" className="px-6 md:px-12 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <p className="text-accent font-mono text-sm">Hi, my name is</p>
        <Typewriter text="Uzair Aslam." color="text-accent" speed={80} />
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground">
          I build scalable digital experiences.
        </h2>
      </div>

      <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
        I&apos;m a full-stack software engineer with hands-on experience in full-stack web development, specializing in JavaScript-based technologies. Experienced in designing, developing, testing, and maintaining scalable software systems under real-world production environments.
      </p>

      <a
        href="#projects"
        className="inline-block px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-mono text-sm"
      >
        Check out my work →
      </a>
    </section>
  );
}
