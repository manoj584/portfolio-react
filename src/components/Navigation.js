import React, { useEffect, useState } from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent-500/25">
              BM
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
              Bhaskar Manoj
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 text-sm font-medium capitalize rounded-lg transition-all duration-300 ${
                  activeSection === section
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {section}
              </button>
            ))}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 hover:text-accent-500"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10">
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {isMobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => { scrollToSection(section); setIsMobileOpen(false); }}
              className={`block w-full text-left px-4 py-3 text-sm font-medium capitalize rounded-lg transition-colors ${
                activeSection === section
                  ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
