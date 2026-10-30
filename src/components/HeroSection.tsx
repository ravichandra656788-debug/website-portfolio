import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Play,
  Copy,
  Check,
  Terminal,
  Cpu,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { HERO_ROLES, CONTACT_INFO } from '../data/portfolioData';

const PYTHON_HERO_SNIPPET = `class AIMLEngineer:
    def __init__(self):
        self.name = "Ravichandra H"
        self.university = "REVA University"
        self.degree = "B.Tech AI & ML (3rd Sem)"
        self.stack = ["Python", "ReactJS", "PostgreSQL", "IoT"]

    def build_solution(self, problem: str) -> dict:
        return {
            "architect": self.name,
            "target": problem,
            "approach": "Clean Code + Intelligent Systems",
            "ready_for_impact": True,
        }

engineer = AIMLEngineer()
print(engineer.build_solution("Real-World Innovation"))`;

const EXECUTION_OUTPUT = [
  '$ python3 ravichandra_profile.py',
  'Initializing AIMLEngineer(name="Ravichandra H")...',
  'Loaded stack: Python · ReactJS · Supabase · PostgreSQL · IoT',
  '{',
  '  "architect": "Ravichandra H",',
  '  "target": "Real-World Innovation",',
  '  "approach": "Clean Code + Intelligent Systems",',
  '  "ready_for_impact": True',
  '}',
];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '$ python3 ravichandra_profile.py --verify',
    'Ready. Click "Run Script" to execute profile module.',
  ]);
  const [activeNode, setActiveNode] = useState<string>('AI');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const workspaceRef = useRef<HTMLDivElement>(null);

  // Animated typing effect
  useEffect(() => {
    const currentRole = HERO_ROLES[roleIndex];
    const typeSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Subtle mouse-responsive parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!workspaceRef.current) return;
    const rect = workspaceRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    setParallax({
      x: Math.max(-1, Math.min(1, deltaX)) * 10,
      y: Math.max(-1, Math.min(1, deltaY)) * 10,
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PYTHON_HERO_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSnippet = () => {
    if (isRunningCode) return;
    setIsRunningCode(true);
    setTerminalLines([EXECUTION_OUTPUT[0]]);
    EXECUTION_OUTPUT.slice(1).forEach((line, idx) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
        if (idx === EXECUTION_OUTPUT.length - 2) {
          setIsRunningCode(false);
        }
      }, (idx + 1) * 140);
    });
  };

  const handleResetTerminal = () => {
    setTerminalLines([
      '$ python3 ravichandra_profile.py --verify',
      'Ready. Click "Run Script" to execute profile module.',
    ]);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const FLOATING_NODES = [
    {
      id: 'Python',
      label: 'Python',
      detail: 'AI/ML & Data Science Core',
      pos: 'top-3 left-4',
      accent: 'border-[#3B82F6]/40 text-[#3B82F6]',
    },
    {
      id: 'React',
      label: 'React',
      detail: 'Interactive Web Interfaces',
      pos: 'top-4 right-4',
      accent: 'border-[#22D3EE]/40 text-[#22D3EE]',
    },
    {
      id: 'JavaScript',
      label: 'JavaScript',
      detail: 'Full-Stack Web Logic',
      pos: 'bottom-28 left-2',
      accent: 'border-[#8B5CF6]/40 text-[#C4B5FD]',
    },
    {
      id: 'Git',
      label: 'Git',
      detail: 'Version Control & Collaboration',
      pos: 'bottom-28 right-3',
      accent: 'border-[#3B82F6]/40 text-[#93C5FD]',
    },
    {
      id: 'AI',
      label: 'AI / ML',
      detail: 'REVA University · B.Tech AIML',
      pos: 'top-1/2 -translate-y-1/2 right-2',
      accent: 'border-[#22D3EE]/50 text-[#22D3EE]',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Ambient Radial Mesh Glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-[#3B82F6]/[0.08] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[460px] h-[460px] rounded-full bg-[#8B5CF6]/[0.08] blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography, Typing Role, CTAs, Socials */}
          <div className="lg:col-span-6 space-y-6">
            {/* Availability Line */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#22D3EE] bg-[#0E131F]/90 border border-[#22D3EE]/25 px-3.5 py-1.5 rounded-md">
              <span className="text-[#22D3EE]" aria-hidden="true">
                ●
              </span>
              <span>OPEN TO INTERNSHIPS &amp; OPPORTUNITIES</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight text-[#F8FAFC] leading-[1.08] text-balance">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[#F8FAFC] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                  Ravichandra H.
                </span>
              </h1>

              {/* Animated Typing Text */}
              <div className="h-9 sm:h-11 flex items-center font-mono text-lg sm:text-xl md:text-2xl font-medium text-[#8B5CF6]">
                <span className="text-[#475569] mr-2 select-none">&gt;</span>
                <span className="text-[#E2E8F0]">{displayedText}</span>
                <span
                  className="inline-block w-2.5 h-5 sm:h-6 ml-1 bg-[#22D3EE] animate-pulse"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
              I'm an AIML undergraduate passionate about building intelligent
              applications, developing modern web experiences, and turning
              innovative ideas into real-world solutions.
            </p>

            {/* Academic Context Line (Unboxed clean metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
              <span className="text-[#94A3B8]">REVA University</span>
              <span aria-hidden="true">·</span>
              <span>B.Tech AI &amp; ML</span>
              <span aria-hidden="true">·</span>
              <span>3rd Semester</span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_28px_rgba(34,211,238,0.55)] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-[#F8FAFC] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-[#8B5CF6]/50 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-4 border-t border-white/[0.08] max-w-md">
              <span className="text-xs font-mono text-[#64748B]">
                Connect directly
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E131F] border border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
                  aria-label="GitHub Profile (Jump to Contact Links)"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E131F] border border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
                  aria-label="LinkedIn Profile (Jump to Contact Links)"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E131F] border border-white/[0.08] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors"
                  aria-label={`Email ${CONTACT_INFO.email}`}
                  title={CONTACT_INFO.email}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D-Style AI Neural Network & Floating Code Workspace */}
          <div
            ref={workspaceRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative"
          >
            <div
              className="relative rounded-2xl bg-[#0E131F]/80 backdrop-blur-xl border border-white/[0.09] p-4 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${parallax.x * 0.45}deg) rotateX(${-parallax.y * 0.45}deg)`,
              }}
            >
              {/* Top Gradient Hairline */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent" />

              {/* Interactive Neural Network & Orbit Header Canvas */}
              <div className="relative h-48 sm:h-52 mb-4 rounded-xl bg-[#080B12] border border-white/[0.06] overflow-hidden flex items-center justify-center">
                {/* Subtle Grid Backdrop */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Animated Neural Network SVG */}
                <svg
                  className="w-full h-full max-w-[420px] max-h-[200px]"
                  viewBox="0 0 420 200"
                  fill="none"
                  aria-label="Interactive AI Neural Network Schematic"
                >
                  <defs>
                    <linearGradient id="neuralGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.65" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Orbit Rings */}
                  <ellipse
                    cx="210"
                    cy="100"
                    rx="145"
                    ry="68"
                    stroke="url(#neuralGrad)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    className="animate-orbit-pulse"
                  />
                  <ellipse
                    cx="210"
                    cy="100"
                    rx="95"
                    ry="44"
                    stroke="#3B82F6"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />

                  {/* Neural Synapses */}
                  <line x1="85" y1="55" x2="210" y2="100" stroke="url(#neuralGrad)" strokeWidth="1.2" />
                  <line x1="85" y1="145" x2="210" y2="100" stroke="url(#neuralGrad)" strokeWidth="1.2" />
                  <line x1="335" y1="55" x2="210" y2="100" stroke="url(#neuralGrad)" strokeWidth="1.2" />
                  <line x1="335" y1="145" x2="210" y2="100" stroke="url(#neuralGrad)" strokeWidth="1.2" />
                  <line x1="210" y1="35" x2="210" y2="100" stroke="url(#neuralGrad)" strokeWidth="1.2" />
                  <line x1="85" y1="55" x2="210" y2="35" stroke="#3B82F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="335" y1="55" x2="210" y2="35" stroke="#22D3EE" strokeOpacity="0.25" strokeWidth="1" />

                  {/* Outer Layer Nodes */}
                  <circle cx="85" cy="55" r="6" fill="#3B82F6" />
                  <circle cx="85" cy="145" r="6" fill="#8B5CF6" />
                  <circle cx="335" cy="55" r="6" fill="#22D3EE" />
                  <circle cx="335" cy="145" r="6" fill="#3B82F6" />
                  <circle cx="210" cy="35" r="5" fill="#22D3EE" />

                  {/* Central Core Node */}
                  <circle
                    cx="210"
                    cy="100"
                    r="24"
                    fill="#0E131F"
                    stroke="url(#neuralGrad)"
                    strokeWidth="2"
                  />
                </svg>

                {/* Central Core Icon */}
                <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                  <Cpu className="w-5 h-5 text-[#22D3EE]" />
                </div>

                {/* Interactive Floating Technology Nodes */}
                {FLOATING_NODES.map((node) => {
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(node.id)}
                      className={`absolute ${node.pos} px-2.5 py-1 rounded-md text-xs font-mono bg-[#0E131F]/95 border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'border-[#22D3EE] text-[#F8FAFC] shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105'
                          : `${node.accent} hover:border-white/30`
                      }`}
                    >
                      {node.label}
                    </button>
                  );
                })}

                {/* Active Node Telemetry Caption */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] bg-[#0E131F]/90 px-3 py-1 rounded border border-white/[0.06]">
                  <span>
                    Focus:{' '}
                    <strong className="text-[#22D3EE] font-medium">
                      {FLOATING_NODES.find((n) => n.id === activeNode)?.label}
                    </strong>
                  </span>
                  <span className="truncate ml-2 text-[#64748B]">
                    {FLOATING_NODES.find((n) => n.id === activeNode)?.detail}
                  </span>
                </div>
              </div>

              {/* Floating Python Code Editor Card */}
              <div className="rounded-xl bg-[#080B12] border border-white/[0.08] overflow-hidden">
                {/* Editor Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E131F] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                    <span className="ml-2 text-xs font-mono text-[#94A3B8]">
                      ravichandra_profile.py
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
                      aria-label="Copy Python snippet"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#22D3EE]" />
                          <span className="text-[#22D3EE]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleRunSnippet}
                      disabled={isRunningCode}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-white bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isRunningCode ? 'Running...' : 'Run Script'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Block Content */}
                <pre className="p-4 text-xs sm:text-[13px] font-mono leading-relaxed text-[#E2E8F0] overflow-x-auto">
                  <code>
                    <span className="text-[#8B5CF6]">class</span>{' '}
                    <span className="text-[#22D3EE]">AIMLEngineer</span>:
                    {'\n'}
                    {'    '}
                    <span className="text-[#8B5CF6]">def</span>{' '}
                    <span className="text-[#3B82F6]">__init__</span>(self):
                    {'\n'}
                    {'        '}self.name ={' '}
                    <span className="text-[#60A5FA]">"Ravichandra H"</span>
                    {'\n'}
                    {'        '}self.university ={' '}
                    <span className="text-[#60A5FA]">"REVA University"</span>
                    {'\n'}
                    {'        '}self.degree ={' '}
                    <span className="text-[#60A5FA]">"B.Tech AI &amp; ML (3rd Sem)"</span>
                    {'\n'}
                    {'        '}self.stack = [
                    <span className="text-[#60A5FA]">"Python"</span>,{' '}
                    <span className="text-[#60A5FA]">"ReactJS"</span>,{' '}
                    <span className="text-[#60A5FA]">"PostgreSQL"</span>,{' '}
                    <span className="text-[#60A5FA]">"IoT"</span>]{'\n\n'}
                    {'    '}
                    <span className="text-[#8B5CF6]">def</span>{' '}
                    <span className="text-[#3B82F6]">build_solution</span>(self, problem:{' '}
                    <span className="text-[#22D3EE]">str</span>) -&gt;{' '}
                    <span className="text-[#22D3EE]">dict</span>:{'\n'}
                    {'        '}
                    <span className="text-[#8B5CF6]">return</span> {'{'}
                    {'\n'}
                    {'            '}
                    <span className="text-[#60A5FA]">"architect"</span>: self.name,
                    {'\n'}
                    {'            '}
                    <span className="text-[#60A5FA]">"target"</span>: problem,
                    {'\n'}
                    {'            '}
                    <span className="text-[#60A5FA]">"approach"</span>:{' '}
                    <span className="text-[#60A5FA]">
                      "Clean Code + Intelligent Systems"
                    </span>
                    {'\n'}
                    {'        '}
                    {'}'}
                  </code>
                </pre>

                {/* Live Interactive Terminal Drawer */}
                <div className="bg-[#0B0E17] border-t border-white/[0.06] px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                      <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span>Interactive Python Output</span>
                    </div>
                    {terminalLines.length > 2 && (
                      <button
                        type="button"
                        onClick={handleResetTerminal}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#64748B] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Clear</span>
                      </button>
                    )}
                  </div>
                  <div className="font-mono text-xs space-y-0.5 max-h-28 overflow-y-auto text-[#94A3B8]">
                    {terminalLines.map((line, i) => (
                      <div
                        key={i}
                        className={
                          i === 0
                            ? 'text-[#22D3EE]'
                            : line.includes('"architect"') ||
                                line.includes('"ready_for_impact"')
                              ? 'text-[#60A5FA]'
                              : 'text-[#94A3B8]'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pt-10 flex justify-center">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="group inline-flex flex-col items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#F8FAFC] transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-[#3B82F6] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
