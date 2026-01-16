"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface MandalavyuhaVisualProps {
  width?: number;
  height?: number;
  animate?: boolean;
  mode?: "build" | "simulate" | "explain";
}

const MandalavyuhaVisual: React.FC<MandalavyuhaVisualProps> = ({
  width = 600,
  height = 600,
  animate = true,
  mode = "build",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [threatenedSector, setThreatenedSector] = useState<number | null>(null);

  useEffect(() => {
    if (!svgRef.current || !animate) return;

    if (mode === "build") {
      animateBuild();
    } else if (mode === "simulate") {
      startSimulation();
    }
  }, [animate, mode]);

  const animateBuild = () => {
    const outerRing = svgRef.current?.querySelector(".outer-ring");
    if (outerRing) {
      gsap.fromTo(
        outerRing,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    const reserves = svgRef.current?.querySelectorAll(".reserve-unit");
    if (reserves) {
      gsap.fromTo(
        reserves,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.8,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out",
        }
      );
    }
  };

  const startSimulation = () => {
    // Enemy approaches from right
    const enemy = svgRef.current?.querySelector(".enemy-marker");
    if (enemy) {
      gsap.to(enemy, {
        attr: { cx: width / 2 + 180 },
        duration: 2,
        ease: "power1.in",
      });
    }

    setTimeout(() => {
      setThreatenedSector(2); // Right sector

      // Reserves move to threatened sector along interior lines
      const reserves = svgRef.current?.querySelectorAll(".reserve-unit");
      if (reserves) {
        reserves.forEach((reserve, i) => {
          const angle = (Math.PI / 2) + (i * 0.3 - 0.3);
          const targetX = width / 2 + Math.cos(angle) * 150;
          const targetY = height / 2 + Math.sin(angle) * 150;
          
          gsap.to(reserve, {
            attr: { cx: targetX, cy: targetY },
            duration: 1.2,
            ease: "power2.out",
            delay: i * 0.1,
          });
        });
      }

      // Highlight interior path
      const paths = svgRef.current?.querySelectorAll(".interior-line");
      if (paths) {
        gsap.to(paths, {
          opacity: 0.6,
          duration: 0.4,
          yoyo: true,
          repeat: 1,
        });
      }
    }, 1500);
  };

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = 200;
  const innerRadius = 80;
  const outerUnits = 32;
  const reserveCount = 5;

  const outerUnitPositions = Array.from({ length: outerUnits }).map((_, i) => {
    const angle = (i / outerUnits) * Math.PI * 2;
    return {
      x: cx + Math.cos(angle) * outerRadius,
      y: cy + Math.sin(angle) * outerRadius,
      angle,
    };
  });

  const reservePositions = Array.from({ length: reserveCount }).map((_, i) => {
    const angle = (i / reserveCount) * Math.PI * 2 + Math.PI / reserveCount;
    return {
      x: cx + Math.cos(angle) * innerRadius,
      y: cy + Math.sin(angle) * innerRadius,
    };
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
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon
            className="formation-arrow"
            points="0 0, 8 3, 0 6"
          />
        </marker>
      </defs>

      {/* Outer defensive ring */}
      <circle
        className="formation-ring outer-ring"
        cx={cx}
        cy={cy}
        r={outerRadius}
      />

      {/* Outer defensive units */}
      {outerUnitPositions.map((pos, i) => (
        <circle
          key={`outer-${i}`}
          className="formation-unit"
          cx={pos.x}
          cy={pos.y}
          r={3}
          opacity={0.7}
        />
      ))}

      {/* Interior reserve circle */}
      <circle
        className="formation-ring"
        cx={cx}
        cy={cy}
        r={innerRadius}
        strokeDasharray="4 4"
        opacity={0.4}
      />

      {/* Interior lines showing quick reinforcement paths */}
      {mode !== "build" && (
        <>
          <line
            className="interior-line formation-path"
            x1={cx}
            y1={cy}
            x2={cx + outerRadius}
            y2={cy}
            opacity={threatenedSector === 2 ? 0.6 : 0.2}
          />
          <line
            className="interior-line formation-path"
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - outerRadius}
            opacity={0.2}
          />
          <line
            className="interior-line formation-path"
            x1={cx}
            y1={cy}
            x2={cx - outerRadius}
            y2={cy}
            opacity={0.2}
          />
          <line
            className="interior-line formation-path"
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy + outerRadius}
            opacity={0.2}
          />
        </>
      )}

      {/* Mobile reserve units */}
      {reservePositions.map((pos, i) => (
        <circle
          key={`reserve-${i}`}
          className="reserve-unit formation-unit"
          cx={pos.x}
          cy={pos.y}
          r={4}
          opacity={0.9}
        />
      ))}

      {/* Command center */}
      <circle
        className="formation-unit"
        cx={cx}
        cy={cy}
        r={10}
        opacity={1}
      />

      {/* Enemy marker for simulation */}
      {mode === "simulate" && (
        <>
          <circle
            className="enemy-marker"
            cx={width - 50}
            cy={cy}
            r={6}
            fill="#dc2626"
            opacity={0.9}
          />
          <line
            x1={width - 50}
            y1={cy}
            x2={cx + outerRadius + 20}
            y2={cy}
            stroke="#dc2626"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.4}
            markerEnd="url(#arrow)"
          />
        </>
      )}

      {/* Labels for explain mode */}
      {mode === "explain" && (
        <>
          <text
            x={cx + outerRadius + 15}
            y={cy + 4}
            className="formation-label"
          >
            PERIMETER
          </text>
          <text
            x={cx - innerRadius - 60}
            y={cy + 4}
            className="formation-label"
          >
            RESERVES
          </text>
          <text
            x={cx}
            y={cy - 25}
            textAnchor="middle"
            className="formation-label"
          >
            COMMAND
          </text>
          <text
            x={cx}
            y={height - 30}
            textAnchor="middle"
            fontSize="13"
            fill="var(--text-tertiary)"
            fontWeight="500"
          >
            Interior lines enable rapid reinforcement → No exposed flanks
          </text>
        </>
      )}
    </svg>
  );
};

export default MandalavyuhaVisual;
