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

  const modeContent = {
    build: {
      title: "Formation Assembly",
      items: [
        "Head unit establishes vanguard position",
        "Wings extend from flanks symmetrically",
        "Body forms reinforced center column",
        "Tail provides rear support and reserves"
      ]
    },
    simulate: {
      title: "Engagement Sequence",
      items: [
        "Head pierces enemy center line",
        "Wings encircle from both sides",
        "Body advances through breach",
        "Tail secures retreat path and reinforcements"
      ]
    },
    explain: {
      zones: [
        {
          title: "Head (Vanguard)",
          desc: "Elite troops forming the piercing point. Breaks through enemy lines with concentrated force."
        },
        {
          title: "Wings (Flanks)",
          desc: "Mobile cavalry and archers. Encircle and harass enemy sides after breakthrough."
        },
        {
          title: "Body (Core)",
          desc: "Main infantry force. Exploits the breach created by the head unit."
        },
        {
          title: "Tail (Reserves)",
          desc: "Support troops and supplies. Provides reinforcement and protects retreat."
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
            Garudavyuha
          </h1>
          <div className="divider max-w-md mx-auto my-6"></div>
          <p className="text-lg md:text-xl font-semibold tracking-wide mb-6" style={{ color: 'var(--brass)' }}>
            The Eagle Formation
          </p>
          <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            Named after Garuda, the legendary eagle mount of Lord Vishnu. This formation
            mirrors the eagle in flight—a sharp spearhead breaks through enemy lines while
            powerful wings sweep in from both flanks to encircle and overwhelm.
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
                <GarudavyuhaVisual
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

      {/* Strategic Advantages */}
      <section className="border-t-2 border-[var(--border-vintage)] section-padding" style={{ backgroundColor: 'rgba(232, 212, 168, 0.3)' }}>
        <div className="container-centered">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--saffron)' }}>
            Strategic Advantages
          </h2>
          <p className="text-center text-base mb-16 max-w-2xl mx-auto" style={{ color: 'var(--ink-light)' }}>
            The Garudavyuha excels in offensive operations requiring penetration and encirclement
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Penetration",
                desc: "The concentrated head formation creates overwhelming force at a single point, breaking through even fortified enemy lines with devastating effect."
              },
              {
                title: "Encirclement",
                desc: "Once the head breaches the line, wings sweep inward from both flanks, trapping enemy forces and preventing coordinated defense or retreat."
              },
              {
                title: "Flexibility",
                desc: "The formation can adapt mid-battle. Wings can pursue or defend, body can reinforce or advance, and tail can protect supply lines."
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
            href="/chakravyuha" 
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
            href="/mandalavyuha" 
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
