/**
 * Saurabh Ajit Sangve - Digital Resume Data Model
 * Extracted from Resume & LinkedIn Profile
 * Engineering Lead @ Persistent Systems (IBM Verify Identity Governance)
 */

const RESUME_DATA = {
  personal: {
    name: "Saurabh Ajit Sangve",
    headline: "Engineering Lead @ Persistent Systems | IBM Verify Identity Governance (IVIG) | Enterprise Java, IAM & Security",
    title: "Engineering Lead",
    company: "Persistent Systems",
    email: "saurabhsangve05@gmail.com",
    phone: "+91 7057323228",
    location: "Pune, Maharashtra, India (Hybrid)",
    address: "B-A8, F No-1, Kunal Residency, Thergaon, Pune - 411033",
    status: "Engineering Lead @ Persistent Systems",
    linkedin: "https://www.linkedin.com/in/saurabh-sangve-860882193/",
    github: "https://github.com",
    avatar: "assets/images/saurabh.jpg",
    bio: "Accomplished Engineering Lead with 6+ years of enterprise software engineering experience, including over 5 years of rapid progression at Persistent Systems delivering critical releases for IBM Verify Identity Governance (IVIG) Virtual Appliance. Proven track record leading technical architecture, PSIRT security vulnerability mitigations, APAR defect triage, Request for Enhancement (RFE) implementations, and L3 mission-critical PMR engineering. Multi-time Bravo Award recipient recognized for delivery excellence, security hardening, and technical leadership across complex, high-scale identity governance systems.",
    stats: [
      { label: "Total Experience", value: "6+ Yrs" },
      { label: "Persistent Systems", value: "5+ Yrs" },
      { label: "Career Progression", value: "4 Tiers" },
      { label: "Bravo Awards Won", value: "7x Recipient" }
    ],
    primarySkills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Spring Data JPA",
      "RESTful APIs",
      "Microservices",
      "Docker",
      "Linux"
    ]
  },

  skills: [
    {
      category: "Spring Ecosystem & Java Frameworks",
      skills: [
        { name: "Java (Core & Advanced)", level: 96, icon: "coffee", tags: ["OOP", "Multithreading", "Streams", "Collections", "Concurrency", "JVM Profiling"] },
        { name: "Spring Boot & Microservices", level: 95, icon: "feather", tags: ["Microservice Architecture", "Spring MVC", "Spring Security", "Spring AOP", "Spring JDBC"] },
        { name: "Hibernate & Spring Data JPA", level: 93, icon: "database", tags: ["ORM", "Entity Mappings", "Criteria Queries", "Transaction Management", "JPA Repository"] },
        { name: "RESTful APIs & Swagger/OpenAPI", level: 94, icon: "server", tags: ["API Design", "OpenAPI Spec", "Contract Testing", "REST Endpoints", "JSON/XML"] },
        { name: "Servlets, JSP & Thymeleaf", level: 88, icon: "layout", tags: ["Thymeleaf Templates", "Java Servlets", "JSP", "MVC Architecture", "Session Handling"] }
      ]
    },
    {
      category: "DevOps, Cloud Platforms & App Servers",
      skills: [
        { name: "Docker & Containerization", level: 92, icon: "box", tags: ["Dockerfiles", "Container Lifecycle", "Microservice Deployment", "Docker Compose"] },
        { name: "Linux & Virtual Appliance OS", level: 94, icon: "terminal", tags: ["Enterprise Linux", "Shell Scripting", "Appliance Hardening", "System Diagnostics", "Windows"] },
        { name: "Cloud Platforms: Microsoft Azure", level: 84, icon: "cloud", tags: ["Azure VMs", "Cloud Services", "IAM Integration", "Cloud Deployment"] },
        { name: "DevOps & CI/CD Pipelines", level: 88, icon: "git-branch", tags: ["GitHub Actions", "JFrog Artifactory", "Travis CI", "Automated Pipelines"] },
        { name: "Application Servers", level: 92, icon: "server", tags: ["IBM WebSphere Application Server (Traditional)", "IBM Liberty", "Apache Tomcat"] },
        { name: "Build Tools: Maven & Gradle", level: 90, icon: "tool", tags: ["POM Management", "Multi-module Builds", "Dependency Resolution", "Gradle Scripts"] }
      ]
    },
    {
      category: "Databases & Storage Architecture",
      skills: [
        { name: "PostgreSQL", level: 92, icon: "database", tags: ["ACID Compliance", "Indexing", "Complex Queries", "JSONB", "Performance Tuning"] },
        { name: "MySQL", level: 93, icon: "database", tags: ["Schema Design", "Query Optimization", "Stored Procedures", "Transactions"] },
        { name: "Oracle Database", level: 88, icon: "database", tags: ["PL/SQL", "Relational Modeling", "Enterprise Schemas", "Constraints"] },
        { name: "IBM Db2 & H2 In-Memory", level: 86, icon: "disc", tags: ["IBM Db2 Enterprise", "H2 In-Memory DB", "Testing Databases", "Data Migration"] }
      ]
    },
    {
      category: "AI Tools, Testing & Front-End",
      skills: [
        { name: "AI Acceleration & LLM Tools", level: 95, icon: "zap", tags: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "IBM watsonx", "IBM BOB"] },
        { name: "Version Control: Git & GitHub", level: 94, icon: "git-branch", tags: ["Branching Workflows", "PR Reviews", "Release Tagging", "Git Hygiene"] },
        { name: "Testing: JUnit", level: 90, icon: "check-circle", tags: ["Unit Testing", "Test-Driven Development", "Mocking", "Regression Suites"] },
        { name: "Front-End Technologies", level: 85, icon: "code", tags: ["HTML", "CSS", "JavaScript", "Responsive UI", "DOM Manipulation"] }
      ]
    }
  ],

  experience: [
    {
      company: "Persistent Systems",
      companyLogo: "persistent",
      role: "Engineering Lead",
      period: "Jan 2026 – Present",
      duration: "10 mos",
      location: "Pune, Maharashtra, India · Hybrid",
      employmentType: "Full-time",
      project: "IBM Verify Identity Governance (IVIG) Virtual Appliance",
      current: true,
      description: "Leading technical delivery, architecture decisions, and product security for enterprise-scale IBM Verify Identity Governance Virtual Appliance releases.",
      highlights: [
        "Provide overarching technical leadership and oversight, steering design decisions, implementation strategies, and engineering best practices across agile squads.",
        "Enforce delivery excellence, robust code reviews, automated testing coverage, and strict release readiness criteria for high-stakes enterprise IAM deployments.",
        "Core contributor and technical lead delivering IBM Verify Identity Governance (IVIG) Virtual Appliance releases supporting global Fortune 500 security footprints.",
        "Lead Request for Enhancement (RFE) initiatives, translating complex enterprise customer requirements into scalable, resilient product capabilities.",
        "Spearhead advanced defect triage and resolution (APARs and Development APARs), ensuring long-term product stability, zero-regression deployments, and runtime performance optimization.",
        "Direct PSIRT (Product Security Incident Response Team) initiatives, designing and delivering rapid security fixes for critical CVEs and vulnerabilities in compliance with IBM Security standards.",
        "Provide mission-critical L3 engineering support for high-severity PMRs (Problem Management Records), conducting deep root-cause analysis under tight SLA commitments.",
        "Drive comprehensive virtual appliance hardening, validation, and multi-release testing to guarantee enterprise-grade operational reliability."
      ],
      techStack: ["Java", "Linux", "IBM Verify Identity Governance (IVIG)", "Virtual Appliance", "PSIRT Security", "APAR Resolution", "L3 PMR Support", "REST APIs", "Git", "Security Hardening"]
    },
    {
      company: "Persistent Systems",
      companyLogo: "persistent",
      role: "Lead Software Engineer",
      period: "Oct 2024 – Jan 2026",
      duration: "1 yr 4 mos",
      location: "Pune, Maharashtra, India · Hybrid",
      employmentType: "Full-time",
      project: "IBM Verify Identity Governance (IVIG VA) & ISVG VA",
      current: false,
      description: "Core member of the engineering team responsible for architecting and delivering new IVIG Virtual Appliance and ISVG VA releases.",
      highlights: [
        "Delivered core product features for new IBM Verify Identity Governance Virtual Appliance (IVIG VA) and ISVG VA releases.",
        "Designed and implemented high-priority Request for Enhancement (RFE) features, boosting appliance throughput and governance functionality.",
        "Conducted root-cause analysis on complex APARs and Development APARs, maintaining product stability across global client installations.",
        "Contributed high-priority PSIRT vulnerability remediations, ensuring adherence to rigorous IBM security standards.",
        "Delivered L3 customer support for urgent PMRs, diagnosing edge-case production anomalies and issuing interim fixpacks.",
        "Led product hardening, performance benchmarking, and end-to-end regression testing across multiple release cycles."
      ],
      techStack: ["Core Java", "Java EE", "Linux", "IVIG VA", "ISVG VA", "PSIRT", "APARs", "PMR L3", "Fixpacks", "Interim Fixes"]
    },
    {
      company: "Persistent Systems",
      companyLogo: "persistent",
      role: "Senior Software Engineer",
      period: "Apr 2023 – Oct 2024",
      duration: "1 yr 7 mos",
      location: "Pune, Maharashtra, India · Remote",
      employmentType: "Full-time",
      project: "IBM Security and Verify Governance (IGIVA / ISVGVA)",
      current: false,
      awardWon: "🏆 Bravo Award Recipient",
      description: "Drove code enhancements, security fixes, and defect engineering for IBM Security and Verify Governance Virtual Appliance.",
      highlights: [
        "Honored with the prestigious Bravo Award for exceptional contributions to IBM Security and Verify Governance product stability.",
        "Executed core code enhancements across ISVG VA backend subsystems.",
        "Resolved critical APARs and Development APARs with zero regression rates.",
        "Engineered rapid-response PSIRT fixes to mitigate high-vulnerability security threats.",
        "Managed L3 PMR support queues, packaging and delivering official fixpacks and interim fixpacks under tight timelines.",
        "Collaborated seamlessly across globally distributed engineering, QA, and security teams."
      ],
      techStack: ["Java", "Web Services APIs", "IGIVA / ISVGVA", "Security Fixes", "Fixpack Packaging", "APAR Triage", "Linux"]
    },
    {
      company: "Persistent Systems",
      companyLogo: "persistent",
      role: "Software Engineer",
      period: "Sep 2021 – Apr 2023",
      duration: "1 yr 8 mos",
      location: "Pune, Maharashtra, India · Remote",
      employmentType: "Full-time",
      project: "IBM Security and Verify Governance (IGIVA / ISVGVA)",
      current: false,
      awardWon: "🏆 Bravo Award Recipient",
      description: "Spearheaded defect fixes, RFE code implementations, and L3 support for the IGIVA/ISVGVA product suite.",
      highlights: [
        "Earned Bravo Award recognition for outstanding dedication, rapid bug resolution, and high-quality deliverables.",
        "Implemented code enhancements in ISVG VA to support customer feature requests.",
        "Diagnosed and resolved critical APAR defects in core Java modules.",
        "Contributed to PSIRT security vulnerability fixes, securing sensitive identity governance pipelines.",
        "Packaged and validated fixpacks and interim patch releases for enterprise customer accounts."
      ],
      techStack: ["Java", "C++", "IGIVA / ISVGVA", "APARs", "PSIRT", "PMR Cases", "Defect Testing"]
    },
    {
      company: "BluCor Systems Pvt. Ltd.",
      companyLogo: "blucor",
      role: "Software Developer",
      period: "Apr 2020 – Apr 2021",
      duration: "1 yr 1 mo",
      location: "Pune, Maharashtra, India",
      employmentType: "Full-time",
      project: "Eagle Brother’s Pizza (Full Stack Food Commerce Platform)",
      current: false,
      description: "Engineered responsive UI and backend Spring Boot services for full-scale commercial food ordering platform.",
      highlights: [
        "Developed full-stack web features using Java, Spring Boot, Hibernate with JPA, and MySQL.",
        "Designed and implemented dynamic Thymeleaf web views with Bootstrap and JavaScript.",
        "Optimized database queries and transaction isolation levels for high-throughput ordering.",
        "Conducted unit testing, bug fixing, and continuous code integration using Git."
      ],
      techStack: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "Thymeleaf", "JavaScript", "Bootstrap", "Git"]
    }
  ],

  projects: [
    {
      title: "IBM Verify Identity Governance (IVIG) Virtual Appliance",
      type: "Enterprise Security Flagship",
      institution: "Persistent Systems / IBM Security",
      role: "Engineering Lead / Lead Software Engineer",
      badge: "Enterprise Flagship",
      featured: true,
      summary: "Next-generation Virtual Appliance powering enterprise Identity & Access Governance, role lifecycle management, compliance enforcement, and access certification for global Fortune 500 customers.",
      highlights: [
        "Lead technical delivery of IVIG VA releases, guiding architecture, code quality, and security hardening.",
        "Architect and implement major Request for Enhancement (RFE) features to optimize governance workflows.",
        "Resolve high-priority APARs and Development APARs, eliminating core defects and preventing regressions.",
        "Direct PSIRT vulnerability remediations complying with rigorous IBM Product Security standards.",
        "Provide tier-1 L3 PMR engineering support for mission-critical client incidents."
      ],
      techStack: ["Java", "Linux", "Virtual Appliance OS", "IVIG VA", "PSIRT Security", "APAR Resolution", "Fixpacks", "REST APIs"],
      links: {
        demo: "https://www.linkedin.com/in/saurabh-sangve-860882193/",
        github: "https://www.linkedin.com/in/saurabh-sangve-860882193/"
      }
    },
    {
      title: "IBM Security and Verify Governance (ISVG VA / IGIVA)",
      type: "Commercial Security Platform",
      institution: "Persistent Systems / IBM Security",
      role: "Senior Software Engineer / Software Engineer",
      badge: "Bravo Awarded",
      featured: true,
      summary: "Comprehensive identity governance suite for auditing, segregation of duties (SoD), and user access lifecycle. Honored with multiple Bravo Awards for technical delivery excellence and security fixes.",
      highlights: [
        "Awarded multiple Bravo Awards for delivering high-impact code enhancements and defect resolutions.",
        "Engineered critical PSIRT fixes mitigating vulnerabilities in enterprise identity repositories.",
        "Diagnosed complex L3 PMRs and authored official fixpacks and interim fix distributions.",
        "Streamlined defect testing pipelines and maintained high customer satisfaction ratings."
      ],
      techStack: ["Java", "Web Services", "ISVG VA", "IGIVA", "Security Patching", "Linux", "MySQL / DB2"],
      links: {
        demo: "https://www.linkedin.com/in/saurabh-sangve-860882193/",
        github: "https://www.linkedin.com/in/saurabh-sangve-860882193/"
      }
    },
    {
      title: "E-Pariksha — Secured Online Examination Portal",
      type: "PG-Diploma DAC Flagship Project",
      institution: "CDAC ACTS Hyderabad",
      role: "Full Stack Developer",
      badge: "High Honors",
      featured: true,
      summary: "Secure online testing engine with timed question delivery, role-based authentication, anti-cheating restrictions, and real-time score computation.",
      highlights: [
        "Engineered responsive SPA frontend using React.js, HTML5, CSS3, and Bootstrap.",
        "Developed Java Spring Boot microservices with Hibernate/JPA for test scheduling and evaluation.",
        "Implemented secure MySQL schema for randomized question banks and student response telemetry."
      ],
      techStack: ["React.js", "Java", "Spring Boot", "Hibernate JPA", "MySQL", "REST APIs", "Git"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    },
    {
      title: "Eagle Brother’s Pizza — Food Commerce Suite",
      type: "Commercial Production Platform",
      institution: "BluCor Systems Pvt. Ltd.",
      role: "Software Developer",
      badge: "Commercial Production",
      featured: false,
      summary: "Production food commerce platform enabling dynamic pizza customizer, shopping cart, transactional payments, and kitchen order tracking.",
      highlights: [
        "Implemented Spring Boot and Hibernate transactional backend.",
        "Built responsive client interface with Thymeleaf, Bootstrap, and AJAX updates.",
        "Optimized relational schema and query execution times in MySQL."
      ],
      techStack: ["Java", "Spring Boot", "JPA", "MySQL", "Thymeleaf", "Bootstrap"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    }
  ],

  awards: [
    {
      id: "bravo-psirt",
      title: "Bravo Award #1 — PSIRT Critical Vulnerability Remediation",
      issuer: "Persistent Systems & IBM Security Leadership",
      date: "Engineering Lead / Lead SE",
      badge: "🏆 Bravo Award #1",
      category: "Bravo Honors",
      citation: "“Conferred for rapid response and flawless remediation of high-severity CVE product security vulnerabilities within IBM Verify Identity Governance, ensuring compliance with global enterprise security benchmarks.”",
      reactions: { likes: 174, comments: 38, shares: 16 },
      verified: true,
      details: "Led the emergency security response, isolated vulnerable components, authored patches, and completed release regression testing ahead of SLA deadlines.",
      icon: "shield"
    },
    {
      id: "bravo-apar",
      title: "Bravo Award #2 — High-Impact APAR & Defect Triage",
      issuer: "Persistent Systems · Product Engineering",
      date: "Lead Software Engineer",
      badge: "🏆 Bravo Award #2",
      category: "Bravo Honors",
      citation: "“Awarded for exceptional analytical rigor in dissecting and eliminating persistent APAR defects and Development Work Items, preventing critical regressions across customer environments.”",
      reactions: { likes: 156, comments: 29, shares: 12 },
      verified: true,
      details: "Diagnosed deep architectural edge-cases in core Java and appliance runtime modules, delivering clean, performant fixes across global client clusters.",
      icon: "tool"
    },
    {
      id: "bravo-pmr",
      title: "Bravo Award #3 — Mission-Critical L3 Support & Customer Delight (PMRs)",
      issuer: "Persistent Systems · Client Engineering",
      date: "Senior Software Engineer",
      badge: "🏆 Bravo Award #3",
      category: "Bravo Honors",
      citation: "“Recognized with the Bravo Award for exemplary L3 customer engineering support, resolving high-severity production PMRs and delivering timely Interim Fixpacks under tight turnaround limits.”",
      reactions: { likes: 182, comments: 42, shares: 18 },
      verified: true,
      details: "Conducted live forensic debugging on client clusters, restoring normal operations and receiving written commendation from enterprise accounts.",
      icon: "zap"
    },
    {
      id: "bravo-rfe",
      title: "Bravo Award #4 — RFE Feature Architecture & Delivery",
      issuer: "Persistent Systems · IBM Verify Identity Governance",
      date: "Senior Software Engineer",
      badge: "🏆 Bravo Award #4",
      category: "Bravo Honors",
      citation: "“Honored for driving the design and execution of high-priority Request for Enhancement (RFE) features, significantly augmenting identity lifecycle governance capabilities.”",
      reactions: { likes: 139, comments: 24, shares: 8 },
      verified: true,
      details: "Successfully translated complex business specifications into scalable Java services, expanding the core product footprint.",
      icon: "layers"
    },
    {
      id: "bravo-hardening",
      title: "Bravo Award #5 — Virtual Appliance Hardening & Stability",
      issuer: "Persistent Systems · Quality & Release Engineering",
      date: "Senior Software Engineer",
      badge: "🏆 Bravo Award #5",
      category: "Bravo Honors",
      citation: "“Presented for outstanding technical ownership during virtual appliance hardening, end-to-end integration validation, and zero-defect release packaging.”",
      reactions: { likes: 148, comments: 27, shares: 11 },
      verified: true,
      details: "Streamlined appliance validation test suites, automated repetitive smoke checks, and boosted release readiness predictability.",
      icon: "cpu"
    },
    {
      id: "bravo-performance",
      title: "Bravo Award #6 — Core Code Enhancement & Performance",
      issuer: "Persistent Systems · Engineering Operations",
      date: "Software Engineer",
      badge: "🏆 Bravo Award #6",
      category: "Bravo Honors",
      citation: "“Awarded for proactive code enhancements in ISVG VA, optimizing database query transactions and thread execution profiles for high-concurrency enterprise workloads.”",
      reactions: { likes: 162, comments: 31, shares: 14 },
      verified: true,
      details: "Pinpointed memory leaks and synchronization bottlenecks in Java subsystems, yielding measurable latency improvements.",
      icon: "trending-up"
    },
    {
      id: "bravo-teamwork",
      title: "Bravo Award #7 — Agile Team Mentorship & Delivery Excellence",
      issuer: "Persistent Systems · Agile Squad Leadership",
      date: "Software Engineer",
      badge: "🏆 Bravo Award #7",
      category: "Bravo Honors",
      citation: "“Recognized for exemplary teamwork, active participation in sprint code reviews, mentoring peer developers in Java best practices, and driving consistent milestone delivery.”",
      reactions: { likes: 125, comments: 22, shares: 7 },
      verified: true,
      details: "Exemplified Persistent Systems' engineering values, promoting knowledge transfer, team velocity, and clean code standards.",
      icon: "users"
    },
    {
      id: "engineering-lead-promotion",
      title: "Engineering Leadership & 4-Tier Career Progression",
      issuer: "Persistent Systems Leadership",
      date: "Rapid Promotion (2021 – 2026)",
      badge: "⭐ Leadership Milestone",
      category: "Leadership",
      citation: "“Advanced from Software Engineer to Senior Software Engineer, Lead Software Engineer, and Engineering Lead in recognition of sustained technical excellence and leadership across IBM Verify Identity Governance releases.”",
      reactions: { likes: 230, comments: 48, shares: 22 },
      verified: true,
      details: "Reflects 5+ continuous years of increasing architectural ownership, team leadership, cross-functional alignment, and product security leadership.",
      icon: "award"
    },
    {
      id: "cdac-dac-distinction",
      title: "CDAC DAC Advanced Computing Diploma",
      issuer: "CDAC ACTS Hyderabad",
      date: "Professional Credential",
      badge: "📜 CDAC Credential",
      category: "Certifications",
      citation: "Completed premier Post Graduate Diploma in Advance Computing with high distinction project (E-Pariksha secured exam portal).",
      reactions: { likes: 112, comments: 19, shares: 6 },
      verified: true,
      details: "Comprehensive specialization in distributed systems, full stack Java development, databases, algorithms, and agile methodologies.",
      icon: "check-circle"
    },
    {
      id: "sunbeam-cert",
      title: "C & C++ Programming Certification",
      issuer: "Sunbeam Institute of Pune",
      date: "Professional Credential",
      badge: "📜 Certified",
      category: "Certifications",
      citation: "Certified in advanced C and Object-Oriented C++ programming, data structures, pointer manipulation, and memory management algorithms.",
      reactions: { likes: 85, comments: 12, shares: 3 },
      verified: true,
      details: "Rigorous laboratory and project coursework covering foundational systems programming and algorithmic problem-solving.",
      icon: "check-circle"
    },
    {
      id: "seven-mentor-cert",
      title: "Java Technologies Certification",
      issuer: "Seven Mentor Pvt. Ltd. Pune",
      date: "Professional Credential",
      badge: "📜 Certified",
      category: "Certifications",
      citation: "Certified in Core Java, Advanced Java, Multithreading, JDBC, Servlets, JSP, and enterprise design patterns.",
      reactions: { likes: 110, comments: 21, shares: 7 },
      verified: true,
      details: "Deep dive into enterprise Java frameworks, object-oriented principles, and database-driven software applications.",
      icon: "check-circle"
    }
  ],

  education: [
    {
      degree: "PG-Diploma in Advance Computing (CDAC DAC)",
      institution: "CDAC ACTS Hyderabad",
      period: "May 2021 – September 2021",
      location: "Hyderabad, India",
      description: "Premier post-graduate diploma covering full-stack software development, distributed systems, Java EE, Spring Boot, React, database engineering, and DevOps practices.",
      grade: "Completed with Distinction Project"
    },
    {
      degree: "Bachelor of Engineering (BE) in Electronics & Telecommunication",
      institution: "Shreeyash College of Engineering & Technology",
      period: "2015 – 2019",
      location: "Aurangabad, Maharashtra",
      description: "Four-year comprehensive engineering program with focus on embedded systems, microprocessors, signal processing, object-oriented programming, and computer networks.",
      grade: "Aggregate: 64.60%"
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Sant Bahinabai Jr. College",
      period: "2013 – 2015",
      location: "Shivoor, Maharashtra",
      description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      grade: "Percentage: 67.38%"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sant Bahinabai High School",
      period: "2012 – 2013",
      location: "Shivoor, Maharashtra",
      description: "General foundational sciences, mathematics, languages, and technical arts.",
      grade: "Percentage: 62.20%"
    }
  ],

  certifications: [
    { name: "CDAC DAC (Diploma in Advance Computing)", org: "CDAC ACTS Hyderabad", year: "2021" },
    { name: "C, C++ Certification", org: "Sunbeam Institute of Pune", year: "Certified" },
    { name: "Java Certification", org: "Seven Mentor Pvt. Ltd. Pune", year: "Certified" },
    { name: "VLSI Course Certification", org: "Indo German Tool Room (IGTR)", year: "Certified" },
    { name: "Industrial Approach in Electronics Workshop", org: "Shreeyash College", year: "Completed" },
    { name: "Xilinx FPGA Design Workshop", org: "Shreeyash College", year: "Completed" }
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Marathi", level: "Native / Mother Tongue" }
  ],

  interests: ["Software Architecture & IAM", "Product Security (PSIRT)", "Robotics & Automation", "Cricket", "Football", "Dance"]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESUME_DATA;
}
