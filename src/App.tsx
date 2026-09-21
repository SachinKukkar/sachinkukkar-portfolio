import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Cursor } from './components/Cursor';
import { Dock } from './components/Dock';
import { Experience } from './components/Experience';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:font-body focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Cursor />

      <main>
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Faqs />
      </main>

      <Footer />
      <Dock />
    </>
  );
}
