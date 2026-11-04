import React from 'react';
import { skillCategories, currentlyLearning } from '../data/portfolioData';
import { 
  Sparkles, 
  Brain, 
  Database, 
  Layers, 
  Cpu, 
  Zap, 
  Code2 
} from 'lucide-react';

const learningIcons = {
  Brain,
  Database,
  Layers,
  Cpu,
  Zap,
  Sparkles
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-teal/10 text-accent-teal text-xs font-semibold uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-3xl leading-relaxed">
            The core technologies, libraries, frameworks, and developer workflows I use to build scalable web applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="space-y-4">
              {/* Category Subtitle */}
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-accent-teal">
                  {cat.category}
                </h3>
                <div className="h-px flex-1 bg-dark-border dark:bg-dark-border light:bg-light-border" />
              </div>

              {/* Skills Badge Pills matching reference screenshots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm group"
                  >
                    {/* Badge Icon Block */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 shadow-sm"
                      style={{
                        backgroundColor: skill.color,
                        color: skill.textColor || '#FFF',
                      }}
                    >
                      {skill.code}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs sm:text-sm font-medium text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 10: CURRENTLY LEARNING */}
        <div className="mt-16 pt-12 border-t border-dark-border dark:border-dark-border light:border-light-border">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-purple/10 via-dark-card to-accent-teal/5 border border-primary-purple/20 shadow-xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-purple/20 text-primary-lavender text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary-purple" />
                  <span>Currently Learning</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-light-text">
                  Emerging AI & Advanced Architecture
                </h3>
              </div>
              <span className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted max-w-xs sm:text-right">
                Active study & practical exploration topics, distinguished from established production skills.
              </span>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentlyLearning.map((item) => {
                const IconComponent = learningIcons[item.icon] || Code2;
                return (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-dark-secondary/70 dark:bg-dark-secondary/70 light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent-teal/40 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent-teal/15 text-accent-teal flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white dark:text-white light:text-light-text">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

