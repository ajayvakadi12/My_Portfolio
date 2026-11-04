import React, { useState } from 'react';
import { useGitHubData } from '../hooks/useGitHubData';
import { Github, ExternalLink, GitBranch, Star, Users, Flame, RefreshCw } from 'lucide-react';

export const GitHubActivity = () => {
  const { data, loading, error } = useGitHubData();
  const [hoveredDay, setHoveredDay] = useState(null);

  const username = 'ajayvakadi12';
  const profileUrl = `https://github.com/${username}`;

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-teal/10 text-accent-teal text-xs font-semibold uppercase tracking-wider">
              Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted light:text-light-muted max-w-2xl leading-relaxed">
              Real-time development metrics, public repositories, and consistency tracked directly from my GitHub profile.
            </p>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/50 text-white dark:text-white light:text-light-text font-semibold text-sm shadow-sm transition-all duration-200 self-start md:self-auto hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 text-primary-lavender" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
          </a>
        </div>

        {/* 4 Summary Cards matching Reference Screenshot 155408.png */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          
          {/* Public Repos */}
          <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text mb-1">
              {loading ? (
                <div className="h-8 w-16 bg-dark-secondary rounded animate-pulse" />
              ) : (
                data?.publicRepos ?? 12
              )}
            </div>
            <div className="text-xs sm:text-sm font-medium text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-accent-teal" />
              <span>Public repositories</span>
            </div>
          </div>

          {/* Total Contributions */}
          <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text mb-1">
              {loading ? (
                <div className="h-8 w-16 bg-dark-secondary rounded animate-pulse" />
              ) : (
                data?.totalContributions ? `${data.totalContributions}+` : '240+'
              )}
            </div>
            <div className="text-xs sm:text-sm font-medium text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contributions (past year)</span>
            </div>
          </div>

          {/* Stars Earned */}
          <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text mb-1">
              {loading ? (
                <div className="h-8 w-16 bg-dark-secondary rounded animate-pulse" />
              ) : (
                data?.totalStars ?? 4
              )}
            </div>
            <div className="text-xs sm:text-sm font-medium text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span>Stars earned</span>
            </div>
          </div>

          {/* Followers */}
          <div className="p-6 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-light-text mb-1">
              {loading ? (
                <div className="h-8 w-16 bg-dark-secondary rounded animate-pulse" />
              ) : (
                data?.followers ?? 6
              )}
            </div>
            <div className="text-xs sm:text-sm font-medium text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-primary-lavender" />
              <span>Followers</span>
            </div>
          </div>

        </div>

        {/* Contribution Calendar Heatmap Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-light-text">
                Contribution Heatmap
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
                52-week activity distribution across public repositories
              </p>
            </div>

            {/* Hover Tooltip or Legend */}
            <div className="h-6 flex items-center">
              {hoveredDay ? (
                <span className="text-xs font-medium text-accent-teal bg-accent-teal/10 px-2.5 py-1 rounded-md border border-accent-teal/20">
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on {hoveredDay.date}
                </span>
              ) : (
                <div className="flex items-center gap-1.5 text-[11px] text-dark-muted">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 dark:bg-slate-800 light:bg-slate-200 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#0e4429] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#006d32] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#26a641] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#39d353] inline-block" />
                  <span>More</span>
                </div>
              )}
            </div>
          </div>

          {/* Heatmap Grid Overflow Container */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[700px] flex gap-1 justify-between">
              {data?.calendar?.weeks?.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, dIndex) => (
                    <div
                      key={dIndex}
                      onMouseEnter={() => setHoveredDay({ date: day.date, count: day.contributionCount })}
                      onMouseLeave={() => setHoveredDay(null)}
                      className="w-3 h-3 rounded-[3px] transition-transform hover:scale-125 cursor-pointer"
                      style={{
                        backgroundColor: day.contributionCount === 0 
                          ? 'rgba(148, 163, 184, 0.12)' 
                          : day.color || '#26a641'
                      }}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Language Breakdown */}
          {data?.languages && data.languages.length > 0 && (
            <div className="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-dark-muted">
                <span>Top Repository Languages</span>
                <span>Calculated via GitHub API</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-dark-secondary">
                {data.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 pt-1">
                {data.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs text-dark-text dark:text-dark-text light:text-light-text">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-dark-muted">({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

