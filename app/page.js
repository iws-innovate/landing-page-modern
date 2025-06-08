import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Benefits from './components/Benefits';
import CTA from './components/CTA';

export default function HomePage() {
  return (
    <main className="main-content">
      <Hero />
      <Showcase />
      <Benefits />
      <CTA />
    </main>
  );
}

