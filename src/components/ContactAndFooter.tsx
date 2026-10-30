import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ArrowUp,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactAndFooter: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (value: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* 9. CONTACT SECTION */}
      <section
        id="contact"
        className="relative py-20 md:py-28 border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="text-xs font-mono text-[#22D3EE] tracking-wider">
              06. GET IN TOUCH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              Have an Idea? Let's Build It.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              I'm always interested in connecting with developers, exploring
              opportunities, and building exciting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Columns: Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-5">
              {/* Email Card */}
              <div className="rounded-xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.08] p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-[#151C2C] border border-[#3B82F6]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-[#64748B]">EMAIL</div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm sm:text-base font-medium text-[#F8FAFC] hover:text-[#60A5FA] truncate block transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#94A3B8] hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <span className="inline-flex items-center gap-1 text-[#22D3EE]">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.08] p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-[#151C2C] border border-[#22D3EE]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#22D3EE]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-[#64748B]">PHONE</div>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-sm sm:text-base font-medium text-[#F8FAFC] hover:text-[#22D3EE] transition-colors tabular-nums"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#94A3B8] hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <span className="inline-flex items-center gap-1 text-[#22D3EE]">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </span>
                  )}
                </button>
              </div>

              {/* University & Social Profiles Card */}
              <div className="rounded-xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.08] p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8B5CF6] mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-[#F8FAFC]">
                      {CONTACT_INFO.university}
                    </div>
                    <div className="text-xs text-[#94A3B8] mt-0.5">
                      {CONTACT_INFO.program}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                  <div className="text-xs font-mono text-[#64748B]">
                    DEVELOPER PROFILES
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={CONTACT_INFO.githubPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#080B12] border border-white/[0.08] hover:border-[#3B82F6]/50 text-xs font-mono text-[#CBD5E1] hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-[#3B82F6]" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={CONTACT_INFO.linkedinPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#080B12] border border-white/[0.08] hover:border-[#22D3EE]/50 text-xs font-mono text-[#CBD5E1] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#22D3EE]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Contact Form Prototype */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.09] p-7 sm:p-9 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <h3 className="font-display text-xl font-semibold text-[#F8FAFC]">
                    Send a Message
                  </h3>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    Frontend Form Prototype · Direct Mailto Ready
                  </span>
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-[#080B12] border border-[#22D3EE]/40 p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22D3EE] shrink-0" />
                      <div>
                        <h4 className="font-display text-lg font-semibold text-[#F8FAFC]">
                          Message Prepared for {CONTACT_INFO.name}
                        </h4>
                        <p className="text-xs text-[#94A3B8]">
                          This frontend form prototype has formatted your message.
                          You can launch your email client below to send it
                          directly to {CONTACT_INFO.email}.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleOpenMailClient}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Email Client</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                          });
                        }}
                        className="px-4 py-2.5 rounded-lg text-xs font-mono text-[#94A3B8] hover:text-white bg-white/[0.04] cursor-pointer"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono text-[#94A3B8] mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Your name"
                          className="w-full h-11 px-4 rounded-lg bg-[#080B12]/80 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-[#94A3B8] mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="you@example.com"
                          className="w-full h-11 px-4 rounded-lg bg-[#080B12]/80 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono text-[#94A3B8] mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                        placeholder="Internship Opportunity / Project Collaboration"
                        className="w-full h-11 px-4 rounded-lg bg-[#080B12]/80 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono text-[#94A3B8] mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell me about your project, team, or opportunity..."
                        className="w-full p-4 rounded-lg bg-[#080B12]/80 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>

                      <span className="text-xs font-mono text-[#64748B]">
                        Or email directly: {CONTACT_INFO.email}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#06090F] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
            {/* Brand & Builder Credit */}
            <div className="space-y-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="font-display text-2xl font-bold tracking-tight inline-block"
              >
                <span className="bg-gradient-to-r from-[#F8FAFC] via-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
                  RH.
                </span>
              </a>
              <p className="text-sm text-[#94A3B8]">
                Designed &amp; Built by Ravichandra H.
              </p>
            </div>

            {/* Footer Navigation Links */}
            <nav
              className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8]"
              aria-label="Footer Navigation"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="hover:text-[#F8FAFC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Socials & Back to Top */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0E131F] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0E131F] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#22D3EE]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0E131F] hover:bg-[#151C2C] border border-white/[0.08] text-xs font-mono text-[#CBD5E1] hover:text-[#22D3EE] transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <div>
              © {currentYear} Ravichandra H. All rights reserved.
            </div>
            <div className="font-mono">
              REVA University · B.Tech AI &amp; ML
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
