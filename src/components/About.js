import React from 'react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'Siddharth Institute of Engineering and Technology',
      period: 'Jun 2018 – May 2022',
      grade: 'GPA: 7.67',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'Intermediate (MPC)',
      field: 'Mathematics, Physics & Chemistry',
      school: 'Narayana College, Tirupati',
      period: 'Jun 2016 – Apr 2018',
      grade: 'Percentage: 91.2%',
      icon: 'fas fa-book',
    },
    {
      degree: 'Secondary School (SSC)',
      field: 'State Board',
      school: 'Sri Chaitanya School, Tirupati',
      period: 'Apr 2016',
      grade: 'GPA: 9.3',
      icon: 'fas fa-school',
    },
  ];

  const skillCategories = [
    { label: 'Languages', color: 'accent', icon: 'fas fa-code', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'] },
    { label: 'Frameworks', color: 'blue', icon: 'fas fa-layer-group', items: ['Angular', 'React', 'React Native', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS'] },
    { label: 'Databases', color: 'emerald', icon: 'fas fa-database', items: ['SQL Server', 'MySQL', 'MongoDB', 'Firebase'] },
    { label: 'Testing', color: 'rose', icon: 'fas fa-vial', items: ['Playwright', 'Selenium'] },
    { label: 'Tools', color: 'orange', icon: 'fas fa-wrench', items: ['Visual Studio Code', 'IntelliJ IDEA', 'Git', 'GitHub', 'Postman', 'Swagger'] },
  ];

  const colorMap = {
    accent: 'bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20',
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  };

  const iconTextColor = {
    accent: 'text-accent-500',
    blue: 'text-blue-500',
    emerald: 'text-emerald-500',
    orange: 'text-orange-500',
    rose: 'text-rose-500',
    purple: 'text-purple-500',
  };

  const borderHover = {
    accent: 'hover:border-accent-500/40',
    blue: 'hover:border-blue-500/40',
    emerald: 'hover:border-emerald-500/40',
    orange: 'hover:border-orange-500/40',
    rose: 'hover:border-rose-500/40',
    purple: 'hover:border-purple-500/40',
  };

  return (
    <>
      {/* ── Background / Education Section ── */}
      <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Background</h2>
          </div>

          {/* Education Timeline */}
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-gray-50 dark:ring-gray-900 z-10" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                          <i className={`${edu.icon} text-accent-500`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-base">{edu.degree}</h3>
                          <p className="text-accent-600 dark:text-accent-400 font-medium text-xs">{edu.field}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.school}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <i className="far fa-calendar text-[10px]" /> {edu.period}
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">|</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6" data-aos="fade-up">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Skills</h2>
          </div>

          <div className="max-w-2xl mx-auto mb-14 text-center" data-aos="fade-up" data-aos-delay="50">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I'm a passionate Software Engineer with experience in both frontend and backend development. 
              I love creating user-friendly applications and solving complex problems with innovative solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="100">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${borderHover[cat.color]} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${colorMap[cat.color].split(' ')[0]} flex items-center justify-center`}>
                      <i className={`${cat.icon} ${iconTextColor[cat.color]} text-sm`} />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide uppercase">{cat.label}</h4>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorMap[cat.color]}`}>
                    {cat.items.length}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:scale-105 cursor-default ${colorMap[cat.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
