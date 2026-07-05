'use client';

import { publicContactEmail } from '@/lib/contact';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/uzairaslam437',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/uzairaslam1/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: `mailto:${publicContactEmail}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="px-6 md:px-12 py-16 max-w-4xl mx-auto border-t border-border">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-mono">
          <span className="text-accent">©</span> {currentYear} Uzair Aslam. Designed & Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
