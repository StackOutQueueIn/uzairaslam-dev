import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
  size?: number;
};

type SharedIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function IconBase({ children, size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={size}
      height={size}
      {...props}
    >
      {children}
    </svg>
  );
}

export function MailIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 4h16v16H4z" opacity="0" />
      <path d="m4 6 8 6 8-6" />
      <rect width="16" height="12" x="4" y="6" rx="2" />
    </IconBase>
  );
}

export function LinkedinIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v2" />
      <rect width="4" height="12" x="2" y="8" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

export function GithubIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 22v-3.5a4 4 0 0 0-1-3.1c3 0 6-1.8 6-7a5 5 0 0 0-1.3-3.4A4.2 4.2 0 0 0 18 1s-1.6.6-3 2a13.4 13.4 0 0 0-6 0C7.6 1.6 6 1 6 1a4.2 4.2 0 0 0-.7 1.1A5 5 0 0 0 4 5.5c0 5.2 3 7 6 7-.4.4-.7 1.1-.8 2" />
      <path d="M9 18c-4.5 2-5.5-2-7-2" />
      <path d="M9 18v4" />
      <path d="M15 18v4" />
    </IconBase>
  );
}

export function ExternalLinkIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
    </IconBase>
  );
}

export function MenuIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </IconBase>
  );
}

export function TwitterIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.8.9-2.8 1.1A4.4 4.4 0 0 0 11 9.4c0 .3 0 .6.1.9-3.7-.2-7-2-9.2-4.9a4.4 4.4 0 0 0 1.4 5.9c-.7 0-1.4-.2-2-.5 0 2.1 1.5 3.8 3.5 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 2.9A8.8 8.8 0 0 1 2 19.2 12.4 12.4 0 0 0 8.7 21c8 0 12.4-6.7 12.4-12.4v-.6c.8-.6 1.5-1.3 2-2.2Z" />
    </IconBase>
  );
}

export function XIcon(props: SharedIconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}