import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        'muted-fg': 'var(--muted-fg)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      letterSpacing: {
        wordmark: '0.18em',
        eyebrow: '0.25em',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
