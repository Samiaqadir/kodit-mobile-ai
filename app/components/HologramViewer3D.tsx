"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Maximize2, Rotate3d, Compass, Cpu, Layers } from "lucide-react";

interface ModelItem {
  id: string;
  name: string;
  category: string;
  src: string;
  tagline: string;
  specs: { label: string; value: string }[];
}

const MODELS: ModelItem[] = [
  {
    id: "ai-core",
    name: "Autonomous AI Neural Core // Gen-IV",
    category: "3D NEURAL HARDWARE",
    src: "/kodit-ai-core.jpg",
    tagline: "Spherical golden cybernetic processor with multi-modal LLM reasoning and real-time vector embeddings.",
    specs: [
      { label: "Core Topology", value: "Multi-Modal Agent Nexus" },
      { label: "Latency", value: "Sub-10ms Inference" },
      { label: "Data Pipeline", value: "Autonomous Webhooks" },
      { label: "Encryption", value: "AES-256 / Quantum Ready" },
    ],
  },
  {
    id: "mobile",
    name: "Titanium Handheld Ecosystem",
    category: "3D MOBILE ARCHITECTURE",
    src: "/kodit-mobile-phones.jpg",
    tagline: "Dual bezel-less titanium smartphones running 60 FPS native shaders and Biometric Secure Enclave.",
    specs: [
      { label: "Display Rate", value: "120Hz ProMotion Shaders" },
      { label: "Security", value: "Biometric Hardware Enclave" },
      { label: "Framework", value: "React Native + Swift" },
      { label: "Offline Store", value: "Encrypted SQLite DB" },
    ],
  },
  {
    id: "workstation",
    name: "Enterprise 4K PC Workstation",
    category: "3D WORKSTATION TOPOLOGY",
    src: "/kodit-pc-workstation.jpg",
    tagline: "Floating 4K ultrawide monitor setup on minimalist obsidian desk with serverless microservice diagrams.",
    specs: [
      { label: "Resolution", value: "Dual 4K HDR Canvas" },
      { label: "Streaming", value: "Duplex WebSocket Mesh" },
      { label: "Compute", value: "Edge WebAssembly Cores" },
      { label: "Compliance", value: "SOC2 Type II Audited" },
    ],
  },
  {
    id: "suite",
    name: "Cross-Platform Hardware Suite",
    category: "UNIFIED ECOSYSTEM",
    src: "/kodit-devices-suite.jpg",
    tagline: "Synchronized real-time telemetry across desktop PC, field titanium laptop, and mobile handheld.",
    specs: [
      { label: "Platforms", value: "macOS • Windows • iOS • Android" },
      { label: "State Sync", value: "Zero-Latency CRDT Protocol" },
      { label: "Uptime", value: "99.999% SLA Guaranteed" },
      { label: "Deployment", value: "Instant Cloud Mesh" },
    ],
  },
];

interface HologramViewer3DProps {
  onExpand: (item: { src: string; title: string; desc: string; category: string }) => void;
  onSelectProject: () => void;
}

export default function HologramViewer3D({ onExpand, onSelectProject }: HologramViewer3DProps) {
  const [selectedModel, setSelectedModel] = useState<ModelItem>(MODELS[0]);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [wireframeActive, setWireframeActive] = useState(true);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x - rect.width / 2) / (rect.width / 2);
    const normY = (y - rect.height / 2) / (rect.height / 2);

    setRotY(normX * 18);
    setRotX(-normY * 14);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  return (
    <div className="relative w-full rounded-3xl card-glass border border-amber-500/30 p-4 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Model Selector Tabs */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <Rotate3d className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "10s" }} />
            <span>Interactive 3D Spatial Hologram Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
            3D Spatial Object Telemetry &amp; Architecture
          </h3>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedModel.id === m.id
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${selectedModel.id === m.id ? "bg-black" : "bg-amber-400"}`} />
              <span>{m.name.split(" ")[0]} {m.name.split(" ")[1]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 3D Holographic Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6">
        
        {/* Left: 3D Model Display with Mouse Tilt */}
        <div className="lg:col-span-8 relative" style={{ perspective: 1200 }}>
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
            }}
            className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-amber-500/40 bg-[#070a0f] shadow-2xl cursor-grab active:cursor-grabbing group"
          >
            {/* 3D Wireframe Perspective Grid Floor */}
            {wireframeActive && (
              <div 
                className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-25 z-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                  transform: "perspective(300px) rotateX(65deg) translateY(20px)",
                }}
              />
            )}

            {/* Model Image */}
            <Image
              src={selectedModel.src}
              alt={selectedModel.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 800px"
              className="object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700"
            />

            {/* Hologram Floating Coordinate HUD */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 font-mono text-[9px] text-amber-300/80 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/20">
              <div className="flex items-center gap-2">
                <Compass className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-white font-bold">3D SPATIAL TELEMETRY</span>
              </div>
              <div className="flex gap-3 text-zinc-400 pt-0.5">
                <span>ROT_X: <span className="text-amber-400">{rotX.toFixed(1)}°</span></span>
                <span>ROT_Y: <span className="text-amber-400">{rotY.toFixed(1)}°</span></span>
                <span>Z_DEPTH: <span className="text-emerald-400">850MM</span></span>
              </div>
            </div>

            {/* Top Right Expand Button */}
            <button
              onClick={() =>
                onExpand({
                  src: selectedModel.src,
                  title: selectedModel.name,
                  desc: selectedModel.tagline,
                  category: selectedModel.category,
                })
              }
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 hover:bg-amber-400 hover:text-black text-zinc-200 border border-white/20 backdrop-blur-md transition-all shadow-xl flex items-center gap-1.5 text-xs font-mono"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect 8K Render</span>
            </button>

            {/* Bottom Floating Control Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Move cursor to rotate 3D hologram</span>
              </div>

              <button
                onClick={() => setWireframeActive(!wireframeActive)}
                className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-white/10 border border-white/10 text-amber-300 backdrop-blur-md transition-colors"
              >
                {wireframeActive ? "Hide Grid Floor" : "Show Grid Floor"}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Technical Specifications & Hologram Metrics */}
        <div className="lg:col-span-4 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              // {selectedModel.category}
            </span>
            <h4 className="text-2xl font-bold text-white tracking-tight">
              {selectedModel.name}
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal pt-1">
              {selectedModel.tagline}
            </p>
          </div>

          {/* Detailed Spec Badges */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            {selectedModel.specs.map((s, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between font-mono text-xs hover:border-amber-500/40 transition-colors"
              >
                <span className="text-zinc-400">{s.label}</span>
                <span className="text-amber-300 font-semibold">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onSelectProject}
              className="w-full py-3 rounded-xl font-bold text-xs button-gold text-black flex items-center justify-center gap-2 shadow-xl tracking-wide transition-all"
            >
              <Cpu className="w-4 h-4" />
              <span>Architect This 3D System</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
