/* ========================================================================
   Aishwarya Anekar — portfolio content
   All personal/content details live in this file.
   ======================================================================== */

const PORTFOLIO = {
  /* ---------- Basics ---------- */
  name: "Aishwarya Anekar",
  shortName: "AA",
  roles: [
    "Full-stack developer",
    "AI & ML enthusiast",
    "Problem solver",
    "Information Technology student"
  ],
  tagline:
    "Information Technology student building practical software across AI, machine learning, full-stack development and Android.",
  location: "Pune, India",
  availability: "Open to opportunities & collaborations",
  email: "aishwaryaanekar15@gmail.com",

  /* The original character animation is intentionally replaced by a
     network/constellation hero animation for a cleaner developer aesthetic. */
  girl: {
    enabled: true,
    lines: [
      "Building useful software, one feature at a time.",
      "AI + full-stack development is where I love to build.",
      "Clean code. Curious mind. Always learning."
    ]
  },

  /* Quick numbers shown on the hero dashboard */
  stats: [
    { value: 9.15, suffix: "", label: "B.Tech CGPA" },
    { value: 4, suffix: "+", label: "Featured projects" },
    { value: 500, suffix: "+", label: "Problems solved" }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "BRACT’s Vishwakarma Institute of Information Technology, Pune",
      period: "2024 – 2027",
      score: "CGPA 9.15",
      details: [
        "Relevant coursework: Data Structures & Algorithms, DBMS, Object-Oriented Programming, Networking, Operating Systems"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "Government Polytechnic, Karad",
      period: "2021 – 2024",
      score: "93.43%",
      details: [
        "Built a strong foundation in programming, web development, databases and computer engineering fundamentals"
      ]
    }
  ],

  /* ---------- Skills ---------- */
  skills: {
    Languages: [
      { name: "Java", icon: "devicon-java-plain colored", level: 88 },
      { name: "Python", icon: "devicon-python-plain colored", level: 86 },
      { name: "C++", icon: "devicon-cplusplus-plain colored", level: 80 },
      { name: "C", icon: "devicon-c-plain colored", level: 76 },
      { name: "SQL", icon: "devicon-mysql-plain colored", level: 82 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 84 }
    ],
    "Web & Frameworks": [
      { name: "HTML/CSS", icon: "devicon-html5-plain colored", level: 90 },
      { name: "React", icon: "devicon-react-original colored", level: 82 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 80 },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 74 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored", level: 76 }
    ],
    "AI & Data": [
      { name: "Machine Learning", icon: "", level: 78 },
      { name: "Gemini API", icon: "", level: 78 },
      { name: "Ollama", icon: "", level: 72 },
      { name: "Firebase", icon: "devicon-firebase-plain colored", level: 80 },
      { name: "Google Maps", icon: "", level: 72 }
    ],
    Tools: [
      { name: "Git", icon: "devicon-git-plain colored", level: 86 },
      { name: "GitHub", icon: "devicon-github-original colored", level: 88 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 90 },
      { name: "PyCharm", icon: "devicon-pycharm-plain colored", level: 76 },
      { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored", level: 78 },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored", level: 82 }
    ]
  },

  /* ---------- Experience ---------- */
  experience: [
    {
      role: "Web Developer Intern",
      company: "Happy Visitors Dot Com",
      period: "Jul 2023 – Aug 2023",
      duration: "6 weeks",
      location: "Kolhapur, Maharashtra",
      points: [
        "Successfully completed a 6-week full-time internship in Advanced Trends in Web Development, gaining hands-on experience with modern web technologies.",
        "Gained in-depth knowledge of HTML and CSS and strengthened practical web development skills.",
        "Learned website hosting, domain purchasing and creation of business accounts for web projects."
      ],
      tech: ["HTML", "CSS", "Web Development", "Hosting"]
    }
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      title: "EcoUrban-AI — Urban Heat Island Detection & Mitigation",
      category: "AI / ML",
      description:
        "A full-stack MLOps platform using Landsat-8 satellite data to predict urban heat patterns, with a LangGraph-based AI assistant for cooling-strategy simulation and urban-planning recommendations.",
      tech: ["ML", "React", "Python", "Node.js", "Docker", "scikit-learn", "LangGraph", "Ollama"],
      image: "assets/img/eco-urban-ai.png",
      code: "https://github.com/Aishwarya-Anekar/UrbanHeatIsland-ML-TY",
      featured: false
    },
    {
      title: "EchoCraft — Podcast Generator",
      category: "AI / Full Stack",
      description:
        "An intelligent content creation system generating multilingual, lifelike podcast audio from text with segment-wise playback and automatic merging into a unified production-ready file.",
      tech: ["React.js", "Node.js", "Firebase", "Murf AI API", "Google Gemini API"],
      image: "assets/img/echocraft.png",
      code: "https://github.com/Aishwarya-Anekar/EchoCraft_Poscast_Generator"
    },
    {
      title: "Smart ML Model Trainer",
      category: "AI / ML",
      description:
        "A guided full-stack ML training platform for dataset upload, algorithm selection, model training and .pkl export, with validation and clear user feedback.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "FastAPI"],
      image: "assets/img/smart-ml-trainer.png",
      code: "https://github.com/Aishwarya-Anekar/Smart_ML_Model_Trainer"
    },
    {
      title: "JeevanJyot — Healthcare Android Application",
      category: "Android",
      description:
        "A healthcare Android application for doctor discovery, appointment booking and emergency remedies, with location-based recommendations and medicine identification from uploaded photos.",
      tech: ["Java", "Android", "Gemini API", "Google Maps"],
      image: "assets/img/jeevanjyot.png",
      code: "https://github.com/Aishwarya-Anekar/JeevanJyot_Healthcare_Application"
    }
  ],

  /* ---------- Achievements ---------- */
  achievements: [
    { highlight: "1st Position", title: "Avishkar Coding Competition", detail: "Government College of Engineering, Karad" },
    { highlight: "1st Runner-Up", title: "AptiTech AlgoChamp", detail: "Organized by EnrollEngineer" },
    { highlight: "2nd Rank", title: "IEEE MMCOE Ideathon", detail: "Secured second position in the ideathon" },
    { highlight: "Patent Filed", title: "AI-Based File-Type-Adaptive Encryption & Decryption System", detail: "Using AES, RSA & ChaCha20" },
    { highlight: "500+", title: "Problems Solved", detail: "Across coding platforms including LeetCode and HackerRank" }
  ],

  /* ---------- Certifications ---------- */
  certifications: [
    { title: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy", date: "13 Dec 2024", link: "assets/certifications/CCNA-Introduction-to-Networks.pdf", accent: "CCNA", image: "assets/img/ccna-preview.png" },
    { title: "Bootcamp on Artificial Intelligence", issuer: "C-DAC Pune · FutureSkills PRIME", date: "21 Aug 2025", link: "assets/certifications/AI-Bootcamp-Certificate.pdf", accent: "AI", image: "assets/img/ai-cdac-preview.png" }
  ],

  /* ---------- Coding profiles ---------- */
  codingProfiles: [
    {
      platform: "LeetCode",
      username: "Aishwarya_H_Anekar",
      // url: "https://leetcode.com/u/Aishwarya_H_Anekar/",
      stat: 500,
      suffix: "+",
      statLabel: "problems solved",
      extra: "Consistent DSA and contest practice",
      progress: 0,
      color: "#f5b942"
    },
    {
      platform: "HackerRank",
      username: "aishwaryaanekar2",
      // url: "https://www.hackerrank.com/profile/aishwaryaanekar2",
      stat: 4,
      suffix: "★",
      statLabel: "problem solving",
      extra: "Problem-solving practice and coding challenges",
      progress: 0,
      color: "#35d07f"
    }
  ],

  /* ---------- Contact & socials ---------- */
  socials: {
    github: "https://github.com/Aishwarya-Anekar",
    linkedin: "https://www.linkedin.com/in/aishwarya-anekar-9a4030326",
    instagram: "",
    youtube: "",
    medium: "",
    twitter: ""
  },

  formspreeId: ""
};
