import React from 'react';

const About = () => {
  const skillCategories = [
    { label: 'Languages', color: 'accent', items: ['HTML', 'CSS', 'JavaScript', 'SQL', 'C#'] },
    { label: 'Frameworks', color: 'blue', items: ['Bootstrap', 'Tailwind CSS', 'Angular', 'React', 'React Native', 'Node.js', 'Express.js', 'ADO.NET'] },
    { label: 'Databases', color: 'emerald', items: ['SQL Server', 'MySQL', 'MongoDB'] },
    { label: 'Tools', color: 'orange', items: ['Visual Studio Code', 'IntelliJ IDEA', 'Jira', 'Git', 'GitHub', 'Postman', 'Swagger'] },
    { label: 'Soft Skills', color: 'purple', items: ['Time Management', 'Excellent Communication', 'Adaptability', 'Problem Solving', 'Team Collaboration'] },
  ];

  const colorMap = {
    accent: 'bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20',
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  };

  const dotColor = {
    accent: 'bg-accent-500',
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
  };

  return (
    <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Background & Skills</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Education & Bio - 2 cols */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-accent-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Bachelor of Technology</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">Computer Science & Engineering</p>
                </div>
              </div>
              <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400 pl-[60px]">
                <p>Siddharth Institute of Engineering and Technology</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5"><i className="far fa-calendar text-xs" /> Jun 2018 – May 2022</span>
                  <span className="text-gray-300 dark:text-gray-600">|</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">GPA: 7.67</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer with experience in both frontend and backend development. 
                I love creating user-friendly applications and solving complex problems with innovative solutions.
              </p>
            </div>
          </div>

          {/* Right: Skills - 3 cols */}
          <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
            {skillCategories.map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${dotColor[cat.color]}`} />
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase">{cat.label}</h4>
                </div>
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
      </div>
    </section>
  );
};

export default About;
