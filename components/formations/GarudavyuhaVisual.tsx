"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GarudavyuhaVisualProps {
  width?: number;
  height?: number;
  animate?: boolean;
  mode?: "build" | "simulate" | "explain";
}

const GarudavyuhaVisual: React.FC<GarudavyuhaVisualProps> = ({
  width = 600,
  height = 600,
  animate = true,
  mode = "build",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !animate) return;

    if (mode === "build") {
      animateBuild();
    } else if (mode === "simulate") {
      startSimulation();
    }
  }, [animate, mode]);

  const animateBuild = () => {
    const spearhead = svgRef.current?.querySelector(".spearhead");
    if (spearhead) {
      gsap.fromTo(
        spearhead,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    const wings = svgRef.current?.querySelectorAll(".wing-group");
    if (wings) {
      gsap.fromTo(
        wings,
        { scaleX: 0.5, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          transformOrigin: "center",
        }
      );
    }
  };

  const startSimulation = () => {
    // Spearhead advances
    const spearhead = svgRef.current?.querySelector(".spearhead");
    if (spearhead) {
      gsap.to(spearhead, {
        y: 30,
        duration: 2,
        ease: "power1.in",
      });
    }

    // Wings close inward to narrow escape
    const leftWing = svgRef.current?.querySelector(".left-wing");
    const rightWing = svgRef.current?.querySelector(".right-wing");
    
    if (leftWing && rightWing) {
      setTimeout(() => {
        gsap.to(leftWing, {
          x: 30,
          duration: 2.5,
          ease: "power2.inOut",
        });

        gsap.to(rightWing, {
          x: -30,
          duration: 2.5,
          ease: "power2.inOut",
        });
      }, 800);
    }

    // Enemy marker
    const enemy = svgRef.current?.querySelector(".enemy-marker");
    if (enemy) {
      gsap.to(enemy, {
        attr: { cy: height / 2 + 20 },
        duration: 3,
        ease: "power1.out",
      });
    }

    // Show narrowing space
    const escapeZone = svgRef.current?.querySelector(".escape-zone");
    if (escapeZone) {
      gsap.to(escapeZone, {
        attr: { width: 60 },
        duration: 2.5,
        delay: 0.8,
        ease: "power2.in",
      });
    }
  };

  const cx = width / 2;
  const cy = height / 2;

  // Spearhead units
  const spearheadUnits = [
    { x: cx, y: cy - 140 },
    { x: cx - 15, y: cy - 120 },
    { x: cx + 15, y: cy - 120 },
    { x: cx - 25, y: cy - 100 },
    { x: cx, y: cy - 100 },
    { x: cx + 25, y: cy - 100 },
    { x: cx - 35, y: cy - 80 },
    { x: cx, y: cy - 80 },
    { x: cx + 35, y: cy - 80 },
  ];

  // Left wing curve
  const leftWingPath = `M ${cx - 35} ${cy - 80} Q ${cx - 120} ${cy - 40} ${cx - 150} ${cy + 40}`;
  const leftWingUnits = Array.from({ length: 8 }).map((_, i) => {
    const t = i / 7;
    const x = cx - 35 - t * (115 + 35 * t);
    const y = cy - 80 + t * (120 - 40 * (1 - t));
    return { x, y };
  });

  // Right wing curve
  const rightWingPath = `M ${cx + 35} ${cy - 80} Q ${cx + 120} ${cy - 40} ${cx + 150} ${cy + 40}`;
  const rightWingUnits = Array.from({ length: 8 }).map((_, i) => {
    const t = i / 7;
    const x = cx + 35 + t * (115 + 35 * t);
    const y = cy - 80 + t * (120 - 40 * (1 - t));
    return { x, y };
  });

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto"
      style={{ background: "transparent" }}
    >
      <defs>
        <marker
          id="arrow-garuda"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon className="formation-arrow" points="0 0, 10 3, 0 6" />
        </marker>
      </defs>

      {/* Left wing group */}
      <g className="wing-group left-wing">
        <path
          d={leftWingPath}
          className="formation-path"
          strokeWidth={2}
        />
        {leftWingUnits.map((unit, i) => (
          <circle
            key={`left-${i}`}
            className="formation-unit"
            cx={unit.x}
            cy={unit.y}
            r={3}
            opacity={0.8}
          />
        ))}
      </g>

      {/* Right wing group */}
      <g className="wing-group right-wing">
        <path
          d={rightWingPath}
          className="formation-path"
          strokeWidth={2}
        />
        {rightWingUnits.map((unit, i) => (
          <circle
            key={`right-${i}`}
            className="formation-unit"
            cx={unit.x}
            cy={unit.y}
            r={3}
            opacity={0.8}
          />
        ))}
      </g>

      {/* Central spearhead */}
      <g className="spearhead">
        {spearheadUnits.map((unit, i) => (
          <circle
            key={`spear-${i}`}
            className="formation-unit"
            cx={unit.x}
            cy={unit.y}
            r={i === 0 ? 5 : 3.5}
            opacity={i === 0 ? 1 : 0.85}
          />
        ))}
        <line
          x1={cx}
          y1={cy - 140}
          x2={cx}
          y2={cy - 200}
          stroke="var(--formation-secondary)"
          strokeWidth={2}
          markerEnd="url(#arrow-garuda)"
          opacity={0.6}
        />
      </g>

      {/* Escape zone visualization (narrows during simulation) */}
      {mode === "simulate" && (
        <rect
          className="escape-zone"
          x={cx - 100}
          y={cy + 60}
          width={200}
          height={80}
          fill="var(--formation-bg)"
          stroke="var(--formation-highlight)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          opacity={0.4}
        />
      )}

      {/* Enemy marker */}
      {mode === "simulate" && (
        <>
          <circle
            className="enemy-marker"
            cx={cx}
            cy={cy - 180}
            r={6}
            fill="#dc2626"
            opacity={0.9}
          />
          <line
            x1={cx}
            y1={cy - 170}
            x2={cx}
            y2={cy - 150}
            stroke="#dc2626"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.4}
            markerEnd="url(#arrow-garuda)"
          />
        </>
      )}

      {/* Labels for explain mode */}
      {mode === "explain" && (
        <>
          <text
            x={cx - 160}
            y={cy}
            className="formation-label"
          >
            LEFT WING
          </text>
          <text
            x={cx + 120}
            y={cy}
            className="formation-label"
          >
            RIGHT WING
          </text>
          <text
            x={cx}
            y={cy - 210}
            textAnchor="middle"
            className="formation-label"
          >
            SPEARHEAD
          </text>
          <text
            x={cx}
            y={height - 30}
            textAnchor="middle"
            fontSize="13"
            fill="var(--text-tertiary)"
            fontWeight="500"
          >
            Center advances → Wings close inward → Encirclement
          </text>
        </>
      )}
    </svg>
  );
};

export default GarudavyuhaVisual;
