"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Building2,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/data/experience";

const Experience = () => {

  return (
    <section className="py-24 px-4 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience & Internships"
          subtitle="Professional training and industry exposure"
        />

        {/* Mobile timeline (simple stacked cards) */}
        <div className="md:hidden space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-zinc-700 to-transparent -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-zinc-950 z-10 shadow-lg shadow-violet-500/30" />

                <div className={`w-1/2 ${isLeft ? "pr-10" : "pl-10"}`}>
                  <ExperienceCard exp={exp} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div className="glass-card p-5 group hover:border-violet-500/30 transition-all duration-300">
    <div className="flex items-start gap-3 sm:gap-4">
      {exp.image ? (
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-white/10">
          <Image
            src={exp.image}
            alt={exp.company}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center shrink-0">
          <Building2 size={20} className="text-violet-400" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
          {exp.title}
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-0.5 mt-0.5 text-xs text-zinc-400">
          <span className="truncate">{exp.company}</span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Calendar size={10} className="text-violet-400 shrink-0" />
            {exp.date}
          </span>
        </div>
      </div>
    </div>

    <ul className="mt-3 sm:mt-4 space-y-1.5">
      {exp.description.map((item, i) => (
        <li
          key={i}
          className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 mt-1.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap items-center justify-between gap-3 mt-3 sm:mt-4 pt-3 border-t border-white/5">
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
