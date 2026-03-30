import React from 'react';

const Certifications = () => {
  const certificates = [
    { name: 'Data Analytics with Python', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'Blockchain and its Applications', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'MERN Stack Certification', issuer: 'JSpiders', date: 'Mar 2023 – Sep 2023', type: 'Full Stack' },
    { name: 'JavaScript Certification', issuer: 'HackerRank', date: 'March 2023', type: 'Basic & Intermediate' },
    { name: 'Node.js Certification', issuer: 'HackerRank', date: 'August 2023', type: 'Basic & Intermediate' }
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-accent-500/30 dark:hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/20 transition-colors">
                <i className="fas fa-award text-accent-500 text-lg" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 leading-snug">{cert.name}</h4>
              <p className="text-accent-600 dark:text-accent-400 font-medium text-xs mb-1">{cert.issuer}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mb-3">{cert.date}</p>
              <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/15">
                {cert.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
