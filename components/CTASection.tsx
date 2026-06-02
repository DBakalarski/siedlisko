import { MotionSection } from './MotionSection';
import { BotanicalAccent } from './BotanicalAccent';
import { Mail, Phone, Instagram } from 'lucide-react';

const channels = [
  {
    icon: Mail,
    label: 'Napisz do nas',
    value: 'rezerwacje@siedliskoponowemu.pl',
    href: 'mailto:rezerwacje@siedliskoponowemu.pl',
  },
  {
    icon: Phone,
    label: 'Zadzwoń',
    value: '+48 600 000 000',
    href: 'tel:+48600000000',
  },
  {
    icon: Instagram,
    label: 'Zobacz codziennie',
    value: '@siedlisko.ponowemu',
    href: 'https://instagram.com',
  },
];

export function CTASection() {
  return (
    <MotionSection
      id="kontakt"
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-28 md:py-40 bg-surface/60"
    >
      <BotanicalAccent
        variant="sprig"
        className="absolute left-6 top-10 w-28 md:w-40 text-primary/30 pointer-events-none"
      />
      <BotanicalAccent
        variant="sprig"
        className="absolute right-6 bottom-10 w-28 md:w-40 text-primary/25 pointer-events-none rotate-180"
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10 text-center">
        <p className="font-sans text-xs uppercase tracking-eyebrow text-primary mb-7">
          Kontakt
        </p>
        <h2
          id="cta-title"
          className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-foreground max-w-3xl mx-auto"
        >
          Zapraszamy{' '}
          <span className="italic text-primary">do siedliska</span>.
        </h2>
        <p className="mt-7 mx-auto max-w-xl text-base md:text-lg leading-[1.75] text-muted-fg">
          Najlepsze terminy znikają jako pierwsze. Napisz lub zadzwoń —
          opowiemy o miejscu i pomożemy dobrać dni pod twoje plany.
        </p>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-left">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block p-7 md:p-8 bg-background border border-border hover:border-primary/60 transition-colors duration-300 ease-out-soft min-h-[120px]"
                >
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Icon strokeWidth={1.4} className="w-5 h-5" />
                    <span className="font-sans text-xs uppercase tracking-eyebrow text-muted-fg">
                      {c.label}
                    </span>
                  </div>
                  <p className="font-serif text-base md:text-lg lg:text-xl text-foreground group-hover:text-primary-dark transition-colors duration-300 break-all">
                    {c.value}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </MotionSection>
  );
}
