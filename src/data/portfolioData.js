export const personalInfo = {
  name: "Ajay Vakadi",
  monogram: "AV",
  title: "Full Stack Developer",
  browserTitle: "Ajay Vakadi | Full Stack Developer",
  location: "Hyderabad, Telangana, India",
  tagline: "Building scalable web applications and AI-powered solutions.",
  availability: "Open to internships and full-time opportunities.",
  heroAvailability: "Open to Internships & Full-Time Opportunities",
  strengths: ["Problem-solving", "Quick learner"],
  primaryLanguage: "JavaScript",
  email: "vakadiajay666@gmail.com",
  phone: "+91 9100827568",
  whatsappNumber: "919100827568",
  whatsappUrl: "https://wa.me/919100827568",
  resumePath: "/resume/ajay-vakadi-resume.pdf",
  profileImage: "/images/profile/ajay-vakadi.png",
  aboutText: "I am a Computer Science graduate and Full Stack Developer interested in building scalable web applications and practical software solutions. I enjoy solving problems, learning modern technologies and developing applications that combine clean user experiences with reliable backend systems.",
  typingTitles: [
    "Full Stack Developer",
    "React Developer",
    "AI Application Developer"
  ],
  socials: {
    github: "https://github.com/ajayvakadi12",
    linkedin: "https://www.linkedin.com/in/ajay-vakadi",
    leetcode: "https://leetcode.com/u/Ajayvakadi123/",
    email: "mailto:vakadiajay666@gmail.com"
  }
};

export const projects = [
  {
    id: "smart-warehouse",
    title: "Smart Warehouse & Inventory Management System",
    shortTitle: "Smart Warehouse",
    subtitle: "Full-Stack Logistics & Inventory Management",
    description: "A full-stack warehouse and inventory management platform designed to simplify multi-warehouse operations, inventory tracking, product management and order fulfillment.",
    image: "/images/projects/smart-warehouse.png",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "REST APIs",
      "JWT"
    ],
    github: "https://github.com/ajayvakadi12/Smart-Warehouse-and-Inventory-Management",
    live: "https://smart-warehouse-and-inventory-manag.vercel.app/login",
    isLive: true,
    features: [
      "Multi-warehouse storage allocation",
      "SKU and product catalog management",
      "Inventory tracking and stock transactions",
      "Order fulfillment & status tracking",
      "JWT authentication & session security",
      "Role-based access control (Admin, Manager, Staff)",
      "OTP-based password recovery",
      "Dashboard analytics with MongoDB aggregation pipelines"
    ]
  },
  {
    id: "petnest",
    title: "PetNest: Pet Adoption Portal",
    shortTitle: "PetNest Portal",
    subtitle: "Responsive Discovery & Adoption Platform",
    description: "A responsive pet adoption platform that helps users discover pets and find suitable companions through searchable and filterable listings.",
    image: "/images/projects/petnest.png",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
      "Responsive Design"
    ],
    github: "https://github.com/ajayvakadi12/Pet-adoption-portal",
    live: "https://petadoption009.ccbp.tech/",
    isLive: true,
    features: [
      "Searchable pet listings catalog",
      "Filter by pet type, age group and location",
      "Adoption request form with client-side validation",
      "LocalStorage persistence for user preferences",
      "Responsive layout optimized across desktop & mobile devices"
    ]
  },
  {
    id: "ai-editorial-workspace",
    title: "AI Editorial Workspace",
    shortTitle: "AI Editorial Workspace",
    subtitle: "Research & Evidence-Based Writing Platform",
    description: "An AI-powered editorial workspace designed to support research, source organization and evidence-based writing workflows.",
    image: "/images/projects/ai-editorial-workspace.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Tailwind CSS"
    ],
    github: "https://github.com/ajayvakadi12/AI-Editorial-Workspace",
    live: "https://ai-editorial-workspace-rho.vercel.app/",
    isLive: true,
    features: [
      "Multi-source ingestion workspace (URLs, tweets, pasted text)",
      "Source management & claim-level verification audit panel",
      "AI-assisted editorial brief & angle generation with Gemini API",
      "Hemingway-style writing assistant with deterministic readability checks",
      "Writer-controlled individual accept/reject revision log"
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    skills: [
      { name: "JavaScript", code: "JS", color: "#F7DF1E", textColor: "#000" },
      { name: "Python", code: "PY", color: "#3776AB", textColor: "#FFF" }
    ]
  },
  {
    category: "Frontend",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    skills: [
      { name: "HTML5", code: "H5", color: "#E34F26", textColor: "#FFF" },
      { name: "CSS3", code: "C3", color: "#1572B6", textColor: "#FFF" },
      { name: "React.js", code: "Re", color: "#61DAFB", textColor: "#000" },
      { name: "Tailwind CSS", code: "Tw", color: "#06B6D4", textColor: "#FFF" }
    ]
  },
  {
    category: "Backend",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    skills: [
      { name: "Node.js", code: "No", color: "#339933", textColor: "#FFF" },
      { name: "Express.js", code: "Ex", color: "#68A063", textColor: "#FFF" },
      { name: "Python", code: "PY", color: "#3776AB", textColor: "#FFF" },
      { name: "FastAPI", code: "FA", color: "#009688", textColor: "#FFF" }
    ]
  },
  {
    category: "Databases",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "MongoDB", code: "Mg", color: "#47A248", textColor: "#FFF" },
      { name: "MySQL", code: "SQ", color: "#4479A1", textColor: "#FFF" }
    ]
  },
  {
    category: "Developer Tools",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    skills: [
      { name: "Git", code: "Gi", color: "#F05032", textColor: "#FFF" },
      { name: "GitHub", code: "GH", color: "#24292E", textColor: "#FFF" },
      { name: "VS Code", code: "VS", color: "#007ACC", textColor: "#FFF" },
      { name: "Postman", code: "Pm", color: "#FF6C37", textColor: "#FFF" },
      { name: "Vercel", code: "Vc", color: "#000000", textColor: "#FFF" },
      { name: "Render", code: "Rn", color: "#46E3B7", textColor: "#000" }
    ]
  },
  {
    category: "Core Concepts",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    skills: [
      { name: "Object-Oriented Programming", code: "OOP", color: "#8B5CF6", textColor: "#FFF" },
      { name: "DBMS", code: "DB", color: "#3B82F6", textColor: "#FFF" },
      { name: "Operating Systems", code: "OS", color: "#6366F1", textColor: "#FFF" },
      { name: "Computer Networks", code: "CN", color: "#0EA5E9", textColor: "#FFF" },
      { name: "REST APIs", code: "API", color: "#10B981", textColor: "#FFF" }
    ]
  }
];

export const currentlyLearning = [
  { name: "Generative AI and LLMs", icon: "Brain", desc: "Foundation models, prompt engineering & API integration" },
  { name: "Retrieval-Augmented Generation (RAG)", icon: "Database", desc: "Context injection & evidence-grounded responses" },
  { name: "Vector Databases", icon: "Layers", desc: "Similarity search & semantic indexing" },
  { name: "Embeddings", icon: "Cpu", desc: "High-dimensional vector representations for text" },
  { name: "FastAPI", icon: "Zap", desc: "High-performance Python asynchronous APIs" },
  { name: "AI Application Development", icon: "Sparkles", desc: "Full-stack AI workflows & interactive experiences" }
];

export const connectCards = [
  {
    platform: "GitHub",
    label: "github.com/ajayvakadi12",
    description: "Explore my open-source repositories and code contributions",
    url: "https://github.com/ajayvakadi12",
    iconName: "Github",
    color: "#8B5CF6"
  },
  {
    platform: "LinkedIn",
    label: "linkedin.com/in/ajay-vakadi",
    description: "Connect professionally and view my educational journey",
    url: "https://www.linkedin.com/in/ajay-vakadi",
    iconName: "Linkedin",
    color: "#0A66C2"
  },
  {
    platform: "LeetCode",
    label: "leetcode.com/u/Ajayvakadi123/",
    description: "Check out my problem solving and DSA consistency",
    url: "https://leetcode.com/u/Ajayvakadi123/",
    iconName: "Code2",
    color: "#FFA116"
  },
  {
    platform: "Email",
    label: "vakadiajay666@gmail.com",
    description: "Drop a line for career opportunities, projects or questions",
    url: "mailto:vakadiajay666@gmail.com",
    iconName: "Mail",
    color: "#2DD4BF"
  }
];

