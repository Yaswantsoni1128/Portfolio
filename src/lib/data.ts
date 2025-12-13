export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'database' | 'language'
  description: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
  type: 'internship' | 'project' | 'freelance'
}

export interface Education {
  id: string
  institution: string
  degree: string
  duration: string
  gpa?: string
  location: string
}

export const developerInfo = {
  name: "Yaswant",
  firstName: "Yaswant",
  lastName: "Soni", 
  title: "BTech Student & Full Stack Developer",
  bio: "Passionate BTech 3rd year student at IIITUNA with strong foundation in full-stack development. Experienced in building modern web applications using React, Node.js, and cloud technologies through internships and personal projects.",
  email: "yaswantsoni2005@gmail.com",
  phone: "+918003999085",
  location: "IIIT Una(Himachal Pradesh)",
  profileImage: "/Yash.jpg",
  resumeUrl: "/Yaswant_resume_clg.pdf",
  github: "https://github.com/Yaswantsoni1128",
  linkedin: "https://www.linkedin.com/in/yaswant-soni-8b6412282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  instagram: "https://instagram.com/yash_11.04",
}

export const education: Education[] = [
  {
    id: "1",
    institution: "Indian Institute of Information Technology, Una",
    degree: "BTech - Electronics and Communication Engineering",
    duration: "2023 - 2027",
    gpa: "7.70/10",
    location: "Himachal Pradesh, India"
  }
]

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Slotin Solutions",
    position: "Web Developer Intern",
    duration: "May 2025 - May 2025",
    description: [
      "Developed responsive web applications using React.js and Node.js, serving 1000+ active users",
      "Implemented RESTful APIs with Express.js and MongoDB, improving data retrieval speed by 40%",
      "Collaborated with cross-functional teams in Agile environment using Git version control",
      "Built automated testing suites using Jest, achieving 90% code coverage"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git","Firebase"],
    type: "internship"
  },
  {
    id: "2",
    company: "Quickintell",
    position: "Full Stack Developer Intern",
    duration: "June 2025 - Present",
    description: [
      "Created modern user interfaces using React.js and Tailwind CSS for 5+ client projects",
      "Optimized application performance resulting in 30% faster load times",
      "Integrated third-party APIs and payment gateways for e-commerce platforms",
      "Mentored 2 junior developers and conducted code reviews"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "React-Native"],
    type: "internship"
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Edumon",
    description: "A school management platform with student, teacher, fee, attendance, and notice management. Features include multi-role dashboards (Admin, Teacher, Student).",
    image: "/edumon.png",
    technologies: ["MERN Stack", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Yaswantsoni1128/Edumon",
    liveUrl: "https://edumon.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "Grevion",
    description: "An interactive stubble management system with two dashboards: SPOC for farmers to report and manage stubble, and Power Plant for real-time monitoring and efficient utilization in energy production.",
    image: "/grevion.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB","Stripe"],
    githubUrl: "https://github.com/Yaswantsoni1128/Grevion",
    liveUrl: "https://grevion-frontend.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "Fix My Locality",
    description: "Fix My Locality is a smart platform that helps citizens report local issues like garbage, potholes, and streetlight faults through a mobile or web app. Using AI for issue classification and prioritization, it enables faster complaint handling, real-time tracking, and transparent resolution to improve public services and accountability.",
    image: "/fix-my-locality.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB","twilio","Gemini AI", "Google Maps API"],
    githubUrl: "https://github.com/Yaswantsoni1128/CivicEye",
    liveUrl: "https://fix-my-locality.vercel.app",
    featured: true
  },
  {
    id: "4",
    title: "KG Training And Placements",
    description: "A freelance project developed for a coaching institute. The platform provides course listings, student enrollment, and resource management with a professional responsive design.",
    image: "/kg.png",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Abhinav3291/Frontend-KG",
    liveUrl: "https://kgtrainingandplacements.in",
    featured: false
  },
  {
    id: "5",
    title: "BloodBridge",
    description: "A blood donation platform designed for hospitals that seamlessly connects donors with recipients, enables real-time tracking of blood units, and integrates robust verification features to ensure safety, trust, and reliability in critical medical situations.",
    image: "/bloodbridge.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB","twilio"],
    githubUrl: "https://github.com/Yaswantsoni1128/BloodBridge",
    featured: true
  },
]

export const skills: Skill[] = [
  // Languages
  {
    name: "C++",
    level: 90,
    category: "language",
    description: "Proficient in object-oriented programming, STL, and problem-solving"
  },
  {
    name: "JavaScript",
    level: 95,
    category: "language",
    description: "Expert in ES6+, asynchronous programming, and DOM manipulation"
  },
  {
    name: "TypeScript",
    level: 85,
    category: "language",
    description: "Strong typing skills with advanced TypeScript features and type safety best practices"
  },
  {
    name: "Python",
    level: 75,
    category: "language",
    description: "Data structures, algorithms, scripting, and automation"
  },
  // Databases
  {
    name: "MongoDB",
    level: 90,
    category: "database",
    description: "NoSQL database design, aggregation pipelines, and performance optimization"
  },

  // Frontend
  {
    name: "React.js",
    level: 98,
    category: "frontend",
    description: "Advanced proficiency in React ecosystem including hooks, context, and performance optimization"
  },
  {
    name: "React Native",
    level: 85,
    category: "mobile",
    description: "Cross-platform mobile development with navigation, state management, and native modules"
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    description: "Full-stack React framework with SSR, SSG, and API routes expertise"
  },
  {
    name: "Expo",
    level: 80,
    category: "mobile",
    description: "Rapid React Native development with Expo SDK and managed workflow"
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "frontend",
    description: "Utility-first CSS framework for rapid UI development and responsive design"
  },
  {
    name: "Redux",
    level: 85,
    category: "frontend",
    description: "State management with Redux Toolkit, middleware, and async logic"
  },
  {
    name: "Zustand",
    level: 80,
    category: "frontend",
    description: "Lightweight state management library for React applications"
  },
  {
    name: "Context API",
    level: 85,
    category: "frontend",
    description: "React built-in solution for global state management"
  },
  {
    name: "Bootstrap",
    level: 80,
    category: "frontend",
    description: "Responsive UI design and layout framework"
  },

  // Backend
  {
    name: "Node.js",
    level: 95,
    category: "backend",
    description: "Server-side JavaScript with Express.js, middleware, and async programming"
  },
  {
    name: "Express.js",
    level: 90,
    category: "backend",
    description: "Web framework for Node.js to build REST APIs and middleware"
  },
  {
    name: "REST APIs",
    level: 90,
    category: "backend",
    description: "Designing, implementing, and consuming RESTful services"
  },

  // Tools & Platforms
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    description: "Primary development environment with extensions for productivity"
  },
  {
    name: "Git & GitHub",
    level: 90,
    category: "tools",
    description: "Version control, branching strategies, pull requests, and collaborative development"
  },
  {
    name: "Figma",
    level: 75,
    category: "tools",
    description: "UI/UX design and prototyping tool for collaborative design workflows"
  },
  {
    name: "Postman",
    level: 85,
    category: "tools",
    description: "API testing, automation, and documentation"
  },
  {
    name: "SMTP",
    level: 70,
    category: "tools",
    description: "Sending emails programmatically using SMTP protocols"
  },
  {
    name: "Stripe",
    level: 75,
    category: "tools",
    description: "Payment gateway integration with secure transactions"
  },
  {
    name: "Vercel",
    level: 85,
    category: "tools",
    description: "Frontend hosting, serverless functions, and deployment automation"
  },
  {
    name: "Netlify",
    level: 80,
    category: "tools",
    description: "Static site hosting, CI/CD pipelines, and serverless functions"
  },
  {
    name: "Render",
    level: 75,
    category: "tools",
    description: "Cloud application hosting and deployment platform"
  },
  {
    name: "Cursor",
    level: 70,
    category: "tools",
    description: "AI-powered coding assistant and IDE enhancements"
  }
];

export const achievements = [
  "🏆 Winner - 3rd in InterCollege Hackathon 2025 (Team Lead)",
  "🚀 1 Successful Internship completed",
  "📈 Built applications serving 500+ users"
]