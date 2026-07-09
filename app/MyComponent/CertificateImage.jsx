"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const CertificateImage = ({ ImageSrc, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-2 -right-2 sm:top-4 sm:right-4 p-2 rounded-full
            bg-zinc-800 border border-white/10 text-white hover:bg-violet-600 transition-colors z-50"
          onClick={onClose}
          aria-label="Close certificate"
        >
          <X size={20} />
        </button>

        <div className="relative h-[75vh] rounded-2xl overflow-hidden glass-card">
          <Image
            src={ImageSrc}
            alt="Certificate"
            fill
            className="object-contain p-4"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateImage;
