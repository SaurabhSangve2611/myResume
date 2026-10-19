/**
 * Saurabh Ajit Sangve - Digital Resume Data Model
 * Complete structured data extracted from resume & LinkedIn profile
 */

const RESUME_DATA = {
  personal: {
    name: "Saurabh Ajit Sangve",
    headline: "Software Developer | Full Stack Java & React Specialist",
    title: "Software Developer",
    email: "saurabhsangve05@gmail.com",
    phone: "+91 7057323228",
    location: "Pune, Maharashtra, India",
    address: "B-A8, F No-1, Kunal Residency, Thergaon, Pune - 411033",
    status: "Available for Opportunities",
    linkedin: "https://www.linkedin.com/in/saurabh-sangve-860882193/",
    github: "https://github.com",
    avatar: "assets/images/saurabh.jpg",
    bio: "Passionate and detail-oriented Software Developer with hands-on expertise in building scalable, enterprise-grade web applications. Proficient in Java, Spring Boot, Hibernate/JPA, RESTful microservices, and React.js frontend development. Dedicated to clean code, test-driven craftsmanship, and solving real-world challenges through elegant software engineering.",
    stats: [
      { label: "Core Technologies", value: "15+" },
      { label: "Enterprise & Academic Projects", value: "4+" },
      { label: "Bravo & Spot Awards", value: "3+" },
      { label: "Professional Certifications", value: "4" }
    ]
  },

  skills: [
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "Java (Core & Advanced)", level: 90, icon: "coffee", tags: ["OOP", "Collections", "Multithreading", "Streams"] },
        { name: "Spring Boot", level: 88, icon: "feather", tags: ["Microservices", "REST APIs", "Spring Security", "Actuator"] },
        { name: "Hibernate / JPA", level: 85, icon: "database", tags: ["ORM", "Entity Mappings", "HQL", "Criteria API"] },
        { name: "Java EE (Servlets, JSP)", level: 80, icon: "server", tags: ["MVC", "Filters", "Sessions", "JDBC"] },
        { name: "C / C++", level: 75, icon: "cpu", tags: ["Data Structures", "Pointers", "Memory Management"] }
      ]
    },
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 82, icon: "code", tags: ["Hooks", "Components", "State Management", "SPA"] },
        { name: "JavaScript (ES6+)", level: 85, icon: "zap", tags: ["DOM", "Async/Await", "Fetch API", "Event Loop"] },
        { name: "HTML5 & CSS3", level: 90, icon: "layout", tags: ["Responsive Design", "Flexbox", "Grid", "Animations"] },
        { name: "Bootstrap & Tailwind", level: 88, icon: "columns", tags: ["Mobile First", "Custom Utility", "Responsive Layouts"] },
        { name: "Thymeleaf & jQuery", level: 80, icon: "layers", tags: ["Server Templates", "Ajax", "DOM Manipulation"] }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 88, icon: "hard-drive", tags: ["Schema Design", "Complex Joins", "Indexing", "Stored Procs"] },
        { name: "Oracle SQL", level: 80, icon: "database", tags: ["PL/SQL", "Relational Modeling", "Triggers"] },
        { name: "H2 In-Memory DB", level: 82, icon: "disc", tags: ["Rapid Prototyping", "Integration Testing"] }
      ]
    },
    {
      category: "DevOps, Tools & Servers",
      skills: [
        { name: "Git & GitHub", level: 88, icon: "git-branch", tags: ["Branching", "Pull Requests", "Version Control"] },
        { name: "Apache Tomcat", level: 85, icon: "server", tags: ["Deployment", "WAR Config", "Server Management"] },
        { name: "IDE & Tooling", level: 90, icon: "terminal", tags: ["VS Code", "Eclipse", "STS", "NetBeans", "Postman"] },
        { name: "WordPress CMS", level: 75, icon: "globe", tags: ["Site Config", "Custom Plugins", "Theme Design"] }
      ]
    }
  ],

  experience: [
    {
      company: "Blucor Systems Pvt Ltd",
      location: "Pune, India",
      role: "Software Developer",
      period: "April 2020 – May 2021",
      project: "Eagle Brother’s Pizza (Enterprise Food Ordering Platform)",
      description: "Spearheaded backend business logic implementation and responsive UI engineering for a full-scale online food ordering and inventory system.",
      highlights: [
        "Designed and implemented high-performance backend REST APIs using Java and Spring Boot, integrating Hibernate with JPA for robust data persistence.",
        "Built responsive client-facing interfaces with HTML5, CSS3, JavaScript, and Bootstrap, creating seamless Thymeleaf server-side templates.",
        "Optimized MySQL database transaction performance, query indexing, and connection pooling to ensure zero-lag ordering during peak hours.",
        "Conducted end-to-end unit testing (JUnit), bug fixing, and continuous code quality improvements under agile sprint deadlines.",
        "Maintained clean Git workflows with frequent commits, peer reviews, and regular progress demos to senior leadership."
      ],
      techStack: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "Thymeleaf", "JavaScript", "Bootstrap", "Git", "Apache Tomcat"]
    }
  ],

  projects: [
    {
      title: "E-Pariksha — Secured Online Examination Portal",
      type: "PG-Diploma DAC Flagship Project",
      institution: "CDAC ACTS Hyderabad",
      role: "Full Stack Developer",
      badge: "Flagship Architecture",
      featured: true,
      summary: "A robust, highly secure online examination portal designed to conduct automated tests with timed assessments, randomized question banks, anti-cheating protocols, and real-time score analytics.",
      highlights: [
        "Architected modern responsive Single Page Application (SPA) frontend in React.js, HTML5, CSS3, and Bootstrap for students and test evaluators.",
        "Engineered scalable Java Spring Boot backend microservices integrating Hibernate/JPA for test scheduling, response validation, and automatic score calculations.",
        "Secured student endpoints with role-based authorization and session integrity safeguards.",
        "Implemented relational schema in MySQL for question banks, multimedia questions, and exam history.",
        "Collaborated under mentor supervision with strict Git commit hygiene and milestone deliveries."
      ],
      techStack: ["React.js", "Java", "Spring Boot", "Hibernate JPA", "MySQL", "REST APIs", "Git", "VS Code"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    },
    {
      title: "Eagle Brother’s Pizza — Food Commerce Suite",
      type: "Commercial Production Platform",
      institution: "Blucor Systems Pvt Ltd",
      role: "Software Developer",
      badge: "Production Deployed",
      featured: true,
      summary: "Commercial food ordering platform enabling menu browsing, custom pizza builder, cart checkout, real-time order tracking, and kitchen inventory dispatch.",
      highlights: [
        "Implemented complete order processing pipeline using Spring Boot and Hibernate with transactional safety.",
        "Crafted dynamic UI views using Bootstrap and Thymeleaf with asynchronous AJAX updates.",
        "Managed database schema migrations and indexing in MySQL to optimize checkout response times.",
        "Eliminated critical edge-case bugs and implemented comprehensive unit test coverage."
      ],
      techStack: ["Java", "Spring Boot", "JPA", "MySQL", "Thymeleaf", "Bootstrap", "Apache Tomcat"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    },
    {
      title: "E-Commerce Web Application",
      type: "Full Stack Academic Project",
      institution: "Academic Portfolio",
      role: "Software Developer",
      badge: "MVC Architecture",
      featured: false,
      summary: "End-to-end e-commerce store with product catalog browsing, category filtering, persistent shopping cart, and order confirmation.",
      highlights: [
        "Implemented classic Model-View-Controller (MVC) architectural design pattern to cleanly segregate business rules from view presentation.",
        "Engineered backend controllers using Java Servlets, JSP, and JDBC for dependable database interactions.",
        "Designed clean, responsive catalog frontend using HTML5, CSS, JavaScript, and Bootstrap.",
        "Deployed on Apache Tomcat server with MySQL relational backend."
      ],
      techStack: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC Pattern", "Apache Tomcat", "Bootstrap"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    },
    {
      title: "Reference Center Management System",
      type: "Digital Library Hub Project",
      institution: "Academic Portfolio",
      role: "Software Developer",
      badge: "Automation System",
      featured: false,
      summary: "Comprehensive digital library management portal replacing traditional manual ledgers with computerized book issue, return, search, and inventory tracking.",
      highlights: [
        "Digitized repository workflows, tracking thousands of book records, membership tiers, and overdue fines.",
        "Developed full backend with Java EE (Servlets & JSP) connected via JDBC to MySQL.",
        "Designed intuitive dashboard for librarians and readers with instant search and status badges."
      ],
      techStack: ["Java EE", "Servlets", "JSP", "JDBC", "MySQL", "HTML5", "CSS", "Eclipse"],
      links: {
        demo: "#",
        github: "https://github.com"
      }
    }
  ],

  // Awards Section specifically spotlighting Bravo awards from LinkedIn & organization
  awards: [
    {
      id: "bravo-excellence",
      title: "Bravo Excellence Award — Technical Delivery",
      issuer: "Blucor Systems / LinkedIn Recognition",
      date: "Excellence Honors",
      badge: "🏆 Bravo Award",
      category: "Bravo Honors",
      citation: "“In recognition of outstanding technical dedication, swift bug resolution, and high-quality implementation of Spring Boot and JPA services for client deliverables.”",
      reactions: { likes: 142, comments: 28, shares: 12 },
      verified: true,
      details: "Awarded for exceptional commitment to delivery timelines, engineering excellence, and maintaining flawless uptime on core customer-facing applications.",
      icon: "award"
    },
    {
      id: "bravo-spot",
      title: "Bravo Spot Recognition — Critical Problem Solver",
      issuer: "Engineering Leadership",
      date: "Spotlight Accolade",
      badge: "⚡ Spot Bravo",
      category: "Bravo Honors",
      citation: "“Honored with the Bravo Spot Award for diagnosing and rectifying critical production performance bottlenecks and optimizing database queries under tight client deadlines.”",
      reactions: { likes: 118, comments: 19, shares: 8 },
      verified: true,
      details: "Commended by cross-functional leadership for relentless debugging precision, zero downtime deployment, and proactive client satisfaction.",
      icon: "zap"
    },
    {
      id: "bravo-teamwork",
      title: "Bravo Team Collaboration & Agile Contributor",
      issuer: "Agile Development Team",
      date: "Collaboration Honors",
      badge: "🤝 Team Bravo",
      category: "Bravo Honors",
      citation: "“Recognized for exemplary teamwork, active participation in sprint code reviews, knowledge sharing sessions, and mentoring peers in modern Java conventions.”",
      reactions: { likes: 96, comments: 15, shares: 5 },
      verified: true,
      details: "Celebrated for fostering a collaborative engineering culture and maintaining exemplary Git commit hygiene across sprint milestones.",
      icon: "users"
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
    },
    {
      id: "vlsi-robotics",
      title: "VLSI Course & Robo War Competition Winner",
      issuer: "IGTR & Shreeyash College of Engg",
      date: "Innovation Honors",
      badge: "🤖 Competition",
      category: "Hackathons",
      citation: "Completed specialized VLSI course at Indo German Tool Room (IGTR) and participated actively in University-level 'Robotics Workshop' and 'Robo War' competitions.",
      reactions: { likes: 78, comments: 14, shares: 4 },
      verified: true,
      details: "Practical application of electronics, logic design, microcontroller programming, and tactical hardware-software integration.",
      icon: "cpu"
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
    { name: "Industrial Approach in Electronics (3-Day Workshop)", org: "Shreeyash College", year: "Completed" },
    { name: "Xilinx FPGA Design (5-Day Workshop)", org: "Shreeyash College", year: "Completed" }
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Marathi", level: "Native / Mother Tongue" }
  ],

  interests: ["Software Architecture", "Robotics & Automation", "Cricket", "Football", "Dance"]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESUME_DATA;
}
