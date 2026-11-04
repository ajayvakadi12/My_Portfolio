import React, { useState, useEffect } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-purple to-accent-teal flex items-center justify-center font-extrabold text-white text-2xl shadow-2xl shadow-primary-purple/40">
          AV
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-purple animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-primary-lavender animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

