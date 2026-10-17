"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
}

export default function Card3D({
  children,
  className = "",
  intensity = 15,
  onClick,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate normalized offset from center (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Set 3D rotation angles
    setRotateX(-normY * intensity);
    setRotateY(normX * intensity);

    // Specular glare position (percentage)
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="relative"
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.18s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className={`relative ${className}`}
      >
        {/* Dynamic Specular Lighting Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.1) 30%, transparent 65%)`,
          }}
        />

        {/* Content with 3D Pop Out */}
        <div style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
