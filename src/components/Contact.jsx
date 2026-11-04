import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Linkedin, 
  Github, 
  Code2 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (status.submitting) return; // Prevent duplicate submissions

    setStatus({ submitting: true, success: false, error: null });

    const result = await sendContactMessage(formData);

    if (result.success) {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setStatus({
        submitting: false,
        success: false,
        error: result.message || 'Failed to deliver message. Please reach out via email directly.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-teal/10 text-accent-teal text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-2xl leading-relaxed">
            Open to Full Stack Developer roles, internships, and ambitious web projects. Send me a message or connect through any channel below.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards (Left) & Form (Right) matching Screenshot 155427.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/50 transition-all duration-200 group"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-muted mb-1 flex items-center justify-between">
                <span>LinkedIn</span>
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors truncate">
                linkedin.com/in/ajay-vakadi
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/50 transition-all duration-200 group"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-muted mb-1 flex items-center justify-between">
                <span>GitHub</span>
                <Github className="w-4 h-4 text-primary-lavender" />
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors truncate">
                github.com/ajayvakadi12
              </div>
            </a>

            {/* LeetCode */}
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/50 transition-all duration-200 group"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-muted mb-1 flex items-center justify-between">
                <span>LeetCode</span>
                <Code2 className="w-4 h-4 text-[#FFA116]" />
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors truncate">
                leetcode.com/u/Ajayvakadi123/
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="block p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent-teal/50 transition-all duration-200 group"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-muted mb-1 flex items-center justify-between">
                <span>Email</span>
                <Mail className="w-4 h-4 text-accent-teal" />
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-light-text group-hover:text-accent-teal transition-colors truncate">
                {personalInfo.email}
              </div>
            </a>

            {/* Phone & Location */}
            <div className="p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-muted mb-1 flex items-center justify-between">
                <span>Phone & Location</span>
                <Phone className="w-4 h-4 text-accent-teal" />
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-light-text">
                {personalInfo.phone}
              </div>
              <div className="text-xs text-dark-muted mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-teal" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white dark:text-white light:text-light-text mb-1">
                  Send a message
                </h3>
                <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
                  I typically respond within 24 hours.
                </p>
              </div>

              {/* Status Notifications */}
              {status.success && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Message Delivered!</p>
                    <p className="text-xs opacity-90 mt-0.5">Thank you for getting in touch. I will respond to your email promptly.</p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Submission Notice</p>
                    <p className="text-xs opacity-90 mt-0.5">{status.error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Field 1: Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-dark-text dark:text-dark-text light:text-light-text mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    disabled={status.submitting}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-slate-50 border ${
                      errors.name ? 'border-red-500/70 focus:ring-red-500' : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-primary-purple'
                    } text-white dark:text-white light:text-light-text placeholder-dark-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-purple/40 text-sm transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-dark-text dark:text-dark-text light:text-light-text mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    disabled={status.submitting}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-slate-50 border ${
                      errors.email ? 'border-red-500/70 focus:ring-red-500' : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-primary-purple'
                    } text-white dark:text-white light:text-light-text placeholder-dark-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-purple/40 text-sm transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-dark-text dark:text-dark-text light:text-light-text mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role or inquiry in detail..."
                    disabled={status.submitting}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-slate-50 border ${
                      errors.message ? 'border-red-500/70 focus:ring-red-500' : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-primary-purple'
                    } text-white dark:text-white light:text-light-text placeholder-dark-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-purple/40 text-sm transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-purple to-primary-purpleDark hover:from-primary-purpleDark hover:to-primary-purple text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-purple/30 hover:shadow-primary-purple/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

