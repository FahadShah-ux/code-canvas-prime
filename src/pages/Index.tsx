
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "JS.dev | JavaScript Developer Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
