"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Atom, FolderKanban, Briefcase, Award, Mail } from "lucide-react";

const navItems = [
  { name: "Home", link: "#mainsection", icon: <Home className="h-4 w-4" /> },
  { name: "Skills", link: "#skills", icon: <Atom className="h-4 w-4" /> },
  {
    name: "Projects",
    link: "#Projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Certs",
    link: "#Certifications",
    icon: <Award className="h-4 w-4" />,
  },
  { name: "Contact", link: "#Contact", icon: <Mail className="h-4 w-4" /> },
];

export default function NavBar() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
