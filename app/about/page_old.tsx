"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
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
    <main className="min-h-screen relative" style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)' }}>
      {/* Header */}
      <header className="relative py-16 md:py-20 px-4 md:px-8 text-center border-b-2 border-[var(--border-vintage)]">
        <Link
          href="/"
          className="absolute top-4 md:top-6 left-4 md:left-8 text-xs md:text-sm font-medium transition-colors"
          style={{ color: 'var(--brass)' }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--saffron)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--brass)'}
        >
          ← Back to Home
        </Link>

        <div ref={titleRef} className="max-w-4xl mx-auto">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-widest uppercase"
            style={{ color: 'var(--saffron)', textShadow: '0 2px 4px rgba(139, 111, 71, 0.2)' }}
          >
            About
          </h1>
          <div className="divider max-w-xs mx-auto my-4 md:my-5"></div>
          <p 
            className="text-base md:text-lg font-medium tracking-wide"
            style={{ color: 'var(--brass)' }}
          >
            Ancient Indian Military Science
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 tracking-wide"
            style={{ color: 'var(--ink)' }}
          >
            The Vyuha System
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--ink-light)' }}>
            Vyuha, derived from Sanskrit meaning "array" or "formation," represents a
            sophisticated system of battlefield geometry developed in ancient India. These
            formations are extensively documented in the Mahabharata, the Ramayana, and
            various Shastra texts on military science.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            Unlike European formations of similar era, Vyuhas incorporate mathematical
            precision, rotational dynamics, and adaptive responses. They represent not just
            tactical arrangements but philosophical approaches to warfare rooted in
            geometric harmony and cosmic order.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 tracking-wide"
            style={{ color: 'var(--ink)' }}
          >
            Historical Sources
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div 
              className="rounded-lg p-5 md:p-6 border-2 border-[var(--border-vintage)] transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
              style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)', boxShadow: '0 4px 20px var(--shadow-warm)' }}
            >
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ color: 'var(--saffron)' }}>The Mahabharata</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                The epic describes the Chakravyuha, Garudavyuha, and other formations in
                detail, particularly in accounts of the Kurukshetra war. The Dronaparva
                section provides extensive tactical analysis of these formations.
              </p>
            </div>

            <div 
              className="rounded-lg p-5 md:p-6 border-2 border-[var(--border-vintage)] transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
              style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)', boxShadow: '0 4px 20px var(--shadow-warm)' }}
            >
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ color: 'var(--saffron)' }}>The Ramayana</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                Valmiki's accounts of Rama's military campaigns describe formation tactics
                used in the defense of Lanka. These provide complementary perspectives on
                formation philosophy and adaptation.
              </p>
            </div>

            <div 
              className="rounded-lg p-5 md:p-6 border-2 border-[var(--border-vintage)] transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
              style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)', boxShadow: '0 4px 20px var(--shadow-warm)' }}
            >
              <h3 className="font-bold text-base md:text-lg mb-2" style={{ color: 'var(--saffron)' }}>The Arthashastra</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                Kautilya's treatise on statecraft includes detailed military formations and
                strategic principles. It emphasizes adaptability and the importance of
                geometric knowledge in warfare.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 tracking-wide"
            style={{ color: 'var(--ink)' }}
          >
            Key Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Geometric Precision",
                desc: "Formations are based on mathematical ratios, circles, and symmetry",
              },
              {
                title: "Adaptability",
                desc: "Formations can respond dynamically to enemy movements",
              },
              {
                title: "Multi-Layered Defense",
                desc: "Graduated protection ensures command center security",
              },
              {
                title: "Psychological Impact",
                desc: "Visual symmetry and movement create psychological advantage",
              },
              {
                title: "Coordination",
                desc: "Success requires precise synchronization of thousands",
              },
              {
                title: "Sacred Geometry",
                desc: "Formations reflect cosmic order and philosophical balance",
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg p-4 md:p-5 border-2 border-[var(--border-vintage)] transition-all duration-300 hover:shadow-2xl hover:border-[var(--saffron)]"
                style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)', boxShadow: '0 4px 20px var(--shadow-warm)' }}
              >
                <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: 'var(--saffron)' }}>{principle.title}</h4>
                <p className="text-xs md:text-sm" style={{ color: 'var(--ink-light)' }}>{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 tracking-wide"
            style={{ color: 'var(--ink)' }}
          >
            Modern Relevance
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--ink-light)' }}>
            The study of Vyuha formations offers insights beyond military history. The
            mathematical principles underlying these formations relate to modern concepts in
            organizational dynamics, network theory, and system design.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--ink-light)' }}>
            The emphasis on adaptive systems, layered response, and geometric harmony
            provides valuable lessons for contemporary strategic thinking, whether in
            military, organizational, or technological domains.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
            This project aims to make these ancient formations accessible, demonstrating
            that sophisticated strategic thinking developed millennia ago remains relevant
            to understanding complex systems and coordinated action.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg p-6 md:p-8 border-2 border-[var(--border-vintage)] text-center transition-all duration-300 hover:shadow-2xl"
          style={{ background: 'linear-gradient(135deg, var(--parchment-light) 0%, var(--parchment) 100%)', boxShadow: '0 4px 20px var(--shadow-warm)' }}
        >
          <p className="text-sm md:text-base italic mb-4" style={{ color: 'var(--ink)' }}>
            "In geometry, there is no royal road."
          </p>
          <p className="text-xs md:text-sm" style={{ color: 'var(--brass)' }}>
            — Euclid, reflecting a principle valued in ancient Indian military science
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--border-vintage)] mt-16 md:mt-20 py-8 md:py-12 px-4 md:px-8 text-center">
        <Link 
          href="/" 
          className="text-xs md:text-sm font-medium transition-colors"
          style={{ color: 'var(--saffron)' }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--saffron-dark)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--saffron)'}
        >
          Return to Home
        </Link>
      </footer>
    </main>
  );
}
