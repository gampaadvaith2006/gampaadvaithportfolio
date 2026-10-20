/**
 * Gampa Advaith — Centralized Portfolio Configuration
 * 
 * Edit this single file to update your personal details, project URLs,
 * social links, skills, and education history.
 */

export const personalInfo = {
  name: "Gampa Advaith",
  title: "Aspiring Full-Stack Developer & AI/ML Engineer",
  college: "St Peter’s Engineering College",
  degree: "B.Tech in Computer Science and Engineering — Artificial Intelligence & Machine Learning",
  heroHeadline: "Building useful products with code and AI.",
  heroSubheadline: "Computer Science student specializing in AI & ML, exploring full-stack development, intelligent applications, and automation.",
  introParagraph: "I'm Gampa Advaith, a computer science student passionate about building practical web applications and AI-powered products. I enjoy turning ideas into useful digital experiences through software development, automation, and artificial intelligence.",
  aboutExtended: [
    "My primary focus lies at the intersection of full-stack engineering and applied machine learning. Rather than treating AI as an isolated theoretical concept, I love building complete, end-to-end applications that solve tangible problems for real users.",
    "From intelligent price trackers and content verification tools to generative media pipelines, I prioritize clean architecture, intuitive user interfaces, and automated workflows."
  ],
  interests: [
    "Full-Stack Development",
    "Applied AI & Machine Learning",
    "Intelligent Web Applications",
    "Automation & UiPath Workflows",
    "Product Architecture"
  ],
  photo: "./assets/advaith-photo.jpg",
  resumePath: "./assets/Gampa_Advaith_Resume.pdf",
  email: "gampaadvaith2006@gmail.com",
  location: "Hyderabad, Telangana, India",
  availabilityStatus: "Open for Internships & AI/Web Collaborations"
};

export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/gampaadvaith2006",
    available: true,
    note: "Public code repositories and active commits"
  },
  linkedin: {
    name: "LinkedIn",
    url: null,
    available: false,
    note: "LinkedIn profile coming soon"
  },
  youtube: {
    name: "YouTube",
    url: null,
    available: false,
    note: "YouTube channel coming soon"
  }
};

export const skillsData = [
  {
    category: "Programming and development",
    description: "Core languages and web technologies for architecting responsive, scalable systems",
    skills: [
      { name: "Python", level: "Primary", highlight: "AI/ML scripting, backend services & data manipulation" },
      { name: "C", level: "Fundamental", highlight: "Systems programming, memory management & algorithmic logic" },
      { name: "HTML", level: "Proficient", highlight: "Semantic, accessible document structure" },
      { name: "CSS", level: "Proficient", highlight: "Responsive layouts, Tailwind, animations & modern design systems" },
      { name: "JavaScript", level: "Proficient", highlight: "Modern ES6+, DOM manipulation & client-side interactivity" },
      { name: "Node.js & Express", level: "Proficient", highlight: "REST API development, middleware & backend services" }
    ]
  },
  {
    category: "AI and automation",
    description: "Intelligent systems integration, model consumption, and workflow automation",
    skills: [
      { name: "Artificial Intelligence & Machine Learning", level: "Specialization", highlight: "Model evaluation, applied AI architectures & problem formulation" },
      { name: "AI API Integration", level: "Core", highlight: "Connecting LLMs, vision, and embeddings into web apps" },
      { name: "OpenRouter", level: "Core", highlight: "Multi-model orchestration, unified AI routing & cost efficiency" },
      { name: "UiPath & Automation Workflows", level: "Core", highlight: "Robotic process automation, task orchestration & bots" }
    ]
  },
  {
    category: "Tools and technologies",
    description: "Development workflow, version control, and infrastructure fundamentals",
    skills: [
      { name: "Git & GitHub", level: "Daily", highlight: "Version control, branching, team collaboration & open source" },
      { name: "REST APIs", level: "Proficient", highlight: "API design, JSON serialization, endpoints & HTTP methods" },
      { name: "Database & Backend Fundamentals", level: "Foundational", highlight: "Data modeling, schema design, queries & persistence" },
      { name: "Cloud Deployment Fundamentals", level: "Foundational", highlight: "PaaS/IaaS basics, Render, AWS Elastic Beanstalk & static hosting" }
    ]
  }
];

export const projectsData = [
{
  "id": "botcorp",
  "name": "BotCorp",
  "category": "AI Agents / Workflow Automation",
  "tagline": "Local AI Teams, Peer Debate & Reviewable Website Changes",
  "description": "A local AI operations dashboard with 12 department heads and 384 worker roles, task histories, peer debate and quality-review scores.",
  "fullDescription": "BotCorp coordinates role-based work using a shared local Ollama model. Each department has 3 managers, 4 team leaders, 10 quality analysts and 15 members who propose, critique and revise ideas before scored selection. The local app records outputs, preserves checkpoints and supports explicit approval of selected website edits with before-and-after previews. The public GitHub Pages site is a sanitized showcase; it does not run the backend or publish to social accounts.",
  "liveUrl": "https://gampaadvaith2006.github.io/botcorp-public/",
  "sourceUrl": "https://github.com/gampaadvaith2006/botcorp-public",
  "status": "live",
  "statusLabel": "Live Showcase",
  "statusNote": "Public static showcase. Working bot workflows require the local Node.js backend and Ollama.",
  "badgeColor": "blue",
  "technologies": [
    "Node.js",
    "JavaScript",
    "Ollama",
    "p-queue",
    "FFmpeg",
    "GitHub Pages"
  ],
  "highlights": [
    "384 worker roles across 12 departments with persisted workflow checkpoints",
    "15-member proposal debate, revisions and analyst scoring per department",
    "Explicit local edit approval, work history and visual before-and-after previews",
    "Public demo clearly distinguishes showcase content from live AI execution"
  ],
  "previewTheme": {
    "accent": "#7C3AED",
    "badge": "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    "gradient": "from-purple-500/10 via-purple-500/5 to-transparent",
    "visualType": "botcorp"
  }
},
  {
    id: "suredeal",
    name: "SureDeal",
    category: "AI Shopping / E-commerce Technology",
    tagline: "AI-Powered Shopping Companion & Deal Intelligence",
    description: "AI-powered shopping companion focused on price comparison, deal analysis, price history, and smarter purchasing decisions.",
    fullDescription: "SureDeal is designed to eliminate shopping fatigue and deceptive price markups. It continuously monitors and analyzes e-commerce listings, tracks pricing trajectories over time, and uses machine intelligence to evaluate whether a discounted price represents genuine value or an artificial inflation tactic.",
    liveUrl: "https://suredeal.store",
    sourceUrl: null, // Source code not provided
    status: "live", // Verified 200 OK
    statusLabel: "Live Demo",
    statusNote: "Verified active and responding with live product checker interface.",
    badgeColor: "emerald",
    technologies: ["AI Engine", "E-commerce Intelligence", "Price Analytics", "Responsive Web"],
    highlights: [
      "Real-time product price verification & deal comparison",
      "Historical price trajectory detection to spot artificial sales",
      "Clean, consumer-friendly interface for faster purchasing decisions"
    ],
    previewTheme: {
      accent: "#10B981",
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      visualType: "shopping-dashboard"
    }
  },
  {
    id: "truthlens-ai",
    name: "TruthLens AI",
    category: "Artificial Intelligence / Content Verification",
    tagline: "Automated Evidence Exploration & Claim Fact-Checking",
    description: "AI-powered content verification project designed to help users examine online claims and supporting evidence.",
    fullDescription: "In an era of rampant misinformation and synthetic content, TruthLens AI provides an analytical lens for examining online assertions. The platform extracts claims from text input, queries verified evidentiary sources, and synthesizes a balanced, transparent credibility breakdown with cited references.",
    liveUrl: "https://ai-content-verifier-dzya.onrender.com",
    rawLiveUrl: "https://ai-content-verifier-dzya.onrender.com/?utm_source=chatgpt.com",
    sourceUrl: null, // Source code not confirmed
    status: "live", // Verified 200 OK
    statusLabel: "Live Demo",
    statusNote: "Verified active on Render cloud with accessible web application.",
    badgeColor: "blue",
    technologies: ["Natural Language Processing", "Claim Verification", "Evidence Retrieval", "Render Cloud"],
    highlights: [
      "Automated extraction and contextual analysis of online claims",
      "Multi-source evidence exploration to contrast supporting vs refuting data",
      "Transparent confidence indicators designed to augment human judgment"
    ],
    previewTheme: {
      accent: "#2563EB",
      badge: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      visualType: "verifier-dashboard"
    }
  },
  {
    id: "auto-pilot-ai-video-studio",
    name: "Auto-Pilot AI Video Studio",
    category: "Generative AI / Video Automation",
    tagline: "Autonomous Media Synthesis & Content Generation Pipeline",
    description: "AI-assisted video creation and content automation project with a confirmed public GitHub repository.",
    fullDescription: "Auto-Pilot AI Video Studio automates the labor-intensive process of assembling digital video content. By chaining script generation, speech synthesis, and contextual visual assets into an autonomous pipeline, it accelerates video production workflows for creators and automation pipelines.",
    liveUrl: "https://autopilot-ai-video-advaith.ap-south-2.elasticbeanstalk.com",
    sourceUrl: "https://github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO",
    status: "demo-unavailable", // AWS Elastic Beanstalk timed out; repo is 200 OK
    statusLabel: "Demo Temporarily Unavailable",
    statusNote: "AWS Elastic Beanstalk environment timed out during build-time check. The public source code is fully accessible on GitHub.",
    badgeColor: "amber",
    technologies: ["Generative AI", "Video Automation", "Python Pipeline", "AWS Elastic Beanstalk", "GitHub"],
    highlights: [
      "Automated script generation and multimodal media orchestration",
      "Speech-to-video synchronization workflows",
      "Open-source repository available on GitHub with complete pipeline code"
    ],
    previewTheme: {
      accent: "#F59E0B",
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      visualType: "video-studio"
    }
  },
  {
    id: "short-factory",
    name: "Short Factory",
    category: "AI / Content Creation",
    tagline: "High-Throughput Short-Form Video Automation Engine",
    description: "An AI-assisted short-form content project currently under active development.",
    fullDescription: "Short Factory is an upcoming creative automation studio focused on rapid short-form video generation (Reels, TikTok, YouTube Shorts). The project explores algorithmic pacing, auto-caption typography styling, and thematic audio bed synchronization to produce engagement-ready clips.",
    liveUrl: null,
    sourceUrl: null,
    status: "in-development",
    statusLabel: "In Active Development",
    statusNote: "Architecture and prototypes currently being coded. Live demo and repository will be published upon initial release.",
    badgeColor: "purple",
    technologies: ["Short-form Video AI", "Content Pipeline", "Prompt Engineering", "Full-Stack Web"],
    highlights: [
      "Custom workflow optimized for 9:16 vertical video engagement",
      "Algorithmic caption placement with dynamic word-level highlighting",
      "Early architectural milestone; detailed documentation in progress"
    ],
    previewTheme: {
      accent: "#8B5CF6",
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      visualType: "short-factory-studio"
    }
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering — Artificial Intelligence & Machine Learning",
    institution: "St Peter’s Engineering College",
    period: "Undergraduate Degree",
    status: "Currently Enrolled",
    description: "Rigorous academic curriculum grounded in computer science fundamentals, algorithm design, and modern artificial intelligence specializations.",
    highlights: [
      "Core Foundations: Data Structures, Algorithms, Database Management, Computer Networks",
      "AI & Machine Learning Focus: Applied ML, Neural Networks, Natural Language Processing",
      "Hands-on Engineering: Building full-stack web solutions and integrating modern AI APIs"
    ]
  }
];

export const linkVerificationResults = [
  {
    name: "SureDeal Live Web App",
    url: "https://suredeal.store",
    status: "Verified Online (HTTP 200)",
    healthy: true,
    note: "Valid HTML document loaded (34.5 KB), title: 'SureDeal — Product Price Checker'"
  },
  {
    name: "TruthLens AI Live Web App",
    url: "https://ai-content-verifier-dzya.onrender.com",
    status: "Verified Online (HTTP 200)",
    healthy: true,
    note: "Active on Render (13.1 KB), title: 'AI Content Verifier'"
  },
  {
    name: "Auto-Pilot AI Video Studio (AWS Elastic Beanstalk)",
    url: "https://autopilot-ai-video-advaith.ap-south-2.elasticbeanstalk.com",
    status: "Connection Timeout",
    healthy: false,
    note: "AWS EB deployment is inactive or sleeping; card accurately displays 'Demo temporarily unavailable'"
  },
  {
    name: "Auto-Pilot AI Video Studio Source Code",
    url: "https://github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO",
    status: "Verified Online (HTTP 200)",
    healthy: true,
    note: "Public repository confirmed accessible on GitHub"
  },
  {
    name: "Gampa Advaith GitHub Profile",
    url: "https://github.com/gampaadvaith2006",
    status: "Verified Online (HTTP 200)",
    healthy: true,
    note: "Public user profile confirmed accessible"
  }
];
