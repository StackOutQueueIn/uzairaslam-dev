'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { publicContactEmail } from '@/lib/contact';
import { Github, Linkedin, Mail } from 'lucide-react';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? 'Something went wrong while sending your message.');
      }

      setFormData(initialFormState);
      setStatusType('success');
      setStatusMessage(payload.message ?? 'Message sent successfully.');
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="flex gap-6 md:gap-10">
        {/* Section Number */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm font-semibold">04</span>
            <h2 className="section-title text-2xl md:text-3xl m-0">Contact</h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m interested in freelance opportunities, especially ambitious or large projects. If you have another request or question, don&apos;t hesitate to reach out using the form below.
          </p>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Peter Smith"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full px-4 py-2 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full px-4 py-2 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Let&apos;s talk about..."
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi, I think we need a Designer to help us create an amazing new product..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            {statusMessage ? (
              <p
                className={`text-sm ${statusType === 'success' ? 'text-green-500' : 'text-red-500'}`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-mono text-sm rounded disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary text-sm mb-6">Or reach out directly:</p>
            <div className="space-y-4">
              <a
                href={`mailto:${publicContactEmail}`}
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-mono text-sm">{publicContactEmail}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/uzairaslam1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-accent" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/uzairaslam437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <Github className="h-5 w-5 text-accent" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
