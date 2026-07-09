import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ibrahim Abuelkasem | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Ibrahim Mohamed Abuelkasem — AI Engineer & Full Stack Developer specializing in Machine Learning, Deep Learning, Computer Vision, and scalable web applications with Next.js and TypeScript.",
  keywords: [
    "Ibrahim Abuelkasem",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
