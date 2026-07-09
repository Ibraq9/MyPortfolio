"use client";

import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>

        <div className="space-y-0">
          {services.map((s, i) => (
            <FadeIn
              key={s.num}
              delay={i * 0.1}
              y={20}
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: i < services.length - 1 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {s.num}
              </span>

              {/* Name + Description */}
              <div className="pt-1 sm:pt-2 md:pt-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl mt-2"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6, color: "#0C0C0C" }}
                >
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
