"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Brain,
  ShieldCheck,
  Activity,
  Layers,
  Zap,
  Star,
  CheckCircle2,
  Maximize2,
  Sparkles,
} from "lucide-react";
import Card3D from "./Card3D";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  client: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  deliverables: string[];
  quote: string;
  quoteAuthor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "apexfin",
    category: "MOBILE FINTECH & ON-DEVICE AI",
    title: "ApexFin Global Banking App",
    subtitle: "Native iOS & Android banking engine with CoreML on-device fraud detection.",
    client: "ApexFin Capital Ltd.",
    image: "/kodit-mobile-cyan.jpg",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Active Mobile Users", value: "1.4M+" },
      { label: "Auth Latency", value: "0.2ms" },
      { label: "Fraud Prevention", value: "99.98%" },
    ],
    tags: ["Swift", "Kotlin", "CoreML NPU", "Biometric Secure Enclave", "120 FPS"],
    deliverables: [
      "Cross-platform parity with native Swift (iOS) and Kotlin (Android) codebases",
      "On-device neural network analyzing transaction velocity in under 0.4 milliseconds",
      "Offline vault mode with hardware key derivation and end-to-end payload encryption",
      "Instant store submission passing Apple Human Interface & Google Play guidelines",
    ],
    quote: "KODIT delivered a banking app that feels like magic. 120 FPS fluid animations and instant on-device biometric security set a new industry benchmark.",
    quoteAuthor: "Marcus Vance, Chief Product Officer at ApexFin",
  },
  {
    id: "pulseai",
    category: "HEALTHCARE MOBILE & COMPUTER VISION",
    title: "PulseAI Vital Monitor",
    subtitle: "Cross-platform Flutter health app measuring vitals via smartphone camera sensor.",
    client: "Pulse BioHealth Systems",
    image: "/kodit-devices-cyan.jpg",
    metrics: [
      { label: "Clinical Precision", value: "99.2%" },
      { label: "Camera Frame Rate", value: "60 FPS" },
      { label: "Data Leakage", value: "0 KB" },
      { label: "Patients Monitored", value: "240K+" },
    ],
    tags: ["Flutter", "Skia Engine", "Computer Vision", "HIPAA Vault", "Offline Edge AI"],
    deliverables: [
      "Custom C++ computer vision plugin integrated into Flutter via Native FFI hooks",
      "Real-time photoplethysmography (PPG) calculating pulse and SpO2 from camera lens",
      "Zero telemetry cloud leakage — 100% of biometric processing executes on the device",
      "FDA/HIPAA compliant cryptographic audit log stored in local encrypted database",
    ],
    quote: "Our clinical trials proved KODIT's mobile AI architecture runs faster than dedicated hospital hardware while maintaining strict zero-cloud privacy.",
    quoteAuthor: "Dr. Elena Rostova, VP of Clinical Technology",
  },
  {
    id: "omniagent",
    category: "AUTONOMOUS AI AGENT MATRIX",
    title: "OmniAgent Logistics Swarm",
    subtitle: "Enterprise multi-agent autonomous system orchestrating global freight fleets.",
    client: "OmniGlobal Freight",
    image: "/kodit-ai-core-cyan.jpg",
    metrics: [
      { label: "Route Cost Reduction", value: "42%" },
      { label: "Autonomous Dispatches", value: "2,800/hr" },
      { label: "Vector Latency", value: "14ms" },
      { label: "Annual Savings", value: "$4.6M" },
    ],
    tags: ["Agent Swarms", "Qdrant Vector DB", "LangGraph", "Driver Mobile App", "WebSockets"],
    deliverables: [
      "Hierarchical swarm of 12 autonomous micro-agents negotiating route contingencies",
      "Real-time React Native driver application receiving sub-second dispatch re-routes",
      "Pinecone / Qdrant hybrid vector embeddings searching 400M geo-spatial logistics points",
      "Self-healing failover architecture running 24/7 with zero unplanned downtime",
    ],
    quote: "The autonomous agent system replaced 80% of our manual dispatch overhead. It is the single highest-ROI technology investment in our company history.",
    quoteAuthor: "Tariq Mansoor, COO at OmniGlobal",
  },
];

export default function CaseStudiesSection({
  onSelectProject,
}: {
  onSelectProject?: (title: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeStudy = caseStudies[activeTab];

  return (
    <section id="case-studies" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="relative flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300 shadow-[0_0_12px_rgba(37,99,235,0.25)]">
          <Star className="w-3 h-3 text-blue-400" />
          <span>Proven Production Impact</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          CASE STUDIES: <span className="animate-shimmer-blue">DEPLOYED MOBILE & AI EXCELLENCE</span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Explore real-world production mobile apps and enterprise AI swarms delivering millions of
          transactions and verified high-performance ROI for global enterprises.
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {caseStudies.map((study, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.45)]"
                    : "bg-zinc-900/80 text-zinc-400 border border-white/5 hover:border-blue-500/30 hover:text-zinc-200"
                }`}
              >
                <span>{study.title.split(" ")[0]}</span>
                <span className="opacity-70 ml-1.5 hidden sm:inline">({study.category.split(" ")[0]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Case Study Presentation */}
      <div className="relative">
        <Card3D intensity={10} className="w-full">
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950/95 border border-blue-500/30 shadow-[0_12px_45px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual & Live Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-blue-500/30 group">
                  <Image
                    src={activeStudy.image}
                    alt={activeStudy.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/80 border border-blue-400/40 text-blue-300">
                      {activeStudy.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span className="text-white font-semibold">{activeStudy.client}</span>
                    <span className="text-blue-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Verified Scale</span>
                    </span>
                  </div>
                </div>

                {/* 4 Metric Badges Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  {activeStudy.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-black/60 border border-white/5 hover:border-blue-500/30 transition-colors"
                    >
                      <span className="text-xl sm:text-2xl font-bold text-blue-400 block tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Deep Architectural Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
                      ENTERPRISE BENCHMARK
                    </span>
                    <span className="text-xs font-mono text-zinc-400">Production Deployed</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeStudy.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {activeStudy.subtitle}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {activeStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-blue-500/25 text-blue-300/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architectural Deliverables */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                    Engineering Architecture Highlights
                  </span>
                  <div className="space-y-2">
                    {activeStudy.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Quote Card */}
                <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-2">
                  <p className="text-xs sm:text-sm text-zinc-200 italic font-light leading-relaxed">
                    "{activeStudy.quote}"
                  </p>
                  <p className="text-[11px] font-mono text-blue-300">
                    — {activeStudy.quoteAuthor}
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject(activeStudy.title);
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Architect a Similar Mobile & AI System</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
}
