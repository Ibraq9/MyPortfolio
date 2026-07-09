"use client";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const decorations = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1, x: -80, dur: 0.9,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className: "w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25, x: -80, dur: 0.9,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15, x: 80, dur: 0.9,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className: "w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3, x: 80, dur: 0.9,
  },
];

const aboutText =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative 3D images */}
      {decorations.map((dec, i) => (
        <FadeIn
          key={i}
          delay={dec.delay}
          duration={dec.dur}
          x={dec.x}
          y={0}
          as="img"
          src={dec.src}
          alt=""
          className={`absolute ${dec.className} pointer-events-none`}
        />
      ))}

      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <AnimatedText
        text={aboutText}
        className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      />

      {/* Contact Button */}
      <FadeIn delay={0.3} y={20} className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </FadeIn>
    </section>
  );
}
