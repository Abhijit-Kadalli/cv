import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ children, href, className = '' }: CardProps) {
  return (
    <article className={`card ${className}`}>
      {children}
      {href && (
        <Link
          href={href}
          className="card-hit"
          aria-label="Read more"
        />
      )}
    </article>
  );
}

interface CardHeaderProps {
  children: ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <header className="card-header">{children}</header>;
}

interface CardMetaProps {
  children: ReactNode;
}

export function CardMeta({ children }: CardMetaProps) {
  return <div className="meta">{children}</div>;
}

interface CardTagsProps {
  tags: string;
}

export function CardTags({ tags }: CardTagsProps) {
  return <div className="tags">{tags}</div>;
}
