"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, socialLinks } from "@/lib/data/social";

export default function Contact() {
  const github = socialLinks.find((l) => l.icon === "github");
  const linkedin = socialLinks.find((l) => l.icon === "linkedin");

  return (
    <section id="Contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Available for freelance work and full-time opportunities"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 md:p-8 h-fit">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full" />
                Contact Information
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone}`,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: contactInfo.location,
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                        <Icon size={18} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">{label}</p>
                        <p className="text-sm text-zinc-200 break-all group-hover:text-white transition-colors">
                          {value}
                        </p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-zinc-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {github && (
                    <a
                      href={github.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <a href="/resume.pdf" download className="block glass-card p-5 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Download Resume</p>
                  <span className="text-xs text-violet-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Get my full resume <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right - Professional CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300 mb-4">
                  <Sparkles size={14} />
                  Available for impactful work
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  Let&apos;s build something thoughtful, modern, and reliable.
                </h3>
                <p className="text-sm leading-7 text-zinc-400 mb-6">
                  I’m currently open to freelance projects, product collaborations, and full-time opportunities where strong product thinking and modern engineering can make a real difference.
                </p>

                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <ArrowRight size={16} className="mt-0.5 text-violet-400" />
                    <span>Web applications, AI-powered products, and scalable full-stack experiences.</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <ArrowRight size={16} className="mt-0.5 text-violet-400" />
                    <span>Clear communication, thoughtful execution, and a focus on user experience.</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
            <p>
              © {new Date().getFullYear()} Ibrahim Abuelkasem. Built with Next.js
              & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-violet-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={14} />
                {contactInfo.email}
              </a>
              <span className="w-px h-3 bg-zinc-700 hidden sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Globe size={14} />
                Available Worldwide
              </span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
