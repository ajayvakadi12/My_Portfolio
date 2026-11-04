import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Statistics } from './components/Statistics';
import { GitHubActivity } from './components/GitHubActivity';
import { Connect } from './components/Connect';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-bg dark:bg-dark-bg light:bg-light-bg text-dark-text dark:text-dark-text light:text-light-text selection:bg-primary-purple/30 selection:text-white transition-colors duration-300">
        <Preloader />
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Statistics />
          <GitHubActivity />
          <Connect />
          <Contact />
        </main>

        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;

