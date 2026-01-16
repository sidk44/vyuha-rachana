"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GarudavyuhaVisual from "@/components/formations/GarudavyuhaVisual";

gsap.registerPlugin(ScrollTrigger);

type Mode = "build" | "simulate" | "explain";

export default function GarudavyuhaPage() {
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
      <header className="relative py-20 px-8 text-center border-b-2 border-[var(--border-vintage)]">
        <Link
          href="/"
          className="absolute top-6 left-8 text-sm transition-colors"
          style={{ color: 'var(--brass)' }}
        >
          ← Back to Home
        </Link>

        <div ref={titleRef} className="max-w-3xl mx-auto">
          <h1 
            className="text-3xl md:text-5xl font-bold mb-3 tracking-widest uppercase"
            style={{ color: 'var(--saffron)', textShadow: '0 2px 4px rgba(139, 111, 71, 0.2)' }}
          >
            Garudavyuha
          </h1>
          <div className="divider max-w-xs mx-auto my-5"></div>
          <p className="text-base mb-6 font-medium tracking-wide" style={{ color: 'var(--brass)' }}>
            The Eagle Formation Pincer Attack
          </p>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            Named after Garuda, the celestial eagle, this formation features a strong
            central body with extended wings. The wings execute coordinated pincer
            movements to encircle opposing forces.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-sm border-b border-[var(--border-vintage)] py-4 px-8" style={{ backgroundColor: 'rgba(244, 228, 193, 0.95)' }}>
        <div className="max-w-4xl mx-auto flex justify-center gap-4">
          {(["build", "simulate", "explain"] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setIsAnimating(true);
              }}
              className="px-6 py-2 rounded-md font-semibold text-sm transition-all"
              style={mode === m 
                ? { backgroundColor: 'var(--saffron)', color: 'var(--parchment-light)' }
                : { border: '1px solid var(--border-vintage)', color: 'var(--brass)' }
              }
            >
              {m === "build" ? "Build" : m === "simulate" ? "Simulate" : "Explain"}
            </button>
          ))}
        </div>
      </nav>

      {/* Main visualization area */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg p-6"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '2px solid var(--border-vintage)',
                boxShadow: '0 4px 20px var(--shadow-warm)'
              }}
            >
              <GarudavyuhaVisual
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
                      <span>Central command column forms</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Left wing extends and positions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Right wing extends symmetrically</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Wings ready for coordinated strike</span>
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
                  <h3 className="text-base font-bold mb-4" style={{ color: 'var(--saffron)' }}>Combat Sequence</h3>
                  <ul className="space-y-3 text-sm" style={{ color: 'var(--ink-light)' }}>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Enemy engages central body</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Wings begin flanking movement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Pincer closes from both sides</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: 'var(--saffron)' }}>•</span>
                      <span>Enemy surrounded and defeated</span>
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
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Central Body</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Frontal assault force. Holds enemy attention while wings maneuver.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '1px solid var(--border-vintage)'
                    }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Left Wing</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Executes left flank encirclement with precision timing.
                    </p>
                  </div>
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                      border: '1px solid var(--border-vintage)'
                    }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: 'var(--saffron)' }}>Right Wing</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                      Mirrors left wing for simultaneous right flank attack.
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
            Strategic Brilliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div 
              className="rounded-lg p-6"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '1px solid var(--border-vintage)'
              }}
            >
              <h3 className="font-bold text-base mb-3" style={{ color: 'var(--brass)' }}>Symmetry Principle</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                The Garudavyuha's power lies in perfect bilateral symmetry. Wings move in
                identical patterns creating mathematical precision in tactical maneuvers.
              </p>
            </div>
            <div 
              className="rounded-lg p-6"
              style={{ 
                background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)',
                border: '1px solid var(--border-vintage)'
              }}
            >
              <h3 className="font-bold text-base mb-3" style={{ color: 'var(--brass)' }}>Offensive Mastery</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                Unlike purely defensive formations, Garudavyuha combines defense with
                aggressive encirclement for a devastating coordinated strike.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer navigation */}
      <div className="border-t-2 border-[var(--border-vintage)] mt-16 py-10 px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/chakravyuha" className="text-sm transition-colors" style={{ color: 'var(--brass)' }}>
            ← Previous Formation
          </Link>
          <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--saffron)' }}>
            Home
          </Link>
          <Link href="/mandalavyuha" className="text-sm transition-colors" style={{ color: 'var(--brass)' }}>
            Next Formation →
          </Link>
        </div>
      </div>
    </main>
  );
}
