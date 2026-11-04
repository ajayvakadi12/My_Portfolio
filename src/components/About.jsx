import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Lightbulb, 
  Zap, 
  Code, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-teal/10 text-accent-teal text-xs font-semibold uppercase tracking-wider">
            Who I Am
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-3xl leading-relaxed">
            {personalInfo.aboutText}
          </p>
        </div>

        {/* 2-Column Grid: Quick Highlights & Professional Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Strengths & Philosophy Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Strength 1: Problem Solving */}
              <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/40 transition-all duration-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/15 flex items-center justify-center text-primary-lavender mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text mb-2">
                  Problem-Solving
                </h3>
                <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                  Approaches algorithmic challenges and complex system architectures methodically with clean, optimized data structures and maintainable code.
                </p>
              </div>

              {/* Strength 2: Quick Learner */}
              <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent-teal/40 transition-all duration-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text mb-2">
                  Quick Learner
                </h3>
                <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                  Rapidly adopts new technologies, frameworks, and modern AI paradigms like RAG, LLM integrations, and modern full-stack workflows.
                </p>
              </div>

            </div>

            {/* Core Values / Work Principles */}
            <div className="p-6 rounded-2xl bg-dark-secondary/60 dark:bg-dark-secondary/60 light:bg-light-secondary/60 border border-dark-border dark:border-dark-border light:border-light-border">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-teal mb-3">
                Engineering Approach
              </h4>
              <ul className="space-y-2.5 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                  <span>Builds full-stack systems focusing on modular design, clean APIs, and secure authentication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                  <span>Prioritizes responsive, accessible UI performance with zero unnecessary dependencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                  <span>Deep enthusiasm for integrating AI capabilities into practical, evidence-backed editorial and productivity workflows.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Compact Professional Information Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-xl relative overflow-hidden">
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-lavender" />
                <span>Quick Facts</span>
              </h3>

              <div className="space-y-4 text-sm divide-y divide-dark-border/60 dark:divide-dark-border/60 light:divide-light-border/60">
                
                {/* Location */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-teal" />
                    Location
                  </span>
                  <span className="font-medium text-white dark:text-white light:text-light-text text-right">
                    {personalInfo.location}
                  </span>
                </div>

                {/* Role */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary-lavender" />
                    Role
                  </span>
                  <span className="font-medium text-white dark:text-white light:text-light-text text-right">
                    Full Stack Developer
                  </span>
                </div>

                {/* Primary Language */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
                    <Code className="w-4 h-4 text-amber-400" />
                    Primary Language
                  </span>
                  <span className="font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded text-xs">
                    JavaScript (ES6+)
                  </span>
                </div>

                {/* Availability */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                    Availability
                  </span>
                  <span className="font-medium text-accent-teal bg-accent-teal/10 px-2.5 py-1 rounded text-xs text-right">
                    Open to Roles & Internships
                  </span>
                </div>

                {/* B.Tech Degree */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    B.Tech Degree
                  </span>
                  <span className="font-medium text-white dark:text-white light:text-light-text text-right">
                    CSE (Completed, 7.82 CGPA)
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-dark-border dark:border-dark-border light:border-light-border">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary-purple/15 hover:bg-primary-purple text-primary-lavender hover:text-white border border-primary-purple/30 font-semibold text-sm transition-all duration-200"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

