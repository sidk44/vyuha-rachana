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
            About
          </h1>
          <div className="divider max-w-md mx-auto my-6"></div>
          <p 
            className="text-lg md:text-xl font-semibold tracking-wide"
            style={{ color: 'var(--brass)' }}
          >
            Ancient Indian Military Science
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="section-padding-lg">
        <div className="container-narrow">
          {/* Vyuha System */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: 'var(--ink)' }}
            >
              The Vyuha System
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-light)' }}>
              <p>
                Vyuha, derived from Sanskrit meaning "array" or "formation," represents a
                sophisticated system of battlefield geometry developed in ancient India. These
                formations are extensively documented in the Mahabharata, the Ramayana, and
                various Shastra texts on military science.
              </p>
              <p>
                Unlike European formations of similar era, Vyuhas incorporate mathematical
                precision, rotational dynamics, and adaptive responses. They represent not just
                tactical arrangements but philosophical approaches to warfare rooted in
                geometric harmony and cosmic order.
              </p>
            </div>
          </motion.section>

          {/* Historical Sources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: 'var(--ink)' }}
            >
              Historical Sources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "The Mahabharata",
                  desc: "The epic describes the Chakravyuha, Garudavyuha, and other formations in detail, particularly in accounts of the Kurukshetra war. The Dronaparva section provides extensive tactical analysis of these formations."
                },
                {
                  title: "The Ramayana",
                  desc: "Valmiki's accounts of Rama's military campaigns describe formation tactics used in the defense of Lanka. These provide complementary perspectives on formation philosophy and adaptation."
                },
                {
                  title: "The Arthashastra",
                  desc: "Kautilya's treatise on statecraft includes detailed military formations and strategic principles. It emphasizes adaptability and the importance of geometric knowledge in warfare."
                }
              ].map((source, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="vintage-card ornamental-card p-6"
                >
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--saffron)' }}>{source.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>
                    {source.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Principles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: 'var(--ink)' }}
            >
              Key Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="vintage-card p-5"
                >
                  <h4 className="font-bold text-base mb-2" style={{ color: 'var(--saffron)' }}>{principle.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--ink-light)' }}>{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Modern Relevance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: 'var(--ink)' }}
            >
              Modern Relevance
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-light)' }}>
              <p>
                The study of Vyuha formations offers insights beyond military history. The
                mathematical principles underlying these formations relate to modern concepts in
                organizational dynamics, network theory, and system design.
              </p>
              <p>
                The emphasis on adaptive systems, layered response, and geometric harmony
                provides valuable lessons for contemporary strategic thinking, whether in
                military, organizational, or technological domains.
              </p>
              <p>
                This project aims to make these ancient formations accessible, demonstrating
                that sophisticated strategic thinking developed millennia ago remains relevant
                to understanding complex systems and coordinated action.
              </p>
            </div>
          </motion.section>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="vintage-card ornamental-card p-10 text-center"
          >
            <p className="text-lg md:text-xl italic mb-4" style={{ color: 'var(--ink)' }}>
              "In geometry, there is no royal road."
            </p>
            <p className="text-sm" style={{ color: 'var(--brass)' }}>
              — Euclid, reflecting a principle valued in ancient Indian military science
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--border-vintage)] section-padding-sm text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:scale-105 transition-transform"
          style={{ color: 'var(--saffron)' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Return to Home
        </Link>
      </footer>
    </main>
  );
}
