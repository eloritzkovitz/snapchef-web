import React from 'react';
import Link from 'next/link';

interface DownloadButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function DownloadButton({ href, className = '', children }: DownloadButtonProps) {
  return (
    <Link 
      href={href} 
      className={`download-button ${className}`}
    >
      {children}
    </Link>
  );
}
