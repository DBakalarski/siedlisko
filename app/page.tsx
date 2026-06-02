import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Gallery } from '@/components/Gallery';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main className="paper-grain">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
