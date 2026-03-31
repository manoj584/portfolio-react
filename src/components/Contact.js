import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ============================================================
// EmailJS Configuration — You MUST update these 3 values!
// Follow the setup guide below to get your keys.
// ============================================================
const EMAILJS_SERVICE_ID = 'service_e5fnuh5';    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_a40462e';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '7D7H-e3mfE46pL--1';     // e.g. 'AbCdEfGhIjKlMn'

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | 'loading'

  const contactLinks = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'manojbhaskar01234@gmail.com', href: 'mailto:manojbhaskar01234@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 8317557678', href: 'tel:+918317557678' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/manoj-bhaskar-99b842234/', external: true },
    { icon: 'fab fa-github', label: 'GitHub', value: 'View my code', href: 'https://github.com/Manoj584', external: true },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ from_name: '', from_email: '', message: '' });

      // Auto-clear success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or use the contact links above.' });
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-600/5 via-transparent to-purple-600/5 dark:from-accent-600/20 dark:via-gray-950 dark:to-purple-600/20" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-accent-500 dark:text-accent-400 font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="group p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent-500/30 dark:hover:border-accent-500/30 hover:bg-accent-50 dark:hover:bg-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-500/20 transition-colors">
                <i className={`${link.icon} text-accent-500 dark:text-accent-400`} />
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1">{link.label}</h3>
              <p className="text-gray-500 dark:text-gray-500 text-xs break-all">{link.value}</p>
            </a>
          ))}
        </div>

        {/* Message Form */}
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Message</h3>

            {/* Status Toast */}
            {status.type && status.type !== 'loading' && (
              <div
                className={`mb-5 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                  status.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                    : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20'
                }`}
              >
                <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
                {status.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all text-sm"
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all text-sm"
                />
              </div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all text-sm mb-4 resize-none"
              />
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status.type === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
