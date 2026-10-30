export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend Development' | 'Backend & Database' | 'Developer Tools';
  description: string;
  accentColor: string;
  iconKey: string;
  relatedProjects: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  demoUrlPlaceholder: string;
  repoUrlPlaceholder: string;
  accent: 'blue' | 'violet' | 'cyan';
  architectureNotes: string;
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

export const HERO_ROLES = [
  'AI & Machine Learning Enthusiast',
  'Full-Stack Developer',
  'Python Programmer',
  'Creative Problem Solver',
];

export const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'Developer Mindset',
    description:
      'Focused on writing clean code and building practical software solutions.',
    highlight: 'Modular Architecture · Maintainable Logic',
  },
  {
    number: '02',
    title: 'AI Enthusiast',
    description:
      'Interested in artificial intelligence, machine learning, and emerging technologies.',
    highlight: 'Data Science · Intelligent Workflows',
  },
  {
    number: '03',
    title: 'Continuous Learner',
    description:
      'Always exploring new tools, technologies, and innovative ideas.',
    highlight: 'Rapid Prototyping · Full-Stack Curiosity',
  },
];

export const EDUCATION_DATA = {
  institution: 'REVA University',
  degree: 'B.Tech – Artificial Intelligence and Machine Learning',
  status: 'Currently pursuing 3rd Semester',
  location: 'Bengaluru, Karnataka, India',
  focusAreas: [
    'Artificial Intelligence & Data Science Foundations',
    'Python Programming & Algorithmic Problem Solving',
    'Full-Stack Web Application Engineering',
    'IoT Sensor Systems & Hardware-Software Integration',
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    description: 'Data science workflows, automation utilities, and backend scripting.',
    accentColor: '#3B82F6',
    iconKey: 'python',
    relatedProjects: ['Finance Assistant'],
  },
  {
    name: 'C',
    category: 'Programming',
    description: 'Systems programming fundamentals, memory management, and embedded logic.',
    accentColor: '#8B5CF6',
    iconKey: 'c',
    relatedProjects: ['IoT Weather Monitoring System'],
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    description: 'Asynchronous web logic, DOM orchestration, and interactive UI state.',
    accentColor: '#22D3EE',
    iconKey: 'javascript',
    relatedProjects: ['Online Book Shopping Web Application'],
  },

  // Frontend Development
  {
    name: 'HTML5',
    category: 'Frontend Development',
    description: 'Semantic document structure and accessible web architecture.',
    accentColor: '#3B82F6',
    iconKey: 'html5',
    relatedProjects: ['Online Book Shopping Web Application'],
  },
  {
    name: 'CSS3',
    category: 'Frontend Development',
    description: 'Responsive grid layouts, fluid typography, and modern animations.',
    accentColor: '#8B5CF6',
    iconKey: 'css3',
    relatedProjects: ['Online Book Shopping Web Application'],
  },
  {
    name: 'ReactJS',
    category: 'Frontend Development',
    description: 'Component-driven interfaces, hooks state management, and SPA routing.',
    accentColor: '#22D3EE',
    iconKey: 'react',
    relatedProjects: ['Online Book Shopping Web Application'],
  },
  {
    name: 'Vite',
    category: 'Frontend Development',
    description: 'High-speed frontend build tooling and modern ES module bundling.',
    accentColor: '#8B5CF6',
    iconKey: 'vite',
    relatedProjects: ['Online Book Shopping Web Application'],
  },

  // Backend & Database
  {
    name: 'Supabase',
    category: 'Backend & Database',
    description: 'Authentication, real-time APIs, and managed backend services.',
    accentColor: '#22D3EE',
    iconKey: 'supabase',
    relatedProjects: ['Online Book Shopping Web Application'],
  },
  {
    name: 'PostgreSQL',
    category: 'Backend & Database',
    description: 'Relational schema design, structured queries, and transactional storage.',
    accentColor: '#3B82F6',
    iconKey: 'postgresql',
    relatedProjects: ['Online Book Shopping Web Application'],
  },

  // Developer Tools
  {
    name: 'Git',
    category: 'Developer Tools',
    description: 'Distributed version control, branching workflows, and code history.',
    accentColor: '#3B82F6',
    iconKey: 'git',
    relatedProjects: [
      'Online Book Shopping Web Application',
      'Finance Assistant',
      'IoT Weather Monitoring System',
    ],
  },
  {
    name: 'GitHub',
    category: 'Developer Tools',
    description: 'Repository hosting, collaborative code reviews, and project management.',
    accentColor: '#8B5CF6',
    iconKey: 'github',
    relatedProjects: [
      'Online Book Shopping Web Application',
      'Finance Assistant',
      'IoT Weather Monitoring System',
    ],
  },
  {
    name: 'VS Code',
    category: 'Developer Tools',
    description: 'Primary integrated development environment with debugging & extensions.',
    accentColor: '#3B82F6',
    iconKey: 'vscode',
    relatedProjects: [
      'Online Book Shopping Web Application',
      'Finance Assistant',
      'IoT Weather Monitoring System',
    ],
  },
  {
    name: 'Vercel',
    category: 'Developer Tools',
    description: 'Cloud deployment pipeline and edge hosting for modern web apps.',
    accentColor: '#22D3EE',
    iconKey: 'vercel',
    relatedProjects: ['Online Book Shopping Web Application'],
  },
  {
    name: 'IoT Hardware',
    category: 'Developer Tools',
    description: 'Environmental sensors, microcontrollers, and real-time telemetry logging.',
    accentColor: '#8B5CF6',
    iconKey: 'iot',
    relatedProjects: ['IoT Weather Monitoring System'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'online-bookstore',
    index: '01',
    title: 'Online Book Shopping Web Application',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'Developed a full-stack e-commerce bookstore that allows users to explore and purchase books, featuring authentication and database integration.',
    technologies: [
      'ReactJS',
      'Vite',
      'React Router DOM',
      'CSS',
      'Supabase',
      'PostgreSQL',
      'Vercel',
    ],
    features: [
      'Full-stack web application',
      'User authentication',
      'PostgreSQL database integration',
      'Responsive frontend',
      'Cloud deployment',
    ],
    primaryButtonLabel: 'Live Demo',
    secondaryButtonLabel: 'View Source Code',
    demoUrlPlaceholder: 'placeholder://online-book-shopping-live-demo',
    repoUrlPlaceholder: 'placeholder://github.com/ravichandra-h/online-book-shopping',
    accent: 'blue',
    architectureNotes:
      'Built with a modular ReactJS + Vite frontend routed via React Router DOM. User sessions and relational book catalog queries are powered by Supabase Auth and PostgreSQL, deployed on Vercel.',
    codeSnippet: {
      filename: 'bookstoreCatalogService.js',
      language: 'javascript',
      code: `import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function fetchBooksByCategory(category = 'all') {
  let query = supabase
    .from('books')
    .select('id, title, author, price, category, in_stock')
    .order('title', { ascending: true });

  if (category !== 'all') {
    query = query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}`,
    },
  },
  {
    id: 'finance-assistant',
    index: '02',
    title: 'Finance Assistant',
    subtitle: 'Python Personal Finance & Budget Utility',
    description:
      'Built a Python-based finance utility application designed to help users track their finances and manage personal budgets efficiently.',
    technologies: ['Python'],
    features: [
      'Personal finance tracking',
      'Budget management',
      'Simple and practical utility interface',
    ],
    primaryButtonLabel: 'View Project',
    secondaryButtonLabel: 'View Source Code',
    demoUrlPlaceholder: 'placeholder://finance-assistant-project-preview',
    repoUrlPlaceholder: 'placeholder://github.com/ravichandra-h/finance-assistant',
    accent: 'violet',
    architectureNotes:
      'Engineered in Python with clean modular functions for logging income and expenses, calculating category-wise budget utilization, and generating clear financial summaries.',
    codeSnippet: {
      filename: 'finance_assistant.py',
      language: 'python',
      code: `class BudgetTracker:
    def __init__(self, monthly_limit: float):
        self.monthly_limit = monthly_limit
        self.transactions: list[dict] = []

    def add_expense(self, title: str, category: str, amount: float) -> dict:
        entry = {"title": title, "category": category, "amount": round(amount, 2)}
        self.transactions.append(entry)
        return entry

    def get_summary(self) -> dict:
        total_spent = sum(item["amount"] for item in self.transactions)
        remaining = self.monthly_limit - total_spent
        return {
            "monthly_limit": self.monthly_limit,
            "total_spent": round(total_spent, 2),
            "remaining_balance": round(remaining, 2),
            "status": "Within Budget" if remaining >= 0 else "Over Budget",
        }`,
    },
  },
  {
    id: 'iot-weather-monitoring',
    index: '03',
    title: 'IoT Weather Monitoring System',
    subtitle: 'Real-Time Environmental Telemetry Solution',
    description:
      'Implemented an IoT-based hardware and software solution to monitor and log real-time environmental weather parameters.',
    technologies: ['IoT', 'Hardware', 'Software Development'],
    features: [
      'Environmental parameter monitoring',
      'Real-time data collection',
      'Weather data logging',
    ],
    primaryButtonLabel: 'View Project',
    secondaryButtonLabel: 'View Source Code',
    demoUrlPlaceholder: 'placeholder://iot-weather-monitoring-preview',
    repoUrlPlaceholder: 'placeholder://github.com/ravichandra-h/iot-weather-monitoring',
    accent: 'cyan',
    architectureNotes:
      'Integrates physical environmental sensors with microcontroller acquisition logic to sample temperature, relative humidity, and atmospheric pressure in real time and log structured telemetry.',
    codeSnippet: {
      filename: 'weather_logger.c',
      language: 'c',
      code: `typedef struct {
    float temperature_c;
    float humidity_pct;
    float pressure_hpa;
    unsigned long timestamp_ms;
} WeatherTelemetry;

WeatherTelemetry sample_environment(void) {
    WeatherTelemetry reading;
    reading.temperature_c = read_sensor_temp();
    reading.humidity_pct  = read_sensor_humidity();
    reading.pressure_hpa  = read_sensor_pressure();
    reading.timestamp_ms  = system_millis();
    log_serial_frame(&reading);
    return reading;
}`,
    },
  },
];

export const CERTIFICATION_DATA = {
  title: 'Python for Data Science',
  issuer: 'IBM',
  credentialUrlPlaceholder: 'placeholder://ibm-python-for-data-science-certificate',
  summary:
    'Comprehensive certification validating foundational mastery of Python programming for data science workflows, data structures, and analytical computing.',
  topics: [
    'Python Language Fundamentals & Data Structures',
    'Object-Oriented Programming & Functional Constructs',
    'Working with Data using Pandas & NumPy Arrays',
    'Data Manipulation, File I/O & Analytical Workflows',
  ],
};

export const HACKATHON_DATA = {
  role: 'Internal University Hackathon Participant',
  institution: 'REVA University',
  description:
    'Participated in university-level internal hackathons, collaborating with peers in fast-paced environments to brainstorm, prototype, and pitch innovative technical solutions.',
  highlights: [
    {
      title: 'Team Collaboration',
      detail: 'Coordinated across frontend, backend, and presentation workflows under tight time constraints.',
    },
    {
      title: 'Rapid Prototyping',
      detail: 'Translated initial problem statements into working software prototypes within hours.',
    },
    {
      title: 'Problem-Solving',
      detail: 'Decomposed real-world challenges into practical, buildable software architectures.',
    },
    {
      title: 'Technical Creativity',
      detail: 'Combined modern web tools and AI/ML concepts to pitch clear, user-focused solutions.',
    },
  ],
};

export const CONTACT_INFO = {
  name: 'Ravichandra H',
  email: 'ugcet2501968@reva.edu.in',
  phone: '+91 9380182288',
  phoneRaw: '+919380182288',
  university: 'REVA University · Bengaluru',
  program: 'B.Tech in Artificial Intelligence & Machine Learning (3rd Semester)',
  githubPlaceholder: 'https://github.com',
  linkedinPlaceholder: 'https://linkedin.com',
};
