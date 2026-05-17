'use client';

import { ExternalLinkIcon } from './icons';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'MarryMint',
    description: 'Wedding Planning SaaS',
    longDescription:
      'Full-scale wedding planning platform with digital invitations, guest management, custom domain purchasing, and printing integrations. Secure authentication and Stripe payments.',
    tech: ['Next.js', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Stripe', 'Gelato'],
    link: 'https://marrymint.com',
    github: '#',
  },
  {
    title: 'Chaosground',
    description: 'Competitive Gaming Platform',
    longDescription:
      'High-performance gaming platform with real-time interactions, competitive matchmaking, community engagement, and secure authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'JWT'],
    link: '#',
    github: '#',
  },
  {
    title: 'Huda Usman',
    description: 'E-commerce Fashion Platform',
    longDescription:
      'Responsive e-commerce platform with product management, Stripe payments, S3 media storage, shipment tracking, and comprehensive admin dashboard.',
    tech: ['Next.js 14', 'React', 'TypeScript', 'MongoDB', 'Stripe', 'S3'],
    link: '#',
    github: '#',
  },
  {
    title: 'Blockchain Payments',
    description: 'Crypto Payment Integration',
    longDescription:
      'Seamless crypto payment solution supporting multiple wallets and blockchain networks. Integrated Web3 technologies for secure transactions.',
    tech: ['Node.js', 'Web3.js', 'Plisio', 'MetaMask', 'Smart Contracts'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="flex gap-6 md:gap-10">
        {/* Section Number */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm font-semibold">03</span>
            <h2 className="section-title text-2xl md:text-3xl m-0">Projects</h2>
          </div>
          <div className="w-px h-64 bg-gradient-to-b from-accent to-transparent" />
        </div>

        {/* Projects List */}
        <div className="flex-1 space-y-12">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="group">
              {/* Project Link/Title */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-2 mb-3 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLinkIcon className="h-4 w-4 text-text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
              </a>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description} — {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Full Project Archive */}
      <div className="text-center mt-16 pt-12 border-t border-border">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-accent hover:text-foreground font-mono text-sm transition-colors"
        >
          View Full Project Archive →
        </a>
      </div>
    </section>
  );
}
