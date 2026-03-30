import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  Navigation,
  Home,
  About,
  Experience,
  Projects,
  Certifications,
  Contact,
  Footer
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
    AOS.refresh();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 