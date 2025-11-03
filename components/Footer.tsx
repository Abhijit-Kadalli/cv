'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} Abhijit Kadalli</span>
        <span className="footer-links">
          <Link href="/">Website</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </span>
      </div>
    </footer>
  );
}
