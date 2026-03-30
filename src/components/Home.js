import React from 'react';
import MyImage from '../assets/images/MyImage.jpg';

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 dark:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-600/5 via-transparent to-purple-600/5 dark:from-accent-600/10 dark:via-transparent dark:to-purple-600/10" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-500/10 dark:bg-accent-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px] animate-float-delayed" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile image */}
        <div className="mb-8 animate-fade-in" data-aos="zoom-in">
          <div className="relative inline-block">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-2 ring-accent-500/30 shadow-2xl shadow-accent-500/20 mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={MyImage} alt="Bhaskar Manoj" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 dark:text-accent-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="150">
          <span className="text-gray-900 dark:text-white">Bhaskar </span>
          <span className="bg-gradient-to-r from-accent-500 via-purple-500 to-accent-500 dark:from-accent-400 dark:via-purple-400 dark:to-accent-400 bg-clip-text text-transparent">Manoj</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6" data-aos="fade-up" data-aos-delay="200">
          Software Engineer <span className="text-accent-500">&bull;</span> Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="250">
          Passionate about building scalable web applications using modern technologies like Angular, React, Node.js, .NET, MySQL, and MongoDB.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="300">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-accent-500 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-50 dark:hover:bg-white/5"
          >
            View My Work
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3" data-aos="fade-up" data-aos-delay="350">
          {[
            { icon: 'fas fa-envelope', href: 'mailto:manojbhaskar01234@gmail.com', label: 'Email' },
            { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/manoj-bhaskar-99b842234/', label: 'LinkedIn' },
            { icon: 'fab fa-github', href: 'https://github.com/Manoj584', label: 'GitHub' },
            { icon: 'fas fa-phone-alt', href: 'tel:+918317557678', label: 'Phone' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-white hover:bg-accent-500/10 dark:hover:bg-accent-500/20 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <i className={`${link.icon} text-sm`} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 dark:text-gray-600 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
