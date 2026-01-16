"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ChakravyuhaVisual from "@/components/formations/ChakravyuhaVisual";

gsap.registerPlugin(ScrollTrigger);

type Mode = "build" | "simulate" | "explain";

export default function ChakravyuhaPage() {
  const [mode, setMode] = useState<Mode>("build");
  const [isAnimating, setIsAnimating] = useState(true);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  const modeContent = {
    build: {
      title: "Construction",
      items: [
        "Center command establishes position",
        "Protective rings form outward",
        "Soldiers assume defensive positions",
        "Formation ready for rotation"
      ]
    },
    simulate: {
      title: "Combat Sequence",
      items: [
        "Enemy advances from outer rim",
        "Outer ring engages and rotates",
        "Inner rings counter-rotate",
        "Enemy becomes disoriented and trapped"
      ]
    },
    explain: {
      zones: [
        {
          title: "Outer Ring",
          desc: "First line of defense. Rotates clockwise to intercept and confuse enemies."
        },
        {
          title: "Secondary Ring",
          desc: "Counter-rotates. Provides defensive support and strategic depth."
        },
        {
          title: "Core Command",
          desc: "Remains stationary. Directs rotation and formulation strategy."
        }
      ]
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <header className="relative section-padding-sm border-b-2 border-[var(--border-vintage)]">
        <Link
          href="/"
          className="absolute top-6 left-6 md:left-8 text-sm font-medium transition-all hover:text-[var(--saffron)] flex items-center gap-2"
          style={{ color: 'var(--brass)' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>

        <div ref={titleRef} className="container-narrow text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-[0.15em] uppercase"
            style={{ color: 'var(--saffron)', textShadow: '0 2px 4px rgba(139, 111, 71, 0.2)' }}
          >
            Chakravyuha
          </h1>
          <div className="divider max-w-md mx-auto my-6"></div>
          <p className="text-lg md:text-xl font-semibold tracking-wide mb-6" style={{ color: 'var(--brass)' }}>
            The Concentric Rotating Trap
          </p>
          <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            A circular formation consisting of concentric rings of soldiers rotating
            around a central command. The outer rings move in opposite directions,
            creating a hypnotic trap that confuses and ensnares advancing enemies.
          </p>
        </div>
      </header>

      {/* Mode Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-[var(--border-vintage)] py-4" 
           style={{ 
             backgroundColor: 'rgba(244, 228, 193, 0.98)',
             boxShadow: '0 4px 16px rgba(139, 111, 71, 0.1)'
           }}>
        <div className="container-centered flex justify-center gap-4">
          {(["build", "simulate", "explain"] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setIsAnimating(true);
              }}
              className="px-6 py-2.5 rounded-md font-bold text-sm transition-all"
              style={mode === m 
                ? { 
                    backgroundColor: 'var(--saffron)', 
                    color: 'var(--parchment-light)', 
                    boxShadow: '0 4px 12px rgba(196, 132, 29, 0.3)',
                    transform: 'translateY(-2px)'
                  }
                : { 
                    border: '2px solid var(--border-vintage)', 
                    color: 'var(--brass)', 
                    backgroundColor: 'var(--parchment-light)' 
                  }
              }
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="section-padding-lg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Visualization */}
            <div className="lg:col-span-2">
              <motion.div
                key={mode}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="vintage-card p-8"
              >
                <ChakravyuhaVisual
                  width={600}
                  height={600}
                  animate={isAnimating}
                  mode={mode}
                />
              </motion.div>
            </div>

            {/* Information Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 sticky top-24"
              >
                {(mode === "build" || mode === "simulate") && (
                  <div className="vintage-card ornamental-card p-6">
                    <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--saffron)' }}>
                      {modeContent[mode].title}
                    </h3>
                    <ul className="space-y-4">
                      {modeContent[mode].items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm" style={{ color: 'var(--ink-light)' }}>
                          <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>
                            {mode === "build" ? `${idx + 1}.` : "•"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {mode === "explain" && (
                  <div className="space-y-4">
                    {modeContent.explain.zones.map((zone, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="vintage-card p-5"
                      >
                        <h4 className="font-bold text-base mb-2" style={{ color: 'var(--saffron)' }}>
                          {zone.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                          {zone.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="w-full px-6 py-3 rounded-md font-bold hover:opacity-90 transition-all text-sm"
                  style={{ 
                    backgroundColor: 'var(--saffron)', 
                    color: 'var(--parchment-light)',
                    boxShadow: '0 4px 12px rgba(196, 132, 29, 0.3)'
                  }}
                >
                  {isAnimating ? "Pause Animation" : "Replay Animation"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <section className="border-t-2 border-[var(--border-vintage)] section-padding" style={{ backgroundColor: 'rgba(232, 212, 168, 0.3)' }}>
        <div className="container-centered">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--saffron)' }}>
            Historical Significance
          </h2>
          <p className="text-center text-base mb-16 max-w-2xl mx-auto" style={{ color: 'var(--ink-light)' }}>
            The most famous and complex formation in ancient Indian military doctrine
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Origins",
                desc: "The Chakravyuha is extensively documented in ancient Sanskrit texts, particularly in the Mahabharata. It represents the pinnacle of rotational defensive strategy, requiring precise coordination."
              },
              {
                title: "Tactical Innovation",
                desc: "Unlike static formations, Chakravyuha's rotating mechanism creates constant spatial disruption. Enemies cannot predict soldier positions, creating psychological and tactical advantages."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="vintage-card ornamental-card p-8"
              >
                <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--brass)' }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="border-t-2 border-[var(--border-vintage)] section-padding-sm">
        <div className="container-centered flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link 
            href="/mandalavyuha" 
            className="flex items-center gap-2 text-sm font-medium transition-all hover:text-[var(--saffron)]" 
            style={{ color: 'var(--brass)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous Formation
          </Link>
          <Link 
            href="/" 
            className="font-bold text-sm" 
            style={{ color: 'var(--saffron)' }}
          >
            Home
          </Link>
          <Link 
            href="/garudavyuha" 
            className="flex items-center gap-2 text-sm font-medium transition-all hover:text-[var(--saffron)]" 
            style={{ color: 'var(--brass)' }}
          >
            Next Formation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}
