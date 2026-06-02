import type { Metadata } from 'next';
import { Lora, Raleway } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Siedlisko po nowemu — agroturystyka w sercu natury',
  description:
    'Cisza, drewno i otwarta przestrzeń. Stylowo urządzone siedlisko na wynajem — miejsce, do którego wraca się powietrzem.',
  openGraph: {
    title: 'Siedlisko po nowemu',
    description:
      'Cisza, drewno i otwarta przestrzeń. Agroturystyka z duszą.',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${lora.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
