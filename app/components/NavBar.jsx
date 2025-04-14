"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import {Atom , FolderKanban ,Award ,Phone} from 'lucide-react';
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Atom className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#Projects",
      icon: <FolderKanban className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Certifications",
      link: "#Certifications",
      icon: <Award className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#Contact",
      icon: (
        <Phone className="h-4 w-4 text-white dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
