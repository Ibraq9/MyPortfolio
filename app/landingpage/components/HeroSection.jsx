"use client";

import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <Navbar />

      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        {/* Heading */}
        <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20} as="p" className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Jack Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
