"use client";

import React, { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  baseAlpha: number;
  hue: number;
}

export default function ParticleCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Camera and 3D projection parameters
    const fov = 450;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    // Create 3D particles in a cubic volume
    const particleCount = 75;
    const particles: Particle3D[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 - 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.15, // gentle upward drift
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.4 ? 188 : 215, // electric cyan (188) & laser blue (215)
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse (-1 to 1)
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
      targetRotY = mouseX * 0.15; // rotate around Y axis
      targetRotX = -mouseY * 0.15; // rotate around X axis
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const render = () => {
      // Smooth dampening of 3D camera rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projectedPoints: { x: number; y: number; z: number; alpha: number; size: number; hue: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around 3D boundaries
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.z < -200) p.z = 600;
        if (p.z > 600) p.z = -200;

        // 3D Rotation (Y axis then X axis)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const depth = fov / (fov + z2);

        if (depth > 0) {
          const screenX = width / 2 + x1 * depth;
          const screenY = height / 2 + y2 * depth;
          const projectedSize = p.size * depth;
          const alpha = Math.min(1, Math.max(0, p.baseAlpha * depth * 1.2));

          projectedPoints.push({
            x: screenX,
            y: screenY,
            z: z2,
            alpha,
            size: projectedSize,
            hue: p.hue,
          });

          // Draw Glowing 3D Ember Particle
          ctx.beginPath();
          ctx.arc(screenX, screenY, projectedSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 95%, 55%, ${alpha})`;
          ctx.shadowBlur = 8 * depth;
          ctx.shadowColor = "rgba(6, 182, 212, 0.9)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw faint 3D neural connectivity lines between nearby particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.2 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
