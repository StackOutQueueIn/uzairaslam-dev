'use client';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="flex gap-6 md:gap-10">
        {/* Section Number */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm font-semibold">01</span>
            <h2 className="section-title text-2xl md:text-3xl m-0">About</h2>
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-accent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a full-stack software engineer with expertise in building accessible, pixel-perfect user interfaces and powerful backend systems. My interest in web development started back in 2019 when I decided to learn programming—turns out, hacking together a custom reblog button taught me a lot about building things on the web.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Fast-forward to today, and I&apos;ve had the privilege of working at companies like Cyberoide Tech where I&apos;ve worn many hats and had a hand in shipping products for clients in various industries including banking, healthcare, e-commerce, and travel. My main focus these days is building accessible digital experiences at scale.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not at the computer, you can usually find me rock climbing, running, or planning my next trip abroad. I&apos;m always open to hearing about interesting projects and innovative ideas, so feel free to reach out.
          </p>

          {/* Skills */}
          <div className="pt-4">
            <p className="text-muted-foreground font-semibold mb-3">Languages & Tools:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'PostgreSQL',
                'MongoDB',
                'AWS',
                'Docker',
                'GraphQL',
                'REST APIs',
              ].map((skill) => (
                <span key={skill} className="tech-tag px-3 py-1 border border-accent/30 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
