import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Users,
  Zap,
  Lightbulb,
  Puzzle,
  X,
} from 'lucide-react';
import { CERTIFICATION_DATA, HACKATHON_DATA } from '../data/portfolioData';

export const CertificationsAndExperience: React.FC = () => {
  const [showCertModal, setShowCertModal] = useState(false);

  const getHighlightIcon = (title: string) => {
    switch (title) {
      case 'Team Collaboration':
        return <Users className="w-4 h-4 text-[#3B82F6]" />;
      case 'Rapid Prototyping':
        return <Zap className="w-4 h-4 text-[#22D3EE]" />;
      case 'Problem-Solving':
        return <Puzzle className="w-4 h-4 text-[#8B5CF6]" />;
      default:
        return <Lightbulb className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  return (
    <>
      {/* 7. CERTIFICATIONS SECTION */}
      <section
        id="certifications"
        className="relative py-20 md:py-28 border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="text-xs font-mono text-[#3B82F6] tracking-wider">
              04. CERTIFICATIONS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              Learning Never Stops.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8]">
              Verified coursework and industry-recognized technical training in
              data science and software engineering.
            </p>
          </div>

          {/* IBM Python for Data Science Card */}
          <div className="relative rounded-2xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.09] hover:border-[#3B82F6]/50 p-7 sm:p-10 transition-all duration-200 hover:shadow-[0_0_36px_-8px_rgba(59,130,246,0.25)] overflow-hidden">
            {/* IBM-inspired Blue Horizon Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F62FE] via-[#3B82F6] to-[#22D3EE]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: IBM Brand-Inspired Visual Emblem & Details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  {/* IBM-Style Striped Monogram Badge */}
                  <div className="w-16 h-16 rounded-xl bg-[#080B12] border border-[#3B82F6]/40 flex flex-col items-center justify-center p-2 shadow-[0_0_20px_rgba(15,98,254,0.25)]">
                    <span className="font-mono text-lg font-extrabold tracking-widest text-[#60A5FA] leading-none border-y-2 border-dashed border-[#3B82F6]/60 py-1 px-1.5">
                      IBM
                    </span>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
                      <Award className="w-4 h-4" />
                      <span>PROFESSIONAL CERTIFICATION</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] mt-0.5">
                      {CERTIFICATION_DATA.title} — {CERTIFICATION_DATA.issuer}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                  {CERTIFICATION_DATA.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {CERTIFICATION_DATA.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#CBD5E1]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Action Card */}
              <div className="lg:col-span-4 flex flex-col justify-between bg-[#080B12]/90 rounded-xl border border-white/[0.08] p-6 space-y-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-[#64748B]">
                    ISSUING ORGANIZATION
                  </div>
                  <div className="font-display text-lg font-semibold text-[#F8FAFC]">
                    IBM SkillsBuild / Cognitive Class
                  </div>
                  <div className="text-xs font-mono text-[#22D3EE]">
                    Domain: Python · Data Science
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCertModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HACKATHONS & EXPERIENCE SECTION */}
      <section
        id="experience"
        className="relative py-20 md:py-28 border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="text-xs font-mono text-[#8B5CF6] tracking-wider">
              05. HACKATHONS &amp; EXPERIENCE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              Building Beyond the Classroom.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8]">
              Applying classroom concepts to collaborative, rapid-prototyping
              engineering environments.
            </p>
          </div>

          <div className="relative rounded-2xl bg-[#0E131F]/75 backdrop-blur-xl border border-white/[0.08] p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 5 Cols: Experience Narrative */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
                  <Terminal className="w-4 h-4" />
                  <span>{HACKATHON_DATA.institution.toUpperCase()}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  {HACKATHON_DATA.role}
                </h3>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {HACKATHON_DATA.description}
                </p>
              </div>

              {/* Right 7 Cols: 4 Core Highlights */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HACKATHON_DATA.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[#080B12]/90 border border-white/[0.07] hover:border-[#8B5CF6]/40 p-5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#151C2C] border border-white/[0.08] flex items-center justify-center">
                        {getHighlightIcon(item.title)}
                      </div>
                      <h4 className="font-display text-base font-semibold text-[#F8FAFC]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Verification Preview Modal */}
      {showCertModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0B0E17] border border-[#3B82F6]/40 shadow-[0_24px_64px_rgba(0,0,0,0.85)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#0F62FE] via-[#3B82F6] to-[#22D3EE]" />
            <div className="flex items-center justify-between px-6 py-4 bg-[#0E131F] border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
                <Award className="w-4 h-4" />
                <span>CREDENTIAL PLACEHOLDER PREVIEW</span>
              </div>
              <button
                type="button"
                onClick={() => setShowCertModal(false)}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer"
                aria-label="Close certificate preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-[#080B12] border border-white/[0.08] p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded bg-[#3B82F6]/15 border border-[#3B82F6]/30 font-mono text-xs text-[#60A5FA]">
                  IBM · PYTHON FOR DATA SCIENCE
                </div>
                <h3
                  id="cert-modal-title"
                  className="font-display text-2xl font-bold text-[#F8FAFC]"
                >
                  Ravichandra H
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  Has successfully completed the curriculum for{' '}
                  <strong className="text-[#F8FAFC]">
                    Python for Data Science
                  </strong>{' '}
                  issued by IBM.
                </p>
              </div>

              <div className="rounded-lg bg-[#0E131F] border border-white/[0.07] p-4 text-xs font-mono text-[#94A3B8] space-y-1">
                <div className="text-[#22D3EE]">
                  CERTIFICATE LINK PLACEHOLDER
                </div>
                <div className="break-all text-[#64748B]">
                  {CERTIFICATION_DATA.credentialUrlPlaceholder}
                </div>
                <p className="text-[11px] text-[#64748B] pt-1 font-sans">
                  Ready to link directly to the official IBM verification URL as
                  soon as the public credential link is provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
