import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle, Radio } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-purple/15 text-primary-lavender text-xs font-semibold uppercase tracking-wider">
            Work & Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-3xl leading-relaxed">
            Real full-stack applications, interactive client platforms, and AI editorial workspaces with live deployments and open-source code.
          </p>
        </div>

        {/* 3-Column Projects Grid matching reference screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="group flex flex-col rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Browser Mockup Window Header */}
              <div className="bg-dark-secondary dark:bg-dark-secondary light:bg-slate-100 px-4 py-2.5 border-b border-dark-border/80 dark:border-dark-border/80 light:border-light-border flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                {proj.isLive && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live App</span>
                  </span>
                )}
              </div>

              {/* Project Screenshot Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-dark-secondary/50 border-b border-dark-border/50">
                <picture>
                  <source srcSet={proj.image.replace('.png', '.webp')} type="image/webp" />
                  <img
                    src={proj.image}
                    alt={`${proj.title} preview screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-accent-teal uppercase tracking-wider mb-2">Key Capabilities:</p>
                    <ul className="space-y-1.5">
                      {proj.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-accent-teal shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-secondary dark:bg-dark-secondary light:bg-slate-100 text-dark-muted dark:text-dark-muted light:text-light-muted border border-dark-border/60 dark:border-dark-border/60 light:border-light-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions (GitHub & Live Demo Buttons) */}
                <div className="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border flex items-center gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-dark-border dark:border-dark-border light:border-light-border bg-dark-secondary/60 dark:bg-dark-secondary/60 light:bg-light-secondary hover:border-primary-purple/50 text-white dark:text-white light:text-light-text text-xs sm:text-sm font-semibold transition-all duration-200"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 text-dark-muted group-hover:text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-primary-purple hover:bg-primary-purpleDark text-white text-xs sm:text-sm font-semibold shadow-md shadow-primary-purple/20 transition-all duration-200"
                    aria-label={`View Live Demo for ${proj.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

