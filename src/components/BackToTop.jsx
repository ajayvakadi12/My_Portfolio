import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-20 z-40 p-3 rounded-full bg-dark-card/90 dark:bg-dark-card/90 light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-primary-lavender hover:text-white hover:bg-primary-purple shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-purple cursor-pointer"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

