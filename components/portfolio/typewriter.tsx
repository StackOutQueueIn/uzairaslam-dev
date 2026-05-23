'use client';

import { useEffect, useState } from 'react';

interface TypewriterStep {
  prefix: string;
  text: string;
}

interface TypewriterProps {
  text?: string;
  steps?: TypewriterStep[];
  speed?: number;
  color?: string;
  pauseDuration?: number;
  prefixClassName?: string;
  textClassName?: string;
}

export default function Typewriter({
  text,
  steps,
  speed = 100,
  color = 'text-accent',
  pauseDuration = 3000,
  prefixClassName = 'font-mono text-sm',
  textClassName = 'text-5xl md:text-7xl font-bold',
}: TypewriterProps) {
  const sequence = steps ?? (text ? [{ prefix: '', text }] : []);
  const [stepIndex, setStepIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const activeStep = sequence[stepIndex] ?? { prefix: '', text: '' };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (sequence.length === 0) {
      return undefined;
    }

    if (!isDeleting && displayedText.length < activeStep.text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(activeStep.text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === activeStep.text.length) {
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
      setStepIndex((currentIndex) => (currentIndex + 1) % sequence.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, activeStep.text, sequence.length, speed, pauseDuration]);

  return (
    <div className={`space-y-3 ${color}`}>
      <p className={prefixClassName}>{activeStep.prefix}</p>
      <h1 className={textClassName}>
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}
