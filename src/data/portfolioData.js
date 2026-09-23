// Master Portfolio Data Repository for Muhammad Okasha
// Extracted strictly from MASTER_PROMPT_FOR_VS_CODE.md and 12 reference mockups

export const PERSONAL_INFO = {
  name: "Muhammad Okasha",
  roleBadge: "Full-Stack AI Engineer",
  title: "AI Solutions Architect • Full-Stack Systems Specialist",
  tagline: "Architecting enterprise RAG pipelines, on-device neural edge models, and ultra-high-performance AI ecosystems that turn complex intelligence into seamless reality.",
  location: "Karachi, PK (UTC+5)",
  remoteStatus: "Open to Global Remote",
  education: "UET Peshawar (Systems Eng.)",
  email: "muhammad.okasha2146@gmail.com",
  phone: "+92 300 0000000",
  github: "https://github.com/muhammadokashapak",
  linkedin: "https://www.linkedin.com/in/muhammad-okasha/",
  resumePdf: "/Muhammad_Okasha_Resume.pdf",
  profileImg: "/okasha_hero.jpg",
  secondaryImg: "/okasha_about.jpg",
  aboutQuote: "I turn complex problems into simple, scalable solutions.",
  stats: [
    {
      id: "embeddings",
      value: "5,700+",
      label: "Vector Embeddings Shipped",
      subtext: "FastEmbed ONNX & vector chunks",
      icon: "Code2"
    },
    {
      id: "latency",
      value: "<50ms",
      label: "Real-Time RAG Latency",
      subtext: "Sub-second query processing",
      icon: "Zap"
    },
    {
      id: "systems",
      value: "10+",
      label: "Production Systems",
      subtext: "Enterprise & local shipped",
      icon: "Box"
    },
    {
      id: "edge",
      value: "100%",
      label: "On-Device Neural Models",
      subtext: "Quantized local edge streams",
      icon: "Cloud"
    }
  ]
};

export const ABOUT_DATA = {
  title: "About Muhammad Okasha",
  subtitle: "Bridging cutting-edge Generative AI research, on-device edge intelligence, and resilient software systems.",
  paragraphs: [
    "I'm a Computer Systems Engineer specializing in Enterprise Generative AI, Multimodal RAG Architectures, and On-Device Neural Edge Inference. My engineering philosophy centers on low-latency, privacy-first AI pipelines capable of operating in air-gapped, zero-cloud environments as smoothly as in massive distributed vector clusters.",
    "With a strong foundation in hardware-software co-design from UET Peshawar, I bridge the gap between abstract academic AI research and resilient, containerized software systems deployed in high-stakes production environments."
  ],
  highlights: [
    { label: "Computer Systems Engineering", institute: "UET Peshawar", icon: "GraduationCap" },
    { label: "AI & Machine Learning", field: "Deep Learning & NLP", icon: "Cpu" },
    { label: "System Design & Architecture", field: "Resilient Microservices", icon: "Server" }
  ],
  quote: "I turn complex problems into simple, scalable solutions.",
  quoteAuthor: "Okasha"
};

export const PROJECTS_DATA = [
  {
    slug: "xortlogix-rag",
    id: "xortlogix-rag",
    aliases: ["aura", "xortlogix", "ghl-rag"],
    badge: "ENTERPRISE RAG / AI",
    title: "XortLogix Enterprise RAG",
    category: "GoHighLevel Multimodal RAG & AI Platform",
    githubRepo: "XortLogix-GHL-RAG",
    localFolder: "XORTLOGIX",
    description: "Enterprise multimodal RAG platform with 5,717 ChromaDB vector chunks, FastEmbed ONNX embeddings, REST API v2 + OAuth 2.0 specs, sub-50ms retrieval latency, and Tokyo-Night cockpit UI.",
    fullDescription: "A state-of-the-art enterprise GoHighLevel AI platform featuring a 1:1 Tokyo-Night dark cockpit, multimodal file ingestion (PDF, CSV, JSON, code), clipboard screenshot vision analysis, real-time voice notes, and low-latency ChromaDB vector retrieval.",
    technologies: ["Python", "FastAPI", "ChromaDB", "Docker"],
    icon: "Layers",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak/XortLogix-GHL-RAG",
    sourceCodeUrl: "https://github.com/muhammadokashapak/XortLogix-GHL-RAG",
    workflow: [
      { step: "1", title: "Document & Doc Ingestion", desc: "PDFs, Code & GHL Specs" },
      { step: "2", title: "Chunking & Tokenization", desc: "FastEmbed ONNX Embeddings" },
      { step: "3", title: "Vector Storage", desc: "ChromaDB (5,717 Chunks)" },
      { step: "4", title: "Semantic Retrieval", desc: "Cosine Distance (<50ms)" },
      { step: "5", title: "Multimodal Synthesis", desc: "Gemini 3.7 Flash Engine" },
      { step: "6", title: "Live Streaming (SSE)", desc: "Sub-millisecond Token Stream" },
      { step: "7", title: "CRM Dispatch & OAuth", desc: "REST API v2 Auto-Sync" }
    ],
    features: [
      {
        title: "Multimodal Vision & Audio",
        subtitle: "Docs, screenshots & voice",
        desc: "Direct clipboard screenshot vision (Ctrl+V), PDF/code ingestion via pypdf, and HTML5 audio notes with live waveform players.",
        icon: "Search"
      },
      {
        title: "Sub-50ms ChromaDB Vector RAG",
        subtitle: "5,717 knowledge chunks",
        desc: "Local on-device ChromaDB vector database with SQLite WAL mode, FastEmbed ONNX embeddings, and sub-50ms query processing.",
        icon: "Zap"
      },
      {
        title: "GHL REST API v2 & OAuth 2.0",
        subtitle: "Enterprise CRM automation",
        desc: "Automates contact creation, location custom values, and custom front-end JS deliverables with automatic token refreshes.",
        icon: "ShieldCheck"
      }
    ],
    metrics: [
      { label: "Vector Chunks", value: "5,717+", icon: "Target" },
      { label: "Retrieval Latency", value: "<50ms", icon: "Clock" },
      { label: "AI Model", value: "Gemini 3.7", icon: "Cpu" },
      { label: "Architecture", value: "Multimodal", icon: "ShieldCheck" }
    ]
  },
  {
    slug: "prism",
    id: "prism",
    badge: "AI / ANALYTICS",
    title: "PRISM",
    category: "AI Project Analysis & Verification",
    description: "PRISM analyzes software projects and verifies their quality, structure and security. It identifies architectural issues, code smells, missing features and potential risks using AI-powered analysis and static code inspection.",
    fullDescription: "Analyzes software projects, identifies issues, verifies architecture and code quality, and provides actionable insights for improvement using AST inspection and AI telemetry.",
    technologies: ["Python", "PyTorch", "React", "Docker"],
    icon: "Layers",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak",
    sourceCodeUrl: "https://github.com/muhammadokashapak",
    workflow: [
      { step: "1", title: "Codebase Input", desc: "Multi-Language Parser" },
      { step: "2", title: "Static Scanning", desc: "Cyclomatic Complexity" },
      { step: "3", title: "Security Matrix", desc: "OWASP Vulnerability Audit" },
      { step: "4", title: "Verification", desc: "Constraint Validation" },
      { step: "5", title: "Report Dispatch", desc: "Executive Insights" }
    ],
    features: [
      {
        title: "Code Analysis",
        subtitle: "Find issues & risks",
        desc: "Inspects code complexity, identifies hidden technical debt, and categorizes vulnerability severity vectors.",
        icon: "Cpu"
      },
      {
        title: "Verification",
        subtitle: "Test & validate",
        desc: "Cross-checks system contracts against architectural specifications to prevent design drift.",
        icon: "CheckSquare"
      },
      {
        title: "Smart Reports",
        subtitle: "Detailed insights",
        desc: "Exports interactive executive dashboards, risk matrices, and actionable remediation checklists.",
        icon: "FileText"
      }
    ],
    metrics: [
      { label: "Issue Detection Rate", value: "95%", icon: "Target" },
      { label: "Verification Accuracy", value: "70%", icon: "CheckCircle" },
      { label: "Analysis Time", value: "<3min", icon: "Clock" },
      { label: "Multi-Repo Support", value: "Native", icon: "FolderGit2" }
    ]
  },
  {
    slug: "guardian-skill",
    id: "guardian-skill",
    badge: "SECURITY",
    title: "Guardian Skill",
    category: "AI Security & Guardian System",
    githubRepo: "Guardian-Skill",
    localFolder: "Guardian-Skill",
    description: "Monitors systems, detects threats and vulnerabilities, and provides real-time protection with AI-powered analysis and automated responses.",
    fullDescription: "Monitors systems, detects threats and vulnerabilities, and provides real-time protection with AI-powered analysis and automated responses. Autonomous security compliance engine featuring AST static parsing, credential leakage interceptors, and container security telemetry.",
    technologies: ["Python", "React", "FastAPI"],
    icon: "Shield",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak/Guardian-Skill",
    sourceCodeUrl: "https://github.com/muhammadokashapak/Guardian-Skill",
    features: [
      {
        title: "Threat Interception",
        subtitle: "Real-time mitigation",
        desc: "Continuously sniffs code repositories and APIs for secrets, injection vulnerabilities, and unauthorized access.",
        icon: "ShieldAlert"
      },
      {
        title: "AST Sandboxing",
        subtitle: "Static verification",
        desc: "Validates incoming agent scripts and API payloads against formal syntax AST rulebooks before execution.",
        icon: "Search"
      },
      {
        title: "Auto Remediation",
        subtitle: "Instant patch deployment",
        desc: "Generates surgical quarantine rules and patches compromised endpoints in under 1 second.",
        icon: "Wrench"
      }
    ],
    metrics: [
      { label: "Threat Detection", value: "99%", icon: "ShieldCheck" },
      { label: "Response Time", value: "<1s", icon: "Zap" },
      { label: "Monitoring", value: "24/7", icon: "Activity" },
      { label: "Multi-Platform", value: "Support", icon: "Globe" }
    ]
  },
  {
    slug: "ai-sales-suite",
    id: "ai-sales-suite",
    badge: "BUSINESS AI",
    title: "AI Sales & Conversation Suite",
    category: "AI Customer Support & Sales Platform",
    githubRepo: "Sales-Voice-Copilot",
    localFolder: "Sales",
    description: "Automates customer support, lead qualification, appointment booking and sales workflows using multi-agent AI and CRM integrations.",
    fullDescription: "Automates customer support, lead qualification, appointment booking and sales workflows using multi-agent AI and CRM integrations. Real-time voice intelligence copilot with local ChromaDB vector RAG for live objection handling during customer discovery calls.",
    technologies: ["Laravel", "React", "PostgreSQL"],
    icon: "Radio",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak/Sales-Voice-Copilot",
    sourceCodeUrl: "https://github.com/muhammadokashapak/Sales-Voice-Copilot",
    features: [
      {
        title: "Conversation Intelligence",
        subtitle: "Real-time speech RAG",
        desc: "Transcribes customer audio streams and retrieves accurate objection battlecards in sub-second latency.",
        icon: "Radio"
      },
      {
        title: "CRM Sync",
        subtitle: "Automated pipeline update",
        desc: "Syncs leads, appointment bookings, and call notes directly into enterprise CRM systems.",
        icon: "FolderGit2"
      },
      {
        title: "Multi-Agent Workflows",
        subtitle: "Lead qualification",
        desc: "Deploys autonomous conversational agents across voice, webchat, and WhatsApp endpoints.",
        icon: "Users"
      }
    ],
    metrics: [
      { label: "Lead Conversion", value: "85%", icon: "Target" },
      { label: "Automation Rate", value: "70%", icon: "Cpu" },
      { label: "Response Time", value: "<5s", icon: "Clock" },
      { label: "Multi-Channel", value: "Support", icon: "Globe" }
    ]
  },
  {
    slug: "hr-portal",
    id: "hr-portal",
    badge: "SAAS",
    title: "HR Portal",
    category: "Employee Management System",
    githubRepo: "Employee-HR-Portal-Kit",
    localFolder: "Employee-HR-Portal-Kit",
    description: "A modern HR platform for employee management, attendance, leave tracking, and performance reviews with role-based access and analytics.",
    fullDescription: "A modern HR platform for employee management, attendance, leave tracking, and performance reviews with role-based access and analytics. Features a comprehensive 32-section implementation kit, configurable leave policy engine, and multi-role employee self-service.",
    technologies: ["Laravel", "React", "MySQL"],
    icon: "Users",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak/Employee-HR-Portal-Kit",
    sourceCodeUrl: "https://github.com/muhammadokashapak/Employee-HR-Portal-Kit",
    features: [
      {
        title: "Employee Lifecycle",
        subtitle: "Onboarding to exit",
        desc: "Centralizes digital personnel records, document management, and organizational hierarchy visualization.",
        icon: "Users"
      },
      {
        title: "Leave & Attendance",
        subtitle: "Automated policy engine",
        desc: "Configurable approval workflows, biometric attendance integration, and automated balance accruals.",
        icon: "Clock"
      },
      {
        title: "Performance & Reviews",
        subtitle: "KPI evaluation",
        desc: "Role-tiered appraisals, goal tracking, and exportable executive HR analytics dashboards.",
        icon: "FileText"
      }
    ],
    metrics: [
      { label: "Attendance Tracking", value: "100%", icon: "CheckCircle" },
      { label: "Features", value: "50+", icon: "Layers" },
      { label: "Role-Based", value: "Access", icon: "Key" },
      { label: "Multi-Location", value: "Support", icon: "Globe" }
    ]
  },
  {
    slug: "other-projects",
    id: "other-projects",
    badge: "WEB / AI",
    title: "Other Projects",
    category: "Various AI & Web Solutions",
    description: "A collection of additional projects including chatbots, automation tools, web applications and research prototypes.",
    fullDescription: "A collection of additional projects including chatbots, offline AI video translators, computer vision tools, hospital management ERPs, and neural network research prototypes.",
    technologies: ["Python", "Next.js", "Docker"],
    icon: "LayoutGrid",
    featured: true,
    liveDemoUrl: "https://github.com/muhammadokashapak?tab=repositories",
    sourceCodeUrl: "https://github.com/muhammadokashapak?tab=repositories",
    features: [
      {
        title: "Offline Video Translator",
        subtitle: "Edge Neural Translation",
        desc: "On-device AI subtitle generator and video player running local Whisper and MarianMT models without internet access.",
        icon: "Cpu"
      },
      {
        title: "Hospital Management ERP",
        subtitle: "Full-Stack Healthcare OS",
        desc: "Clinical management system with 35+ healthcare modules, OPD triage, and patient record management.",
        icon: "Activity"
      },
      {
        title: "Deep Learning Research",
        subtitle: "Computer Vision & NLP",
        desc: "ANN cancer classification, Fashion MNIST DNN, and OpenCV real-time HSV color detection models.",
        icon: "Search"
      }
    ],
    metrics: [
      { label: "Side Projects", value: "10+", icon: "Layers" },
      { label: "Technologies", value: "5+", icon: "Cpu" },
      { label: "Open Source", value: "100%", icon: "FolderGit2" },
      { label: "Platforms", value: "Web & Mobile", icon: "Globe" }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "AI Solutions Architect",
    organization: "XortLogix",
    period: "Oct 2024 – Present",
    badge: "Current Role",
    bullets: [
      "Leading architecture and production deployment of enterprise Generative AI systems, multimodal RAG pipelines, and high-throughput microservices at XortLogix.",
      "Engineered GoHighLevel (GHL) multimodal AI platform with ChromaDB (5,717 vector chunks), FastEmbed ONNX embeddings, and sub-50ms retrieval latency.",
      "Architected on-device int8 quantized neural models and real-time WebSocket audio pipelines connecting live voice streams with low-latency LLM synthesis."
    ]
  },
  {
    role: "Deep Learning BootCamp",
    organization: "NAVTTC – Peshawar, Pakistan",
    period: "Mar 2025 – Jun 2025",
    badge: "Specialized Training",
    bullets: [
      "Advanced deep learning, CNNs, Artificial Neural Networks (ANN), and computer vision architectures.",
      "Engineered real-time AI computer vision models in OpenCV, TensorFlow, and PyTorch.",
      "Conducted extensive model optimization, hyperparameter tuning, and cross-validation benchmarking."
    ]
  },
  {
    role: "B.E. Computer Systems Engineering",
    organization: "UET Peshawar",
    period: "Aug 2022 – Jun 2026",
    badge: "Undergraduate Degree",
    bullets: [
      "Core curriculum: Object-Oriented Programming, C++, Data Structures & Algorithms, Operating Systems, Computer Networks.",
      "Conducted academic research projects on embedded system hardware-software integration and distributed architectures."
    ]
  }
];

export const SKILLS_DATA = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "PHP"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Laravel", "FastAPI", "Flask", "Django"]
    },
    {
      name: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Qdrant"]
    },
    {
      name: "DevOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "Git", "GitHub"]
    },
    {
      name: "AI / Machine Learning",
      skills: ["OpenAI", "Hugging Face", "LangChain", "Llama", "PyTorch", "TensorFlow"]
    },
    {
      name: "Tools & Others",
      skills: ["VS Code", "Postman", "Linux", "Jupyter", "Figma", "Docker Compose"]
    }
  ],
  sidebarStats: [
    { value: "10+", label: "Technologies Mastered", icon: "Code2" },
    { value: "5+", label: "Years of Experience", icon: "Clock" },
    { value: "20+", label: "Real-World Projects", icon: "Boxes" }
  ],
  quote: "Technology is not just what I use, it's how I think, build and create impact.",
  quoteAuthor: "Okasha"
};

export const RESUME_DATA = {
  summary: "AI Solutions Architect and Full-Stack Systems Specialist with deep expertise in on-device neural edge models, enterprise RAG pipelines, and multi-tenant resilient software architectures.",
  education: [
    {
      degree: "B.E. Computer Systems Engineering",
      institution: "University of Engineering & Technology (UET) Peshawar",
      duration: "2022 – 2026",
      details: "Focus on Computer Systems, Distributed Architectures, Data Structures & Embedded Systems."
    }
  ],
  certifications: [
    "NAVTTC Advanced Deep Learning & Computer Vision (Peshawar)",
    "Full-Stack Modern Web & Cloud Architecture Specialization"
  ],
  downloadUrl: "/Muhammad Okasha Resume.pdf"
};
