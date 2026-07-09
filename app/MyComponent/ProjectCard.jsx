"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Play } from "lucide-react";

export default function ProjectCard({
  project_tech,
  project_href,
  projectName,
  projectDescription,
  projectImage,
  tags = [],
  githubHref,
  liveHref,
}) {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative flex flex-col p-4 tracking-tight w-[18rem] sm:w-[20rem] glass-card group cursor-default">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base text-white leading-snug">
            {projectName}
          </h3>
          <ExternalLink size={14} className="text-zinc-500 shrink-0 mt-1" />
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-3 line-clamp-2">
          {projectDescription}
        </p>

        <div className="flex gap-2 mb-3">
          {project_tech.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3 md:hidden">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={liveHref || githubHref || project_href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-blue-600/30 border border-white/10"
        >
          <Image
            src={projectImage}
            alt={projectName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-violet-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
            {liveHref && (
              <span
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(liveHref, '_blank'); }}
                className="flex items-center gap-1.5 rounded-full bg-violet-600 hover:bg-violet-500 px-3.5 py-2 text-xs font-medium text-white transition-all shadow-lg shadow-violet-600/30 cursor-pointer"
              >
                <Play size={13} />
                Live Demo
              </span>
            )}
            {githubHref && (
              <span
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(githubHref, '_blank'); }}
                className="flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-3.5 py-2 text-xs font-medium text-white transition-all cursor-pointer"
              >
                <Github size={13} />
                Source Code
              </span>
            )}
          </div>
        </a>

        {/* Full-card hover border glow */}
        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-violet-500/30 transition-colors duration-300 pointer-events-none" />
      </div>
    </div>
  );
}
