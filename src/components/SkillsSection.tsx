import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

const CATEGORIES = [
  'All',
  'Programming',
  'Frontend Development',
  'Backend & Database',
  'Developer Tools',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

const TechIcon: React.FC<{ iconKey: string; color: string }> = ({ iconKey, color }) => {
  switch (iconKey) {
    case 'python':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M12 2C7.5 2 8 5 8 5v3h4v1H6.5S3 8.5 3 13s3 4.5 3 4.5h2v-2.5s-.2-2.5 2.5-2.5h5s2.5.2 2.5-2.3V5S18.5 2 12 2z" />
          <path d="M12 22c4.5 0 4-3 4-3v-3h-4v-1h5.5S21 15.5 21 11s-3-4.5-3-4.5h-2V9s.2 2.5-2.5 2.5h-5S6 11.3 6 13.8V19s-.5 3 6 3z" />
          <circle cx="10" cy="4.5" r="0.8" fill={color} />
          <circle cx="14" cy="19.5" r="0.8" fill={color} />
        </svg>
      );
    case 'c':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
          <path d="M15 9.5a4 4 0 1 0 0 5" strokeLinecap="round" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M10 10v6a2 2 0 0 1-2 2" strokeLinecap="round" />
          <path d="M17 11.5c-.5-1-2.5-1-2.5.5s2.5 1 2.5 2.5-2 1.5-2.8.5" strokeLinecap="round" />
        </svg>
      );
    case 'html5':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z" />
          <path d="M8 7h8l-.5 4.5H9.5l.3 3 2.2.7 2.2-.7.2-1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'css3':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z" />
          <path d="M8.5 7h7l-.5 4h-5.5l.3 3.2 2.2.8 2.2-.8.3-2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" fill={color} />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'vite':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M20 4L12 21 4 4l8 2.5L20 4z" strokeLinejoin="round" />
          <path d="M13 4l-3 6h4l-2 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'supabase':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M13 2L4 14h7v8l9-12h-7V2z" strokeLinejoin="round" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case 'git':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M6 8.5v7M18 8.5a6 6 0 0 1-6 6H6" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'vscode':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <path d="M17 3l4 2v14l-4 2-10-9 10-9z" strokeLinejoin="round" />
          <path d="M3 8l4-2 10 9-10 9-4-2 8-7-8-7z" strokeLinejoin="round" />
        </svg>
      );
    case 'vercel':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <polygon points="12 3 22 20 2 20 12 3" strokeLinejoin="round" />
        </svg>
      );
    default:
      // IoT Hardware
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
          <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" strokeLinecap="round" />
        </svg>
      );
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const visibleGroups =
    selectedCategory === 'All'
      ? (['Programming', 'Frontend Development', 'Backend & Database', 'Developer Tools'] as const)
      : ([selectedCategory] as const);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header & Interactive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-[#8B5CF6] tracking-wider">
              02. TECHNICAL ARSENAL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              My Technical Arsenal.
            </h2>
            <p className="text-base text-[#94A3B8]">
              Programming languages, modern frontend frameworks, relational
              databases, and hardware-software tooling I use to build real
              applications.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0E131F] border border-white/[0.08]"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#3B82F6] text-white shadow-[0_0_16px_rgba(59,130,246,0.35)]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category-Based Skill Cards */}
        <div className="space-y-10">
          {visibleGroups.map((groupName) => {
            const groupSkills = SKILLS_DATA.filter((s) => s.category === groupName);
            return (
              <div key={groupName} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                  <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                    {groupName}
                  </h3>
                  <span className="text-xs font-mono text-[#64748B] tabular-nums">
                    {groupSkills.length}{' '}
                    {groupSkills.length === 1 ? 'technology' : 'technologies'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {groupSkills.map((skill) => {
                    const isFocused = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() =>
                          setSelectedSkill(isFocused ? null : skill)
                        }
                        className={`group text-left rounded-xl p-5 bg-[#0E131F]/70 backdrop-blur-xl border transition-all duration-200 hover:-translate-y-1 cursor-pointer ${
                          isFocused
                            ? 'border-[#22D3EE] shadow-[0_0_24px_rgba(34,211,238,0.2)]'
                            : 'border-white/[0.08] hover:border-[#3B82F6]/50 hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.18)]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-11 h-11 rounded-lg bg-[#080B12] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                            <TechIcon
                              iconKey={skill.iconKey}
                              color={skill.accentColor}
                            />
                          </div>
                          <span className="text-[11px] font-mono text-[#64748B] group-hover:text-[#22D3EE] transition-colors">
                            {isFocused ? 'Selected' : 'Inspect'}
                          </span>
                        </div>

                        <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-1">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                          {skill.description}
                        </p>

                        <div className="pt-2.5 border-t border-white/[0.05] text-[11px] font-mono text-[#64748B]">
                          Used in: {skill.relatedProjects.join(' · ')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
