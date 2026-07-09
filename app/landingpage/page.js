import { Kanit } from "next/font/google";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "Jack -- 3D Creator",
  description: "Portfolio of Jack — a 3D creator driven by crafting striking and unforgettable projects.",
};

export default function LandingPage() {
  return (
    <div
      className={`${kanit.variable} min-h-screen`}
      style={{
        fontFamily: "'Kanit', sans-serif",
        backgroundColor: "#0C0C0C",
        overflowX: "clip",
      }}
    >
      <style>{`
        html, body { background-color: #0C0C0C !important; margin: 0; padding: 0; }
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
