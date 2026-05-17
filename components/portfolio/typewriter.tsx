'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  color?: string;
  pauseDuration?: number;
}

export default function Typewriter({ text, speed = 100, color = 'text-accent', pauseDuration = 3000 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, speed);
    } else if (isDeleting && displayedText.length === 0) {
      // Reset for next cycle
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pauseDuration]);

  return (
    <h1 className={`text-5xl md:text-7xl font-bold ${color}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
