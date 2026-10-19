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
    bio: "Accomplished Engineering Lead with 6+ years of enterprise software engineering experience, driving technical architecture, feature engineering, and security hardening for IBM Verify Identity Governance (IVIG) Virtual Appliance releases. Deep technical specialization in Core & Enterprise Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Microservices, and RESTful APIs with Swagger/OpenAPI. Proven record architecting and executing Request for Enhancement (RFE) features, mitigating critical PSIRT security vulnerabilities, and driving APAR defect triage across multi-release cycles. Hands-on expertise across Linux virtual appliances, enterprise application servers (IBM WebSphere, IBM Liberty, Apache Tomcat), high-concurrency databases (PostgreSQL, Oracle, IBM Db2), modern DevOps pipelines (Docker, GitHub Actions, JFrog, Azure), and AI-accelerated workflows (ChatGPT, Claude, Gemini, GitHub Copilot, IBM watsonx, IBM BOB).",
    stats: [
      { label: "Total Experience", value: "6+ Yrs" },
      { label: "Persistent Systems", value: "5+ Yrs" },
      { label: "Career Progression", value: "4 Tiers" },
      { label: "Awards & Honors", value: "8+ Honors" }
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
        "Core contributor and technical lead delivering IBM Verify Identity Governance (IVIG) Virtual Appliance releases supporting large-scale enterprise security footprints.",
        "Lead Request for Enhancement (RFE) initiatives, translating complex enterprise customer requirements into scalable, resilient product capabilities.",
        "Spearhead advanced defect triage and resolution (APARs and Development APARs), ensuring long-term product stability, zero-regression deployments, and runtime performance optimization.",
        "Direct PSIRT (Product Security Incident Response Team) initiatives, designing and delivering rapid security fixes for critical CVEs and vulnerabilities in compliance with IBM Security standards.",
        "Drive comprehensive virtual appliance hardening, validation, performance benchmarking, and multi-release testing to guarantee enterprise-grade operational reliability.",
        "Collaborate cross-functionally with architecture, security, QA, and release management to align engineering execution with technical roadmaps."
      ],
      techStack: [
        "Java", "Spring Boot", "Spring MVC", "Spring JDBC", "Spring Data JPA", "Hibernate",
        "Spring Security", "Spring AOP", "RESTful APIs", "Microservices", "Swagger/OpenAPI",
        "PostgreSQL", "Oracle Database", "IBM Db2", "Maven", "Gradle", "Git", "GitHub",
        "IBM WebSphere Application Server (Traditional)", "IBM Liberty", "Apache Tomcat",
        "Microsoft Azure", "Docker", "GitHub Actions", "JFrog Artifactory", "Travis CI",
        "Linux", "Windows", "HTML", "CSS", "JavaScript",
        "ChatGPT", "Claude", "Gemini", "GitHub Copilot", "IBM watsonx", "IBM BOB"
      ]
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
        "Conducted root-cause analysis on complex APARs and Development APARs, maintaining product stability across global enterprise client installations.",
        "Contributed high-priority PSIRT vulnerability remediations, ensuring adherence to rigorous IBM security standards.",
        "Authored and validated interim fixpack releases, eliminating critical runtime defects under tight release timelines.",
        "Led product hardening, performance benchmarking, and end-to-end regression testing across multiple release cycles."
      ],
      techStack: [
        "Java", "Spring Boot", "Spring MVC", "Spring JDBC", "Spring Data JPA", "Hibernate",
        "Spring Security", "Spring AOP", "RESTful APIs", "Microservices", "Swagger/OpenAPI",
        "PostgreSQL", "Oracle Database", "IBM Db2", "Maven", "Gradle", "Git", "GitHub",
        "IBM WebSphere Application Server (Traditional)", "IBM Liberty", "Apache Tomcat",
        "Microsoft Azure", "Docker", "GitHub Actions", "JFrog Artifactory", "Travis CI",
        "Linux", "Windows", "HTML", "CSS", "JavaScript"
      ]
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
      description: "Drove code enhancements, security fixes, and defect engineering for IBM Security and Verify Governance Virtual Appliance.",
      highlights: [
        "Executed core code enhancements across ISVG VA backend subsystems using Java, Spring, and database persistence layers.",
        "Resolved critical APARs and Development APARs with zero regression rates across release branches.",
        "Engineered rapid-response PSIRT fixes to mitigate high-vulnerability security threats in enterprise identity repositories.",
        "Packaged, verified, and delivered official fixpacks and interim fix distributions under stringent quality standards.",
        "Collaborated seamlessly across globally distributed engineering, QA, and security squads to accelerate release velocity."
      ],
      techStack: [
        "Java", "Spring Boot", "Spring MVC", "Spring JDBC", "Spring Data JPA", "Hibernate",
        "Spring Security", "Spring AOP", "RESTful APIs", "Microservices", "Swagger/OpenAPI",
        "PostgreSQL", "Oracle Database", "IBM Db2", "Maven", "Gradle", "Git", "GitHub",
        "IBM WebSphere Application Server (Traditional)", "IBM Liberty", "Apache Tomcat",
        "Microsoft Azure", "Docker", "GitHub Actions", "JFrog Artifactory", "Travis CI",
        "Linux", "Windows", "HTML", "CSS", "JavaScript"
      ]
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
      description: "Spearheaded defect fixes, RFE code implementations, and virtual appliance enhancements for the IGIVA/ISVGVA product suite.",
      highlights: [
        "Implemented robust code enhancements in ISVG VA to support customer feature requests and optimized application performance.",
        "Diagnosed and resolved critical APAR defects in core Java modules with extensive unit testing.",
        "Contributed to PSIRT security vulnerability fixes, securing sensitive identity governance pipelines.",
        "Packaged and validated fixpacks and interim patch releases for enterprise deployments."
      ],
      techStack: [
        "Java", "Spring Boot", "Spring MVC", "Spring JDBC", "Spring Data JPA", "Hibernate",
        "Spring Security", "Spring AOP", "RESTful APIs", "Microservices", "Swagger/OpenAPI",
        "PostgreSQL", "Oracle Database", "IBM Db2", "Maven", "Gradle", "Git", "GitHub",
        "IBM WebSphere Application Server (Traditional)", "IBM Liberty", "Apache Tomcat",
        "Microsoft Azure", "Docker", "GitHub Actions", "JFrog Artifactory", "Travis CI",
        "Linux", "Windows", "HTML", "CSS", "JavaScript"
      ]
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
      type: "Enterprise Application",
      institution: "Persistent Systems / IBM Security",
      role: "Engineering Lead / Lead Software Engineer",
      badge: "Enterprise Application",
      featured: true,
      summary: "Next-generation Virtual Appliance powering enterprise Identity & Access Governance, role lifecycle management, compliance enforcement, and access certification for large-scale enterprise deployments.",
      highlights: [
        "Lead technical delivery of IVIG VA releases, guiding architecture, code quality, and security hardening.",
        "Architect and implement major Request for Enhancement (RFE) features to optimize governance workflows.",
        "Resolve high-priority APARs and Development APARs, eliminating core defects and preventing regressions.",
        "Direct PSIRT vulnerability remediations complying with rigorous IBM Product Security standards.",
        "Spearhead virtual appliance hardening, end-to-end integration validation, and performance benchmarking."
      ],
      techStack: ["Java", "Linux", "Virtual Appliance OS", "IVIG VA", "PSIRT Security", "APAR Resolution", "Fixpacks", "REST APIs"],
      links: {
        demo: "https://www.linkedin.com/in/saurabh-sangve-860882193/",
        github: "https://www.linkedin.com/in/saurabh-sangve-860882193/"
      }
    },
    {
      title: "IBM Security and Verify Governance (ISVG VA / IGIVA)",
      type: "Enterprise Application",
      institution: "Persistent Systems / IBM Security",
      role: "Senior Software Engineer / Software Engineer",
      badge: "Enterprise Application",
      featured: true,
      summary: "Mission-critical enterprise identity governance application for auditing, segregation of duties (SoD), access certification, and user access lifecycle management across distributed infrastructure.",
      highlights: [
        "Delivered core code enhancements and feature modules across ISVG VA backend subsystems using Java and Spring.",
        "Engineered critical PSIRT fixes mitigating security vulnerabilities in enterprise identity repositories.",
        "Diagnosed complex product defects (APARs) and authored official fixpacks and interim fix distributions.",
        "Streamlined automated test suites and validation pipelines to ensure enterprise release quality."
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
      id: "excellence-in-delivery-award",
      title: "Excellence in Delivery Award — Team Awards 2025",
      issuer: "Persistent Systems Leadership & Product Engineering",
      date: "Persistent Team Awards FY2025",
      badge: "🏆 Excellence in Delivery",
      category: "Awards",
      citation: "“For demonstrating exceptional commitment to quality and timely delivery, setting a benchmark for excellence, and contributing significantly to project success.”",
      reactions: { likes: 146, comments: 10, shares: 8 },
      verified: true,
      image: "assets/images/post-excellence-delivery-1.jpg",
      trophyImage: "assets/images/post-excellence-delivery-2.jpg",
      postUrl: "https://lnkd.in/p/djSCYW9y",
      gallery: [
        "assets/images/post-excellence-delivery-1.jpg",
        "assets/images/post-excellence-delivery-2.jpg",
        "assets/images/post-excellence-delivery-3.jpg",
        "assets/images/post-excellence-delivery-4.jpg",
        "assets/images/post-excellence-delivery-5.jpg",
        "assets/images/post-excellence-delivery-6.jpg"
      ],
      details: "Presented on stage by Persistent Systems executive leadership with official crystal trophy in recognition of outstanding quality, rigorous delivery commitment, and project milestone success.",
      icon: "award"
    },
    {
      id: "bravo-award-1",
      title: "Bravo Award #1 — ISIM / IGI Releases & Customer Resolution",
      issuer: "Persistent Systems Leadership",
      date: "Software Engineer",
      badge: "🏆 Bravo Award #1",
      category: "Awards",
      citation: "“Good work done for ISIM/IGI releases and helping customer in resolving their issues!”",
      reactions: { likes: 128, comments: 24, shares: 8 },
      verified: true,
      image: "assets/images/bravo-award-1.jpg",
      postUrl: "https://lnkd.in/p/d_RjeKaX",
      details: "Conferred by Engineering Partner Sandeep Chitnis for outstanding technical contributions to ISIM and IGI releases and customer issue resolution.",
      icon: "shield"
    },
    {
      id: "bravo-award-2",
      title: "Bravo Award #2 — Q1 Complex Deliveries & Ownership",
      issuer: "Persistent Systems Leadership",
      date: "Software Engineer",
      badge: "🏆 Bravo Award #2",
      category: "Awards",
      citation: "“Great work in taking ownership of work in Q1 delivery. These were complex items but were delivered on time which shows the skills.”",
      reactions: { likes: 142, comments: 31, shares: 11 },
      verified: true,
      image: "assets/images/bravo-award-2.jpg",
      postUrl: "https://lnkd.in/p/dc2xK4SV",
      details: "Conferred by Engineering Partner Bhaven Shah in recognition of high ownership and timely delivery of complex engineering items for Q1 releases.",
      icon: "tool"
    },
    {
      id: "bravo-award-3",
      title: "Bravo Award #3 — Engineering Excellence & Innovation",
      issuer: "Persistent Systems Leadership",
      date: "Senior Software Engineer",
      badge: "🏆 Bravo Award #3",
      category: "Awards",
      citation: "“Deeply honored to receive the Bravo award for the third time in recognition of sustained dedication, pushing boundaries, and striving for engineering excellence.”",
      reactions: { likes: 156, comments: 34, shares: 14 },
      verified: true,
      image: "assets/images/bravo-award-3.jpg",
      postUrl: "https://lnkd.in/p/dcBf2_j5",
      details: "Recognized with the 3rd Bravo Award honor at Persistent Systems for high-performance contributions to product engineering.",
      icon: "zap"
    },
    {
      id: "bravo-award-4",
      title: "Bravo Award #4 — High Impact Delivery & Year-End Honors",
      issuer: "Persistent Systems Leadership",
      date: "Senior Software Engineer",
      badge: "🏆 Bravo Award #4",
      category: "Awards",
      citation: "“Recognized with the Bravo Award for high-impact quarterly contributions and dedication to product excellence at Persistent Systems.”",
      reactions: { likes: 139, comments: 26, shares: 9 },
      verified: true,
      image: "assets/images/bravo-award-4.jpg",
      postUrl: "https://lnkd.in/p/dUzXKKNV",
      details: "Conferred in recognition of sustained technical delivery, teamwork, and closing out 2024 milestones on a positive and celebratory note.",
      icon: "layers"
    },
    {
      id: "bravo-award-5",
      title: "Bravo Award #5 — Multi-Release Hardening & Resilience",
      issuer: "Persistent Systems Leadership",
      date: "Lead Software Engineer",
      badge: "🏆 Bravo Award #5",
      category: "Awards",
      citation: "“Conferred for exceptional resilience and technical ownership across 4 major releases spanning two enterprise products, solving mission-critical delivery challenges.”",
      reactions: { likes: 168, comments: 39, shares: 18 },
      verified: true,
      image: "assets/images/bravo-award-5.jpg",
      postUrl: "https://lnkd.in/p/dFe-_cQt",
      details: "Recognized for high dedication and technical leadership across multiple high-stakes product releases from January to October.",
      icon: "cpu"
    },
    {
      id: "bravo-award-6",
      title: "Bravo Award #6 — Engineering Collaboration & Impact",
      issuer: "Persistent Systems Leadership",
      date: "Lead Software Engineer",
      badge: "🏆 Bravo Award #6",
      category: "Awards",
      citation: "“Awarded for exemplary team collaboration, driving greater engineering impact, and continuous learning in enterprise product delivery.”",
      reactions: { likes: 152, comments: 28, shares: 12 },
      verified: true,
      image: "assets/images/bravo-award-6.jpg",
      postUrl: "https://lnkd.in/p/dVC2iS4R",
      details: "Honored for continuous impact, technical mentoring, and collaborative execution across complex development milestones.",
      icon: "users"
    },
    {
      id: "bravo-award-7",
      title: "Bravo Award #7 & Top Contributor — APAR Hackathon",
      issuer: "Persistent Systems Leadership",
      date: "Engineering Lead",
      badge: "🏆 Bravo Award #7",
      category: "Awards",
      citation: "“Honored with the Bravo Award for the 7th time and recognized as Top Contributor in the APAR Hackathon for resolving multiple critical APARs.”",
      reactions: { likes: 184, comments: 45, shares: 21 },
      verified: true,
      image: "assets/images/bravo-award-7.jpg",
      postUrl: "https://lnkd.in/p/dbkVxi2b",
      details: "Celebrated for earning 7 Bravo Awards and recognized as the Top Contributor during the company APAR Hackathon, resolving persistent enterprise defects.",
      icon: "trending-up"
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
      image: "assets/images/saurabh.jpg",
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

  achievements: [
    {
      id: "semicolons-2026",
      title: "Persistent Systems Flagship Hackathon — Semicolons 2026",
      subtitle: "Certificate of Participation • Team \"Saiki K\"",
      category: "Innovation & AI",
      badge: "🚀 Semicolons 2026",
      image: "assets/images/post-semicolons-2026.jpg",
      postUrl: "https://lnkd.in/p/dvyUFUvG",
      reactions: { likes: 15, comments: 2 },
      description: `🚀 Excited to share that I participated in Semicolons 2026, the flagship hackathon by Persistent Systems, and received a participation certificate! 🎉

Our team "Saiki K" designed an AI-powered Website Knowledge Assistant that continuously crawls website content, builds a live knowledge graph, and enables users to interact with website information through natural conversations. By leveraging semantic search and Retrieval-Augmented Generation (RAG), the solution delivers accurate, context-aware, and source-grounded responses while automatically staying up to date as website content evolves.

It was a great experience collaborating with an amazing team, turning an idea into a working solution, and exploring how AI can solve real-world challenges.
Grateful to Persistent Systems for organizing such an inspiring platform to innovate, collaborate, and learn. Looking forward to many more such opportunities!`,
      tags: ["#Semicolons2026", "#PersistentSystems", "#AI", "#GenerativeAI", "#KnowledgeGraph", "#RAG", "#Hackathon", "#Innovation", "#Teamwork", "#Learning"]
    },
    {
      id: "top-talent-2026",
      title: "Identified as Top Talent FY2026 at Persistent Systems",
      subtitle: "Conferred by Rajiv Naithani, Chief People Officer",
      category: "Leadership & Recognition",
      badge: "🌟 Top Talent FY2026",
      image: "assets/images/post-toptalent-2026.jpg",
      postUrl: "https://lnkd.in/p/daTHcSKD",
      reactions: { likes: 112, comments: 14 },
      description: `Honored and grateful to be recognized as Top Talent at Persistent Systems.

This achievement means a lot to me, especially after years of continuous learning, dedication, and giving my best in every responsibility entrusted to me.
A sincere thank you to my manager and team for their support, guidance, and trust throughout this journey. Your encouragement has played a huge role in my growth.
Looking forward to continuing to learn, contribute, and take on new challenges ahead.

Persistent Systems #TopTalentFY2026`,
      tags: ["#PersistentSystems", "#TopTalentFY2026", "#Leadership", "#EngineeringExcellence"]
    },
    {
      id: "excellence-in-delivery-achievement",
      title: "Excellence in Delivery Award — Team Awards 2025",
      subtitle: "Presented by Persistent Systems Leadership & Product Engineering",
      category: "Delivery Excellence",
      badge: "🏆 Excellence in Delivery",
      image: "assets/images/post-excellence-delivery-1.jpg",
      trophyImage: "assets/images/post-excellence-delivery-2.jpg",
      gallery: [
        "assets/images/post-excellence-delivery-1.jpg",
        "assets/images/post-excellence-delivery-2.jpg",
        "assets/images/post-excellence-delivery-3.jpg",
        "assets/images/post-excellence-delivery-4.jpg",
        "assets/images/post-excellence-delivery-5.jpg",
        "assets/images/post-excellence-delivery-6.jpg"
      ],
      postUrl: "https://lnkd.in/p/djSCYW9y",
      reactions: { likes: 146, comments: 10 },
      description: `I am delighted to share that I have received the Excellence in Delivery award at Persistent Systems.

This recognition for demonstrating exceptional commitment to quality and timely delivery, setting a benchmark for excellence, and contributing significantly to project success.

My heartfelt appreciation to my teammates for their constant support, collaboration, and trust. I also extend my sincere thanks to our management for their guidance and for organizing such a memorable event.

Proud to be part of a team that consistently strives for excellence and delivers meaningful outcomes.`,
      tags: ["#PersistentSystems", "#ExcellenceInDelivery", "#TeamAwards2025", "#DeliveryExcellence"]
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
