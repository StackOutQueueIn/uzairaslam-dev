'use client';

import Link from 'next/link';
import { useState } from 'react';
import { publicContactEmail } from '@/lib/contact';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, TwitterIcon, XIcon } from './icons';

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/uzairaslam437',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/uzairaslam1/',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/uzairaslam_437',
    icon: TwitterIcon,
  },
  {
    name: 'Email',
    href: `mailto:${publicContactEmail}`,
    icon: MailIcon,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-2 text-accent hover:text-foreground transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 bg-background border-r border-border flex flex-col justify-between p-8 transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo/Name */}
        <div>
          <Link
            href="#hero"
            onClick={(e) => handleScroll(e, '#hero')}
            className="text-2xl font-bold text-accent mb-12 hover:text-foreground transition-colors"
          >
            UA
          </Link>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="nav-link text-sm font-semibold uppercase tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
