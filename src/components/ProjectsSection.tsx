import React, { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  X,
  Copy,
  Check,
  BookOpen,
  ShoppingCart,
  Wallet,
  CloudRain,
  Thermometer,
  Droplets,
  Gauge,
  Plus,
  RefreshCw,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

const ProjectVisualIllustration: React.FC<{ project: ProjectItem }> = ({ project }) => {
  if (project.id === 'online-bookstore') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#080B12] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 ease-out">
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#3B82F6]/15 blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        {/* Browser Mock Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
            <span className="ml-2 text-[11px] font-mono text-[#94A3B8]">
              bookstore.app · Supabase Auth
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#22D3EE]">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Simulated Book Grid */}
        <div className="grid grid-cols-3 gap-2.5 my-4">
          {[
            { title: 'Deep Learning', tag: 'AI & ML', price: '₹649', color: 'from-[#3B82F6]/30 to-[#1D4ED8]/10' },
            { title: 'Modern React', tag: 'Web Dev', price: '₹499', color: 'from-[#8B5CF6]/30 to-[#6D28D9]/10' },
            { title: 'SQL Internals', tag: 'Database', price: '₹579', color: 'from-[#22D3EE]/30 to-[#0891B2]/10' },
          ].map((book) => (
            <div
              key={book.title}
              className={`rounded-lg p-2.5 bg-gradient-to-b ${book.color} border border-white/[0.08] flex flex-col justify-between`}
            >
              <BookOpen className="w-4 h-4 text-[#F8FAFC] mb-2" />
              <div>
                <div className="text-[11px] font-medium text-[#F8FAFC] truncate">
                  {book.title}
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8]">
                  {book.tag} · {book.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/[0.06]">
          <span>React Router DOM · Vite</span>
          <span className="text-[#60A5FA]">Vercel Cloud Ready</span>
        </div>
      </div>
    );
  }

  if (project.id === 'finance-assistant') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#080B12] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 ease-out">
        <div
          className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#8B5CF6]/15 blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C4B5FD]">
            <Wallet className="w-4 h-4 text-[#8B5CF6]" />
            <span>finance_assistant.py</span>
          </div>
          <span className="text-[11px] font-mono text-[#94A3B8]">
            Budget Utility
          </span>
        </div>

        {/* Budget Allocation Visual Bars */}
        <div className="space-y-3 my-4">
          {[
            { label: 'Academic & Books', pct: '32%', width: 'w-1/3', bar: 'bg-[#3B82F6]' },
            { label: 'Living & Essentials', pct: '48%', width: 'w-1/2', bar: 'bg-[#8B5CF6]' },
            { label: 'Savings Reserve', pct: '20%', width: 'w-1/5', bar: 'bg-[#22D3EE]' },
          ].map((row) => (
            <div key={row.label} className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-[#CBD5E1]">{row.label}</span>
                <span className="text-[#94A3B8] tabular-nums">{row.pct}</span>
              </div>
              <div className="h-2 rounded-full bg-[#151C2C] overflow-hidden">
                <div className={`h-full rounded-full ${row.bar} ${row.width}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/[0.06]">
          <span>Python 3 · Modular CLI/Utility</span>
          <span className="text-[#C4B5FD]">Real-Time Ledger</span>
        </div>
      </div>
    );
  }

  // IoT Weather Monitoring System
  return (
    <div className="w-full h-full min-h-[260px] bg-[#080B12] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 ease-out">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#22D3EE]/12 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE]">
          <CloudRain className="w-4 h-4" />
          <span>IoT Sensor Node #01</span>
        </div>
        <span className="text-[11px] font-mono text-[#94A3B8]">
          Serial Telemetry
        </span>
      </div>

      {/* Sensor Metric Readouts */}
      <div className="grid grid-cols-3 gap-2.5 my-4">
        <div className="rounded-lg bg-[#0E131F] border border-white/[0.07] p-2.5">
          <Thermometer className="w-4 h-4 text-[#22D3EE] mb-1.5" />
          <div className="text-sm font-mono font-semibold text-[#F8FAFC] tabular-nums">
            26.4°C
          </div>
          <div className="text-[10px] font-mono text-[#64748B]">Temperature</div>
        </div>
        <div className="rounded-lg bg-[#0E131F] border border-white/[0.07] p-2.5">
          <Droplets className="w-4 h-4 text-[#3B82F6] mb-1.5" />
          <div className="text-sm font-mono font-semibold text-[#F8FAFC] tabular-nums">
            62.0%
          </div>
          <div className="text-[10px] font-mono text-[#64748B]">Humidity</div>
        </div>
        <div className="rounded-lg bg-[#0E131F] border border-white/[0.07] p-2.5">
          <Gauge className="w-4 h-4 text-[#8B5CF6] mb-1.5" />
          <div className="text-sm font-mono font-semibold text-[#F8FAFC] tabular-nums">
            1012 hPa
          </div>
          <div className="text-[10px] font-mono text-[#64748B]">Pressure</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/[0.06]">
        <span>Hardware Sensors · Embedded C</span>
        <span className="text-[#22D3EE]">Continuous Logging</span>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(
    null
  );
  const [modalTab, setModalTab] = useState<'preview' | 'code'>('preview');
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive states inside the Project Preview modal
  const [bookCategory, setBookCategory] = useState<'All' | 'AI & ML' | 'Web Dev'>('All');
  const [cartCount, setCartCount] = useState(1);

  const [budgetLimit] = useState(15000);
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'AI/ML Reference Textbooks', amount: 1850 },
    { id: 2, title: 'Cloud & Domain Lab Setup', amount: 1200 },
    { id: 3, title: 'Monthly Campus & Dining', amount: 5400 },
  ]);

  const [weatherReadings, setWeatherReadings] = useState({
    temp: 26.4,
    humidity: 62,
    pressure: 1012,
    samples: 14,
  });

  const openProjectModal = (project: ProjectItem, initialTab: 'preview' | 'code') => {
    setActiveModalProject(project);
    setModalTab(initialTab);
    setCopiedCode(false);
  };

  const handleCopySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleAddSampleExpense = () => {
    const sampleItems = [
      { title: 'IoT Sensor Module Kit', amount: 950 },
      { title: 'Hackathon Team Supplies', amount: 600 },
      { title: 'Data Science Course Lab', amount: 1100 },
    ];
    const pick = sampleItems[expenses.length % sampleItems.length];
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), title: pick.title, amount: pick.amount },
    ]);
  };

  const handleSampleWeather = () => {
    setWeatherReadings((prev) => ({
      temp: Number((25.5 + Math.random() * 2.8).toFixed(1)),
      humidity: Math.round(58 + Math.random() * 10),
      pressure: Math.round(1009 + Math.random() * 6),
      samples: prev.samples + 1,
    }));
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-[#22D3EE] tracking-wider">
            03. FEATURED PROJECTS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Things I've Built.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A curated selection of full-stack web applications, Python utilities,
            and IoT hardware-software systems engineered from the ground up.
          </p>
        </div>

        {/* Featured Project Cards */}
        <div className="space-y-10">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-[#0E131F]/75 backdrop-blur-xl border border-white/[0.08] hover:border-[#3B82F6]/50 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_36px_-8px_rgba(59,130,246,0.22)]"
            >
              {/* Top Gradient Border Line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-[#3B82F6]/60 via-[#8B5CF6]/50 to-[#22D3EE]/60" />

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left 5 Columns: Interactive Visual Preview */}
                <div
                  onClick={() => openProjectModal(project, 'preview')}
                  className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/[0.08] overflow-hidden cursor-pointer relative"
                >
                  <ProjectVisualIllustration project={project} />
                </div>

                {/* Right 7 Columns: Project Specification & Actions */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Project Index & Subtitle */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-[#3B82F6] font-semibold tabular-nums">
                        PROJECT {project.index} · {project.subtitle.toUpperCase()}
                      </span>
                      <span className="text-[#64748B]">
                        {project.technologies.join(' · ')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="pt-2">
                      <div className="text-xs font-mono text-[#64748B] mb-2.5">
                        KEY CAPABILITIES
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-xs sm:text-sm text-[#CBD5E1]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openProjectModal(project, 'preview')}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>{project.primaryButtonLabel}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openProjectModal(project, 'code')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-[#F8FAFC] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-[#8B5CF6]/50 transition-all cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <Code2 className="w-4 h-4 text-[#8B5CF6]" />
                        <span>{project.secondaryButtonLabel}</span>
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-[#64748B]">
                      Interactive Preview Available
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview & Code Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0B0E17] border border-[#22D3EE]/30 shadow-[0_24px_64px_rgba(0,0,0,0.85)] overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0E131F] border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-[#22D3EE]">
                  PROJECT {activeModalProject.index} · INTERACTIVE INSPECTOR
                </span>
                <h3
                  id="modal-project-title"
                  className="font-display text-xl font-bold text-[#F8FAFC]"
                >
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Tab Switcher */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#080B12] border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setModalTab('preview')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    modalTab === 'preview'
                      ? 'bg-[#3B82F6] text-white'
                      : 'text-[#94A3B8] hover:text-white bg-white/[0.04]'
                  }`}
                >
                  Interactive Walkthrough
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('code')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    modalTab === 'code'
                      ? 'bg-[#3B82F6] text-white'
                      : 'text-[#94A3B8] hover:text-white bg-white/[0.04]'
                  }`}
                >
                  Source Code ({activeModalProject.codeSnippet.filename})
                </button>
              </div>

              <span className="hidden sm:inline text-[11px] font-mono text-[#64748B]">
                {activeModalProject.technologies.join(' · ')}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {modalTab === 'preview' ? (
                <>
                  {/* Architecture Overview */}
                  <div className="rounded-xl bg-[#0E131F] border border-white/[0.08] p-4 space-y-2">
                    <div className="text-xs font-mono text-[#60A5FA]">
                      SYSTEM ARCHITECTURE
                    </div>
                    <p className="text-sm text-[#CBD5E1] leading-relaxed">
                      {activeModalProject.architectureNotes}
                    </p>
                  </div>

                  {/* Interactive Project-Specific Sandbox */}
                  {activeModalProject.id === 'online-bookstore' && (
                    <div className="rounded-xl bg-[#080B12] border border-white/[0.08] p-5 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                        <div className="text-xs font-mono text-[#22D3EE]">
                          INTERACTIVE STOREFRONT SIMULATION
                        </div>
                        <div className="flex items-center gap-2">
                          {(['All', 'AI & ML', 'Web Dev'] as const).map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setBookCategory(cat)}
                              className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer ${
                                bookCategory === cat
                                  ? 'bg-[#3B82F6] text-white'
                                  : 'bg-[#0E131F] text-[#94A3B8]'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                          <span className="ml-2 text-xs font-mono text-[#22D3EE]">
                            Cart: {cartCount}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { title: 'Hands-On Machine Learning', cat: 'AI & ML', price: '₹799' },
                          { title: 'Python Data Science Handbook', cat: 'AI & ML', price: '₹649' },
                          { title: 'Full-Stack React & Supabase', cat: 'Web Dev', price: '₹549' },
                        ]
                          .filter(
                            (b) => bookCategory === 'All' || b.cat === bookCategory
                          )
                          .map((book) => (
                            <div
                              key={book.title}
                              className="p-3.5 rounded-lg bg-[#0E131F] border border-white/[0.07] flex flex-col justify-between gap-3"
                            >
                              <div>
                                <div className="text-xs font-mono text-[#60A5FA]">
                                  {book.cat}
                                </div>
                                <div className="text-sm font-medium text-[#F8FAFC] mt-0.5">
                                  {book.title}
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                                <span className="text-xs font-mono text-[#94A3B8]">
                                  {book.price}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setCartCount((c) => c + 1)}
                                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#3B82F6]/20 text-[#60A5FA] hover:bg-[#3B82F6] hover:text-white transition-colors cursor-pointer"
                                >
                                  + Add
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {activeModalProject.id === 'finance-assistant' && (
                    <div className="rounded-xl bg-[#080B12] border border-white/[0.08] p-5 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                        <div className="text-xs font-mono text-[#C4B5FD]">
                          PYTHON BUDGET TRACKER SIMULATION
                        </div>
                        <button
                          type="button"
                          onClick={handleAddSampleExpense}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-mono bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Log Sample Expense</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-[11px] font-mono text-[#64748B]">
                            Monthly Limit
                          </div>
                          <div className="text-base font-mono font-semibold text-[#F8FAFC] tabular-nums">
                            ₹{budgetLimit.toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-[11px] font-mono text-[#64748B]">
                            Total Spent
                          </div>
                          <div className="text-base font-mono font-semibold text-[#60A5FA] tabular-nums">
                            ₹
                            {expenses
                              .reduce((acc, item) => acc + item.amount, 0)
                              .toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-[11px] font-mono text-[#64748B]">
                            Remaining
                          </div>
                          <div className="text-base font-mono font-semibold text-[#22D3EE] tabular-nums">
                            ₹
                            {(
                              budgetLimit -
                              expenses.reduce((acc, item) => acc + item.amount, 0)
                            ).toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 max-h-36 overflow-y-auto">
                        {expenses.map((exp) => (
                          <div
                            key={exp.id}
                            className="flex items-center justify-between px-3 py-2 rounded bg-[#0E131F]/70 text-xs font-mono"
                          >
                            <span className="text-[#CBD5E1]">{exp.title}</span>
                            <span className="text-[#94A3B8] tabular-nums">
                              -₹{exp.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeModalProject.id === 'iot-weather-monitoring' && (
                    <div className="rounded-xl bg-[#080B12] border border-white/[0.08] p-5 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                        <div className="text-xs font-mono text-[#22D3EE]">
                          LIVE SENSOR TELEMETRY LOGGER
                        </div>
                        <button
                          type="button"
                          onClick={handleSampleWeather}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-[#22D3EE]/20 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#080B12] transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Poll Sensor Frame (#{weatherReadings.samples})</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-xs font-mono text-[#64748B]">
                            Temperature
                          </div>
                          <div className="text-xl font-mono font-bold text-[#22D3EE] tabular-nums mt-1">
                            {weatherReadings.temp}°C
                          </div>
                        </div>
                        <div className="p-3.5 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-xs font-mono text-[#64748B]">
                            Humidity
                          </div>
                          <div className="text-xl font-mono font-bold text-[#60A5FA] tabular-nums mt-1">
                            {weatherReadings.humidity}%
                          </div>
                        </div>
                        <div className="p-3.5 rounded-lg bg-[#0E131F] border border-white/[0.06]">
                          <div className="text-xs font-mono text-[#64748B]">
                            Pressure
                          </div>
                          <div className="text-xl font-mono font-bold text-[#C4B5FD] tabular-nums mt-1">
                            {weatherReadings.pressure} hPa
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Explicit URL Placeholder Notice (Per User Prompt Requirement) */}
                  <div className="rounded-xl bg-[#0E131F]/90 border border-white/[0.08] p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                      <span>EXTERNAL DEPLOYMENT &amp; REPOSITORY PLACEHOLDERS</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
                    </div>
                    <div className="text-xs font-mono text-[#64748B] space-y-1">
                      <div>
                        Live Demo URL:{' '}
                        <code className="text-[#CBD5E1]">
                          {activeModalProject.demoUrlPlaceholder}
                        </code>
                      </div>
                      <div>
                        Repository URL:{' '}
                        <code className="text-[#CBD5E1]">
                          {activeModalProject.repoUrlPlaceholder}
                        </code>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-xl bg-[#080B12] border border-white/[0.08] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E131F] border-b border-white/[0.06]">
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {activeModalProject.codeSnippet.filename}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopySnippet(activeModalProject.codeSnippet.code)
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-[#94A3B8] hover:text-white bg-white/[0.04] cursor-pointer"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#22D3EE]" />
                          <span className="text-[#22D3EE]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs sm:text-[13px] font-mono leading-relaxed text-[#E2E8F0] overflow-x-auto">
                    <code>{activeModalProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
