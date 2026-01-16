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
      {/* Hero Header */}
      <header className="relative section-padding border-b-2 border-[var(--border-vintage)]">
        <div className="container-narrow text-center">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-vintage)] to-transparent"></div>
            <span className="text-[var(--saffron)] text-xs tracking-widest">◆ EST. ANCIENT INDIA ◆</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-vintage)] to-transparent"></div>
          </div>
          
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-[0.15em] uppercase"
            style={{ 
              color: 'var(--saffron)', 
              textShadow: '0 2px 4px rgba(139, 111, 71, 0.2), 0 4px 8px rgba(139, 111, 71, 0.1)',
              lineHeight: '1.2'
            }}
          >
            Vyuha Rachana
          </h1>
          
          <div className="divider max-w-md mx-auto my-8"></div>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-3 font-semibold tracking-wide" 
             style={{ color: 'var(--brass)', letterSpacing: '0.08em' }}>
            Ancient Indian Military Science
          </p>
          
          <p
            ref={descRef}
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-8"
            style={{ color: 'var(--ink-light)', lineHeight: '1.8' }}
          >
            Explore the sophisticated battlefield strategies and geometric
            formations developed in ancient India. Interactive visualizations
            reveal the mathematical precision and tactical genius of Vyuha
            formations.
          </p>
          
          {/* Scroll indicator */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--brass)' }}>Explore Formations</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5L10 15M10 15L15 10M10 15L5 10" stroke="var(--saffron)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-[var(--border-vintage)] py-4" 
           style={{ 
             backgroundColor: 'rgba(244, 228, 193, 0.98)',
             boxShadow: '0 4px 16px rgba(139, 111, 71, 0.1)'
           }}>
        <div className="container-centered flex justify-center gap-8 md:gap-12">
          <Link 
            href="/" 
            className="font-bold text-sm md:text-base tracking-wider hover:scale-105 transition-transform" 
            style={{ color: 'var(--saffron)' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm md:text-base tracking-wider hover:scale-105 transition-transform font-medium"
            style={{ color: 'var(--brass)' }}
          >
            About
          </Link>
        </div>
      </nav>
            reveal the mathematical precision and tactical genius of Vyuha
            formations.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-sm border-b border-[var(--border-vintage)] py-3 md:py-4 px-4 md:px-8" style={{ backgroundColor: 'rgba(244, 228, 193, 0.95)' }}>
        <div className="max-w-6xl mx-auto flex justify-center gap-8 md:gap-12">
          <Link href="/" className="font-semibold text-sm md:text-base tracking-wide" style={{ color: 'var(--saffron)' }}>
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm md:text-base tracking-wide hover:opacity-100 transition-opacity"
            style={{ color: 'var(--brass)', opacity: 0.8 }}
          >
            About
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
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
                  className="group relative rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '2px solid var(--border-vintage)',
                    boxShadow: '0 4px 20px var(--shadow-warm)'
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wide" style={{ color: 'var(--saffron)' }}>
                    {formation.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium mb-4 md:mb-5 tracking-wide" style={{ color: 'var(--brass)' }}>
                    {formation.subtitle}
                  </p>
                  <div className="divider my-3 md:my-4 max-w-16"></div>
                  <p className="text-xs md:text-sm leading-relaxed mb-5 md:mb-6" style={{ color: 'var(--ink-light)' }}>
                    {formation.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: 'var(--saffron-dark)' }}>
                    Explore Formation →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features section */}
        <div className="mt-16 md:mt-24 border-t-2 border-[var(--border-vintage)] pt-12 md:pt-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12 tracking-wide" style={{ color: 'var(--saffron)' }}>
            Interactive Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
                  className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-5 rounded-full flex items-center justify-center text-base md:text-lg font-bold"
                  style={{ 
                    border: '2px solid var(--saffron)',
                    color: 'var(--saffron)',
                    backgroundColor: 'var(--parchment-light)'
                  }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3" style={{ color: 'var(--ink)' }}>{feature.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--border-vintage)] mt-16 md:mt-24 py-8 md:py-12 px-4 md:px-8 text-center">
        <p className="text-xs md:text-sm tracking-wide" style={{ color: 'var(--brass)' }}>Vyuha Rachana © 2026 — Exploring Ancient Indian Military Science</p>
      </footer>
    </main>
  );
}
