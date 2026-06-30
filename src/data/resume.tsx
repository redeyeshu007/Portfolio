import { Icons } from "@/components/icons";
import { HomeIcon, NotebookPen, Rocket, FileText, Layers, Handshake } from "lucide-react";
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
    { href: "/build-with-me", icon: Handshake, label: "Build With Me" },
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
      href: "",
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
      href: "",
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
      title: "MeVo AI – Meeting Insights Generator",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Built an AI-powered Google Meet assistant that generates real-time meeting summaries, action items, and insights while conversations are happening. Enhanced accessibility through sign-language gesture recognition and created a seamless Chrome Extension experience for meeting participants.",
      technologies: [
        "AI/ML",
        "Chrome Extension",
        "Computer Vision",
        "TensorFlow",
        "OpenCV",
        "JavaScript",
      ],
      links: [],
      image: "",
      video: "https://res.cloudinary.com/b7ujnwhm/video/upload/v1782839600/Screen_Recording_2026-06-30_224202_bhgsqk.mp4",
    },
    {
      title: "GHOST LINE – AI-Powered Anonymous Social Platform",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed an emotion-driven anonymous social platform where users connect through AI-based sentiment analysis. Features include real-time chat rooms, mood-based recommendations, secure authentication, and a modern user experience focused on meaningful interactions.",
      technologies: [
        "React.js",
        "Spring Boot",
        "Firebase",
        "JWT",
        "REST APIs",
        "AI APIs",
      ],
      links: [],
      image: "",
      video: "https://res.cloudinary.com/b7ujnwhm/video/upload/v1782838044/Screen_Recording_2026-06-10_201449_kmllaq.mp4",
    },
    {
      title: "FinLog Monitor – Distributed Log Monitoring System",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Built a real-time distributed monitoring platform for financial-service workloads. Designed a scalable architecture using event streaming and real-time processing to detect issues instantly through a centralized monitoring dashboard.",
      technologies: [
        "Kafka",
        "Pathway",
        "Docker",
        "Real-Time Processing",
        "Monitoring Dashboard",
      ],
      links: [],
      image: "",
      video: "https://res.cloudinary.com/b7ujnwhm/video/upload/v1782839984/Screen_Recording_2026-06-30_224847_h4gzfy.mp4",
    },
    {
      title: "Annam Daan – AI-Powered Food Rescue Platform",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Created a full-stack food rescue ecosystem connecting donors, NGOs, volunteers, and communities to reduce food waste. Integrated AI-powered food safety analysis, OCR-based verification, real-time donation matching, encrypted QR verification, and role-based management dashboards.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Firebase",
        "FastAPI",
        "TensorFlow",
        "Docker",
        "JWT",
        "OCR",
      ],
      links: [],
      image: "",
      video: "https://res.cloudinary.com/b7ujnwhm/video/upload/v1782838855/Screen_Recording_2026-06-30_222931_b6ygkz.mp4",
    },
    {
      title: "Real Estate Management System",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed a property management platform with an administrative dashboard for managing property listings, client inquiries, and operational workflows. Implemented role-based access control, reusable components, and scalable backend services to streamline day-to-day operations.",
      technologies: [
        "React.js",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Dashboard Development",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "ROI – Rules of India",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Built a cross-platform mobile application that simplifies access to information about the Constitution of India through an intuitive and searchable interface. Integrated user authentication and cloud-based data synchronization for a seamless experience.",
      technologies: [
        "Flutter",
        "Firebase",
        "Authentication",
        "Realtime Database",
        "Mobile Development",
      ],
      links: [],
      image: "",
      video: "/roi.mp4",
    },
    {
      title: "CGPA Calculator",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Created a web-based GPA and CGPA calculator based on Anna University grading regulations. Designed a simple, responsive interface that helps students calculate academic performance quickly and accurately.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Personal Portfolio Website",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Designed and developed a modern personal portfolio showcasing projects, achievements, technical skills, and professional experience. Focused on performance, animations, responsive design, and user experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Sign Language Recognition System",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Developed a computer vision application capable of recognizing hand gestures from a live webcam feed and converting them into text in real time. Focused on accessibility and communication assistance using machine learning techniques.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "Deep Learning",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "PSNA Placement Management System",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Built a comprehensive placement platform that connects students, recruiters, and placement officers in a single ecosystem. Features include company postings, eligibility filtering, application management, interview scheduling, and real-time placement tracking, helping streamline campus recruitment activities and improve student placement outcomes.",
      technologies: [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
        "JWT",
        "REST APIs",
        "Dashboard Development",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Exam Hall Allocation App",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed a mobile application that automates exam hall allocation and seating arrangements for students. The app efficiently assigns students to examination halls based on seating capacity and schedules, helping administrators manage examinations with reduced manual effort and improved accuracy.",
      technologies: ["Flutter"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
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
      dates: "2024",
      location: "PSNA College of Engineering and Technology, Dindigul",
      description:
        "Designed and developed a functional prototype within a limited timeframe, demonstrating technical skills, teamwork, and rapid product development. Secured 2nd place in the intra-departmental competition.",
      image: "/psna.png",
      win: "2nd Place",
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
