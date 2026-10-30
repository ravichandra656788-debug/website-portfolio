import React from 'react';
import { GraduationCap, Code2, Cpu, Sparkles, MapPin, BookOpen } from 'lucide-react';
import { ABOUT_PILLARS, EDUCATION_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      case '02':
        return <Cpu className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="text-xs font-mono text-[#3B82F6] tracking-wider">
            01. ABOUT ME
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Beyond the Code.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            I'm Ravichandra, an Artificial Intelligence and Machine Learning
            undergraduate at REVA University. I enjoy exploring technology,
            building software applications, and experimenting with AI-powered
            solutions. My goal is to continuously improve my technical abilities
            and create meaningful products that solve practical problems.
          </p>
        </div>

        {/* 3 Modern Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative rounded-2xl bg-[#0E131F]/70 backdrop-blur-xl border border-white/[0.08] hover:border-[#3B82F6]/45 p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_28px_-6px_rgba(59,130,246,0.2)]"
            >
              {/* Top Gradient Sheen */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-sm font-semibold text-[#3B82F6] tabular-nums">
                  {pillar.number} —
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#151C2C] border border-white/[0.08] flex items-center justify-center">
                  {getPillarIcon(pillar.number)}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-[#F8FAFC] mb-2.5">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed mb-5">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#64748B]">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline Card */}
        <div className="rounded-2xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.09] p-7 sm:p-9 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-[#3B82F6]/50 via-[#8B5CF6]/50 to-[#22D3EE]/50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC TIMELINE</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#60A5FA]">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8] pt-1">
                <span className="text-[#22D3EE] font-medium">
                  {EDUCATION_DATA.status}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[#64748B]">
                  <MapPin className="w-3.5 h-3.5" />
                  {EDUCATION_DATA.location}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080B12]/90 rounded-xl border border-white/[0.07] p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <BookOpen className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>CORE ACADEMIC FOCUS AREAS</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
                {EDUCATION_DATA.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5">
                    <span className="text-[#3B82F6] font-mono mt-0.5">/</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
