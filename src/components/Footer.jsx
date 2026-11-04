import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Download, Github, Linkedin, Code2, Mail, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      const navOffset = 80;
      const pos = elem.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-dark-border dark:border-dark-border light:border-light-border bg-dark-bg/90 dark:bg-dark-bg/90 light:bg-light-secondary/80 py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-dark-border/60 dark:border-dark-border/60 light:border-light-border">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-purple to-accent-teal flex items-center justify-center font-extrabold text-white text-xl shadow-md shadow-primary-purple/20">
              AV
            </div>
            <div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-accent-teal font-medium">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-primary-lavender transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Resume Download CTA */}
          <div>
            <a
              href={personalInfo.resumePath}
              download="ajay-vakadi-resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-purple/15 text-primary-lavender dark:text-primary-lavender light:text-primary-purpleDark border border-primary-purple/30 hover:bg-primary-purple hover:text-white transition-all duration-200 text-xs sm:text-sm font-semibold shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
          
          <p className="text-center sm:text-left">
            © {currentYear} Ajay Vakadi. All rights reserved. Designed with modern web standards.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA116] transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="hover:text-accent-teal transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border hover:bg-dark-card hover:text-white ml-2 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

