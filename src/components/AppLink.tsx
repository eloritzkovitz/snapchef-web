import Link from 'next/link';
import { ReactNode } from 'react';

interface AppLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function AppLink({ href, children, className }: AppLinkProps) {
  // Check if this is an external link or HTML page
  const isExternal = href.startsWith('http') || href.endsWith('.html');
  
  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}