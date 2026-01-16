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
            Chakravyuha
          </h1>
          <div className="divider max-w-xs mx-auto my-4 md:my-5"></div>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 font-medium tracking-wide" style={{ color: 'var(--brass)' }}>
            The Concentric Rotating Trap
          </p>
          <p className="max-w-2xl mx-auto text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            A circular formation consisting of concentric rings of soldiers rotating
            around a central command. The outer rings move in opposite directions,
            creating a hypnotic trap that confuses and ensnares advancing enemies.
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
              <ChakravyuhaVisual
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
                  className="rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '2px solid var(--border-vintage)',
                    boxShadow: '0 2px 8px var(--shadow-warm)'
                  }}
                >
                  <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4" style={{ color: 'var(--saffron)' }}>Construction</h3>
                  <ul className="space-y-2 md:space-y-3 text-xs md:text-sm" style={{ color: 'var(--ink-light)' }}>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>1.</span>
                      <span>Center command establishes position</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>2.</span>
                      <span>Protective rings form outward</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>3.</span>
                      <span>Soldiers assume defensive positions</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>4.</span>
                      <span>Formation ready for rotation</span>
                    </li>
                  </ul>
                </div>
              )}

              {mode === "simulate" && (
                <div 
                  className="rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                    border: '2px solid var(--border-vintage)',
                    boxShadow: '0 2px 8px var(--shadow-warm)'
                  }}
                >
                  <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4" style={{ color: 'var(--saffron)' }}>Combat Sequence</h3>
                  <ul className="space-y-2 md:space-y-3 text-xs md:text-sm" style={{ color: 'var(--ink-light)' }}>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Enemy advances from outer rim</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Outer ring engages and rotates</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Inner rings counter-rotate</span>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Enemy becomes disoriented and trapped</span>
                    </li>
                  </ul>
                </div>
              )}

              {mode === "explain" && (
                <div className="space-y-3 md:space-y-4">
                  <div 
                    className="rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-xl hover:border-[var(--saffron)]"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '2px solid var(--border-vintage)',
                      boxShadow: '0 2px 8px var(--shadow-warm)'
                    }}
                  >
                    <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: 'var(--saffron)' }}>Outer Ring</h4>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      First line of defense. Rotates clockwise to intercept and confuse enemies.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-xl hover:border-[var(--saffron)]"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '2px solid var(--border-vintage)',
                      boxShadow: '0 2px 8px var(--shadow-warm)'
                    }}
                  >
                    <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: 'var(--saffron)' }}>Secondary Ring</h4>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Counter-rotates. Provides defensive support and strategic depth.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-xl hover:border-[var(--saffron)]"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '2px solid var(--border-vintage)',
                      boxShadow: '0 2px 8px var(--shadow-warm)'
                    }}
                  >
                    <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: 'var(--saffron)' }}>Core Command</h4>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Remains stationary. Directs rotation and formulation strategy.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="w-full px-4 py-2.5 md:py-3 rounded-md font-semibold hover:opacity-90 hover:shadow-lg transition-all text-xs md:text-sm"
                style={{ backgroundColor: 'var(--saffron)', color: 'var(--parchment-light)', boxShadow: '0 2px 8px rgba(196, 132, 29, 0.3)' }}
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
          className="mt-12 md:mt-16 border-t-2 border-[var(--border-vintage)] pt-10 md:pt-12"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center tracking-wide" style={{ color: 'var(--saffron)' }}>
            Historical Significance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div 
              className="rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '2px solid var(--border-vintage)',
                boxShadow: '0 4px 16px var(--shadow-warm)'
              }}
            >
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3" style={{ color: 'var(--brass)' }}>Origins</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                The Chakravyuha is extensively documented in ancient Sanskrit texts,
                particularly in the Mahabharata. It represents the pinnacle of rotational
                defensive strategy, requiring precise coordination.
              </p>
            </div>
            <div 
              className="rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '2px solid var(--border-vintage)',
                boxShadow: '0 4px 16px var(--shadow-warm)'
              }}
            >
              <h3 className="font-bold text-sm md:text-base mb-2 md:mb-3" style={{ color: 'var(--brass)' }}>Tactical Innovation</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                Unlike static formations, Chakravyuha's rotating mechanism creates
                constant spatial disruption. Enemies cannot predict soldier positions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer navigation */}
      <div className="border-t-2 border-[var(--border-vintage)] mt-12 md:mt-16 py-8 md:py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link href="/mandalavyuha" className="text-xs md:text-sm font-medium transition-all hover:text-[var(--saffron)]" style={{ color: 'var(--brass)' }}>
            ← Previous Formation
          </Link>
          <Link href="/" className="text-xs md:text-sm font-semibold" style={{ color: 'var(--saffron)' }}>
            Home
          </Link>
          <Link href="/garudavyuha" className="text-xs md:text-sm font-medium transition-all hover:text-[var(--saffron)]" style={{ color: 'var(--brass)' }}>
            Next Formation →
          </Link>
        </div>
      </div>
    </main>
  );
}
