import React from 'react';
import { connectCards } from '../data/portfolioData';
import { Github, Linkedin, Code2, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

const icons = {
  Github,
  Linkedin,
  Code2,
  Mail
};

export const Connect = () => {
  return (
    <section id="connect" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-purple/15 text-primary-lavender text-xs font-semibold uppercase tracking-wider">
            Network & Socials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-2xl leading-relaxed">
            Feel free to explore my profiles, review my code repositories, solve DSA together on LeetCode, or reach out directly.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectCards.map((card) => {
            const Icon = icons[card.iconName] || Mail;
            return (
              <a
                key={card.platform}
                href={card.url}
                target={card.platform !== 'Email' ? '_blank' : undefined}
                rel={card.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/50 hover:-translate-y-1.5 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: `${card.color}18`,
                        color: card.color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="p-2 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-slate-100 text-dark-muted group-hover:text-white group-hover:bg-primary-purple transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Platform & Description */}
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text group-hover:text-primary-lavender transition-colors mb-1">
                    {card.platform}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Handle / URL Pill */}
                <div className="pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border">
                  <span className="text-xs font-mono text-accent-teal group-hover:underline truncate block">
                    {card.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

