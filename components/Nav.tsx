'use client';

import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const links = [
  { href: '#o-miejscu', label: 'O miejscu' },
  { href: '#udogodnienia', label: 'Udogodnienia' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-soft ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          aria-label="Siedlisko po nowemu — strona główna"
          className="-ml-1"
        >
          <Logo size="sm" priority />
        </a>

        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center font-sans text-sm tracking-wide text-accent hover:text-[color:var(--accent-dark)] transition-colors duration-200"
        >
          Zarezerwuj
          <span aria-hidden className="ml-2">→</span>
        </a>

        <a
          href="#kontakt"
          className="md:hidden font-sans text-sm tracking-wide text-accent"
        >
          Rezerwuj
        </a>
      </div>
    </header>
  );
}
