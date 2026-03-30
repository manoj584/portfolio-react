import React from 'react';

const Footer = () => {
  const socials = [
    { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/manoj-bhaskar-99b842234/', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/Manoj584', label: 'GitHub' },
    { icon: 'fas fa-envelope', href: 'mailto:manojbhaskar01234@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">&copy; 2025 Bhaskar Manoj. All rights reserved.</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">Built with React &amp; Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-accent-500/10 transition-all duration-300"
            >
              <i className={`${s.icon} text-sm`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
