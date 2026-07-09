import Prayer from "@/app/assets/prayer.png";
import e_commerce from "@/app/assets/e-commerce.png";
import Queue from "@/app/assets/queue.png";
import cplusPlus from "@/app/assets/CPlusPlus.webp";
import LMS from "@/app/assets/LMS.png";
import snapShot from "@/app/assets/snapShot.png"
import atfallna from "@/app/assets/atfallna.png"

export const projects = [

    {
    id: "Learning Managment System (LMS)",
    name: "Learning Management System",
    description:
      "A platform for managing and delivering educational content, courses, and student progress.",
    image: LMS,
    href: "https://github.com/Ibraq9/LMS",
    liveHref: "https://lms-zeta-gold.vercel.app/",
    tags: ["Next.js", "Tailwind", "Stripe" ,"Neon Provider", "PostgreSQL" , "PrismaORM"],
    demoIndex: null,
  },

    {
    id: "atfallna",
    name: "Atfallna Children's toys store",
    description:
      "**Atfallna** is a modern Arabic (RTL) e-commerce platform for selling children's toys, designed to provide a smooth shopping experience for parents and customers. The website features product browsing, advanced filtering, favorites, shopping cart, secure authentication, and order management, alongside informational pages such as About, Contact, and Store Policies. It also includes a comprehensive admin dashboard for managing products, users, and store analytics. The platform is a scalable, secure, and production-ready architecture developed using a multi-agent workflow (Architect, Designer, Builder, and Reviewer)",
    image: atfallna,
    href: "https://github.com/Ibraq9/E-Commerce-App",
    liveHref: "",
    tags: ["Next.js", "Tailwind" , "TypeScript" ,"PostgreSQL" , "PrismaORM", "Neon Provider" ,"PrismaORM"],
    demoIndex: 0,
  },
    {
    id: "e-commerce",
    name: "E-commerce App",
    description:
      "An online clothing store with product browsing, cart, and checkout — modeled after real e-commerce sites.",
    image: e_commerce,
    href: "https://github.com/Ibraq9/E-Commerce-App",
    liveHref: "https://e-commerce-app-beige-six.vercel.app/",
    tags: ["React", "Tailwind"],
    demoIndex: 0,
  },

  {
    id: "queue-simulation",
    name: "Queue Simulation",
    description:
      "Simulates queuing systems for supermarkets, banks, and service centers with visual analytics.",
    image: Queue,
    href: "https://github.com/Ibraq9/Queing-System-Simulation",
    liveHref: "https://ibraq9.github.io/Queing-System-Simulation/",
    tags: ["HTML", "CSS", "JavaScript"],
    demoIndex: 3,
  },
  {
    id: "prayer-times",
    name: "Prayer Times",
    description:
      "A clean prayer times application with location-based schedules and intuitive UI.",
    image: Prayer,
    href: "https://github.com/Ibraq9/Prayer-Times",
    liveHref: "https://ibraq9.github.io/Prayer-Times/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    demoIndex: 1,
  },

  {
    id: "cpp-organizer",
    name: "C++ File Organizer",
    description:
      "Organizes folders and files by size or extension with a command-line interface.",
    image: cplusPlus,
    href: "https://github.com/Ibraq9/File-Organization",
    liveHref: "",
    tags: ["C++"],
    demoIndex: 2,
  },
    {
    id: "TO-DO",
    name: "Full Stack To Do List",
    description:
      "simple to do list that organize tasks",
    image:snapShot ,
    href: "https://github.com/Ibraq9/Full-Stack-ToDo",
    liveHref: "https://full-stack-to-do-eight.vercel.app/",
    tags: ["Next.js" , "Tailwind" , "PostgreSQL" , "Neon Provider","PrismaORM"],
    demoIndex: null,
  },
];
