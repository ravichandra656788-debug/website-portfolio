/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsAndExperience } from './components/CertificationsAndExperience';
import { ContactAndFooter } from './components/ContactAndFooter';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { ArrowUp } from 'lucide-react';

const TRACKED_SECTIONS = [
  'home',
  'about',
  'skills',
  'projects',
  'certifications',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showFloatingTop, setShowFloatingTop] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
      setShowFloatingTop(scrollTop > 520);

      // Determine active section
      const viewportMiddle = scrollTop + window.innerHeight * 0.35;
      for (let i = TRACKED_SECTIONS.length - 1; i >= 0; i--) {
        const id = TRACKED_SECTIONS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportMiddle) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] relative selection:bg-[#3B82F6]/30 selection:text-[#22D3EE]">
      {/* Animated Neural Constellation, Aurora & Grid Background */}
      <BackgroundAnimation />

      {/* Subtle Desktop Cursor Ambient Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(59, 130, 246, 0.065), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsAndExperience />
        <ContactAndFooter />
      </main>

      {/* Floating Back-to-Top Action */}
      {showFloatingTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-[#0E131F]/90 hover:bg-[#3B82F6] text-[#F8FAFC] border border-white/[0.12] hover:border-[#22D3EE] shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center justify-center transition-all duration-150 cursor-pointer"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
