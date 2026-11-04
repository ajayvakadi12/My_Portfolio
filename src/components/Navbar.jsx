import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-light-bg/85 backdrop-blur-md border-b border-dark-border dark:border-dark-border light:border-light-border shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* AV Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary-purple rounded-lg px-1 py-1"
          aria-label="Ajay Vakadi Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-purple to-accent-teal flex items-center justify-center font-bold text-white shadow-md shadow-primary-purple/20 group-hover:scale-105 transition-transform duration-200">
            <span className="tracking-tighter font-extrabold text-lg">AV</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base group-hover:text-primary-lavender transition-colors">
              Ajay<span className="text-accent-teal">.dev</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary-purple dark:text-primary-lavender light:text-primary-purpleDark font-semibold'
                    : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-dark-text'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary-purple to-accent-teal rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions: Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download="ajay-vakadi-resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-primary-purple/15 text-primary-lavender dark:text-primary-lavender light:text-primary-purpleDark border border-primary-purple/30 hover:bg-primary-purple hover:text-white transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card dark:bg-dark-card light:bg-light-secondary text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg/95 backdrop-blur-xl border-b border-dark-border dark:border-dark-border light:border-light-border px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-purple/15 text-primary-lavender font-semibold border-l-4 border-primary-purple'
                    : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:bg-dark-card dark:hover:bg-dark-card light:hover:bg-light-secondary'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href={personalInfo.resumePath}
              download="ajay-vakadi-resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary-purple to-primary-purpleDark text-white font-medium shadow-md shadow-primary-purple/25"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

