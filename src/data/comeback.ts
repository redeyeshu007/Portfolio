export type Chapter = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
};

export const chapters: Chapter[] = [
  {
    slug: "where-i-started",
    title: "Where I Started",
    summary:
      "I started as a curious student with a passion for technology and a desire to create meaningful solutions. What began as simple experiments with code gradually evolved into a journey of building real-world applications and exploring emerging technologies.",
    content: [
      "The earliest version of this story has no awards in it. Just a student staying up late, retyping code from tutorials, and wondering why it still didn't run.",
      "But curiosity is stubborn. Every small experiment that finally worked—a button that responded, a script that automated something tedious—made me want to build the next, slightly harder thing.",
      "Those simple experiments were never really about the code. They were about discovering that I could create something out of nothing, and that the gap between an idea and a working product was something I could actually cross.",
      "That realization is where everything started. Not with talent, but with the willingness to keep trying until the thing worked.",
    ],
  },
  {
    slug: "failures",
    title: "Failures",
    summary:
      "The path was far from perfect. I faced rejected ideas, unfinished projects, lost competitions, and moments of self-doubt. Each setback taught me valuable lessons about resilience, consistency, and continuous improvement.",
    content: [
      "For a long time, the losses outnumbered the wins. Ideas I believed in got rejected. Projects I was proud of stalled and never shipped. Competitions I prepared for ended in early exits.",
      "The hardest part wasn't the failure itself—it was the self-doubt that came after. The quiet question of whether I was cut out for this at all.",
      "What saved me was getting specific. Instead of asking \"why do I keep failing,\" I started asking \"what exactly went wrong here, and what would I do differently?\" Suddenly each setback had a lesson attached to it.",
      "Resilience, consistency, continuous improvement—those words sound like clichés until you earn them the hard way. I earned them in the projects that fell apart and the competitions I lost.",
    ],
  },
  {
    slug: "what-changed",
    title: "What Changed",
    summary:
      "Everything changed when I stopped focusing on outcomes and started focusing on progress. I committed to learning through building, taking on challenges, and improving one project at a time.",
    content: [
      "The shift wasn't dramatic. There was no single night where everything clicked. It was a quiet decision to change what I measured.",
      "I stopped chasing outcomes—the win, the rank, the recognition—because I couldn't control them. Instead I started measuring progress, which I could control completely.",
      "That meant building consistently, taking on challenges slightly beyond my comfort zone, and treating every project as a rep rather than a referendum on my worth.",
      "One project at a time, the skills compounded. The outcomes I'd been chasing started showing up on their own—as a byproduct of the progress, not the goal of it.",
    ],
  },
  {
    slug: "current-mission",
    title: "Current Mission",
    summary:
      "Today, my mission is to build high-impact AI systems and scalable enterprise applications, delivering real business value as a Full Stack Developer Intern at Javix Technologies while pursuing technological entrepreneurship.",
    content: [
      "My focus today is sharper than it has ever been. As a Full Stack Developer Intern at Javix Technologies, I'm building production-grade web applications, robust APIs, and scalable databases that serve real organizations every day.",
      "Real-world problems are the filter I run every idea through. Whether it's architecting a construction handover operating system like Handoverly AI, building luxury e-commerce platforms like Peralagae, or creating accessible AI solutions, if it doesn't solve a genuine pain for real people, it's not worth building.",
      "Underneath the production systems is an unwavering commitment to continuous engineering growth: mastering modern distributed systems, autonomous AI agents, and high-performance full-stack architectures.",
      "Impact, engineering excellence, and entrepreneurial vision pursued simultaneously. That is the work driving me forward.",
    ],
  },
  {
    slug: "projects-built",
    title: "Projects Built",
    summary:
      "From cutting-edge AI systems (Ascendo AI, Mevo AI) and distributed Kafka log pipelines (FinLog Monitor) to enterprise platforms (Handoverly AI, Peralagae, Aura Clinic), every build has strengthened my architectural problem-solving mindset.",
    content: [
      "The proof of the journey is in the shipped products. AI-driven platforms, distributed data streaming architectures, full-stack client platforms, and high-conversion e-commerce systems—each one exercised a different engineering muscle.",
      "Building Ascendo AI and Mevo AI taught me that model inference is only the starting point; building the reactive UI, contextual memory, streaming pipelines, and fault-tolerant APIs around it is where true product engineering happens.",
      "Engineering FinLog Monitor with Apache Kafka and Docker gave me deep respect for asynchronous streaming, event partitioning, and distributed system reliability.",
      "Delivering Handoverly AI, EastGold, Peralagae, and healthcare portals like Aura Clinic for real stakeholders proved that code only matters when it delivers measurable client value, intuitive usability, and rock-solid uptime.",
    ],
  },
  {
    slug: "hackathons-won",
    title: "Hackathons Won",
    summary:
      "High-pressure hackathons accelerated my engineering growth, resulting in national-level recognition including a Top 1% rank in the AWS ML Challenge and 2nd Place at Robovanza.",
    content: [
      "Hackathons compressed months of engineering decisions into high-stakes 24 to 48-hour sprints. There is no better crucible than an immovable deadline and a blank repository.",
      "Competing nationally in the Amazon Web Services (AWS) Machine Learning Challenge against thousands of engineering teams demanded statistical rigor, deep learning experimentation, and scalable pipeline optimization, ultimately securing a ranking in the Top 1% nationally.",
      "At Robovanza, our team designed, engineered, and pitched a functional prototype under intense time constraints to win 2nd Place nationally, matched by another 2nd Place at HackVerse 2.0, 3rd Place at Sarvam 26, and 4th Place at Titanium 26.",
      "Along the way came podium finishes, trophies, and peer recognition. But the real prize was learning how to lead engineering decisions under pressure, build cohesive teams, and deliver working solutions when stakes are highest.",
    ],
  },
  {
    slug: "whats-next",
    title: "What's Next",
    summary:
      "The journey is only beginning. My next goal is to build larger-scale AI products, contribute to meaningful innovations, compete at higher levels, and create technology that makes a lasting impact.",
    content: [
      "The comeback isn't finished—it's accelerating. Everything so far has been the foundation, not the ceiling.",
      "Next, I want to build larger-scale AI products: systems that serve real users at real scale, not just prototypes that prove a point.",
      "I want to contribute to meaningful innovations, compete at higher levels, and keep raising the bar on what I'm capable of shipping.",
      "The long game is simple to say and hard to do: create technology that makes a lasting impact and reaches people far beyond where I started. The comeback is not a single achievement—it's the decision to keep moving forward, no matter the obstacles.",
    ],
  },
];
