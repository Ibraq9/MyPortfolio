"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Eye } from "lucide-react";
import TimeLine from "./TimeLine";
import CertificateImage from "./CertificateImage";
import SectionHeading from "@/components/SectionHeading";
import { certificates } from "@/lib/data/certificates";

const Certificate = () => {
  const [activeCert, setActiveCert] = useState(null);

  const activeImage = certificates.find((c) => c.id === activeCert)?.image;

  const timelineItems = certificates.map((cert) => ({
    content: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card p-5 group"
      >
        <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
          {cert.title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          {cert.date} · {cert.issuer}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
            <MapPin size={13} className="text-violet-400" />
            {cert.location}
          </div>
          <button
            onClick={() => setActiveCert(cert.id)}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg
              bg-violet-600/20 text-violet-300 border border-violet-500/30
              hover:bg-violet-600/40 transition-colors"
          >
            <Eye size={13} />
            View
          </button>
        </div>
      </motion.div>
    ),
  }));

  return (
    <section className="py-24 px-4" id="Certifications">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional training and credentials"
        />
        <TimeLine items={timelineItems} />
      </div>

      {activeImage && (
        <CertificateImage
          onClose={() => setActiveCert(null)}
          ImageSrc={activeImage}
        />
      )}
    </section>
  );
};

export default Certificate;
