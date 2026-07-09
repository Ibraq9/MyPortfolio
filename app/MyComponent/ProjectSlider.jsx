"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SectionHeading from "@/components/SectionHeading";
import { projects, projectDemos } from "@/lib/data/projects";

const DemoContent = ({ demo }) => {
  if (!demo) {
    return (
      <div className="flex items-center justify-center h-[280px] md:h-[360px] text-zinc-500 text-sm">
        Demo coming soon
      </div>
    );
  }
  if (demo.githubUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-[280px] md:h-[360px] gap-4">
        <p className="text-zinc-400 text-center px-6">
          Command-line C++ tool — view the source on GitHub
        </p>
        <a
          href={demo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View Source Code
        </a>
      </div>
    );
  }

  return (
    <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden">
      <iframe
        src={demo.videoSrc}
        title={demo.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default function ProjectSlider() {
  const carouselData = projects.map((project) => {
    const demo =
      project.demoIndex !== null && project.demoIndex !== undefined
        ? projectDemos[project.demoIndex]
        : null;

    return {
      category: project.tags[0] || "Project",
      title: project.name,
      src: project.image,
      content: <DemoContent demo={demo} />,
    };
  });

  const cards = carouselData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Project Demos"
          subtitle="Watch walkthroughs and live previews of selected projects"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Carousel items={cards} />
        </motion.div>
      </div>
    </section>
  );
}
