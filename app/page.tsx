"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && descRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const formations = [
    {
      title: "Chakravyuha",
      subtitle: "The Concentric Trap",
      description:
        "Circular formation with rotating rings that ensnare advancing enemies. The center holds command, while outer rings provide defense and mobility.",
      path: "/chakravyuha",
      color: "from-amber-600 to-orange-500",
    },
    {
      title: "Garudavyuha",
      subtitle: "The Eagle Formation",
      description:
        "Forward-facing with extended wings for pincer attacks. Named after the eagle, it enables rapid encirclement and strategic advantage.",
      path: "/garudavyuha",
      color: "from-yellow-600 to-amber-500",
    },
    {
      title: "Mandalavyuha",
      subtitle: "The Defensive Ring",
      description:
        "Concentric circular defensive rings protecting the core. Each ring provides graduated defense while maintaining command visibility.",
      path: "/mandalavyuha",
      color: "from-orange-600 to-amber-500",
    },
  ];

  return (
    <main className="min-h-screen w-full relative">
      {/* Header */}
      <header className="relative py-24 px-8 text-center border-b-2 border-[var(--border-vintage)]">
        <div className="max-w-3xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-widest uppercase"
            style={{ color: 'var(--saffron)', textShadow: '0 2px 4px rgba(139, 111, 71, 0.2)' }}
          >
            Vyuha Rachana
          </h1>
          <div className="divider max-w-xs mx-auto my-6"></div>
          <p className="text-lg md:text-xl mb-2 font-medium tracking-wide" style={{ color: 'var(--brass)' }}>
            Ancient Indian Military Science
          </p>
          <p
            ref={descRef}
            className="text-base mt-8 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--ink-light)' }}
          >
            Explore the sophisticated battlefield strategies and geometric
            formations developed in ancient India. Interactive visualizations
            reveal the mathematical precision and tactical genius of Vyuha
            formations.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-sm border-b border-[var(--border-vintage)] py-4 px-8" style={{ backgroundColor: 'rgba(244, 228, 193, 0.95)' }}>
        <div className="max-w-4xl mx-auto flex justify-center gap-12">
          <Link href="/" className="font-semibold text-base tracking-wide" style={{ color: 'var(--saffron)' }}>
            Home
          </Link>
          <Link
            href="/about"
            className="text-base tracking-wide hover:opacity-100 transition-opacity"
            style={{ color: 'var(--brass)', opacity: 0.8 }}
          >
            About
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {formations.map((formation, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={formation.path}>
                <div 
                  className="group relative rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '1px solid var(--border-vintage)',
                    boxShadow: '0 4px 20px var(--shadow-warm)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-2 tracking-wide" style={{ color: 'var(--saffron)' }}>
                    {formation.title}
                  </h3>
                  <p className="text-sm font-medium mb-5 tracking-wide" style={{ color: 'var(--brass)' }}>
                    {formation.subtitle}
                  </p>
                  <div className="divider my-4 max-w-16"></div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-light)' }}>
                    {formation.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: 'var(--saffron-dark)' }}>
                    Explore Formation →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features section */}
        <div className="mt-24 border-t-2 border-[var(--border-vintage)] pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide" style={{ color: 'var(--saffron)' }}>
            Interactive Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Build Animation",
                desc: "Watch formations construct themselves with ceremonial precision",
              },
              {
                title: "Live Simulation",
                desc: "See how enemy advances trigger tactical responses",
              },
              {
                title: "Explain Mode",
                desc: "Detailed breakdown of zones, roles, and strategic advantages",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="text-center px-4"
              >
                <div 
                  className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ 
                    border: '2px solid var(--saffron)',
                    color: 'var(--saffron)',
                    backgroundColor: 'var(--parchment-light)'
                  }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--border-vintage)] mt-24 py-12 px-8 text-center">
        <p className="text-sm tracking-wide" style={{ color: 'var(--brass)' }}>Vyuha Rachana © 2026 — Exploring Ancient Indian Military Science</p>
      </footer>
    </main>
  );
}
