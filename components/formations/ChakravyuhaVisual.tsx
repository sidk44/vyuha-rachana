"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ChakravyuhaVisualProps {
  width?: number;
  height?: number;
  animate?: boolean;
  mode?: "build" | "simulate" | "explain";
}

const ChakravyuhaVisual: React.FC<ChakravyuhaVisualProps> = ({
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
    const rings = svgRef.current?.querySelectorAll(".ring-layer");
    if (rings) {
      gsap.fromTo(
        rings,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }

    const gaps = svgRef.current?.querySelectorAll(".ring-gap");
    if (gaps) {
      gsap.fromTo(
        gaps,
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.inOut",
        }
      );
    }
  };

  const startSimulation = () => {
    const ringCount = 5;
    for (let i = 0; i < ringCount; i++) {
      const ring = svgRef.current?.querySelector(`#ring-${i}`);
      if (ring) {
        const direction = i % 2 === 0 ? 1 : -1;
        const speed = 4 + i * 0.5;
        
        gsap.to(ring, {
          rotation: direction * 360,
          duration: speed,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    }

    const enemy = svgRef.current?.querySelector(".enemy-marker");
    if (enemy) {
      gsap.to(enemy, {
        attr: { cy: height / 2, r: 4 },
        duration: 4,
        ease: "power1.in",
      });
    }

    setTimeout(() => {
      const gaps = svgRef.current?.querySelectorAll(".ring-gap");
      if (gaps) {
        gsap.to(gaps, {
          strokeWidth: 4,
          duration: 0.4,
          stagger: 0.15,
          yoyo: true,
          repeat: 1,
        });
      }
    }, 1500);
  };

  const cx = width / 2;
  const cy = height / 2;
  const rings = [
    { r: 60, gap: 0, label: "Layer 1" },
    { r: 105, gap: 60, label: "Layer 2" },
    { r: 150, gap: 120, label: "Layer 3" },
    { r: 195, gap: 180, label: "Layer 4" },
    { r: 240, gap: 240, label: "Layer 5" },
  ];

  const createRingWithGap = (r: number, gapStart: number, id: number) => {
    const gapSize = 40;
    const circumference = 2 * Math.PI * r;
    const gapArc = (gapSize / 360) * circumference;
    const solidArc = circumference - gapArc;

    return (
      <g id={`ring-${id}`} key={`ring-${id}`} className="ring-layer">
        <circle
          className="formation-ring"
          cx={cx}
          cy={cy}
          r={r}
          strokeDasharray={`${solidArc / 6} ${gapArc / 5}`}
          transform={`rotate(${gapStart} ${cx} ${cy})`}
        />
        <circle
          className="ring-gap formation-gap"
          cx={cx}
          cy={cy}
          r={r}
          strokeDasharray={`${gapArc} ${solidArc}`}
          strokeDashoffset={-((gapStart / 360) * circumference)}
          transform={`rotate(0 ${cx} ${cy})`}
        />
        {Array.from({ length: Math.floor(r / 15) }).map((_, i) => {
          const angle = ((360 - gapSize) / Math.floor(r / 15)) * i;
          if (
            angle < gapStart - gapSize / 2 ||
            angle > gapStart + gapSize / 2
          ) {
            const rad = ((angle + gapStart) * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            return (
              <circle
                key={`unit-${id}-${i}`}
                className="formation-unit"
                cx={x}
                cy={y}
                r={2.5}
                opacity={0.8}
              />
            );
          }
          return null;
        })}
      </g>
    );
  };

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
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon
            className="formation-arrow"
            points="0 0, 10 3, 0 6"
          />
        </marker>
      </defs>

      {rings.map((ring, i) => createRingWithGap(ring.r, ring.gap, i))}

      <circle
        className="formation-unit"
        cx={cx}
        cy={cy}
        r={8}
        opacity={1}
      />
      {mode === "explain" && (
        <text
          x={cx}
          y={cy - 20}
          textAnchor="middle"
          className="formation-label"
        >
          COMMAND
        </text>
      )}

      {mode === "simulate" && (
        <>
          <circle
            className="enemy-marker"
            cx={cx}
            cy={30}
            r={6}
            fill="#dc2626"
            opacity={0.9}
          />
          <line
            x1={cx}
            y1={40}
            x2={cx}
            y2={cy - 250}
            stroke="#dc2626"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.4}
            markerEnd="url(#arrowhead)"
          />
        </>
      )}

      {mode === "explain" && (
        <>
          {rings.map((ring, i) => (
            <text
              key={`label-${i}`}
              x={cx + ring.r + 15}
              y={cy + 4}
              className="formation-label"
              opacity={0.7}
            >
              {ring.label}
            </text>
          ))}
          <text
            x={cx}
            y={height - 30}
            textAnchor="middle"
            fontSize="13"
            fill="var(--text-tertiary)"
            fontWeight="500"
          >
            Rotating gaps prevent alignment → Enemy disorientation
          </text>
        </>
      )}
    </svg>
  );
};

export default ChakravyuhaVisual;
