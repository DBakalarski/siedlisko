import { MotionSection } from './MotionSection';

export function About() {
  return (
    <MotionSection
      id="o-miejscu"
      aria-labelledby="about-title"
      className="relative py-24 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Left: text */}
          <div className="md:col-span-6 md:col-start-1">
            <p className="font-sans text-xs uppercase tracking-eyebrow text-primary mb-6">
              O miejscu
            </p>
            <h2
              id="about-title"
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-foreground mb-8"
            >
              Stara stodoła,{' '}
              <span className="italic text-primary">nowy oddech</span>.
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-[1.8] text-foreground/85">
              <p>
                Siedlisko wyrosło z chęci zatrzymania czasu. Drewniana
                konstrukcja, którą znaleźliśmy lata temu pod warstwą wiatru i
                kurzu, dziś znów oddycha — zachowując belki, kamień i okna,
                które pamiętają więcej niż my.
              </p>
              <p>
                „Po nowemu" oznacza dla nas szacunek do historii i
                jednoczesny komfort współczesności. Len na pościeli, książki
                na półkach, kawa o świcie. Tyle, ile potrzeba.
              </p>
            </div>

            <blockquote className="mt-12 pl-6 border-l-2 border-primary/40">
              <p className="font-serif italic text-xl md:text-2xl leading-[1.5] text-foreground/90">
                „Najlepsze wakacje to takie, podczas których zapomina się,
                jaki jest dzień tygodnia."
              </p>
            </blockquote>
          </div>

          {/* Right: visual placeholder */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              {/* Stylized illustration of cottage as placeholder */}
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EFE9D7" />
                    <stop offset="100%" stopColor="#F2EDDE" />
                  </linearGradient>
                  <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C5C5A6" />
                    <stop offset="100%" stopColor="#A8AE8A" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#sky)" />
                {/* Distant hills */}
                <path
                  d="M0 320 Q 100 290 200 310 T 400 305 L 400 500 L 0 500 Z"
                  fill="#B8B89A"
                  opacity="0.5"
                />
                <path d="M0 360 L 400 360 L 400 500 L 0 500 Z" fill="url(#field)" />
                {/* Cottage silhouette */}
                <g transform="translate(110 200)">
                  <path d="M0 80 L 90 0 L 180 80 L 180 200 L 0 200 Z" fill="#6B7A5A" />
                  <path
                    d="M0 80 L 90 0 L 180 80"
                    stroke="#4F5A43"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Door */}
                  <rect x="78" y="130" width="28" height="70" fill="#2A2F2A" />
                  {/* Windows */}
                  <rect x="22" y="110" width="32" height="32" fill="#FAF7F0" />
                  <rect x="126" y="110" width="32" height="32" fill="#FAF7F0" />
                  <path
                    d="M22 126 L 54 126 M 38 110 L 38 142"
                    stroke="#2A2F2A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M126 126 L 158 126 M 142 110 L 142 142"
                    stroke="#2A2F2A"
                    strokeWidth="1.5"
                  />
                  {/* Chimney */}
                  <rect x="130" y="20" width="14" height="30" fill="#4F5A43" />
                </g>
                {/* Trees */}
                <g fill="#4F5A43" opacity="0.75">
                  <ellipse cx="50" cy="340" rx="28" ry="50" />
                  <ellipse cx="350" cy="335" rx="32" ry="55" />
                  <ellipse cx="320" cy="345" rx="22" ry="42" />
                </g>
                {/* Foreground grass */}
                <path
                  d="M0 440 Q 100 430 200 438 T 400 432 L 400 500 L 0 500 Z"
                  fill="#8A9070"
                  opacity="0.7"
                />
              </svg>

              {/* Caption overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-serif italic text-sm text-foreground/70">
                  widok od strony łąki
                </span>
                <span className="font-sans text-[10px] uppercase tracking-eyebrow text-foreground/55">
                  est. 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
