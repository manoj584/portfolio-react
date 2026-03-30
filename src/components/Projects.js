import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Assisted Collaborative Service Recommendation',
      description: 'Developed a system to recommend web services from a vast pool of emerging services with blockchain integration.',
      technologies: ['Blockchain', 'Encryption', 'Web Services'],
      features: [
        'Ciphertext-Policy Attribute-Based Encryption',
        'Blockchain technology integration',
        'DoS attack mitigation'
      ],
      icon: 'fas fa-link',
    },
    {
      title: 'Learn React Native – Educational App',
      description: 'Built a comprehensive mobile learning app for React Native with interactive lessons, quizzes, and a complete component reference guide.',
      technologies: ['React Native', 'Expo', 'Redux', 'React Navigation', 'NativeWind'],
      features: [
        'Interactive lessons on JSX, Components, Props, Hooks & Lifecycle',
        'Quiz & interview prep module with curated questions',
        'Drawer navigation with search and 20+ core component demos',
        'Published on Android with EAS Build'
      ],
      icon: 'fas fa-mobile-alt',
      link: 'https://play.google.com/store/apps/details?id=com.bhaskarmanoj.reactnativeacademy',
      linkLabel: 'Play Store',
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent-500/30 dark:hover:border-accent-500/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project icon & title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                  <i className={`${project.icon} text-accent-500`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{project.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Technologies */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Features</p>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <i className="fas fa-star text-amber-400 text-[10px] mt-1.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-semibold hover:bg-accent-500/20 transition-colors"
                  >
                    <i className="fab fa-google-play text-sm" />
                    {project.linkLabel}
                    <i className="fas fa-external-link-alt text-[10px]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
