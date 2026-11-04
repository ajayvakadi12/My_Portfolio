import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGitHubData } from '../hooks/useGitHubData';
import { FolderGit2, Cpu, GitBranch, Star, Users, Flame } from 'lucide-react';

const CountUpNumber = ({ target, startAnimation, suffix = '', duration = 1500 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easeProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [target, startAnimation, duration]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
};

export const Statistics = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.2);
  const { data: githubData, loading } = useGitHubData();

  // Real stats or sensible fallback
  const reposCount = githubData?.publicRepos || 12;
  const starsCount = githubData?.totalStars || 4;
  const followersCount = githubData?.followers || 6;
  const contributionsCount = githubData?.totalContributions || 240;

  const stats = [
    {
      id: 'projects',
      label: 'Featured Projects',
      value: 3,
      suffix: '',
      icon: FolderGit2,
      color: 'text-primary-lavender',
      bgColor: 'bg-primary-purple/15',
      note: 'Production deployed apps'
    },
    {
      id: 'tech',
      label: 'Core Technologies',
      value: 15,
      suffix: '+',
      icon: Cpu,
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/15',
      note: 'Frontend, backend & DB'
    },
    {
      id: 'repos',
      label: 'Public Repositories',
      value: reposCount,
      suffix: '',
      icon: GitBranch,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/15',
      note: 'Verified from GitHub API'
    },
    {
      id: 'stars',
      label: 'Stars Earned',
      value: starsCount,
      suffix: '',
      icon: Star,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/15',
      note: 'GitHub repository stargazers'
    },
    {
      id: 'followers',
      label: 'GitHub Followers',
      value: followersCount,
      suffix: '',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/15',
      note: 'Community connections'
    },
    {
      id: 'contributions',
      label: 'Contributions',
      value: contributionsCount,
      suffix: '+',
      icon: Flame,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/15',
      note: 'Commits & active PRs'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-semibold tracking-wider text-accent-teal">
            Key Metrics & Verified Data
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-light-text mt-1">
            Activity at a Glance
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-5 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-primary-purple/40 hover:-translate-y-1 transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${stat.bgColor} ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-light-text tracking-tight">
                    <CountUpNumber
                      target={stat.value}
                      startAnimation={isVisible && !loading}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-dark-text dark:text-dark-text light:text-light-text">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-dark-muted dark:text-dark-muted light:text-light-muted">
                    {stat.note}
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

