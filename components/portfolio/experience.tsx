'use client';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Cyberoide Tech →',
    location: 'Islamabad, Pakistan',
    period: '2025 - Present',
    description:
      'Contributed to the design, development, and maintenance of production-level web applications using React, Next.js, Node.js, and relational/non-relational databases. Implemented scalable RESTful APIs, optimized backend logic, and improved frontend performance across multiple platforms.',
    achievements: [
      'Implemented scalable RESTful APIs and optimized backend logic',
      'Developed authentication flows and role-based access control systems',
      'Integrated third-party services including Stripe, blockchain payments, and logistics APIs',
      'Collaborated with designers, QA, and product teams on agile workflows',
      'Participated in code reviews, sprint planning, and deployment workflows',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Stripe'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="flex gap-6 md:gap-10">
        {/* Section Number */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm font-semibold">02</span>
            <h2 className="section-title text-2xl md:text-3xl m-0">Experience</h2>
          </div>
          <div className="w-px h-full min-h-96 bg-gradient-to-b from-accent via-accent to-transparent" />
        </div>

        {/* Jobs Timeline */}
        <div className="flex-1 space-y-12">
          {jobs.map((job, index) => (
            <div key={`${job.company}-${index}`} className="relative">
              <div className="absolute -left-8 top-1 w-4 h-4 bg-accent rounded-full border-4 border-background" />

              <div className="group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {job.role}{' '}
                    <span className="text-accent font-normal">@ {job.company.split(' →')[0]}</span>
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">{job.period}</span>
                </div>

                {/* Location */}
                <p className="text-xs text-muted-foreground mb-4 font-mono">{job.location}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-3">
                      <span className="text-accent flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Full Resume */}
      <div className="text-center mt-16 pt-12 border-t border-border">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-accent hover:text-foreground font-mono text-sm transition-colors"
        >
          View Full Résumé →
        </a>
      </div>
    </section>
  );
}
