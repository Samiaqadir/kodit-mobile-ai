"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Send,
  CheckCircle2,
  Smartphone,
  Fingerprint,
  Globe,
  Database,
  Brain,
  Bot,
  Activity,
  Rocket,
  Layout,
  MousePointer2,
  Server,
  Sparkles,
  Zap,
  GitCommit,
  Calendar,
  Lock,
  Award,
  ShieldCheck,
  Check,
  Monitor,
  Laptop,
  Tablet,
  Maximize2,
  Cpu,
  Layers,
  HardDrive,
  Mic,
  Eye,
  Network,
} from "lucide-react";

import ParticleCanvas3D from "./components/ParticleCanvas3D";
import Card3D from "./components/Card3D";
import HologramViewer3D from "./components/HologramViewer3D";
import MobileAISimulator from "./components/MobileAISimulator";
import ProjectEstimator from "./components/ProjectEstimator";
import CaseStudiesSection from "./components/CaseStudiesSection";
import FAQSection from "./components/FAQSection";
import SoundToggle from "./components/SoundToggle";

export default function KoditHomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Device Showcase States
  const [activeDeviceTab, setActiveDeviceTab] = useState<"suite" | "mobile" | "pc">("suite");
  const [expandedImage, setExpandedImage] = useState<null | {
    src: string;
    title: string;
    desc: string;
    category: string;
  }>(null);

  const [selectedService, setSelectedService] = useState<null | {
    id?: string;
    badge?: string;
    title: string;
    subtitle: string;
    desc: string;
    features: string[];
    tech: string[];
  }>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Mobile & Full-Stack Web Platforms",
    message: "",
  });

  // Discovery Call Form
  const [discoveryEmail, setDiscoveryEmail] = useState("");
  const [discoverySubmitted, setDiscoverySubmitted] = useState(false);

  const handleDiscoverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDiscoverySubmitted(true);
    setTimeout(() => {
      setDiscoverySubmitted(false);
      setDiscoveryEmail("");
    }, 3500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2200);
  };

  // Stepped bar chart data matching the hero reference image
  const heroBars = [
    { height: 35, label: "1ng" },
    { height: 48, label: "1000" },
    { height: 78, label: "2900" },
    { height: 62, label: "3920" },
    { height: 40, label: "6010" },
    { height: 50, label: "910" },
  ];

  // 4-Step Exact Workflow Data (Mobile App & AI Architecture)
  const workflowSteps = [
    {
      num: "01",
      title: "01 | Mobile & AI Blueprinting",
      subtitle: "App user journeys & neural topology",
      desc: "Minimalist visuals of iOS/Android user journey paths, edge vs cloud AI partition models, and biometric security schemas.",
      details: ["Mobile UX Topology", "Neural NPU Partitioning", "Compliance & Latency Audits"],
      badge: "Discovery",
    },
    {
      num: "02",
      title: "02 | Native & Cross-Platform",
      subtitle: "Swift, Kotlin & Flutter/React Native",
      desc: "High-performance mobile architectures locked at 120 FPS, native gesture engines, and continuous integration pipelines.",
      details: ["120 FPS ProMotion UI", "Native Hardware Shaders", "Sub-16ms Frame Times"],
      badge: "Active Deploy",
    },
    {
      num: "03",
      title: "03 | Autonomous AI & Agents",
      subtitle: "CoreML, vector RAG & agent loops",
      desc: "On-device neural inference engines, autonomous tool-calling AI agent swarms, and private enterprise LLM embeddings.",
      details: ["On-Device CoreML/NPU", "Autonomous Multi-Agent Loops", "Vector Semantic Retrieval"],
      badge: "Autonomous",
    },
    {
      num: "04",
      title: "04 | Store Launch & Scaling",
      subtitle: "App Store, Google Play & SLA clusters",
      desc: "Automated Apple App Store and Google Play releases, real-time crash observability, and auto-scaling backend clusters.",
      details: ["Automated Store Pipelines", "99.999% SLA Uptime", "Zero-Downtime Over-the-Air"],
      badge: "SLA 99.999%",
    },
  ];

  // Tech Stack Grid Items (Mobile App & AI Runtimes)
  const techStack = [
    {
      name: "Swift / iOS",
      cat: "Native Apple Mobile",
      badge: "120 FPS Metal",
      icon: (
        <div className="w-7 h-7 rounded-md border border-amber-500/50 flex items-center justify-center font-bold text-xs text-amber-300 bg-amber-500/10">
          iOS
        </div>
      ),
    },
    {
      name: "Kotlin / Android",
      cat: "Native Google Mobile",
      badge: "Jetpack Compose",
      icon: (
        <div className="w-7 h-7 rounded-md border border-amber-500/50 flex items-center justify-center font-bold text-xs text-amber-400 bg-amber-500/10">
          KT
        </div>
      ),
    },
    {
      name: "React Native",
      cat: "Cross-Platform",
      badge: "Native C++ Bridge",
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="16" cy="16" rx="4" ry="12" stroke="#f59e0b" strokeWidth="1.8" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="4" ry="12" stroke="#fbbf24" strokeWidth="1.8" transform="rotate(90 16 16)" />
          <ellipse cx="16" cy="16" rx="4" ry="12" stroke="#f59e0b" strokeWidth="1.8" transform="rotate(150 16 16)" />
          <circle cx="16" cy="16" r="2.2" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      name: "Flutter",
      cat: "Multi-Platform UI",
      badge: "Skia 120 FPS",
      icon: (
        <div className="w-7 h-7 rounded border border-amber-500/50 flex items-center justify-center font-bold text-xs text-amber-400 bg-amber-500/10">
          FL
        </div>
      ),
    },
    {
      name: "CoreML & NPU",
      cat: "On-Device Neural",
      badge: "Sub-0.4ms Latency",
      icon: (
        <div className="w-7 h-7 rounded-full border border-amber-400/60 flex items-center justify-center font-bold text-xs text-amber-300 bg-amber-500/15 shadow-[0_0_10px_rgba(245,158,11,0.4)]">
          NPU
        </div>
      ),
    },
    {
      name: "Autonomous Agents",
      cat: "LangChain / Multi-Agent",
      badge: "Self-Operating",
      icon: (
        <div className="w-7 h-7 rounded-md border border-amber-400/60 flex items-center justify-center font-bold text-xs text-amber-300 bg-amber-500/10">
          AI
        </div>
      ),
    },
    {
      name: "Vector RAG",
      cat: "pgvector / Pinecone",
      badge: "Semantic Search",
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6C11 6 8 9 8 13C8 18 12 21 16 26C20 21 24 18 24 13C24 9 21 6 16 6Z" stroke="#fbbf24" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="16" cy="12" r="2.5" fill="#f59e0b" />
        </svg>
      ),
    },
  ];

  // Bento Services Definitions (Mobile App & AI Services Specialization)
  const bentoServices = [
    {
      id: "mobile-native",
      badge: "iOS & Android",
      title: "Native Mobile App Engineering",
      subtitle: "Swift, Kotlin & 120Hz ProMotion Hardware Acceleration",
      desc: "Architecting high-performance native iOS and Android apps with Apple Metal/Vulkan shaders, Biometric Secure Enclave, and zero-latency gesture engines.",
      features: [
        "Biometric Security (FaceID & Fingerprint)",
        "120 FPS ProMotion Native Fluid UI",
        "SwiftUI & Jetpack Compose Direct Hardware",
        "Automated CI/CD Store Deployments",
      ],
      tech: ["Swift", "SwiftUI", "Kotlin", "Jetpack", "Metal Shaders"],
    },
    {
      id: "crossplatform",
      badge: "Cross-Platform",
      title: "React Native & Flutter Platforms",
      subtitle: "Unified codebases with near-native C++ performance",
      desc: "Building scalable cross-platform mobile apps with Flutter and React Native. Single-codebase efficiency with offline-first SQLite sync and native module bridges.",
      features: [
        "Single Codebase for iOS & Android",
        "Offline-First Encrypted Database Sync",
        "Sub-16ms 60 FPS Fluid Animations",
        "Over-The-Air (OTA) Instant Updates",
      ],
      tech: ["React Native", "Flutter", "TypeScript", "Dart", "SQLite"],
    },
    {
      id: "ai-agents",
      badge: "Autonomous Agents",
      title: "Autonomous AI Agents & Swarms",
      subtitle: "Self-operating multi-agent workflows with tool-calling",
      desc: "Deploying autonomous AI agents that reason, plan, and execute complex business operations 24/7. Built with LangChain, Gemini API, and auto-recovering decision loops.",
      features: [
        "Autonomous Multi-Agent Orchestration",
        "Dynamic Tool Calling & Webhook Execution",
        "Self-Healing Workflow Loops",
        "24/7 Monitored Background Executors",
      ],
      tech: ["LangChain", "Gemini 2.5", "Python", "FastAPI", "Docker"],
    },
    {
      id: "vector-rag",
      badge: "Enterprise RAG",
      title: "Enterprise LLMs & Vector RAG",
      subtitle: "Private fine-tuned models & semantic knowledge retrieval",
      desc: "Connecting enterprise knowledge bases to custom LLMs with vector search, semantic embeddings, and strict zero-data-leakage privacy controls.",
      features: [
        "pgvector & Pinecone Semantic Indexing",
        "Custom Fine-Tuned Domain LLMs",
        "Sub-50ms Hybrid Vector Retrieval",
        "SOC2 Compliant Zero-Data Leakage",
      ],
      tech: ["pgvector", "Pinecone", "LlamaIndex", "PostgreSQL", "PyTorch"],
    },
    {
      id: "edge-ai",
      badge: "On-Device Neural",
      title: "On-Device Edge AI & Computer Vision",
      subtitle: "Local NPU inference with zero latency and 100% privacy",
      desc: "Running computer vision, OCR, and predictive neural networks directly on user iPhones and Android devices using CoreML and TensorFlow Lite without cloud latency.",
      features: [
        "Sub-Millisecond On-Device Inference",
        "Zero-Internet Offline Execution",
        "Real-Time Camera Computer Vision",
        "100% Privacy & Data Sovereignty",
      ],
      tech: ["CoreML", "TensorFlow Lite", "ONNX", "Vision Framework", "MediaPipe"],
    },
    {
      id: "voice-automation",
      badge: "Voice & Speech AI",
      title: "AI Voice, Speech & Workflow Automation",
      subtitle: "Natural conversational voice agents & enterprise ERP connectors",
      desc: "Ultra-low-latency bidirectional voice agents, Whisper live speech transcription, and automated enterprise document processing for seamless digital operations.",
      features: [
        "Bidirectional Streaming Voice Agents",
        "Sub-300ms Conversational Latency",
        "Automated Invoice & Document Ingestion",
        "Enterprise CRM & ERP Connectors",
      ],
      tech: ["Whisper", "WebSockets", "ElevenLabs", "Zapier APIs", "Python"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#080b10] bg-metallic-ripples text-slate-100 font-sans selection:bg-amber-500 selection:text-black relative overflow-x-hidden">
      {/* Interactive 3D Golden Ember & Particle Starfield Canvas */}
      <ParticleCanvas3D />

      {/* ========================================================================= */}
      {/* PHASE 1: EXACT MATCH HERO SECTION (SAME-TO-SAME)                          */}
      {/* ========================================================================= */}
      <section className="relative w-full flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12">
        <div className="relative w-full max-w-[1240px] aspect-[16/10] sm:min-h-[720px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.9)] bg-[#0c1017] flex flex-col justify-between">
          
          {/* Background 3D Octane Visual Asset */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/kodit-exact-bg.jpg"
              alt="KODIT 3D Biomechanical Android Artwork"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
              className="object-cover object-center select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14]/90 via-[#0a0d14]/60 to-transparent w-full md:w-3/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* TOP NAVIGATION BAR */}
          <header className="relative z-20 w-full px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8">
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-full h-full drop-shadow-[0_0_10px_rgba(245,158,11,0.65)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 5L12 9V23L6 27V5Z"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="rgba(245, 158, 11, 0.15)"
                    />
                    <path
                      d="M14 15L23 6L27 9L18 17L27 24L23 27L14 19V15Z"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="rgba(251, 191, 36, 0.25)"
                    />
                  </svg>
                </div>
                <span className="font-extrabold text-xl tracking-wider text-white text-gold-glow">
                  KODIT
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden xl:flex items-center gap-5 lg:gap-6 text-sm font-normal text-zinc-300">
                <a href="#lab" className="hover:text-amber-300 transition-colors duration-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>AI &amp; Mobile Lab</span>
                </a>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
                <a href="#case-studies" className="hover:text-white transition-colors duration-200">
                  Case Studies
                </a>
                <a href="#workflow" className="hover:text-white transition-colors duration-200">
                  Our System
                </a>
                <a href="#estimator" className="hover:text-white transition-colors duration-200">
                  Estimator
                </a>
                <a href="#devices" className="hover:text-white transition-colors duration-200">
                  Hardware
                </a>
                <a href="#faq" className="hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </div>

              {/* Sound Toggle & Start Project Button */}
              <div className="flex items-center gap-3">
                <SoundToggle />
                <button
                  onClick={() => setModalOpen(true)}
                  className="button-nav-project px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium text-amber-200/90 tracking-wide transition-all duration-300"
                >
                  Start Project
                </button>
              </div>
            </nav>
          </header>

          {/* HERO MAIN BODY */}
          <main className="relative z-20 flex-1 px-6 sm:px-10 lg:px-12 flex flex-col justify-center py-6 sm:py-8">
            <div className="max-w-xl flex flex-col items-start gap-4 sm:gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>Specialized Mobile App &amp; AI Engineering Studio</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.08] animate-shimmer-text">
                Architecting Intelligent <br />
                Mobile Apps &amp; AI Systems
              </h1>

              <p className="text-zinc-300/95 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-md pt-1 font-normal">
                Engineering high-performance <span className="text-white font-medium">iOS &amp; Android Apps</span> powered by <span className="text-white font-medium">Autonomous AI Agents</span>, <span className="text-white font-medium">On-Device Neural Engines</span>, and <span className="text-white font-medium">Enterprise Vector LLMs</span>.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="button-gold text-black font-bold px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105"
                >
                  Start Mobile &amp; AI Project
                </button>

                <button
                  onClick={() => setWorkModalOpen(true)}
                  className="button-outline-glass text-white font-medium px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105"
                >
                  Explore Showcase
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 text-zinc-300">
                  <Smartphone className="w-3 h-3 text-amber-400" />
                  <span>120 FPS Native Mobile UI</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 text-zinc-300">
                  <Brain className="w-3 h-3 text-amber-400" />
                  <span>0.4ms On-Device Neural Sync</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 text-zinc-300">
                  <Fingerprint className="w-3 h-3 text-emerald-400" />
                  <span>Biometric Secure Enclave</span>
                </span>
              </div>
            </div>
          </main>

          {/* BOTTOM SECTION: Floating Analytics Card & Telemetry */}
          <div className="relative z-20 px-6 sm:px-10 lg:px-12 pb-6 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-none">
            <div className="pointer-events-auto card-glass rounded-2xl p-4 w-[280px] sm:w-[320px] transition-all hover:scale-[1.03] animate-float-slow shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.2)]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-zinc-200">Materials</span>
                  <span className="w-6 h-1.5 rounded-full bg-zinc-700/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-xs font-semibold text-zinc-300">KPI</span>
                  <span className="text-xs tracking-widest text-zinc-500 animate-pulse">···</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-end pt-1">
                <div className="col-span-7 flex flex-col justify-end">
                  <div className="relative h-16 flex items-end justify-between gap-1 pl-5">
                    <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-[7px] font-mono text-zinc-500 pointer-events-none">
                      <span>1000</span>
                      <span>5000</span>
                      <span>3000</span>
                      <span>2000</span>
                      <span>100</span>
                    </div>

                    {heroBars.map((b, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                        <div
                          style={{ height: `${b.height}%` }}
                          className={`w-full rounded-t-[2px] transition-all duration-500 ${
                            i === 2
                              ? "bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-200 shadow-[0_0_12px_rgba(245,158,11,0.8)] animate-bar-live"
                              : "bg-gradient-to-t from-amber-900/80 to-amber-500/80"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pl-5 pt-1 text-[7px] font-mono text-zinc-500">
                    {heroBars.map((b, i) => (
                      <span key={i}>{b.label}</span>
                    ))}
                  </div>
                </div>

                <div className="col-span-5 flex flex-col items-center justify-center pl-1">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-zinc-800/80"
                        strokeWidth="3.4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]"
                        strokeDasharray="86, 100"
                        strokeLinecap="round"
                        strokeWidth="3.4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-base font-bold font-mono text-white tracking-tighter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                        2.1
                      </span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-amber-300/80 uppercase tracking-wider mt-0.5">
                    KPI Gauge
                  </span>
                </div>
              </div>
            </div>

            <div className="pointer-events-auto hidden sm:flex items-center gap-3 text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-lg animate-float-reverse">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Connected</span>
              </span>
              <span className="text-zinc-600">|</span>
              <span>Terminal</span>
              <div className="w-7 h-1 rounded-full bg-zinc-700 relative overflow-hidden">
                <div className="bg-amber-400 h-full w-3/4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE MOBILE APP & AI SIMULATOR LAB                                 */}
      {/* ========================================================================= */}
      <div id="lab">
        <MobileAISimulator
          onSelectProject={(serviceName) => {
            setFormData({
              ...formData,
              service: serviceName,
            });
            setModalOpen(true);
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* PHASE 2: OUR WORKFLOW & TECH ECOSYSTEM (FOLLOWING THE HERO DIRECTLY)       */}
      {/* ========================================================================= */}
      <section id="workflow" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <span>Our System</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight animate-shimmer-text">
            Engineered for Scale, Driven by Intelligence
          </h2>

          <p className="text-xs sm:text-sm font-mono text-amber-300/80 uppercase tracking-widest pt-1">
            The KODIT System // Continuous Integration &amp; Deployment Mesh
          </p>
        </div>

        {/* 4-Step Connected Horizontal Timeline */}
        <div className="relative mb-16 sm:mb-20">
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400/80 to-amber-500/20 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent w-36 circuit-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflowSteps.map((step, idx) => (
              <Card3D key={step.num} intensity={14} className="h-full">
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`card-workflow rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 h-full ${
                    activeStep === idx ? "border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.3)]" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-400/50 flex items-center justify-center font-mono font-bold text-base text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-amber-500/20 text-amber-300">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/90 mt-1 mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-4">
                      {step.desc}
                    </p>

                    {idx === 0 && (
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2 font-mono text-[9px] text-zinc-400">
                        <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-1">
                          <span>Digital Wireframes</span>
                          <span className="text-amber-400">Approved</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300">
                          <span>Data Architecture</span>
                          <span className="text-emerald-400">Validated</span>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2 font-mono text-[9px]">
                        <div className="flex items-center gap-1.5 text-emerald-400 border-b border-white/5 pb-1">
                          <GitCommit className="w-3 h-3" />
                          <span>active deploy: #8f2a9c</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>React Native / Web</span>
                          <span className="text-amber-300">100% Pass</span>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2 font-mono text-[9px]">
                        <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-1">
                          <span>AI Inference Nodes</span>
                          <span className="text-amber-400">Active</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300">
                          <span>Robotic Pipelines</span>
                          <span className="text-emerald-400">Connected</span>
                        </div>
                      </div>
                    )}

                    {idx === 3 && (
                      <div className="p-3 rounded-xl bg-black/60 border border-amber-500/20 space-y-2 font-mono text-[9px]">
                        <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-1">
                          <span>Server Stacks</span>
                          <span className="text-emerald-400">99.999% SLA</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300">
                          <span>Health Telemetry</span>
                          <span className="text-amber-400">Optimal</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-zinc-500">Details on hover</span>
                    <span className="text-amber-400 group-hover:text-amber-300 transition-colors">Learn More</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* ECOSYSTEM TECH GRID */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h3 className="text-2xl font-bold tracking-tight text-white text-gold-glow">
                Ecosystem Tech Grid
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-300/80">
              PROPRIETARY &amp; OPEN-SOURCE RUNTIMES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="card-tech-logo rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[140px] group cursor-pointer relative overflow-hidden"
              >
                {tech.badge && (
                  <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 whitespace-nowrap mb-1">
                    {tech.badge}
                  </span>
                )}
                {!tech.badge && <div className="h-4" />}

                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 group-hover:border-amber-400/60 transition-all duration-300">
                  {tech.icon}
                </div>

                <div className="mt-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-[9px] font-mono text-zinc-400">
                    {tech.cat}
                  </p>
                </div>

                <span className="text-[10px] font-mono text-amber-400/90 pt-1 group-hover:text-amber-300">
                  Learn More
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-black/60 text-xs font-mono text-zinc-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span>Operational | Terminal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 3: BENTO GRID SECTION ("WHAT WE DO: SERVICES")                      */}
      {/* ========================================================================= */}
      <section id="services" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <Sparkles className="w-3 h-3" />
            <span>Mobile App & AI Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            WHAT WE DO: <span className="animate-shimmer-gold">MOBILE & AI SERVICES MATRIX</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            High-velocity native mobile engineering, autonomous AI agent swarms, and on-device
            neural intelligence platforms architected for perpetual performance and global scale.
          </p>
        </div>

        {/* 6-Card Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {bentoServices.map((service, index) => (
            <Card3D key={service.id} intensity={12} className="h-full">
              <div className="card-bento-gold rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden h-full">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/25 transition-all" />

                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {service.badge}
                    </span>
                    {index === 0 && <Smartphone className="w-4 h-4 text-amber-400" />}
                    {index === 1 && <Layers className="w-4 h-4 text-amber-400" />}
                    {index === 2 && <Brain className="w-4 h-4 text-amber-400" />}
                    {index === 3 && <Database className="w-4 h-4 text-amber-400" />}
                    {index === 4 && <Eye className="w-4 h-4 text-amber-400" />}
                    {index === 5 && <Mic className="w-4 h-4 text-amber-400" />}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 mb-4">
                    {service.subtitle}
                  </p>

                  {index === 0 && (
                    <div className="space-y-3 my-3">
                      {/* Device Visual Thumbnail */}
                      <div 
                        onClick={() => setExpandedImage({
                          src: "/kodit-mobile-phones.jpg",
                          title: "KODIT Native Mobile Platforms (iOS & Android)",
                          desc: "High-performance native mobile apps running with sub-16ms render times, Biometric Enclave security, and offline AI execution.",
                          category: "MOBILE HARDWARE SHOWCASE"
                        })}
                        className="relative h-32 w-full rounded-2xl overflow-hidden border border-amber-500/30 group/img cursor-pointer"
                      >
                        <Image
                          src="/kodit-mobile-phones.jpg"
                          alt="KODIT Mobile 3D Smartphones"
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-amber-300 flex items-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            <span>3D Native Handhelds</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/70 text-zinc-300 border border-white/10 flex items-center gap-1 group-hover/img:border-amber-400">
                            <Maximize2 className="w-2.5 h-2.5 text-amber-400" />
                            <span>Inspect</span>
                          </span>
                        </div>
                      </div>

                      <div className="relative p-3 rounded-2xl bg-black/60 border border-amber-500/20 overflow-hidden">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px] font-mono text-zinc-400">
                          <span>Runtime Engine</span>
                          <span className="text-amber-400 font-bold">60 FPS Native</span>
                        </div>
                        <div className="grid grid-cols-12 gap-2 items-center py-2">
                          <div className="relative overflow-hidden col-span-4 flex flex-col items-center justify-center p-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                            <Fingerprint className="w-6 h-6 text-amber-400 animate-pulse" />
                            <div className="absolute inset-x-0 h-0.5 bg-amber-300 shadow-[0_0_8px_#fde047] animate-scan-line pointer-events-none" />
                            <span className="text-[8px] font-mono text-amber-300 mt-0.5">Biometric OK</span>
                          </div>
                          <div className="col-span-8 space-y-1 font-mono text-[9px] text-zinc-300">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Latency:</span>
                              <span className="text-emerald-400">0.8ms Sync</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full w-[94%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-3 my-3">
                      {/* PC Workstation Visual Thumbnail */}
                      <div 
                        onClick={() => setExpandedImage({
                          src: "/kodit-pc-workstation.jpg",
                          title: "KODIT Full-Stack PC & Cloud Workstation",
                          desc: "Dual 4K workstation architecture with serverless microservice diagrams, glowing code topologies, and distributed cloud computing.",
                          category: "ENTERPRISE PC WORKSTATION"
                        })}
                        className="relative h-32 w-full rounded-2xl overflow-hidden border border-amber-500/30 group/img cursor-pointer"
                      >
                        <Image
                          src="/kodit-pc-workstation.jpg"
                          alt="KODIT PC Workstation"
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-amber-300 flex items-center gap-1">
                            <Monitor className="w-3 h-3" />
                            <span>4K PC Workstation</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/70 text-zinc-300 border border-white/10 flex items-center gap-1 group-hover/img:border-amber-400">
                            <Maximize2 className="w-2.5 h-2.5 text-amber-400" />
                            <span>Inspect</span>
                          </span>
                        </div>
                      </div>

                      <div className="relative p-3 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-amber-500/30 text-amber-300">
                            <Globe className="w-2.5 h-2.5" />
                            <span>Serverless</span>
                          </div>
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-amber-500/30 text-amber-300">
                            <Database className="w-2.5 h-2.5" />
                            <span>Postgres</span>
                          </div>
                        </div>
                        <div className="h-6 w-full bg-zinc-950 rounded-lg p-1 flex items-end justify-between gap-1 border border-white/5">
                          {[20, 45, 60, 35, 75, 90, 65, 80, 100].map((val, idx) => (
                            <div
                              key={idx}
                              style={{ height: `${val}%` }}
                              className="flex-1 bg-gradient-to-t from-amber-700 to-amber-400 rounded-t-[1px]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-3 my-3">
                      {/* 3D AI Neural Core Visual Thumbnail */}
                      <div 
                        onClick={() => setExpandedImage({
                          src: "/kodit-ai-core.jpg",
                          title: "KODIT 3D AI Neural Core & Agent Matrix",
                          desc: "Autonomous multi-agent orchestration core, vector embeddings, and real-time multi-modal LLM reasoning pipelines glowing with golden synaptic energy.",
                          category: "3D ARTIFICIAL INTELLIGENCE CORE"
                        })}
                        className="relative h-32 w-full rounded-2xl overflow-hidden border border-amber-500/30 group/img cursor-pointer"
                      >
                        <Image
                          src="/kodit-ai-core.jpg"
                          alt="KODIT 3D AI Neural Core"
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-amber-300 flex items-center gap-1">
                            <Brain className="w-3 h-3 text-amber-400 animate-pulse" />
                            <span>3D Neural Core</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/70 text-zinc-300 border border-white/10 flex items-center gap-1 group-hover/img:border-amber-400">
                            <Maximize2 className="w-2.5 h-2.5 text-amber-400" />
                            <span>Inspect</span>
                          </span>
                        </div>
                      </div>

                      <div className="relative p-3 rounded-2xl bg-black/60 border border-amber-500/20 flex flex-col items-center justify-center space-y-2">
                        <div className="flex items-center justify-between w-full font-mono text-[9px] text-zinc-300">
                          <span className="text-amber-400 font-semibold">Autonomous Core // v4</span>
                          <span className="text-emerald-400">99.8% Accuracy</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 h-full w-[99.8%] shadow-[0_0_8px_#f59e0b]" />
                        </div>
                        <div className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-400 pt-0.5">
                          <span>Multi-Model Agent Loop</span>
                          <span className="text-amber-300">Active Mesh</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="relative my-3 p-3.5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2.5 font-mono text-[10px]">
                      <div className="flex items-center justify-between pb-1 border-b border-white/5">
                        <span className="text-amber-300 flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-amber-400" />
                          <span>Vector RAG Pipeline</span>
                        </span>
                        <span className="text-emerald-400 font-bold">18ms Query</span>
                      </div>
                      <div className="space-y-1.5 text-zinc-300">
                        <div className="flex justify-between text-[9px]">
                          <span className="text-zinc-400">Embedding Dim:</span>
                          <span className="text-amber-300">1536-dim text-embed-3</span>
                        </div>
                        <div className="flex justify-between text-[9px]">
                          <span className="text-zinc-400">Vector Store:</span>
                          <span className="text-amber-300">Pinecone / Qdrant Hybrid</span>
                        </div>
                        <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/5">
                          <span className="text-zinc-400">Context Grounding:</span>
                          <span className="text-emerald-400">99.4% Verified</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 4 && (
                    <div className="relative my-3 p-3.5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2.5 font-mono text-[10px]">
                      <div className="flex items-center justify-between pb-1 border-b border-white/5">
                        <span className="text-amber-300 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>Neural Vision Engine</span>
                        </span>
                        <span className="text-emerald-400 font-bold">60 FPS Real-time</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-2 rounded-xl bg-zinc-900 border border-white/5">
                          <span className="text-amber-400 font-bold block text-sm">0.4 ms</span>
                          <span className="text-[8px] text-zinc-400 uppercase">CoreML NPU</span>
                        </div>
                        <div className="p-2 rounded-xl bg-zinc-900 border border-white/5">
                          <span className="text-emerald-400 font-bold block text-sm">0 KB</span>
                          <span className="text-[8px] text-zinc-400 uppercase">Cloud Uplink</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-zinc-400">
                        <span>Model: YOLO-v10-Nano</span>
                        <span className="text-amber-300">Biometric Secure</span>
                      </div>
                    </div>
                  )}

                  {index === 5 && (
                    <div className="relative my-3 p-3.5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2.5 font-mono text-[10px]">
                      <div className="flex items-center justify-between pb-1 border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                          <span className="text-amber-300">Live Speech & Action</span>
                        </div>
                        <span className="text-emerald-400 font-bold">190ms Voice Sync</span>
                      </div>
                      <div className="h-7 w-full bg-zinc-950 rounded-lg p-1.5 flex items-end justify-between gap-1 border border-white/5">
                        {[30, 75, 45, 90, 60, 100, 80, 50, 95, 70, 40, 85, 30].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-gradient-to-t from-amber-600 to-yellow-300 rounded-t-[1px]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-zinc-400">
                        <span>Whisper v3 Turbo</span>
                        <span className="text-amber-300">Autonomous CRM Sync</span>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-4 pt-3 border-t border-white/10 flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Learn More</span>
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDIES & ENTERPRISE PRODUCTION PROOF                                */}
      {/* ========================================================================= */}
      <CaseStudiesSection
        onSelectProject={(title) => {
          setFormData({
            ...formData,
            service: title,
          });
          setModalOpen(true);
        }}
      />

      {/* ========================================================================= */}
      {/* HARDWARE & MULTI-PLATFORM ECOSYSTEM (MOBILES, LAPTOPS & PC WORKSTATIONS) */}
      {/* ========================================================================= */}
      <section id="devices" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <Monitor className="w-3.5 h-3.5" />
            <span>Cross-Platform Hardware &amp; Devices</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight animate-shimmer-text">
            Engineered for <span className="animate-shimmer-gold">Mobile, Laptop &amp; PC</span> Workstations
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
            From 60 FPS titanium smartphones to multi-monitor 4K cloud workstation cockpits—experience zero compromises on latency, biometric security, or visual fidelity.
          </p>
        </div>

        {/* 3D Interactive Holographic Spatial Studio */}
        <div className="mb-14">
          <HologramViewer3D
            onExpand={setExpandedImage}
            onSelectProject={() => setModalOpen(true)}
          />
        </div>

        {/* Interactive Device Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveDeviceTab("suite")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono flex items-center gap-2 transition-all ${
              activeDeviceTab === "suite"
                ? "bg-amber-400 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Devices Suite (PC, Laptop, Mobile)</span>
          </button>

          <button
            onClick={() => setActiveDeviceTab("mobile")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono flex items-center gap-2 transition-all ${
              activeDeviceTab === "mobile"
                ? "bg-amber-400 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Native Mobile Handhelds (iOS &amp; Android)</span>
          </button>

          <button
            onClick={() => setActiveDeviceTab("pc")}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono flex items-center gap-2 transition-all ${
              activeDeviceTab === "pc"
                ? "bg-amber-400 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Enterprise PC Workstations</span>
          </button>
        </div>

        {/* Large Stage Display with Dynamic Image */}
        <div className="relative rounded-3xl overflow-hidden card-glass border border-amber-500/30 p-2 sm:p-4 shadow-[0_20px_80px_rgba(0,0,0,0.8)] animate-pulse-glow">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden group cursor-pointer">
            {activeDeviceTab === "suite" && (
              <Image
                src="/kodit-devices-suite.jpg"
                alt="KODIT Cross-Platform Devices Suite (Curved PC, Laptop, Smartphone)"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            )}
            {activeDeviceTab === "mobile" && (
              <Image
                src="/kodit-mobile-phones.jpg"
                alt="KODIT 3D Mobile Smartphones with Biometric & AI workflows"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            )}
            {activeDeviceTab === "pc" && (
              <Image
                src="/kodit-pc-workstation.jpg"
                alt="KODIT Enterprise Developer PC Workstation and Laptop"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            )}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Top Bar Floating Status */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-xs font-mono text-amber-300 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {activeDeviceTab === "suite" && "MULTI-PLATFORM ECOSYSTEM // 4K DESKTOP + LAPTOP + MOBILE"}
                  {activeDeviceTab === "mobile" && "NATIVE HANDHELD PLATFORM // 60 FPS METAL & VULKAN SHADERS"}
                  {activeDeviceTab === "pc" && "ENTERPRISE WORKSTATION // DUAL 4K TOPOLOGY + CODE IDE"}
                </span>
              </div>

              <button
                onClick={() => {
                  if (activeDeviceTab === "suite") {
                    setExpandedImage({
                      src: "/kodit-devices-suite.jpg",
                      title: "KODIT Unified Device Suite",
                      desc: "Complete cross-platform ecosystem featuring curved 4K PC desktop monitor, ultra-thin dark titanium laptop, and floating bezel-less smartphone running KODIT enterprise telemetry.",
                      category: "FULL ECOSYSTEM SHOWCASE",
                    });
                  } else if (activeDeviceTab === "mobile") {
                    setExpandedImage({
                      src: "/kodit-mobile-phones.jpg",
                      title: "KODIT Native Mobile Handhelds",
                      desc: "Dual titanium smartphones displaying biometric authentication, real-time market overviews, and autonomous AI task runners with sub-16ms latency.",
                      category: "MOBILE SPECIFICATIONS",
                    });
                  } else {
                    setExpandedImage({
                      src: "/kodit-pc-workstation.jpg",
                      title: "KODIT Enterprise PC Workstation",
                      desc: "Dual 4K floating monitor setup on minimalist obsidian desk showing full-stack microservices architecture, serverless pipelines, and real-time code topologies.",
                      category: "WORKSTATION TOPOLOGY",
                    });
                  }
                }}
                className="px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-amber-400 hover:text-black backdrop-blur-md border border-white/20 text-xs font-mono text-zinc-200 transition-all flex items-center gap-1.5 shadow-xl"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full 8K Image</span>
              </button>
            </div>

            {/* Bottom Bar Info */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                  {activeDeviceTab === "suite" && "Unified Multi-Device Runtime Architecture"}
                  {activeDeviceTab === "mobile" && "Next-Gen iOS & Android Titanium Applications"}
                  {activeDeviceTab === "pc" && "High-Velocity Cloud & PC Desktop Terminals"}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono drop-shadow">
                  {activeDeviceTab === "suite" && "Continuous synchronization across personal handhelds, field laptops, and command center PC desks."}
                  {activeDeviceTab === "mobile" && "Hardware Enclave biometrics, offline neural pipelines, and 120Hz ProMotion fluid gestures."}
                  {activeDeviceTab === "pc" && "Zero-latency WebSocket streams, WebAssembly data engines, and SOC2 compliant operator cockpits."}
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="button-gold text-black font-bold px-6 py-2 rounded-full text-xs shrink-0 shadow-xl"
              >
                <span>Deploy on This Hardware</span>
              </button>
            </div>
          </div>

          {/* Three Interactive Device Cards Below the Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-2">
            {/* Card 1: Mobile Phones */}
            <div 
              onClick={() => setActiveDeviceTab("mobile")}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeDeviceTab === "mobile"
                  ? "bg-amber-500/10 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  : "bg-black/40 border-white/10 hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">Native Mobile Devices</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  iOS / Android
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Built with React Native &amp; Swift/Kotlin runtimes. Metal/Vulkan GPU acceleration with offline biometric security.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-zinc-300">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">60 FPS Native</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">FaceID / TouchID</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Offline SQLite</span>
              </div>
            </div>

            {/* Card 2: Laptops */}
            <div 
              onClick={() => setActiveDeviceTab("suite")}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeDeviceTab === "suite"
                  ? "bg-amber-500/10 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  : "bg-black/40 border-white/10 hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">Field Titanium Laptops</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  macOS / Windows
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Sub-100ms Turbopack hydration, WebAssembly local data crunching, and seamless offline-to-online reconciliation.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-zinc-300">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">WASM Engines</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Sub-100ms Hydrate</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">OLED Dark UI</span>
              </div>
            </div>

            {/* Card 3: PC Workstations */}
            <div 
              onClick={() => setActiveDeviceTab("pc")}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeDeviceTab === "pc"
                  ? "bg-amber-500/10 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  : "bg-black/40 border-white/10 hover:border-amber-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">Enterprise PC Desktops</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Dual 4K / Ultrawide
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Full-stack architecture topologies, real-time microservices inspection, and sub-10ms developer velocity.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-zinc-300">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">4K Ultrawide</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Duplex WebSocket</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">SOC2 Controls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE MOBILE APP & AI ARCHITECTURE ESTIMATOR                        */}
      {/* ========================================================================= */}
      <div id="estimator">
        <ProjectEstimator
          onBookCall={(details) => {
            setFormData({
              ...formData,
              service: `${details.platform} with ${details.aiTier} (${details.timeline})`,
            });
            setModalOpen(true);
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS (FAQ)                                          */}
      {/* ========================================================================= */}
      <FAQSection onOpenConsultation={() => setModalOpen(true)} />

      {/* ========================================================================= */}
      {/* PHASE 4: IMPACT & ACTION ("OUR IMPACT: PROVEN EFFICIENCY, UNRIVALED SCALE") */}
      {/* ========================================================================= */}
      <section id="impact" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        {/* Section Subtitle & Large Bold Headline */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <span>Our Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-tight animate-shimmer-text">
            Proven Efficiency, Unrivaled Scale
          </h2>

          <p className="text-xs sm:text-sm font-mono text-amber-300/80 uppercase tracking-widest pt-1">
            Quantifiable Enterprise Performance // Zero Tolerance for Latency
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: High-Contrast Glowing Metrics */}
          <div className="lg:col-span-6 space-y-5">
            {/* Metric 1: 99.9% Uptime SLAs with Circular Progress Gauge */}
            <Card3D intensity={10}>
              <div className="card-glass rounded-3xl p-6 sm:p-7 border border-amber-500/25 flex items-center justify-between group hover:border-amber-400/60 transition-all relative overflow-hidden">
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 text-gold-glow font-mono tracking-tight block">
                    99.9%
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1 block">
                    Uptime SLAs
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-0.5 block">
                    Automated Multi-Region Failover
                  </span>
                </div>

                {/* Circular Gauge with Rotating Radar / Pulse */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-zinc-800"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]"
                      strokeDasharray="99.9, 100"
                      strokeLinecap="round"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-amber-400/40 border-t-amber-300 animate-radar-spin flex items-center justify-center">
                      <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Metric 2: 40%+ Operational Efficiency with Glowing Bar Chart Data Pipelines */}
            <Card3D intensity={10}>
              <div className="card-glass rounded-3xl p-6 sm:p-7 border border-amber-500/25 flex items-center justify-between group hover:border-amber-400/60 transition-all relative overflow-hidden">
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 text-gold-glow font-mono tracking-tight block">
                    40%+
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1 block">
                    Operational Efficiency
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-0.5 block">
                    Autonomous AI Workflows
                  </span>
                </div>

                {/* Glowing Bar Chart Data Pipelines with Live Pulsing Bars */}
                <div className="flex flex-col items-end gap-2 w-32 sm:w-44">
                  <div className="flex items-end gap-1.5 h-10 w-full justify-between">
                    {[25, 40, 60, 45, 80, 95, 70, 88].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }}
                        className={`w-2.5 rounded-t-[2px] transition-all duration-300 animate-bar-live ${
                          i >= 4
                            ? "bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-200 shadow-[0_0_8px_#f59e0b]"
                            : "bg-gradient-to-t from-amber-950 to-amber-700/80"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="w-full bg-zinc-800 h-1 rounded-full relative overflow-hidden">
                    <div className="bg-amber-400 h-1 rounded-full w-3/4 shadow-[0_0_8px_#f59e0b] animate-pulse" />
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Metric 3: 100% Success Rate with Fine Golden Stat Badges */}
            <Card3D intensity={10}>
              <div className="card-glass rounded-3xl p-6 sm:p-7 border border-amber-500/25 flex items-center justify-between group hover:border-amber-400/60 transition-all relative overflow-hidden">
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 text-gold-glow font-mono tracking-tight block">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1 block">
                    Success Rate
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-0.5 block">
                    Enterprise Deployments
                  </span>
                </div>

                {/* Fine Golden Stat Badges */}
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center hover:scale-105 transition-transform">
                    <Award className="w-4 h-4 text-amber-400 mx-auto" />
                    <span className="text-[8px] font-mono text-amber-300 mt-0.5 block">Verified</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto" />
                    <span className="text-[8px] font-mono text-amber-300 mt-0.5 block">SOC2</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center hover:scale-105 transition-transform">
                    <Check className="w-4 h-4 text-amber-400 mx-auto" />
                    <span className="text-[8px] font-mono text-amber-300 mt-0.5 block">On-Time</span>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* RIGHT COLUMN: Large Dark Frosted Glassmorphic Card "Let's Start Your Project" */}
          <div className="lg:col-span-6">
            <Card3D intensity={8}>
              <div className="card-glass rounded-3xl p-8 sm:p-10 border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] relative overflow-hidden space-y-6 animate-pulse-glow">
                {/* Warm Golden Glow Orb */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Let&apos;s Start Your Project
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 mt-2.5 leading-relaxed font-normal">
                  Ready to scale? Let&apos;s talk architecture, timelines, and intelligent automation.
                </p>
              </div>

              {discoverySubmitted ? (
                <div className="p-5 rounded-2xl bg-amber-500/15 border border-amber-400/50 flex items-center gap-3 text-amber-300">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">Discovery Call Scheduled</p>
                    <p className="text-zinc-300">A senior architect has been assigned and will connect with your calendar.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDiscoverySubmit} className="space-y-4 pt-1">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={discoveryEmail}
                      onChange={(e) => setDiscoveryEmail(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/80 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold text-sm button-gold text-black flex items-center justify-center shadow-xl tracking-wide transition-all"
                  >
                    <span>Schedule Discovery Call</span>
                  </button>
                </form>
              )}

              <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-400" />
                  NDA Guaranteed
                </span>
                <span>•</span>
                <span>Zero Obligation</span>
                <span>•</span>
                <span>Direct Access to Principal Engineers</span>
              </div>
            </div>
          </Card3D>
        </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL MINIMALIST GLOWING FOOTER                                           */}
      {/* ========================================================================= */}
      <footer className="w-full border-t border-white/10 bg-black/50 py-8 px-6 sm:px-12 max-w-7xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Bottom-Left: Glowing Golden Geometric KODIT Logo */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 5L12 9V23L6 27V5Z"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="rgba(245, 158, 11, 0.2)"
                />
                <path
                  d="M14 15L23 6L27 9L18 17L27 24L23 27L14 19V15Z"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="rgba(251, 191, 36, 0.3)"
                />
              </svg>
            </div>
            <span className="font-extrabold text-lg tracking-wider text-amber-400 text-gold-glow">
              KODIT
            </span>
          </div>

          {/* Center: Footer Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-normal text-zinc-300">
            <a href="#services" className="hover:text-amber-300 transition-colors">
              Services
            </a>
            <span className="text-amber-500/40">|</span>
            <a href="#devices" className="hover:text-amber-300 transition-colors">
              Devices &amp; PC
            </a>
            <span className="text-amber-500/40">|</span>
            <a href="#workflow" className="hover:text-amber-300 transition-colors">
              Portfolio
            </a>
            <span className="text-amber-500/40">|</span>
            <a href="#workflow" className="hover:text-amber-300 transition-colors">
              Case Studies
            </a>
            <span className="text-amber-500/40">|</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
              className="hover:text-amber-300 transition-colors"
            >
              Contact
            </a>
            <span className="text-amber-500/40">|</span>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert("KODIT Privacy Policy: Enterprise-grade data privacy and NDA enforcement guaranteed.");
              }}
              className="hover:text-amber-300 transition-colors"
            >
              Privacy
            </a>
          </div>

          {/* Right: Pill Button "Start Project" */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="button-nav-project px-5 py-2 rounded-full text-xs font-medium text-amber-200/90 tracking-wide hover:border-amber-400 transition-all"
            >
              Start Project
            </button>

            {/* Tiny Golden Status Badge in Bottom-Right Corner */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono text-zinc-300 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span>Status: All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 8K HIGH-RES DEVICE LIGHTBOX MODAL                                         */}
      {/* ========================================================================= */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-2xl animate-fadeIn">
          <div className="relative w-full max-w-5xl card-glass rounded-3xl p-4 sm:p-6 border border-amber-500/40 shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-3 pr-12">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                // {expandedImage.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {expandedImage.title}
              </h2>
              <p className="text-xs text-zinc-300 mt-1">
                {expandedImage.desc}
              </p>
            </div>

            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
              <Image
                src={expandedImage.src}
                alt={expandedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>8K Cinematic 3D Render • Studio Rim Lighting</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setExpandedImage(null)}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setExpandedImage(null);
                    setModalOpen(true);
                  }}
                  className="button-gold text-black font-bold px-6 py-2 rounded-full"
                >
                  <span>Build For This Device</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODALS                                                                    */}
      {/* ========================================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg card-glass rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                // {selectedService.badge}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                {selectedService.title}
              </h2>
              <p className="text-xs text-amber-300/80 font-mono mt-0.5">
                {selectedService.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
                {selectedService.desc}
              </p>
            </div>

            <div className="my-5 space-y-2 border-t border-b border-white/10 py-4">
              <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                Core Deliverables
              </span>
              <div className="grid grid-cols-1 gap-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-zinc-400 block mb-2 uppercase">
                Technologies &amp; Frameworks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-amber-300 border border-amber-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs text-zinc-400 hover:text-white font-mono"
              >
                Close Overview
              </button>
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    service: selectedService.title,
                  });
                  setSelectedService(null);
                  setModalOpen(true);
                }}
                className="button-gold text-black font-bold px-7 py-2.5 rounded-full text-xs"
              >
                <span>Initiate This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg card-glass rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {formSubmitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Inquiry Dispatched</h3>
                <p className="text-xs text-zinc-300 max-w-xs">
                  Thank you for reaching out. The KODIT technical team will review your project parameters within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                    KODIT // PROJECT LAUNCH
                  </p>
                  <h2 className="text-2xl font-bold text-white">Let&apos;s Build Together</h2>
                  <p className="text-xs text-zinc-400">
                    Tell us about your upcoming software, AI workflow, or enterprise platform.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-300 mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-300 mb-1">WORK EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-300 mb-1">CORE FOCUS</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                    >
                      <option>Cross-Platform App Development (iOS &amp; Android)</option>
                      <option>Full-Stack Web Development</option>
                      <option>AI &amp; Workflow Automation</option>
                      <option>Application Maintenance &amp; Support</option>
                      <option>IT Consulting &amp; Strategy</option>
                      <option>UI/UX and Wireframes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-300 mb-1">PROJECT DETAILS</label>
                    <textarea
                      rows={3}
                      placeholder="Scope, timeline, and key milestones..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm button-gold text-black flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {workModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl card-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <button
              onClick={() => setWorkModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                PORTFOLIO SHOWCASE
              </p>
              <h2 className="text-2xl font-bold text-white mt-1">Featured Deployments</h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Autonomous Enterprise AI Hub",
                  category: "AI Agent & Workflow Automations",
                  desc: "Multi-agent autonomous framework automating multi-million dollar data reconciliation.",
                },
                {
                  title: "HyperScale Spatial Commerce",
                  category: "Full-Stack Web & Mobile Platform",
                  desc: "Cross-platform mobile and Next.js web ecosystem with sub-50ms render latency.",
                },
                {
                  title: "Omni-Channel Cloud Architecture",
                  category: "IT Strategy & Cloud Infrastructure",
                  desc: "Zero-downtime distributed infrastructure scaling to 10M daily active requests.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/[0.08] bg-black/40 hover:border-amber-400/50 transition-all space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs text-amber-400/90 font-mono">{p.category}</p>
                  <p className="text-xs text-zinc-300">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  setWorkModalOpen(false);
                  setModalOpen(true);
                }}
                className="button-gold text-black font-semibold px-5 py-2 rounded-full text-xs"
              >
                Discuss a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
