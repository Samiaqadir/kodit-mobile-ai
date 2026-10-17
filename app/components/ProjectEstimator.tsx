"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Brain,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Sliders,
} from "lucide-react";
import Card3D from "./Card3D";

export default function ProjectEstimator({
  onBookCall,
}: {
  onBookCall: (details: { platform: string; aiTier: string; timeline: string }) => void;
}) {
  const [platform, setPlatform] = useState<"both" | "ios" | "android">("both");
  const [aiTier, setAiTier] = useState<"agents" | "rag" | "ondevice" | "basic">("agents");
  const [timeline, setTimeline] = useState<"rapid" | "standard">("rapid");

  // Dynamic calculations
  const platformLabels = {
    both: "iOS & Android (Unified Native)",
    ios: "Apple iOS (Swift / SwiftUI)",
    android: "Google Android (Kotlin)",
  };

  const aiLabels = {
    agents: "Autonomous Multi-Agent Swarms",
    rag: "Enterprise Vector RAG & LLMs",
    ondevice: "On-Device CoreML / NPU Vision",
    basic: "Smart AI Assistant & API Connectors",
  };

  const weeks = timeline === "rapid" ? "4-6 Weeks" : "8-12 Weeks";
  const sprintCount = timeline === "rapid" ? "3 Sprints" : "6 Sprints";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Project Calculator</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-tight animate-shimmer-text">
          Configure Your <span className="animate-shimmer-gold">Mobile App &amp; AI</span> Architecture
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
          Select your mobile runtime requirements and AI intelligence tier to calculate engineering velocity, architecture topology, and sprint timelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Platform Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>1. Target Mobile Operating Systems</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "both", title: "iOS & Android", sub: "React Native / Flutter" },
                { id: "ios", title: "iOS Native", sub: "Swift / SwiftUI" },
                { id: "android", title: "Android Native", sub: "Kotlin / Jetpack" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlatform(p.id as any)}
                  className={`p-4 rounded-2xl border text-left font-mono transition-all ${
                    platform === p.id
                      ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                      : "bg-black/50 border-white/10 text-zinc-400 hover:border-amber-500/40"
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">{p.title}</div>
                  <div className="text-[10px] text-zinc-400">{p.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. AI Intelligence Tier */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Brain className="w-3.5 h-3.5" />
              <span>2. Artificial Intelligence Integration</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: "agents",
                  title: "Autonomous Agent Swarms",
                  desc: "Multi-agent tool calling, auto-recovery & 24/7 self-operating workflows.",
                },
                {
                  id: "rag",
                  title: "Enterprise Vector RAG",
                  desc: "Private domain LLM fine-tuning, Pinecone/pgvector semantic search.",
                },
                {
                  id: "ondevice",
                  title: "On-Device CoreML / NPU",
                  desc: "Sub-millisecond edge vision & local neural processing without internet.",
                },
                {
                  id: "basic",
                  title: "Smart Conversational AI",
                  desc: "Context-aware chatbots, multi-modal voice API streaming & TTS.",
                },
              ].map((ai) => (
                <button
                  key={ai.id}
                  onClick={() => setAiTier(ai.id as any)}
                  className={`p-4 rounded-2xl border text-left font-mono transition-all ${
                    aiTier === ai.id
                      ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                      : "bg-black/50 border-white/10 text-zinc-400 hover:border-amber-500/40"
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">{ai.title}</div>
                  <div className="text-[10px] text-zinc-400 leading-snug">{ai.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Delivery Speed */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>3. Engineering Sprint Velocity</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setTimeline("rapid")}
                className={`p-4 rounded-2xl border text-left font-mono transition-all ${
                  timeline === "rapid"
                    ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    : "bg-black/50 border-white/10 text-zinc-400 hover:border-amber-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">Rapid MVP Deployment</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Fast Track</span>
                </div>
                <div className="text-[10px] text-zinc-400">4-6 Weeks // 3 Agile Sprints to App Store</div>
              </button>

              <button
                onClick={() => setTimeline("standard")}
                className={`p-4 rounded-2xl border text-left font-mono transition-all ${
                  timeline === "standard"
                    ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    : "bg-black/50 border-white/10 text-zinc-400 hover:border-amber-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">Full Enterprise Architecture</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-zinc-300">Enterprise</span>
                </div>
                <div className="text-[10px] text-zinc-400">8-12 Weeks // Comprehensive SOC2 Compliance</div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Summary & Architecture Blueprint Card */}
        <div className="lg:col-span-5">
          <Card3D intensity={12}>
            <div className="card-glass rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative overflow-hidden space-y-5 animate-pulse-glow">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  // ESTIMATED ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                  Sprint Ready
                </span>
              </div>

              {/* Topology Summary */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-400 block">SELECTED PLATFORM:</span>
                  <span className="font-bold text-white text-sm">{platformLabels[platform]}</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-400 block">AI INTELLIGENCE ENGINE:</span>
                  <span className="font-bold text-amber-300 text-sm">{aiLabels[aiTier]}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">ESTIMATED TIMELINE</span>
                    <span className="font-bold text-white text-base">{weeks}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">VELOCITY</span>
                    <span className="font-bold text-amber-400 text-base">{sprintCount}</span>
                  </div>
                </div>
              </div>

              {/* Key Deliverables Included */}
              <div className="space-y-1.5 pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>60/120 FPS Native Hardware Acceleration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Biometric Secure Enclave Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Full CI/CD Pipeline to iOS &amp; Android Stores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>24/7 SLA Telemetry &amp; Autonomous Agent Monitoring</span>
                </div>
              </div>

              {/* Submit / Book Consultation Button */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    onBookCall({
                      platform: platformLabels[platform],
                      aiTier: aiLabels[aiTier],
                      timeline: weeks,
                    })
                  }
                  className="w-full py-4 rounded-2xl font-bold text-sm button-gold text-black flex items-center justify-center shadow-xl tracking-wide transition-all"
                >
                  <span>Schedule Technical Discovery</span>
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-zinc-500">
                100% Confidential // Non-Disclosure Agreement Guaranteed
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
