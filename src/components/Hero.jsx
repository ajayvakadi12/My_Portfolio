import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Download,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  MapPin
} from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = personalInfo.typingTitles;

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === currentTitle) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed, titles]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navOffset = 80;
      const pos = elem.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Branding, Title, Bio, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">

            {/* Small Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/25 text-accent-teal text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-teal"></span>
              </span>
              <span>{personalInfo.heroAvailability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-accent-teal">
                HELLO, I AM
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-light-text leading-[1.1]">
                <span className="bg-gradient-to-r from-white via-primary-lavender to-primary-purple bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>

              {/* Cycling Typing Animation */}
              <div className="h-10 sm:h-12 flex items-center text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-lavender dark:text-primary-lavender light:text-primary-purpleDark">
                <span>{displayText}</span>
                <span className="animate-pulse ml-1 text-accent-teal font-light">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
              <MapPin className="w-4 h-4 text-accent-teal" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-purple to-primary-purpleDark hover:from-primary-purpleDark hover:to-primary-purple text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-purple/30 hover:shadow-primary-purple/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="ajay-vakadi-resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card/80 dark:bg-dark-card/80 light:bg-light-secondary hover:border-primary-purple/50 text-white dark:text-white light:text-light-text font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-primary-lavender" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:bg-dark-card/50 text-sm sm:text-base font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-teal" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-dark-muted/70 font-semibold mr-1">Follow:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card/60 hover:bg-dark-card hover:border-primary-purple/50 text-dark-muted hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card/60 hover:bg-dark-card hover:border-primary-purple/50 text-dark-muted hover:text-[#0A66C2] hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card/60 hover:bg-dark-card hover:border-primary-purple/50 text-dark-muted hover:text-[#FFA116] hover:scale-110 transition-all duration-200"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card/60 hover:bg-dark-card hover:border-primary-purple/50 text-dark-muted hover:text-accent-teal hover:scale-110 transition-all duration-200"
                aria-label="Email Ajay"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Professional Photograph with Gradient Ring & Glow */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary-purple via-primary-lavender to-accent-teal rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

              {/* Gradient Border Ring Wrapper */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-primary-purple via-primary-lavender to-accent-teal shadow-2xl">
                {/* Profile Photo Container */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-dark-secondary flex items-center justify-center border-4 border-dark-bg transition-transform duration-500 group-hover:scale-[1.02]">
                  <picture>
                    <source srcSet="/images/profile/ajay-vakadi.webp" type="image/webp" />
                    <img
                      src={personalInfo.profileImage}
                      alt="Ajay Vakadi - Full Stack Developer"
                      className="w-full h-full object-cover object-top filter brightness-105"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute -bottom-2 right-4 px-3.5 py-1.5 rounded-full bg-dark-card/95 border border-primary-purple/50 backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-teal animate-pulse" />
                <span className="text-xs font-semibold text-white">Full Stack Dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

