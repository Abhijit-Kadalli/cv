'use client';

import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="brand">Abhijit Kadalli</Link>

        <div className="nav-right">
          <ul className={`nav-list ${mobileMenuOpen ? 'nav-list-open' : ''}`}>
            <li><Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/#experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link></li>
            <li><Link href="/#projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/#skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>

          <DarkModeToggle />

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'hamburger-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
