import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="brand">Abhijit Kadalli</Link>
        <ul className="nav-list">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#experience">Experience</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
