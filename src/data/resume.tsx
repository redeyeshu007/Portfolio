import { Icons } from "@/components/icons";
import { HomeIcon, NotebookPen, Rocket, FileText, Layers, Handshake, FolderGit2 } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { SpringBoot } from "@/components/ui/svgs/springBoot";
import { Flutter } from "@/components/ui/svgs/flutter";
import { MongoDB } from "@/components/ui/svgs/mongoDB";
import { MySQL } from "@/components/ui/svgs/mySQL";
import { Firebase } from "@/components/ui/svgs/firebase";
import { Kafka } from "@/components/ui/svgs/kafka";
import { TensorFlow } from "@/components/ui/svgs/tensorFlow";
import { OpenCV } from "@/components/ui/svgs/openCV";
import { Git } from "@/components/ui/svgs/git";
import { AIAgents } from "@/components/ui/svgs/aiAgents";
import { GenerativeAI } from "@/components/ui/svgs/generativeAI";

export const DATA = {
  name: "Sudharsan",
  initials: "S",
  url: "https://github.com/redeyeshu007",
  location: "Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Tamil+Nadu",
  description:
    "Software Engineer & AI Developer. Building AI-powered applications, web platforms, and technology-driven businesses.",
  summary:
    "Building software, exploring AI, and turning ideas into real products has been a constant part of my journey. Along the way, I've developed AI-powered applications, full-stack web platforms, mobile apps, and distributed systems, worked with clients as a freelance developer, and competed in hackathons and technical events across South India. Today, I'm focused on software engineering, artificial intelligence, and building technology-driven businesses that solve meaningful problems at scale.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Javascript },
    { name: "React.js", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Flutter", icon: Flutter },
    { name: "MongoDB", icon: MongoDB },
    { name: "MySQL", icon: MySQL },
    { name: "Firebase", icon: Firebase },
    { name: "Docker", icon: Docker },
    { name: "Kafka", icon: Kafka },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "OpenCV", icon: OpenCV },
    { name: "Git", icon: Git },
    { name: "AI Agents", icon: AIAgents },
    { name: "Generative AI", icon: GenerativeAI },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookPen, label: "Blog" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
    { href: "/comeback", icon: Rocket, label: "The Comeback" },
    { href: "/evolution", icon: Layers, label: "Evolution" },
  ],
  contact: {
    email: "sudharsanelangovan2005@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/redeyeshu007",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sudharsan-e-4b0488299",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1afoA2vCdPyu35EDlqMx5Ak3Z4845z8vt/view?usp=sharing",
        icon: FileText,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Javix Technologies",
      href: "/experience/javix",
      badges: [],
      location: "On-site",
      title: "Full Stack Developer Intern",
      logoUrl: "/javix.png",
      start: "2026",
      end: "Present",
      description:
        "Contributing to the development of modern web applications by working across both frontend and backend technologies. Developing responsive user interfaces, implementing backend APIs, integrating databases, and collaborating with the development team to deliver scalable software solutions. Gaining hands-on experience with full-stack development, software architecture, debugging, deployment, and industry best practices while working on real-world projects.",
    },
    {
      company: "Self-Employed",
      href: "/experience/freelance",
      badges: [],
      location: "Remote",
      title: "Freelance Web & App Developer",
      logoUrl: "/freelancer_thick_font_logo.png",
      start: "2024",
      end: "Present",
      description:
        "Built websites, web applications, and digital solutions for clients across different industries. Managed projects from requirements gathering and UI design to development, deployment, and maintenance. Developed full-stack applications using modern technologies including React.js, Node.js, Java, MySQL, and MongoDB. Collaborated directly with clients to translate business needs into scalable software solutions while ensuring performance, usability, and reliability. Delivered ongoing support, feature enhancements, and technical consultation throughout the project lifecycle.",
    },
  ],
  education: [
    {
      school: "PSNA College of Engineering and Technology",
      href: "https://psnacet.edu.in/",
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering | CGPA: 8.14",
      logoUrl: "/psna.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "MSP Solai Nadar Memorial Higher Secondary School",
      href: "https://www.mspschool.edu.in/",
      degree: "Higher Secondary Certificate (HSC) – Computer Science | Percentage: 84.16%",
      logoUrl: "/msp.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "MSP Solai Nadar Memorial Higher Secondary School",
      href: "https://www.mspschool.edu.in/",
      degree: "Secondary School Leaving Certificate (SSLC)",
      logoUrl: "/msp.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Ascendo AI – Multi-Agent Business Analysis Platform",
      slug: "ascendo-ai",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      award: "Won 2nd Prize in Robovanta 26 National Level Hackathon",
      description:
        "Ascendo AI is an autonomous multi-agent business analysis platform engineered to eliminate manual departmental auditing for companies and business owners. Built with a Master Planner orchestrating specialized LangGraph agents across Sales, Marketing, Lead Generation, Business Strategy, and Customer Success, the platform performs deep multi-angle analysis and generates comprehensive intelligence reports.\n\nPowered by a high-throughput FastAPI backend with MongoDB persistence, ChromaDB vector semantic retrieval (RAG), JWT session authorization, Server-Sent Events (SSE) for live streaming progress, and Stripe subscription billing, paired with an interactive React & Vite dashboard featuring Three.js 3D visuals, Recharts analytics, and one-click PDF report export.",
      problemSolution: {
        problem:
          "Businesses maintain separate departments (Sales, Marketing, Lead Generation, Strategy, Customer Success) that operate in silos. Manually auditing each department, identifying bottlenecks, and synthesizing cross-functional recommendations requires substantial consulting expenses and weeks of human effort.",
        solution:
          "Ascendo AI automates holistic business diagnosis. By processing structured company metrics, a central Master Planner coordinates five specialized AI agents via LangGraph to perform sequential and parallel evaluations, streaming real-time findings to an interactive analytics dashboard and generating instant downloadable PDF reports.",
      },
      agents: [
        {
          name: "Sales Agent",
          role: "Revenue & Conversion Velocity",
          description:
            "Evaluates revenue trajectories, pricing tier performance, sales cycle velocity, and conversion drop-offs to pinpoint financial leaks.",
        },
        {
          name: "Marketing Agent",
          role: "Campaign Reach & Customer Acquisition",
          description:
            "Assesses multi-channel campaign effectiveness, customer acquisition cost (CAC), brand sentiment, and audience reach metrics.",
        },
        {
          name: "Lead Generation Agent",
          role: "Pipeline Quality & Opportunity Sourcing",
          description:
            "Identifies high-conversion ICP (Ideal Customer Profile) segments, qualifies inbound pipelines, and highlights untapped market segments.",
        },
        {
          name: "Strategy Agent",
          role: "Cross-Functional Synthesis & Roadmap",
          description:
            "Synthesizes outputs from Sales, Marketing, and Lead Gen into prioritized, high-leverage strategic recommendations and growth playbooks.",
        },
        {
          name: "Customer Success Agent",
          role: "Retention & Churn Mitigation",
          description:
            "Diagnoses customer retention rates, Net Promoter Score (NPS) drivers, churn warning signals, and customer lifetime value (LTV) growth strategies.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "User Intake & Authentication",
          description:
            "User logs in via secure JWT authentication and submits structured business metrics (industry, revenue, retention, target goals) through the React/Vite dashboard.",
        },
        {
          step: "02",
          title: "Master Planner Orchestration",
          description:
            "FastAPI triggers the LangGraph state machine. The Master Planner analyzes the request, establishes execution order, and initializes shared graph state.",
        },
        {
          step: "03",
          title: "Specialized Agent Analysis & RAG",
          description:
            "The 5 AI agents execute contextual evaluations. Domain benchmarks and historical patterns are retrieved semantically via ChromaDB vector similarity search (RAG).",
        },
        {
          step: "04",
          title: "Real-Time Server-Sent Events (SSE)",
          description:
            "As each agent completes its evaluation node, progress, intermediate summaries, and metrics are streamed live over SSE to the frontend without polling.",
        },
        {
          step: "05",
          title: "Interactive Visualization & PDF Export",
          description:
            "The completed analysis is stored in MongoDB and rendered on the React dashboard using Recharts and Three.js 3D elements, with instant one-click PDF export.",
        },
      ],
      techStackCategories: [
        {
          category: "Frontend & 3D Visualization",
          skills: ["React.js", "Vite", "Tailwind CSS", "Three.js", "Recharts"],
        },
        {
          category: "Backend & Agentic AI Engine",
          skills: ["Python", "FastAPI", "LangGraph", "Master Planner Orchestrator", "LLM Reasoning"],
        },
        {
          category: "Databases & Semantic Retrieval",
          skills: ["MongoDB (Document Store)", "ChromaDB (Vector Store)", "RAG (Retrieval-Augmented)"],
        },
        {
          category: "Streaming, Security & DevOps",
          skills: ["Server-Sent Events (SSE)", "JWT Authentication", "Stripe Billing", "Docker", "PDF Generation"],
        },
      ],
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Three.js",
        "Recharts",
        "Python",
        "FastAPI",
        "LangGraph",
        "Master Planner",
        "MongoDB",
        "ChromaDB",
        "JWT",
        "Server-Sent Events (SSE)",
        "Stripe",
        "Docker",
        "PDF Generation",
      ],
      features: [
        "Master Planner orchestrating 5 specialized LangGraph agents (Sales, Marketing, Lead Gen, Strategy, Customer Success)",
        "Semantic similarity search and contextual benchmark retrieval using ChromaDB vector embeddings (RAG)",
        "Real-time progress streaming to the frontend via Server-Sent Events (SSE) over persistent HTTP",
        "Interactive analytics dashboard featuring Three.js 3D visualizations, Recharts performance curves, and Tailwind CSS",
        "Enterprise JWT-based stateless authentication and authorization guarding backend FastAPI endpoints",
        "Production Stripe subscription checkout integration handling customer billing lifecycles",
        "Automated comprehensive business intelligence report generation with instant PDF export capability",
        "Complete containerized deployment architecture utilizing Docker for consistency across environments",
      ],
      team: {
        name: "Green Sync Innovators",
        members: [
          { name: "Vijay Kasturi K", role: "Leader" },
          { name: "Sudharsan E", role: "Me" },
          { name: "Akash S M", role: "Team Member" },
          { name: "Dinny Paul Navis C", role: "Team Member" },
        ],
      },
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793469874/Screen_Recording_2026-10-31_233225_lxalnr.mp4",
    },
    {
      title: "EastGold – Gold Valuation & Trading Platform",
      slug: "eastgold",
      href: "https://eastgold.netlify.app/",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a commercial gold trading and valuation web platform for clients in Coimbatore. Built with instant gold price calculation, free purity evaluation booking, transparent pricing breakdowns, and integrated WhatsApp and direct calling touchpoints for verified, high-trust transactions.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS v4",
        "shadcn/ui",
        "TanStack Query",
        "REST APIs",
        "Zod",
        "Framer Motion",
      ],
      features: [
        "Live gold rate valuation and dynamic estimation calculations",
        "Online booking workflow for zero-cost physical purity evaluation",
        "Transparent pricing breakdown matrices for physical bullion and jewelry",
        "Instant multi-channel customer inquiry via integrated WhatsApp and click-to-call",
        "Mobile-first luxury design system optimized for high-ticket commercial trust",
      ],
      links: [
        {
          type: "Website",
          href: "https://eastgold.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793470213/Screen_Recording_2026-10-31_233710_dn0rte.mp4",
    },
    {
      title: "Sabari Hospital – Multispeciality Healthcare Platform",
      slug: "sabari-hospital",
      href: "https://sabari-hospital.netlify.app/",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a modern responsive healthcare web platform for Sabari Hospital, a leading multispeciality medical center in Coimbatore. Features online doctor appointment booking, department and doctor directories, medical services showcase, patient care inquiry workflows, and an interactive media gallery.",
      technologies: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "Nodemailer",
        "OGL (WebGL)",
        "Tailwind CSS",
        "Healthcare UI",
      ],
      features: [
        "Online doctor appointment booking with department and practitioner scheduling",
        "Multispeciality department directory with detailed doctor bios and credentials",
        "Emergency hospital care showcase with instant ambulance and desk calling",
        "Accessible, high-contrast healthcare UI built for elderly and emergency patients",
        "Interactive hospital facility, diagnostic lab, and inpatient ward gallery",
      ],
      links: [
        {
          type: "Website",
          href: "https://sabari-hospital.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793470344/Screen_Recording_2026-10-31_234020_tsrlqk.mp4",
    },
    {
      title: "Pavan Vela Grand – Luxury Hospitality & Booking Platform",
      slug: "pavan-vela-grand",
      href: "https://pvgoff.netlify.app/",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a modern hospitality web platform for Pavan Vela Grand, a premier hotel located on Palani Road Bypass, Dindigul. Features suite and room showcases (Deluxe King, Family Suite), direct booking and inquiry channels (Call & WhatsApp), amenities and guest experiences highlight, location navigation, and high-conversion responsive design.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Nodemailer",
        "Zod",
        "Hospitality UI",
        "Local SEO",
      ],
      features: [
        "Suite and room showcases with detailed amenities, rates, and occupancy details",
        "Instant booking reservation inquiry workflows connected to WhatsApp and direct phone",
        "Guest experiences and facilities presentation (covered parking, peaceful ambiance)",
        "Interactive Palani Road Bypass location map with one-tap driving directions",
        "High-performance responsive design optimized for mobile travelers and tourists",
      ],
      links: [
        {
          type: "Website",
          href: "https://pvgoff.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793554338/Screen_Recording_2026-11-01_230014_xa4yuy.mp4",
    },
    {
      title: "Jaishree Real Estate – Property Management Platform",
      slug: "jaishree-real-estate",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a comprehensive property management platform for Jaishree Real Estate with an administrative dashboard for managing property listings, client inquiries, and operational workflows. Implemented role-based access control, inventory tracking, reusable UI components, and scalable backend services.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "JavaScript",
        "RBAC",
        "Dashboard Development",
        "Payment Ledger",
      ],
      features: [
        "Centralized property inventory tracking with real-time status updates",
        "Role-based access control (RBAC) separating administrative and agent workflows",
        "Client inquiry and lead pipeline management with contact history logs",
        "Dynamic property search filters by budget, square footage, and neighborhood",
        "Modular, maintainable React component architecture paired with Node.js APIs",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793470539/Screen_Recording_2026-10-31_234456_ssdjcj.mp4",
    },
    {
      title: "Handoverly AI – Building Handover OS & Construction Management",
      slug: "handoverly-ai",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Built an AI-powered building handover operating system and construction management platform connecting builder owners, site engineers, accounts teams, and contractors into one unified workflow. Features smart AI defect tagging, automated priority scoring, instant team assignments, inspection readiness tracking, digital documentation, and handover progress analytics.",
      technologies: [
        "React.js",
        "TypeScript",
        "Django 5",
        "Python",
        "Django REST Framework",
        "PostgreSQL",
        "Celery",
        "Redis",
        "WebSockets",
        "Tailwind CSS",
      ],
      features: [
        "AI defect and snag tagging with automated priority and urgency scoring",
        "Multi-stakeholder workspace for builders, site supervisors, and contractors",
        "Digital inspection readiness checklists with timestamped audit trails",
        "Snag photo documentation with resolution approval signatures",
        "Real-time analytics dashboard tracking completion milestones across tower units",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793553956/Screen_Recording_2026-11-01_225441_igbojp.mp4",
    },
    {
      title: "Aura De-Addiction Centre – Healthcare & Rehabilitation Sanctuary",
      slug: "aura-de-addiction-centre",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a modern healthcare and rehabilitation web platform for Aura De-Addiction Centre (operating across Theni and Dindigul). Features comprehensive treatment tracks (alcohol addiction, substance dependency, smoking & nicotine cessation), care pathways (medical detoxification, psychiatric therapy, residential wellness, family counseling, relapse prevention), doctor and medical team profiles, facility gallery, and urgent emergency intake and 'Get Help' consultation channels.",
      technologies: [
        "React.js",
        "Vite",
        "React Router DOM",
        "Tailwind CSS",
        "Framer Motion",
        "Healthcare UI",
        "Patient Inquiries",
      ],
      features: [
        "Dedicated treatment tracks for alcohol dependency, drug addiction, and nicotine cessation",
        "Connected recovery pathway: medical detox, psychiatric care, and relapse prevention",
        "Doctor credential showcases and multi-disciplinary healthcare crew directories",
        "Confidential emergency intake forms and instant click-to-call 'Get Help' pipelines",
        "Dual-branch facility guide covering Theni and Dindigul centers with map directions",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793605184/Screen_Recording_2026-11-02_130614_z6ozbc.mp4",
    },
    {
      title: "Peralagae – Luxury Jewelry E-Commerce Platform",
      slug: "peralagae",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed an elegant luxury jewelry and fashion e-commerce storefront featuring curated collection showcases, promotional announcement banners, multi-attribute product filters (material, size, price range), wishlist & shopping cart state management, newsletter integration, and responsive high-conversion UI/UX.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Express.js",
        "Prisma ORM",
        "Razorpay",
        "E-Commerce",
      ],
      features: [
        "Curated luxury jewelry collection showcases with high-fidelity asset rendering",
        "Multi-attribute product filtering by metal, gemstone, pricing, and collection",
        "Persistent client-side shopping cart and favorite wishlist state management",
        "Dynamic announcement bars for promotional campaigns and seasonal discounts",
        "Streamlined mobile checkout flow designed for high conversion and low friction",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793471189/Screen_Recording_2026-10-31_235506_ujroic.mp4",
    },
    {
      title: "Roohae Cards – Premium Invitation & Card Design Platform",
      slug: "roohae-cards",
      href: "",
      github: "",
      dates: "2026",
      active: true,
      description:
        "Developed a luxury digital stationery and wedding invitation platform with interactive 3D card-opening animations, fluid typography, and bespoke motion interactions. Features customizable celebration templates, print-ready layouts, and an immersive multi-step design experience (Ideas, Design, Customize, Print).",
      technologies: [
        "Next.js 15",
        "React 19",
        "Three.js (WebGL)",
        "TypeScript",
        "Zustand",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
      ],
      features: [
        "Interactive 3D card unfolding and envelope slide-open motion animations",
        "Multi-step invitation builder: Ideas, Design, Customize, and Print",
        "Customizable event themes for weddings, receptions, and birthday galas",
        "Fluid typography hierarchy with responsive mobile touch interactions",
        "Print-ready layout generation with digital RSVP invitation preview",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793473576/Screen_Recording_2026-11-01_003434_xsf7wv.mp4",
    },
    {
      title: "Hacker News – Flutter Tech News Mobile Reader",
      slug: "hacker-news",
      href: "",
      github: "",
      dates: "2025 - 2026",
      active: true,
      description:
        "A fast, responsive cross-platform Hacker News mobile reader application built with Flutter and Dart, engineered for personal daily tech news reading and developed to satisfy real-world mobile technical challenge specifications. Directly integrating with the official Hacker News Firebase REST API (v0), the app orchestrates a two-phase asynchronous architecture: ingesting top stories via /v0/topstories.json and hydrating individual story metadata and discussion trees via /v0/item/<id>.json. It features a streamlined two-screen mobile experience with an infinite-scrolling Home Feed with pull-to-refresh and a comprehensive Detail & Comments Screen that recursively unpacks nested 'kids' comment arrays into collapsible, high-readability conversation hierarchies.",
      problemSolution: {
        problemTitle: "Asynchronous HN API Fan-Out & Nested Discussion Complexity",
        problem:
          "The official Hacker News Firebase REST API returns top stories as a flat array of up to 500 integer IDs (via /v0/topstories.json) rather than populated JSON objects. Furthermore, comment trees are structured as nested 'kids' ID arrays at arbitrary depths. For mobile readers, unoptimized fetching triggers severe N+1 request waterfalls, UI thread stuttering during list scrolling, and prolonged network latency when resolving multi-tier comment threads.",
        solutionTitle: "Two-Screen Asynchronous Flutter Architecture with Recursive Comment Trees",
        solution:
          "Engineered a decoupled two-screen Flutter application targeting Android and iOS. The Home Screen performs paginated batch fetching and in-memory LRU caching to populate story rows smoothly without blocking the UI thread. The Detail Screen recursively parses the 'kids' payload with depth-tracking indentation, allowing users to read full article contents, explore nested discussion trees, and toggle comment threads seamlessly.",
      },
      architectureTitle: "Two-Screen Decoupled Mobile & Recursive API Architecture",
      architectureSubtitle:
        "Engineered with a clean Flutter/Dart architecture utilizing asynchronous batch concurrency for top stories and recursive DFS resolution for multi-tier 'kids' comment hierarchies.",
      architectureBadge: "Module",
      agents: [
        {
          name: "Top Stories Ingestion Engine",
          role: "Endpoint: /v0/topstories.json",
          description:
            "Fetches up to 500 trending story IDs from the official Hacker News Firebase REST API and manages feed pagination chunks of 20-30 items.",
        },
        {
          name: "Concurrent Item Detail Fetcher",
          role: "Endpoint: /v0/item/<id>.json",
          description:
            "Asynchronously hydrates story metadata (title, author, score, time, URL, descendants count) using Future.wait concurrency without stalling frame rates.",
        },
        {
          name: "Home Feed & Lazy Scroll Manager",
          role: "ListView.builder & ScrollController",
          description:
            "Renders high-performance virtualized list rows, formats relative timestamps ('X hours ago'), shows domain previews, and supports pull-to-refresh gestures.",
        },
        {
          name: "Detail & Article Reader Screen",
          role: "Navigator & In-App Web Viewer",
          description:
            "Presents the complete story headline, author, karma score, creation time, external website launch triggers, and initial top-level comment counters.",
        },
        {
          name: "Recursive 'kids' Comment Parser",
          role: "Depth-Aware Tree Traversal Engine",
          description:
            "Traverses nested 'kids' integer arrays recursively down multiple discussion tiers, mapping parent-child relationships with visual indentation lines.",
        },
        {
          name: "In-Memory Cache & State Controller",
          role: "LRU Cache & Fast Data Serialization",
          description:
            "Caches fetched item payloads in local memory to eliminate duplicate network calls when navigating back and forth between feed and comment threads.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "App Boot & Cross-Platform Initialization",
          description:
            "The Flutter application boots on Android/iOS, initializing HTTP connection pooling, theme providers, and the in-memory item cache.",
        },
        {
          step: "02",
          title: "Top Stories ID Acquisition",
          description:
            "The client dispatches a GET request to https://hacker-news.firebaseio.com/v0/topstories.json, retrieving an array of active story IDs.",
        },
        {
          step: "03",
          title: "Batch Item Hydration",
          description:
            "The app slices top story IDs into paginated batches (e.g. 20 items) and queries /v0/item/<id>.json in parallel using Future.wait.",
        },
        {
          step: "04",
          title: "Virtualized Home Feed Rendering",
          description:
            "ListView.builder renders hydrated story cards with score badges, author tags, domain badges, relative timestamps, and comment counters.",
        },
        {
          step: "05",
          title: "Story Selection & Navigation",
          description:
            "Tapping any story card triggers Navigator.push, passing the cached story object to the Detail Screen with zero initial transition delay.",
        },
        {
          step: "06",
          title: "Top-Level 'kids' Comment Extraction",
          description:
            "The Detail Screen inspects the story payload's 'kids' array and issues asynchronous requests to fetch first-level parent comments.",
        },
        {
          step: "07",
          title: "Recursive Nested Discussion Resolution",
          description:
            "As comments load, the recursive parser interrogates each comment's nested 'kids' array, rendering multi-level indented conversation threads.",
        },
        {
          step: "08",
          title: "Pull-to-Refresh & Live Feed Sync",
          description:
            "Users pull down on the home feed to re-fetch topstories.json, dynamically updating rankings, new submissions, and karma counts.",
        },
      ],
      techStackCategories: [
        {
          category: "Mobile Application & Framework",
          skills: [
            "Flutter Framework",
            "Dart Language",
            "Cross-Platform (Android & iOS)",
            "Material Design 3",
            "Responsive UI Widgets",
          ],
        },
        {
          category: "Official Hacker News REST APIs",
          skills: [
            "Firebase REST API v0",
            "/v0/topstories.json (Listing API)",
            "/v0/item/<id>.json (Detail & Comments)",
            "HN Data Models (Story, Comment)",
          ],
        },
        {
          category: "Networking & Concurrency",
          skills: [
            "Dart HTTP Client",
            "Future.wait Concurrency",
            "Async / Await Architecture",
            "JSON Deserialization",
            "Network Error & Timeout Handling",
          ],
        },
        {
          category: "Data Structures & Algorithms",
          skills: [
            "Recursive Tree Traversal (DFS)",
            "Nested 'kids' Array Parsing",
            "Parent-Child Comment Hierarchy",
            "Thread Depth Indentation",
          ],
        },
        {
          category: "State Management & Performance",
          skills: [
            "Provider / BLoC Pattern",
            "In-Memory LRU Caching",
            "ListView.builder Virtualization",
            "Pull-to-Refresh Indicator",
          ],
        },
        {
          category: "Reading Experience & UI/UX",
          skills: [
            "Two-Screen Decoupled Layout",
            "Relative Timestamp Formatter",
            "Collapsible Comment Trees",
            "In-App Web Viewer & External Launchers",
          ],
        },
      ],
      technologies: [
        "Flutter",
        "Dart",
        "REST APIs",
        "Firebase REST API",
        "Cross-Platform",
        "Mobile Development",
        "State Management",
        "Recursive Algorithms",
      ],
      features: [
        "Two-screen decoupled mobile architecture featuring Home Feed and Story Detail & Comments screens",
        "Direct integration with official Hacker News Firebase REST API (topstories.json and item/<id>.json)",
        "Efficient batch item hydration using Future.wait concurrency to avoid N+1 network bottlenecks",
        "Recursive parsing of 'kids' comment arrays supporting multi-tier nested discussion trees",
        "Smooth 60fps scrolling with ListView.builder virtualization and on-demand pagination",
        "Pull-to-refresh feed synchronization to catch trending breaking tech stories instantly",
        "In-memory caching layer preventing duplicate API queries when toggling between screens",
        "External article viewer integration allowing instant reading of original source links",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793555209/Screen_Recording_2026-11-01_231602_dsfifm.mp4",
    },
    {
      title: "MeVo AI – Real-Time AI Meeting Insights Generator",
      slug: "mevo-ai",
      href: "",
      github: "",
      dates: "2025",
      active: true,
      award: "Won 3rd Prize in Sarvam 26 National Level Hackathon at Easa College of Engineering",
      description:
        "MeVo AI is an AI-powered real-time meeting assistant built for Google Meet that transforms live conversations into structured, actionable intelligence. Operating client-side via a high-performance Chrome Extension without disrupting host calls, MeVo AI simultaneously powers a Meeting Intelligence NLP pipeline—generating live running insights, meeting summaries, action item assignments, and deadline extractions—and a Computer Vision pipeline that extracts video frames and predicts sign-language gestures to empower deaf and hard-of-hearing participants.",
      problemSolution: {
        problemTitle: "Virtual Meeting Blindspots & Accessibility Gap",
        problem:
          "During fast-paced online meetings, participants frequently struggle with taking manual notes, remembering who was assigned each task, and tracking critical deadlines. Furthermore, virtual meeting platforms lack native, real-time communication accessibility accommodations for deaf and hard-of-hearing participants who communicate through sign language.",
        solutionTitle: "Client-Side Dual-Pipeline Meeting AI",
        solution:
          "MeVo AI integrates directly into Google Meet through a lightweight Chrome Extension. Running inference client-side to ensure sub-second response times and zero host disruption, it concurrently processes audio/text to extract running insights, tasks, and deadlines, while analyzing video frames via computer vision to recognize and predict sign-language gestures.",
      },
      architectureTitle: "Dual-Pipeline Real-Time Architecture",
      architectureSubtitle:
        "Engineered for sub-second client-side inference, dividing meeting stream telemetry into simultaneous natural language understanding and visual gesture recognition pipelines.",
      architectureBadge: "Pipeline",
      agents: [
        {
          name: "Running Insights Engine",
          role: "Real-Time Conversational Understanding",
          description:
            "Extracts key discussion shifts, metrics, and core takeaways continuously while the meeting is in progress, preventing information loss before the call ends.",
        },
        {
          name: "Action Item & Assignee Extractor",
          role: "Task & Ownership Identification",
          description:
            "Isolates actionable commitments and verbal agreements, mapping who is responsible for each deliverable to avoid accountability gaps.",
        },
        {
          name: "Deadline & Timeline Associator",
          role: "Temporal Resolution & Delivery Tracking",
          description:
            "Detects expressed dates, times, and delivery milestones, binding them directly to corresponding action items and responsible owners.",
        },
        {
          name: "Meeting Summary Synthesizer",
          role: "Structured Executive Briefing",
          description:
            "Synthesizes multi-topic meeting discussions into structured, high-density bulleted summaries for quick post-call review and record keeping.",
        },
        {
          name: "Computer Vision Gesture Predictor",
          role: "Frame Processing & Sign Recognition",
          description:
            "Samples meeting video frames, applies image normalization and hand feature extraction, and classifies sign-language gestures for accessible communication.",
        },
        {
          name: "Client-Side Orchestrator",
          role: "Extension Hook & Low-Latency Runtime",
          description:
            "Coordinates in-browser client-side processing within Chrome, eliminating roundtrip backend lag and guaranteeing host call continuity.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "Google Meet Browser Ingestion",
          description:
            "The participant joins a Google Meet session. The MeVo AI Chrome Extension hooks into the browser session without altering or disrupting host meeting performance.",
        },
        {
          step: "02",
          title: "Client-Side Stream Processing",
          description:
            "Live audio and video streams are captured and routed to local client-side processing modules in the browser, ensuring low latency and privacy.",
        },
        {
          step: "03",
          title: "Live Running Insights Generation",
          description:
            "As conversation flows, conversational NLP generates immediate interim insights and highlights directly within the extension overlay.",
        },
        {
          step: "04",
          title: "Action Item & Deadline Mapping",
          description:
            "Identifies verbal task assignments ('Rahul will build login by Friday'), extracting the action item, responsible person, and associated due date.",
        },
        {
          step: "05",
          title: "Computer Vision Gesture Recognition",
          description:
            "Video stream frames are extracted, normalized, and evaluated to extract visual hand features and predict sign-language gestures in real time.",
        },
        {
          step: "06",
          title: "Structured Minutes & Export",
          description:
            "Organizes decisions, action item tables, and discussion highlights into structured meeting minutes ready for instant review and export.",
        },
      ],
      techStackCategories: [
        {
          category: "Browser & Extension Infrastructure",
          skills: ["Chrome Extension (Manifest V3)", "Google Meet Integration", "Content Scripts", "Background Workers", "Web Media Streams"],
        },
        {
          category: "AI & Meeting Intelligence",
          skills: ["Natural Language Processing", "Running Insights Engine", "Action Item Extraction", "Deadline Identification", "Meeting Summarization"],
        },
        {
          category: "Computer Vision & Accessibility",
          skills: ["Computer Vision", "Video Frame Extraction", "Image Preprocessing", "Feature Extraction", "Sign-Language Gesture Prediction"],
        },
        {
          category: "Execution & System Design",
          skills: ["Client-Side Processing", "Low-Latency Local Inference", "Host-Disruption-Free Design", "TypeScript / JavaScript"],
        },
      ],
      technologies: [
        "AI/ML",
        "Chrome Extension",
        "Computer Vision",
        "Natural Language Processing",
        "TensorFlow",
        "OpenCV",
        "JavaScript",
        "TypeScript",
      ],
      features: [
        "Chrome Extension overlay integrating seamlessly into Google Meet sessions",
        "Real-time running insights generated on the fly as discussions take place",
        "Automated action item extraction mapping tasks directly to designated team members",
        "Intelligent deadline identification linking dates and times to actionable items",
        "Structured meeting summaries capturing critical decisions and key takeaways",
        "Computer vision video pipeline extracting frames for sign-language gesture prediction",
        "Accessibility support enabling deaf and hard-of-hearing participants to communicate effectively",
        "Client-side processing architecture engineered for ultra-low latency and host meeting continuity",
      ],
      team: {
        name: "Green Sync Innovators",
        members: [
          { name: "Vijay Kasturi K", role: "Leader" },
          { name: "Sudharsan E", role: "Me" },
          { name: "Akash S M", role: "Team Member" },
          { name: "Dinny Paul Navis C", role: "Team Member" },
        ],
      },
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1782839600/Screen_Recording_2026-06-30_224202_bhgsqk.mp4",
    },
    {
      title: "GHOST LINE – AI-Powered Anonymous Emotion-Based Social Platform",
      slug: "ghost-line",
      href: "",
      github: "",
      dates: "2025",
      active: true,
      description:
        "Ghost Line is an AI-powered anonymous social networking platform engineered to connect individuals based on genuine emotions, shared vulnerabilities, and psychological resonance rather than superficial social media vanity metrics or public profiles. Built with an enterprise Java Spring Boot REST backend and an ultra-responsive React.js frontend animated via Framer Motion and GSAP, the platform integrates external NLP Emotion Detection APIs to evaluate sentiment and feeling in real time, routes users to supportive mood-based communities, synchronizes instant conversations via Firebase Firestore real-time snapshots, and safeguards participant privacy through stateless JWT authentication and strict pseudonymous identity masking. Deployed with high availability across Vercel and Render.",
      problemSolution: {
        problemTitle: "Social Media Vanity Metrics & Emotional Isolation",
        problem:
          "Traditional social networking platforms emphasize public identities, follower counts, and curated highlight reels. This environment induces social anxiety and prevents people from expressing vulnerability, loneliness, or distress. Consequently, individuals facing emotional difficulties struggle to find empathetic peers or supportive communities without fear of social judgment.",
        solutionTitle: "Pseudonymous Identity & Emotion-Driven Community Matching",
        solution:
          "Ghost Line shifts the social paradigm from identity-driven vanity to emotion-driven connection. Users express their authentic feelings anonymously through a cyber-minimalist interface. Java Spring Boot backend services route thoughts through NLP Emotion Detection APIs to analyze sentiment polarity and specific emotional states, dynamically recommending empathetic chat rooms and connecting peers in real-time synchronized spaces powered by Firebase Firestore.",
      },
      architectureTitle: "Full-Stack Emotion Analytics & Real-Time Sync Architecture",
      architectureSubtitle:
        "Enterprise Java Spring Boot microservice architecture integrated with AI emotion intelligence, real-time Firestore database synchronization, and fluid client animations.",
      architectureBadge: "Module",
      agents: [
        {
          name: "Anonymous Identity & Security Guard",
          role: "JWT Authentication & Pseudonymity Manager",
          description:
            "Enforces stateless JWT session authorization while strictly decoupling authenticated user accounts from public pseudonymous display handles to preserve zero personal identity exposure.",
        },
        {
          name: "Java Spring Boot Application Backend",
          role: "Business Logic & Microservice Orchestrator",
          description:
            "Coordinates core business logic, REST controllers, API security filters, emotion analysis request dispatch, and Firestore channel management.",
        },
        {
          name: "AI Emotion & Sentiment Analysis Engine",
          role: "NLP Semantic Mood Classifier",
          description:
            "Evaluates user thoughts using external AI emotion detection APIs to classify sentiment polarity (Positive, Negative, Neutral) and detect nuanced emotional states (Loneliness, Sadness, Joy, Hope).",
        },
        {
          name: "Mood-Based Recommendation Router",
          role: "Empathetic Community & Peer Matching",
          description:
            "Translates analyzed emotional vectors into dynamic recommendations, matching users with congruent support circles, mood rooms, and conversational threads.",
        },
        {
          name: "Real-Time Firestore Chat Synchronizer",
          role: "Low-Latency Cloud Document Sync",
          description:
            "Streams chat messages and room updates in real time using Firebase Firestore snapshot listeners, enabling immediate two-way conversation without client polling.",
        },
        {
          name: "Cyber-Minimalist Motion Interface",
          role: "React, Tailwind CSS, Framer Motion & GSAP",
          description:
            "Renders an immersive, dark-mode cyber-minimalist interface with choreographed timeline transitions and micro-interactions optimized for emotional resonance.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "Anonymous Access & Vercel Delivery",
          description:
            "The client loads the responsive React frontend from Vercel edge networks, presenting users with an immediate emotion-first intake experience.",
        },
        {
          step: "02",
          title: "JWT Authentication & Identity Isolation",
          description:
            "Spring Boot validates credentials, issues signed JSON Web Tokens for API requests, and masks internal IDs with temporary anonymous pseudonyms.",
        },
        {
          step: "03",
          title: "Emotional Thought & Feeling Input",
          description:
            "The user expresses current feelings, thoughts, or dilemmas via the animated emotion input interface without revealing personal identifying details.",
        },
        {
          step: "04",
          title: "Spring Boot REST Ingestion & Sanitization",
          description:
            "The backend receives the payload over secure REST endpoints, performs input validation, sanitization, and prepares the content for AI evaluation.",
        },
        {
          step: "05",
          title: "AI Emotion Detection & Sentiment Parsing",
          description:
            "NLP Emotion Detection APIs process the narrative to extract sentiment polarity scores and identify specific emotional dimensions.",
        },
        {
          step: "06",
          title: "Mood-Based Community Recommendation",
          description:
            "Based on the emotional classification, the recommendation engine surfaces compatible chat circles, shared-feeling threads, and supportive peers.",
        },
        {
          step: "07",
          title: "Real-Time Firestore Chat Synchronization",
          description:
            "Connected participants exchange messages in ephemeral chat rooms, synchronized instantly across devices via Firebase Firestore snapshot streams.",
        },
        {
          step: "08",
          title: "Dynamic Visual Mood Transitions",
          description:
            "Framer Motion and GSAP dynamically adapt interface aesthetics, accent hues, and animation tempos to reflect community emotional resonance.",
        },
      ],
      techStackCategories: [
        {
          category: "Frontend & Advanced UI Motion",
          skills: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP (GreenSock)", "Cyber-Minimalist UI/UX", "Vercel Hosting"],
        },
        {
          category: "Enterprise Backend & REST APIs",
          skills: ["Java", "Spring Boot", "RESTful Architecture", "Maven", "Render Cloud Hosting"],
        },
        {
          category: "Security & Pseudonymity Management",
          skills: ["JWT (JSON Web Tokens)", "Stateless Authentication", "Pseudonymous Identity Masking", "Role-Based API Filters"],
        },
        {
          category: "AI Emotion & Sentiment Intelligence",
          skills: ["Emotion Detection APIs", "NLP Sentiment Analysis", "Polarity Classification", "Mood-Based Matching Engine"],
        },
        {
          category: "Cloud Database & Real-Time Sync",
          skills: ["Firebase Firestore", "Real-Time Snapshot Listeners", "NoSQL Cloud Storage", "Firebase Security Rules"],
        },
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "Java",
        "Spring Boot",
        "REST APIs",
        "JWT",
        "Emotion Detection APIs",
        "Firebase Firestore",
        "Vercel",
        "Render",
      ],
      features: [
        "Anonymous social platform connecting users through shared emotions rather than vanity identities",
        "Enterprise Java Spring Boot backend powering robust REST APIs, business services, and security filters",
        "Integrated AI emotion detection and sentiment analysis classifying emotional states in real time",
        "Intelligent mood-based recommendation algorithm suggesting empathetic peers and compatible chat circles",
        "Instant real-time chat synchronization built on Google Firebase Firestore document snapshot listeners",
        "Stateless JWT authentication enforcing secure access while isolating public pseudonymous display handles",
        "Immersive cyber-minimalist user interface enhanced with smooth Framer Motion and GSAP timeline animations",
        "Multi-cloud production deployment orchestrating Vercel for frontend delivery and Render for backend services",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1782838044/Screen_Recording_2026-06-10_201449_kmllaq.mp4",
    },
    {
      title: "FinLog Monitor – Real-Time Financial Log Monitoring and Anomaly Detection System",
      slug: "finlog-monitor",
      href: "",
      github: "",
      dates: "2025",
      active: true,
      award: "Top 500 in Build with Bharat",
      description:
        "FinLog Monitor is a production-grade real-time distributed log monitoring and anomaly detection platform engineered for high-throughput banking, payment, and financial services workloads. Built to eliminate manual log auditing during transaction surges, FinLog Monitor captures live microservice event streams with Apache Kafka (KRaft mode), processes them through 60-second rolling windows using Pathway, deterministically flags error rate and P95 latency breaches, and leverages RAG paired with LLMs (Gemini/OpenAI) to retrieve operational runbooks and generate actionable root cause and remediation playbooks. Live alerts stream directly to an interactive Chart.js dashboard via FastAPI WebSockets, backed by automated Slack and Email alerting, all orchestrated seamlessly through Docker Compose.",
      problemSolution: {
        problemTitle: "Silent Financial Microservice Failures & Alert Fatigue",
        problem:
          "Modern financial architectures handle thousands of transactions per second across banking, payment, and authentication microservices. When sudden payment failures, database latency spikes, or authentication cascades occur, manually inspecting distributed log files is slow and error-prone, resulting in prolonged downtime and substantial financial risk.",
        solutionTitle: "End-to-End Stream Analytics & RAG-Powered AI Diagnosis",
        solution:
          "FinLog Monitor provides continuous real-time observability. By streaming microservice logs into Apache Kafka and running windowed analytics via Pathway, it calculates real-time Error Rate, Average Latency, and P95 Latency. When thresholds are breached, RAG retrieves relevant incident runbooks and an LLM synthesizes immediate root cause diagnoses and remediation steps, broadcasting live to dashboards over WebSockets.",
      },
      architectureTitle: "8-Stage Distributed Real-Time Architecture",
      architectureSubtitle:
        "An end-to-end telemetry pipeline connecting high-throughput log ingestion, windowed stream analytics, RAG incident retrieval, and real-time WebSocket delivery.",
      architectureBadge: "Stage",
      agents: [
        {
          name: "Log Producer Engine",
          role: "Distributed Microservice Telemetry Simulator",
          description:
            "Simulates high-throughput banking, payment, and authentication logs with configurable nominal patterns and injected failure scenarios.",
        },
        {
          name: "Apache Kafka Event Broker",
          role: "High-Throughput Ingestion (KRaft Mode)",
          description:
            "Streams distributed log events into the 'service-logs' topic using KRaft metadata management, eliminating Zookeeper overhead.",
        },
        {
          name: "Pathway Stream Processor",
          role: "60-Second Windowed Stream Analytics",
          description:
            "Consumes Kafka streams, decodes JSON payloads, segments logs per microservice, and maintains 60-second rolling windows with cooldown deques.",
        },
        {
          name: "Deterministic Anomaly Detector",
          role: "Rule-Based SLA & Metric Threshold Engine",
          description:
            "Computes real-time Error Rate, Average Latency, and P95 Latency against predefined financial SLAs (>10% Warning, >25% Critical, >500ms Latency).",
        },
        {
          name: "RAG Incident Retrieval Engine",
          role: "Contextual Runbook & History Search",
          description:
            "Extracts relevant operational context by matching triggered anomaly profiles against local technical runbooks and past incident post-mortems.",
        },
        {
          name: "LLM Root Cause & Remediation AI",
          role: "Automated Diagnosis & Action Plan Synthesis",
          description:
            "Combines anomaly metrics with retrieved runbook context through Gemini/OpenAI to generate actionable root cause hypotheses and mitigation steps.",
        },
        {
          name: "FastAPI & WebSocket Gateway",
          role: "Persistent Real-Time Streaming Backend",
          description:
            "Monitors alerts.jsonl and pushes live incident events across persistent two-way WebSockets to client dashboards without page refreshes.",
        },
        {
          name: "Live Dashboard & Alert Dispatch",
          role: "Telemetry Visualizer & Multi-Channel Alerting",
          description:
            "Displays real-time Chart.js telemetry served by Nginx and dispatches critical incident notifications immediately to Slack and Email channels.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "Log Producer Event Generation",
          description:
            "Synthetic log producer simulates active banking, payment, and authentication services, generating structured JSON log streams with latency and error tags.",
        },
        {
          step: "02",
          title: "Apache Kafka Ingestion (KRaft)",
          description:
            "Logs are published to the 'service-logs' topic in Apache Kafka running in KRaft mode, providing low-latency distributed event buffering.",
        },
        {
          step: "03",
          title: "Pathway Windowed Stream Processing",
          description:
            "Pathway consumes the streaming topic, segments logs by service, and applies a 60-second rolling window with cooldown deques to filter duplicate alerts.",
        },
        {
          step: "04",
          title: "Metrics Calculation & Anomaly Detection",
          description:
            "Calculates Error Rate, Average Latency, and P95 Latency. Compares metrics against predefined thresholds to flag Warning and Critical events.",
        },
        {
          step: "05",
          title: "RAG Context & Runbook Retrieval",
          description:
            "When an anomaly is flagged, the system retrieves relevant troubleshooting runbooks and historical incident post-mortems from local Markdown documentation.",
        },
        {
          step: "06",
          title: "LLM Root Cause & Remediation Synthesis",
          description:
            "The retrieved runbook context and anomaly telemetry are passed to Gemini/OpenAI to synthesize plausible root causes and concrete remediation steps.",
        },
        {
          step: "07",
          title: "Structured Alert Persistence (JSONL)",
          description:
            "Enriched incident records containing severity, error rates, latencies, root causes, and remediation suggestions are written to alerts.jsonl.",
        },
        {
          step: "08",
          title: "FastAPI WebSockets, Dashboard & Notifications",
          description:
            "FastAPI pushes new alerts via WebSockets to a Chart.js dashboard served by Nginx, while critical alerts trigger automated Slack and Email notifications.",
        },
      ],
      techStackCategories: [
        {
          category: "Stream Ingestion & Message Broker",
          skills: ["Apache Kafka", "KRaft Metadata Mode", "Event Streaming", "service-logs Topic", "Distributed Log Producer"],
        },
        {
          category: "Stream Processing & Metric Analytics",
          skills: ["Pathway Framework", "60s Rolling Windows", "Error Rate Calculation", "Average & P95 Latency", "Rule-Based Anomaly Detection"],
        },
        {
          category: "GenAI & Root Cause Diagnosis",
          skills: ["Retrieval-Augmented Generation (RAG)", "Gemini / OpenAI API", "Incident Runbook Retrieval", "Root Cause Analysis", "Remediation Playbooks"],
        },
        {
          category: "Backend, WebSockets & Notifications",
          skills: ["Python", "FastAPI", "WebSockets (Live Push)", "alerts.jsonl (JSON Lines)", "Slack Notifier", "Email Notifications"],
        },
        {
          category: "Visualization, Web Serving & DevOps",
          skills: ["Chart.js", "HTML5 / CSS3 / JavaScript", "Nginx Reverse Proxy", "Docker Containerization", "Docker Compose Orchestration"],
        },
      ],
      technologies: [
        "Kafka",
        "KRaft",
        "Pathway",
        "Python",
        "FastAPI",
        "WebSockets",
        "RAG",
        "LLM",
        "Docker",
        "Docker Compose",
        "Chart.js",
        "Nginx",
        "JSONL",
      ],
      features: [
        "Distributed log ingestion via Apache Kafka in KRaft mode eliminating Zookeeper dependencies",
        "Real-time stream processing with Pathway utilizing 60-second rolling windows and alert cooldowns",
        "Deterministic metric evaluation computing Error Rate, Average Latency, and P95 Latency",
        "Rule-based anomaly detection mapping metric spikes to Warning and Critical alert levels",
        "RAG-powered runbook search retrieving historical incident records and mitigation procedures",
        "AI-assisted root cause analysis and actionable remediation suggestions via Gemini/OpenAI",
        "FastAPI backend broadcasting live alert telemetry over persistent two-way WebSockets",
        "Interactive Chart.js monitoring dashboard served through Nginx reverse proxy",
        "Automated multi-channel notifications routing critical alerts to Slack and Email channels",
        "Comprehensive multi-container deployment automated via Docker and Docker Compose",
      ],
      team: {
        name: "Green Sync Innovators",
        members: [
          { name: "Vijay Kasturi K", role: "Leader" },
          { name: "Sudharsan E", role: "Me" },
          { name: "Akash S M", role: "Team Member" },
          { name: "Dinny Paul Navis C", role: "Team Member" },
        ],
      },
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1782839984/Screen_Recording_2026-06-30_224847_h4gzfy.mp4",
    },
    {
      title: "Annam Daan – Surplus to Sacred Smiles: AI-Powered Food Rescue and Redistribution Platform",
      slug: "annam-daan",
      href: "",
      github: "",
      dates: "2025",
      active: true,
      description:
        "Annam Daan (Surplus to Sacred Smiles) is a full-stack AI-powered food rescue and redistribution ecosystem engineered to divert edible surplus meals from restaurants, banquet halls, and food establishments directly to verified hunger-relief NGOs and local shelters. Built on a decoupled microservice architecture—combining a Node.js & Express business backend with a dedicated Python FastAPI intelligence service—the platform automates preliminary food condition screening via a TensorFlow CNN classifier (fresh, slightly stale, unsafe), validates official FSSAI licenses using Tesseract OCR, ranks optimal recipient shelters using a multi-factor matching engine (GPS distance, capacity, reliability, pickup window), and guarantees handoff chain-of-custody using cryptographic HMAC-signed QR tokens coupled with GPS geofencing.",
      problemSolution: {
        problemTitle: "Commercial Food Wastage & Distribution Vulnerabilities",
        problem:
          "Commercial kitchens, restaurants, and event caterers discard immense quantities of safe, edible surplus food daily because they lack direct, immediate channels to coordinate with nearby shelters. Furthermore, ad-hoc donation networks suffer from critical distribution vulnerabilities: uncertain food safety, unverified food handler licenses, mismatched shelter intake capacities, and unauthorized or fake pickups that compromise beneficiary health and supply chain integrity.",
        solutionTitle: "AI Safety Screening, Smart Matching & Cryptographic Geofencing",
        solution:
          "Annam Daan streamlines the entire food rescue lifecycle. Donors submit surplus listings with meal details, photos, and FSSAI documentation. A Python FastAPI service performs CNN visual condition screening and OCR license validation before triggering an automated matching engine that pairs donations with optimal local NGOs. Physical pickups are authenticated using tamper-proof HMAC QR tokens and GPS geofence validation, updating real-time donation states in Firebase Firestore.",
      },
      architectureTitle: "Decoupled AI & Geofenced Distribution Architecture",
      architectureSubtitle:
        "Decoupled microservice architecture uniting Node.js business orchestration, Python FastAPI deep learning services, multi-factor NGO ranking, and cryptographic HMAC-signed location verification.",
      architectureBadge: "Module",
      agents: [
        {
          name: "Donor & Intake Orchestrator",
          role: "Meal Listing & Document Intake Gateway",
          description:
            "Manages donor onboarding, meal quantities, preparation metadata, pickup schedules, and secure document/photo uploads to Firebase Storage.",
        },
        {
          name: "Tesseract OCR License Validator",
          role: "FSSAI Document & Credential Extractor",
          description:
            "Scans uploaded food establishment licenses using Optical Character Recognition, extracting registration numbers and comparing against validation schemas.",
        },
        {
          name: "TensorFlow CNN Safety Classifier",
          role: "Visual Food Condition Screening Engine",
          description:
            "Evaluates food photographs through convolutional neural layers to provide preliminary condition screening (Fresh, Slightly Stale, Unsafe).",
        },
        {
          name: "Multi-Factor NGO Matching Engine",
          role: "Proximity & Capacity Optimization Router",
          description:
            "Ranks registered NGOs using Haversine GPS proximity, real-time intake capacity, historical reliability ratings, and available pickup windows.",
        },
        {
          name: "HMAC QR & Geofence Authenticator",
          role: "Cryptographic Chain-of-Custody Verifier",
          description:
            "Issues tamper-resistant HMAC-signed QR tokens and validates volunteer GPS coordinates against donor pickup geofences to prevent fake collections.",
        },
        {
          name: "Delivery Lifecycle & Tracking Engine",
          role: "Real-Time State & Multi-Stakeholder Monitor",
          description:
            "Tracks status transitions (CREATED -> AI_VERIFIED -> AVAILABLE -> ACCEPTED -> PICKED_UP -> DELIVERED -> COMPLETED) across role-based dashboards.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "Donor Listing & Media Upload",
          description:
            "Donor logs in and submits meal category, quantity, preparation timestamp, pickup window, food photo, and FSSAI license certificate through the React interface.",
        },
        {
          step: "02",
          title: "Node.js Backend & API Dispatch",
          description:
            "Node.js/Express server orchestrates the request, creates the donation record in Firebase Firestore, and routes media to the Python FastAPI AI service.",
        },
        {
          step: "03",
          title: "Tesseract OCR License Extraction",
          description:
            "FastAPI processes the uploaded license image, extracting registration text and validating formatting against official FSSAI standards before approval.",
        },
        {
          step: "04",
          title: "TensorFlow CNN Condition Classification",
          description:
            "Deep learning convolutional model analyzes food visual patterns, classifying the batch as fresh, slightly stale, or unsafe as a preliminary safety gate.",
        },
        {
          step: "05",
          title: "Multi-Factor NGO Ranking & Pairing",
          description:
            "Safe donations activate the matching engine, which evaluates nearby NGOs based on GPS distance, meal capacity, reliability scores, and available schedules.",
        },
        {
          step: "06",
          title: "Cryptographic HMAC QR Token Generation",
          description:
            "Upon NGO acceptance, an unforgeable QR token is generated with an HMAC signature embedding donation ID, NGO credentials, coordinate metadata, and expiry time.",
        },
        {
          step: "07",
          title: "Volunteer Pickup & GPS Geofencing",
          description:
            "Volunteer scans the QR token at the donor site; the backend cryptographically verifies the HMAC signature and checks volunteer GPS against the donor geofence.",
        },
        {
          step: "08",
          title: "Delivery Handover & Status Completion",
          description:
            "The volunteer transports the meals to the NGO facility, marking the delivery COMPLETED and updating real-time analytics across all stakeholder portals.",
        },
      ],
      techStackCategories: [
        {
          category: "Frontend & Role-Based Dashboards",
          skills: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Role Dashboards (Donor, NGO, Volunteer, Admin)"],
        },
        {
          category: "Core Backend & Business Logic",
          skills: ["Node.js", "Express.js", "RESTful APIs", "Multi-Factor Matching Engine", "HMAC Signature Generation"],
        },
        {
          category: "AI Microservice & Computer Vision",
          skills: ["Python", "FastAPI", "Tesseract OCR (FSSAI Validation)", "TensorFlow CNN (Food Condition Classification)", "Image Preprocessing"],
        },
        {
          category: "Cloud Database & Security Architecture",
          skills: ["Firebase Firestore (NoSQL)", "Firebase Storage", "Firebase Security Rules", "Role-Based Access Control (RBAC)"],
        },
        {
          category: "Verification, Geofencing & DevOps",
          skills: ["HMAC Cryptographic Tokens", "GPS Geofencing", "Haversine Proximity", "Docker Containerization"],
        },
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "TensorFlow",
        "CNN",
        "Tesseract OCR",
        "Firebase Firestore",
        "Firebase Storage",
        "HMAC",
        "GPS Geofencing",
        "Docker",
      ],
      features: [
        "Decoupled architecture uniting Node.js business backend and Python FastAPI AI microservice",
        "Tesseract OCR pipeline extracting and verifying FSSAI food establishment registration licenses",
        "TensorFlow CNN model providing preliminary visual screening of food condition (fresh, slightly stale, unsafe)",
        "Multi-factor matching algorithm optimizing pairings across GPS distance, capacity, reliability, and time windows",
        "Cryptographic HMAC-signed QR token verification guaranteeing authenticated, tamper-proof pickup workflows",
        "GPS geofencing validating physical volunteer coordinates against donor pickup boundaries to prevent fake pickups",
        "Real-time NoSQL data persistence and secure document storage via Firebase Firestore and Firebase Storage",
        "Comprehensive 4-role portal system with custom views for Donors, NGOs, Volunteers, and System Administrators",
        "Full containerized architecture packaged with Docker for consistent multi-service deployment",
      ],
      team: {
        name: "Green Sync Innovators",
        members: [
          { name: "Vijay Kasturi K", role: "Leader" },
          { name: "Sudharsan E", role: "Me" },
          { name: "Srivarshan S S", role: "Team Member" },
          { name: "Surya Kumar R", role: "Team Member" },
        ],
      },
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1782838855/Screen_Recording_2026-06-30_222931_b6ygkz.mp4",
    },
    {
      title: "ROI – Rules of India: Constitution of India Mobile App",
      slug: "roi-rules-of-india",
      href: "",
      github: "",
      dates: "2024 - 2026",
      active: true,
      description:
        "ROI (Rules of India) is a cross-platform mobile application designed to democratize legal awareness by making the Constitution of India intuitive, accessible, and engaging for citizens, law aspirants, and students. Developed with Flutter and Dart from a unified codebase, the application organizes complex constitutional law into structured, readable modules covering the Preamble, Fundamental Rights, Directive Principles, and individual Articles. Featuring secure user authentication via Firebase Authentication and real-time reading progress synchronization through Firebase Realtime Database, ROI ensures users can seamlessly pick up where they left off across sessions, complete interactive legal quizzes, and search legal provisions effortlessly.",
      problemSolution: {
        problemTitle: "Constitutional Inaccessibility & Complex Legal Jargon",
        problem:
          "The Constitution of India contains hundreds of extensive legal Articles, amendments, and statutory provisions written in dense legal terminology. For students, citizens, and civil service aspirants, finding specific Articles, understanding fundamental civic rights, and maintaining continuous reading progress across study sessions is cumbersome and overwhelming without specialized guidance.",
        solutionTitle: "Cross-Platform Flutter Experience with Real-Time Progress Sync",
        solution:
          "ROI solves this challenge through a beautifully categorized cross-platform Flutter mobile interface. Users authenticate securely via Firebase Authentication and browse constitution modules organized by chapters, parts, and articles. As users read, Firebase Realtime Database continuously synchronizes reading milestones, active bookmarks, and quiz scores, providing an intuitive, interactive, and uninterrupted learning experience.",
      },
      architectureTitle: "Cross-Platform Mobile & Real-Time Cloud Architecture",
      architectureSubtitle:
        "Engineered with a single Flutter/Dart codebase connected to Firebase Authentication and Realtime Database for instantaneous cloud state synchronization.",
      architectureBadge: "Module",
      agents: [
        {
          name: "Cross-Platform UI Engine",
          role: "Flutter & Dart Mobile Experience",
          description:
            "Renders a high-performance, responsive cross-platform interface targeting Android and iOS from a single unified codebase with reusable Material widgets.",
        },
        {
          name: "Firebase Authentication Manager",
          role: "User Identity & Session Security",
          description:
            "Manages user onboarding, secure sign-up, credential validation, and persistent session tokens using Firebase Authentication services.",
        },
        {
          name: "Constitution Knowledge Navigator",
          role: "Legal Taxonomy & Categorized Reader",
          description:
            "Structures constitutional law into intuitive sections: Preamble, Fundamental Rights, Directive Principles, Fundamental Duties, and numbered Articles.",
        },
        {
          name: "Real-Time Reading Progress Synchronizer",
          role: "Firebase Realtime Database Cloud Sync",
          description:
            "Tracks and synchronizes users' exact reading positions, completed chapters, and saved bookmarks in real time across app launches and devices.",
        },
        {
          name: "Fast Article Search Engine",
          role: "Keyword & Article Number Indexer",
          description:
            "Enables students and legal researchers to rapidly locate specific Articles, legal terms, and constitutional amendments through instant client-side filtering.",
        },
        {
          name: "Interactive Legal Quiz & Retention Engine",
          role: "Gamified Knowledge Reinforcement",
          description:
            "Tests constitutional comprehension through interactive daily quizzes, progress streaks, and plain-language summaries of complex legal statutes.",
        },
      ],
      workflow: [
        {
          step: "01",
          title: "App Launch & Flutter Engine Boot",
          description:
            "The mobile application initializes the Flutter widget hierarchy, theme configurations, and local offline caches on the user's mobile device.",
        },
        {
          step: "02",
          title: "Firebase Authentication & Session Restore",
          description:
            "User logs in securely or creates a new profile via Firebase Authentication, establishing verified access without requiring custom auth servers.",
        },
        {
          step: "03",
          title: "Cloud State & Reading Progress Sync",
          description:
            "The app queries Firebase Realtime Database to retrieve the user's saved reading position, active bookmarks, and previous chapter completions.",
        },
        {
          step: "04",
          title: "Categorized Constitutional Exploration",
          description:
            "User explores structured modules: Preamble, Fundamental Rights, Directive Principles of State Policy, and individual Articles with clean typography.",
        },
        {
          step: "05",
          title: "Instant Article Search & Navigation",
          description:
            "Users search by Article number or legal keyword, jumping directly to relevant constitutional provisions and related case context.",
        },
        {
          step: "06",
          title: "Plain-Language Legal Comprehension",
          description:
            "Complex statutory terminology is clarified with concise summaries and practical breakdowns to ensure thorough understanding.",
        },
        {
          step: "07",
          title: "Continuous Real-Time Progress Persistence",
          description:
            "As the user finishes reading Articles or answers quizzes, updated timestamps and progress markers write asynchronously to Firebase Realtime Database.",
        },
        {
          step: "08",
          title: "Seamless Return & Continued Learning",
          description:
            "Upon reopening the app, the user is greeted with their exact last-read location, allowing uninterrupted constitutional learning on the go.",
        },
      ],
      techStackCategories: [
        {
          category: "Mobile Application & Frontend",
          skills: ["Flutter Framework", "Dart Language", "Cross-Platform (Android & iOS)", "Material Design 3", "Responsive UI Widgets"],
        },
        {
          category: "Cloud Authentication & Security",
          skills: ["Firebase Authentication", "Email/Password Auth", "OAuth Integration", "Session Token Management"],
        },
        {
          category: "Cloud Database & Real-Time Sync",
          skills: ["Firebase Realtime Database", "NoSQL JSON Tree Sync", "Cloud State Synchronization", "Offline Data Caching"],
        },
        {
          category: "State Management & Architecture",
          skills: ["Provider / BLoC Pattern", "Clean Architecture", "REST APIs", "JSON Serialization"],
        },
        {
          category: "Constitutional Knowledge & Features",
          skills: ["Constitution of India Taxonomy", "Article Search Engine", "Reading Progress Tracking", "Interactive Legal Quizzes"],
        },
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Authentication",
        "Firebase Realtime Database",
        "Cross-Platform",
        "Mobile Development",
        "State Management",
        "UI/UX Design",
      ],
      features: [
        "Cross-platform mobile application built with Flutter delivering native performance on Android and iOS",
        "Secure user registration and authentication powered by Firebase Authentication",
        "Real-time reading progress and bookmark synchronization using Firebase Realtime Database",
        "Comprehensive coverage of the Constitution of India: Preamble, Fundamental Rights, Duties, and Articles",
        "Fast instant search engine indexing constitutional articles by keyword, number, and category",
        "Plain-language legal explanations simplifying complex constitutional jargon for everyday users",
        "Interactive daily quizzes and knowledge checkpoints reinforcing legal understanding",
        "Offline-friendly reading architecture allowing uninterrupted access to downloaded constitutional text",
      ],
      links: [],
      image: "",
      video:
        "https://res.cloudinary.com/b7ujnwhm/video/upload/f_auto,q_auto,w_800/v1793555654/Screen_Recording_2026-11-01_232245_zwerir.mp4",
    },
  ],
  hackathons: [
    {
      title: "AWS ML Challenge",
      dates: "2026",
      location: "Amazon Web Services (AWS) — National Level",
      description:
        "Competed in the prestigious Amazon Web Services (AWS) Machine Learning Challenge against thousands of engineering teams across India. Built and optimized high-performance deep learning models on large-scale datasets, securing a ranking within the Top 1% nationally.",
      image: "/aws.svg",
      win: "Top 1%",
      links: [],
    },
    {
      title: "Robovanza",
      dates: "2026",
      location: "National Level Hackathon",
      description:
        "Competed in the national-level hackathon, building an innovative functional prototype under intensive time constraints. Collaborated in a competitive multi-college environment, demonstrating rapid engineering, problem-solving, and presentation to secure 2nd place overall.",
      image: "/robovanza.svg",
      win: "2nd Place",
      links: [],
    },
    {
      title: "Sarvam 26",
      dates: "2026",
      location: "EASA College of Engineering, Coimbatore",
      description:
        "Developed an innovative software solution to address real-world challenges while collaborating in a competitive team environment. Successfully secured 3rd place among participating teams through problem-solving, technical implementation, and project presentation.",
      image: "/easa.png",
      win: "3rd Place",
      links: [],
    },
    {
      title: "HackVerse 2.0",
      dates: "2026",
      location: "PSNA College of Engineering and Technology, Dindigul",
      description:
        "Designed and developed a functional prototype within a limited timeframe, demonstrating technical skills, teamwork, and rapid product development. Secured 2nd place in the intra-departmental competition.",
      image: "/psna.png",
      win: "2nd Place",
      links: [],
    },
    {
      title: "Titanium 26",
      dates: "2026",
      location: "Rajalakshmi Institute of Technology, Chennai",
      description:
        "Worked on developing a scalable solution to a real-world problem while enhancing problem-solving and technical development skills in a competitive inter-college hackathon environment.",
      image: "/rit.png",
      win: "4th Place",
      links: [],
    },
    {
      title: "GDG Hackathon",
      dates: "2025",
      location: "PSNA IT Department",
      description:
        "Built a technology-driven solution and competed against multiple teams, gaining experience in innovation, collaboration, and software development under pressure. Organized by the Google Developer Group.",
      image: "/psna.png",
      win: "5th Place",
      links: [],
    },
    {
      title: "Hack.io 2.0",
      dates: "2025",
      location: "K. S. School of Engineering and Management, Bangalore",
      description:
        "Collaborated with a team to design and implement a software solution, focusing on innovation, usability, and technical excellence in this inter-college hackathon.",
      image: "/kssem.png",
      win: "4th Place",
      links: [],
    },
  ],
} as const;

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectBySlug(slug: string) {
  return DATA.projects.find(
    (p) => p.slug === slug || slugify(p.title) === slug
  );
}

export const PROJECT_CATEGORIES = [
  {
    id: "websites",
    title: "Websites",
    shortTitle: "Websites",
    description: "Website projects developed by me.",
    slugs: [
      "ascendo-ai",
      "annam-daan",
      "ghost-line",
      "peralagae",
    ],
  },
  {
    id: "apps",
    title: "Apps",
    shortTitle: "Apps",
    description: "Mobile applications and software applications developed by me.",
    slugs: [
      "hacker-news",
      "mevo-ai",
      "finlog-monitor",
      "roi-rules-of-india",
    ],
  },
  {
    id: "internship",
    title: "Internship Projects",
    shortTitle: "Internship",
    description: "Projects completed as part of my internships.",
    slugs: [
      "roohae-cards",
      "sabari-hospital",
      "pavan-vela-grand",
      "eastgold",
      "handoverly-ai",
      "peralagae",
    ],
  },
  {
    id: "freelance",
    title: "Freelance Projects",
    shortTitle: "Freelance",
    description: "Projects developed for freelance clients.",
    slugs: [
      "aura-de-addiction-centre",
      "jaishree-real-estate",
    ],
  },
] as const;
