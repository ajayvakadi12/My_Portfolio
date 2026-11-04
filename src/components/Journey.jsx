import React from 'react';
import { journeyMilestones, journeyDescription } from '../data/journeyData';
import { GraduationCap, Award, BookOpen, Compass, Sparkles } from 'lucide-react';

export const Journey = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-purple/15 text-primary-lavender text-xs font-semibold uppercase tracking-wider">
            Milestones & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            My Journey
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-3xl leading-relaxed">
            The educational foundation, technical training, and intentional transitions that shaped my path as a Full Stack Developer.
          </p>
        </div>

        {/* Transition Narrative Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-purple/10 via-dark-card to-accent-teal/10 border border-dark-border dark:border-dark-border light:border-light-border relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-teal/15 text-accent-teal flex items-center justify-center shrink-0 mt-1">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text flex items-center gap-2">
                <span>The Engineering Pivot</span>
                <span className="text-xs font-medium text-accent-teal px-2.5 py-0.5 rounded-full bg-accent-teal/10 border border-accent-teal/20">
                  Automobile ➔ Computer Science & Full Stack
                </span>
              </h3>
              <p className="text-sm sm:text-base text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                {journeyDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Unified Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-primary-purple/30 dark:border-primary-purple/30 light:border-primary-purple/40 space-y-12">
          {journeyMilestones.map((item, index) => {
            const isTraining = item.type === 'training';
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Icon */}
                <div 
                  className={`absolute -left-[37px] sm:-left-[53px] md:-left-[61px] top-1.5 w-10 h-10 rounded-full border-4 border-dark-bg dark:border-dark-bg light:border-light-bg flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 ${
                    isTraining 
                      ? 'bg-gradient-to-tr from-accent-teal to-accent-cyan text-dark-bg' 
                      : 'bg-gradient-to-tr from-primary-purple to-primary-lavender text-white'
                  }`}
                >
                  {isTraining ? (
                    <Award className="w-4 h-4 font-bold" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/40 dark:hover:border-primary-purple/40 light:hover:border-primary-purple/50 transition-all duration-200 shadow-sm space-y-3">
                  
                  {/* Top Bar: Date badge, Status & CGPA */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-purple/15 text-primary-lavender border border-primary-purple/30">
                      {item.period}
                    </span>

                    <div className="flex items-center gap-2">
                      {item.status && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          item.status === 'Completed' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                            : 'bg-accent-teal/10 text-accent-teal border border-accent-teal/20 animate-pulse'
                        }`}>
                          {item.status}
                        </span>
                      )}
                      {item.cgpa && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25">
                          CGPA: {item.cgpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-accent-teal mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-lavender dark:text-primary-lavender light:text-primary-purpleDark">
                      <Sparkles className="w-3.5 h-3.5 text-primary-purple" />
                      <span>{item.highlight}</span>
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

