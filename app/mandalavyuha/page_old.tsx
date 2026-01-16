"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MandalavyuhaVisual from "@/components/formations/MandalavyuhaVisual";

gsap.registerPlugin(ScrollTrigger);

type Mode = "build" | "simulate" | "explain";

export default function MandalavyuhaPage() {
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

  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <header className="relative py-12 md:py-16 lg:py-20 px-4 md:px-8 text-center border-b-2 border-[var(--border-vintage)]">
        <Link
          href="/"
          className="absolute top-4 md:top-6 left-4 md:left-8 text-xs md:text-sm font-medium transition-all hover:text-[var(--saffron)]"
          style={{ color: 'var(--brass)' }}
        >
          ← Back to Home
        </Link>

        <div ref={titleRef} className="max-w-4xl mx-auto px-4">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-widest uppercase"
            style={{ color: 'var(--saffron)', textShadow: '0 2px 4px rgba(139, 111, 71, 0.2)' }}
          >
            Mandalavyuha
          </h1>
          <div className="divider max-w-xs mx-auto my-4 md:my-5"></div>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 font-medium tracking-wide" style={{ color: 'var(--brass)' }}>
            The Defensive Mandala Ring
          </p>
          <p className="max-w-2xl mx-auto text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            The ultimate defensive circle inspired by the mandala's geometric perfection.
            Concentric rings of soldiers expand outward from the command center, providing
            graduated defense against multi-directional attacks.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-sm border-b border-[var(--border-vintage)] py-3 md:py-4 px-4 md:px-8" style={{ backgroundColor: 'rgba(244, 228, 193, 0.95)' }}>
        <div className="max-w-5xl mx-auto flex justify-center gap-3 md:gap-4">
          {(["build", "simulate", "explain"] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setIsAnimating(true);
              }}
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-md font-semibold text-xs md:text-sm transition-all hover:shadow-lg"
              style={mode === m 
                ? { backgroundColor: 'var(--saffron)', color: 'var(--parchment-light)', boxShadow: '0 2px 8px rgba(196, 132, 29, 0.3)' }
                : { border: '2px solid var(--border-vintage)', color: 'var(--brass)', backgroundColor: 'var(--parchment-light)' }
              }
            >
              {m === "build" ? "Build" : m === "simulate" ? "Simulate" : "Explain"}
            </button>
          ))}
        </div>
      </nav>

      {/* Main visualization area */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {/* Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg p-4 md:p-6 lg:p-8"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '2px solid var(--border-vintage)',
                boxShadow: '0 6px 24px var(--shadow-warm)'
              }}
            >
              <MandalavyuhaVisual
                width={500}
                height={500}
                animate={isAnimating}
                mode={mode}
              />
            </motion.div>
          </div>

          {/* Information panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {mode === "build" && (
                <div 
                  className="rounded-lg p-5"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '1px solid var(--border-vintage)'
                  }}
                >
                  <h3 className="text-base font-bold mb-4" style={{ color: 'var(--saffron)' }}>Construction</h3>
                  <ul className="space-y-3 text-sm" style={{ color: 'var(--ink-light)' }}>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Headquarters establishes central core</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Inner protective ring forms</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Secondary and outer rings expand</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Perfect symmetry achieved</span>
                    </li>
                  </ul>
                </div>
              )}

              {mode === "simulate" && (
                <div 
                  className="rounded-lg p-5"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '1px solid var(--border-vintage)'
                  }}
                >
                  <h3 className="text-base font-bold mb-4" style={{ color: 'var(--saffron)' }}>Multi-Directional Defense</h3>
                  <ul className="space-y-3 text-sm" style={{ color: 'var(--ink-light)' }}>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Enemies attack from all directions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Outer ring engages first</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Each ring strengthens defense</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Command center remains protected</span>
                    </li>
                  </ul>
                </div>
              )}

              {mode === "explain" && (
                <div className="space-y-4">
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '1px solid var(--border-vintage)'
                    }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Outer Defense</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      First contact layer. Absorbs enemy initial assault and determines threat level.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '1px solid var(--border-vintage)'
                    }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Secondary Ring</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Reinforces outer ring and redirects attacks away from command.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '1px solid var(--border-vintage)'
                    }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Command Center</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Protected by graduated rings. Strategic seat remains secure.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="w-full px-4 py-3 rounded-md font-semibold hover:opacity-90 transition-all text-sm"
                style={{ backgroundColor: 'var(--saffron)', color: 'var(--parchment-light)' }}
              >
                {isAnimating ? "Pause" : "Replay"}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Historical context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 border-t-2 border-[var(--border-vintage)] pt-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center tracking-wide" style={{ color: 'var(--saffron)' }}>
            Mandala Philosophy in Warfare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div 
              className="rounded-lg p-6"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '1px solid var(--border-vintage)'
              }}
            >
              <h3 className="font-bold text-base mb-3" style={{ color: 'var(--brass)' }}>Sacred Geometry</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                The Mandalavyuha applies sacred geometric principles to military strategy.
                The perfect circle represents unity, while concentric rings symbolize
                layers of cosmic protection.
              </p>
            </div>
            <div 
              className="rounded-lg p-6"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '1px solid var(--border-vintage)'
              }}
            >
              <h3 className="font-bold text-base mb-3" style={{ color: 'var(--brass)' }}>Comprehensive Defense</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                Unlike formations for specific attack vectors, Mandalavyuha provides
                360-degree protection equally through strategic depth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer navigation */}
      <div className="border-t-2 border-[var(--border-vintage)] mt-16 py-10 px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/garudavyuha" className="text-sm transition-colors" style={{ color: 'var(--brass)' }}>
            ← Previous Formation
          </Link>
          <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--saffron)' }}>
            Home
          </Link>
          <Link href="/chakravyuha" className="text-sm transition-colors" style={{ color: 'var(--brass)' }}>
            Next Formation →
          </Link>
        </div>
      </div>
    </main>
  );
}
