import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-border/60">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-sm leading-[1.7] text-muted-fg">
              Stara stodoła, nowy oddech. Miejsce na długi weekend i krótkie
              wakacje — na skraju Puszczy Pyzdrskiej.
            </p>
          </div>

          <nav aria-label="Stopka" className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#o-miejscu"
              className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              O miejscu
            </a>
            <a
              href="#udogodnienia"
              className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Udogodnienia
            </a>
            <a
              href="#galeria"
              className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Galeria
            </a>
            <a
              href="#kontakt"
              className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Kontakt
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-fg">
          <span className="tracking-wide">
            © {new Date().getFullYear()} Siedlisko po nowemu · Wszelkie prawa zastrzeżone
          </span>
          <span className="font-serif italic">
            zaprojektowane z myślą o ciszy
          </span>
        </div>
      </div>
    </footer>
  );
}
