"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Brain,
  Fingerprint,
  Activity,
  Bot,
  Zap,
  ShieldCheck,
  Cpu,
  Sparkles,
  Wifi,
  Battery,
  Lock,
  Play,
  CheckCircle2,
  Layers,
} from "lucide-react";
import Card3D from "./Card3D";

type AppMode = "fintech" | "health" | "agent";

export default function MobileAISimulator({
  onSelectProject,
}: {
  onSelectProject: (serviceName: string) => void;
}) {
  const [activeMode, setActiveMode] = useState<AppMode>("fintech");
  const [biometricScanning, setBiometricScanning] = useState(false);
  const [biometricSuccess, setBiometricSuccess] = useState(true);

  // AI Prompt Sandbox State
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedText, setStreamedText] = useState("");

  const samplePrompts = [
    {
      title: "Mobile Latency Optimization",
      prompt: "Analyze iOS/Android animation frame drops and optimize to 120 FPS ProMotion with CoreML.",
      response:
        "✓ Memory Footprint reduced: 142MB to 48MB\n✓ Render Frame Time: 4.1ms (Locked 120 FPS)\n✓ On-Device CoreML Neural Engine initialized on NPU\n✓ Hardware Enclave Biometrics Authenticated in 0.2ms",
      tokens: "842 tokens/sec",
      latency: "0.4ms",
    },
    {
      title: "Autonomous Agent Task Runner",
      prompt: "Deploy multi-agent loop to ingest user voice commands, query vector database, and execute transaction.",
      response:
        "✓ Agent 1 [Voice Ingestion]: Transcribed via Whisper in 18ms\n✓ Agent 2 [Vector RAG]: Retrieved 4 semantically similar accounts (similarity: 0.98)\n✓ Agent 3 [Execution Safeguard]: Verified against SOC2 KYC rules\n✓ Transaction Dispatched with Zero Human Intervention",
      tokens: "1,120 tokens/sec",
      latency: "0.6ms",
    },
    {
      title: "Computer Vision & Edge OCR",
      prompt: "Process camera stream at 60 FPS to detect biometric ID and extract cryptographically signed credentials.",
      response:
        "✓ Camera Feed: 1080p @ 60 FPS Metal Shaders active\n✓ Object Bounding Box IOU: 99.4%\n✓ On-Device Text Extraction (Zero Cloud Uplink - 100% Privacy)\n✓ Cryptographic Signature: Verified SHA-256",
      tokens: "960 tokens/sec",
      latency: "0.3ms",
    },
  ];

  const triggerScan = () => {
    setBiometricScanning(true);
    setBiometricSuccess(false);
    setTimeout(() => {
      setBiometricScanning(false);
      setBiometricSuccess(true);
    }, 1200);
  };

  const runAIGenerator = (idx: number) => {
    setSelectedPromptIdx(idx);
    setIsGenerating(true);
    setStreamedText("");
    const fullText = samplePrompts[idx].response;
    let curr = 0;
    const interval = setInterval(() => {
      curr += 3;
      setStreamedText(fullText.slice(0, curr));
      if (curr >= fullText.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 20);
  };

  useEffect(() => {
    runAIGenerator(0);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Mobile &amp; AI Laboratory</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight animate-shimmer-text">
          Where <span className="animate-shimmer-gold">Mobile Performance</span> Meets{" "}
          <span className="text-white">Neural Intelligence</span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
          Test drive our live interactive mobile simulation and autonomous AI reasoning matrix. See how we architect software that feels lightning-fast and thinks ahead.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN: Interactive 3D Phone Screen Simulator */}
        <div className="lg:col-span-6 flex flex-col items-center">
          {/* App Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/60 border border-white/10 mb-6 backdrop-blur-md">
            <button
              onClick={() => setActiveMode("fintech")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeMode === "fintech"
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>AI Fintech App</span>
            </button>
            <button
              onClick={() => setActiveMode("health")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeMode === "health"
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Bio-Health AI</span>
            </button>
            <button
              onClick={() => setActiveMode("agent")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeMode === "agent"
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Autonomous Agent</span>
            </button>
          </div>

          {/* 3D Mobile Device Chassis */}
          <Card3D intensity={14} className="w-full max-w-[340px]">
            <div className="relative w-full rounded-[44px] p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-2 border-amber-500/40 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.25)]">
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 inset-x-0 mx-auto w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              </div>

              {/* Inner Screen */}
              <div className="relative w-full aspect-[9/19] rounded-[36px] bg-[#070a0f] overflow-hidden flex flex-col justify-between p-4 pt-10 text-white select-none border border-white/5">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Wifi className="w-3 h-3 text-amber-400" />
                    <span>5G</span>
                    <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>

                {/* APP CONTENT BASED ON ACTIVE MODE */}
                {activeMode === "fintech" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 block">TOTAL PORTFOLIO</span>
                        <span className="text-2xl font-bold font-mono text-amber-300 text-gold-glow">$148,920.40</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                        +14.8% APY
                      </span>
                    </div>

                    {/* Mini Sparkline Chart */}
                    <div className="h-16 w-full bg-black/60 rounded-xl p-2 border border-white/5 flex items-end justify-between gap-1">
                      {[30, 45, 40, 65, 80, 75, 95, 85, 100].map((val, i) => (
                        <div
                          key={i}
                          style={{ height: `${val}%` }}
                          className={`flex-1 rounded-t-[1px] transition-all duration-300 ${
                            i >= 6
                              ? "bg-gradient-to-t from-amber-600 to-yellow-300 shadow-[0_0_8px_#f59e0b]"
                              : "bg-gradient-to-t from-zinc-800 to-amber-700/60"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Biometric Trigger Card */}
                    <div
                      onClick={triggerScan}
                      className="p-3 rounded-2xl bg-black/70 border border-amber-500/30 cursor-pointer hover:border-amber-400 transition-all text-center relative overflow-hidden"
                    >
                      {biometricScanning && (
                        <div className="absolute inset-x-0 h-0.5 bg-amber-300 shadow-[0_0_10px_#fde047] animate-scan-line pointer-events-none" />
                      )}
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Fingerprint className={`w-5 h-5 ${biometricSuccess ? "text-emerald-400" : "text-amber-400 animate-pulse"}`} />
                        <span className="text-xs font-mono font-bold text-white">
                          {biometricScanning ? "Authenticating..." : biometricSuccess ? "Biometric Enclave OK" : "Touch Sensor"}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 block">
                        Hardware Secure Enclave // Sub-0.8ms
                      </span>
                    </div>

                    {/* Recent Transaction */}
                    <div className="space-y-1.5 font-mono text-[10px]">
                      <div className="flex justify-between items-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-zinc-300">AI Yield Rebalancer</span>
                        <span className="text-emerald-400 font-bold">+$1,420.00</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-zinc-300">Arbitrage Execution</span>
                        <span className="text-amber-300 font-bold">0.0024 BTC</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeMode === "health" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 block">LIVE BIO-TELEMETRY</span>
                        <span className="text-2xl font-bold font-mono text-rose-400">72 BPM</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[10px] font-mono animate-pulse">
                        Normal Sinus
                      </span>
                    </div>

                    {/* ECG Animated Simulation */}
                    <div className="h-16 w-full bg-black/60 rounded-xl p-2 border border-white/5 flex items-center justify-center relative overflow-hidden">
                      <svg className="w-full h-10" viewBox="0 0 200 40">
                        <path
                          d="M 0 20 L 40 20 L 50 5 L 60 35 L 70 12 L 80 20 L 130 20 L 140 5 L 150 35 L 160 12 L 170 20 L 200 20"
                          fill="none"
                          stroke="#fb7185"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]"
                        />
                      </svg>
                    </div>

                    {/* Neural Diagnostic Card */}
                    <div className="p-3 rounded-2xl bg-black/70 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-amber-300 font-bold flex items-center gap-1">
                          <Brain className="w-3.5 h-3.5 text-amber-400" />
                          <span>On-Device CoreML Diagnosis</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Optimal</span>
                      </div>
                      <p className="text-[9px] text-zinc-400 leading-snug">
                        Zero cloud transmission. Full privacy compliance (HIPAA / GDPR) processed entirely on neural core.
                      </p>
                    </div>

                    {/* Stat Badges */}
                    <div className="grid grid-cols-2 gap-2 text-center font-mono text-[9px]">
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-zinc-500 block">HRV Score</span>
                        <span className="text-amber-300 font-bold text-xs">94 ms</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-zinc-500 block">Sleep Cycle</span>
                        <span className="text-emerald-400 font-bold text-xs">8h 14m</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeMode === "agent" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 block">AUTONOMOUS RUNNER</span>
                        <span className="text-lg font-bold font-mono text-amber-300">Agent Matrix // v4</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono">
                        3 Swarms Live
                      </span>
                    </div>

                    {/* Task Progress */}
                    <div className="p-3 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2 font-mono text-[9px]">
                      <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-1">
                        <span>Invoice Automation</span>
                        <span className="text-emerald-400">100% Executed</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-300 border-b border-white/5 pb-1">
                        <span>CRM Lead Enrichment</span>
                        <span className="text-amber-300">Loop Active</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-300">
                        <span>Database Vector Mesh</span>
                        <span className="text-emerald-400">Synced</span>
                      </div>
                    </div>

                    {/* Swarm Telemetry */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-center">
                      <span className="text-[9px] font-mono text-amber-300 block font-bold">
                        Self-Optimizing Architecture
                      </span>
                      <span className="text-[8px] font-mono text-zinc-400">
                        Autonomous failure recovery with zero down-time
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-around text-zinc-500">
                  <div className="p-1 text-amber-400">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="p-1 hover:text-white transition-colors">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="p-1 hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        {/* RIGHT COLUMN: Live AI Intelligence Playground */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              // ON-DEVICE &amp; CLOUD AI REASONING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Test Our Autonomous AI Intelligence Pipelines
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Select an enterprise capability to simulate live agent execution, vector embeddings, and on-device neural acceleration:
            </p>
          </div>

          {/* Prompt Selector Pills */}
          <div className="flex flex-col sm:flex-row gap-2">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => runAIGenerator(idx)}
                className={`p-3 rounded-2xl border text-left font-mono text-xs transition-all flex-1 ${
                  selectedPromptIdx === idx
                    ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    : "bg-black/40 border-white/10 text-zinc-400 hover:border-amber-500/40"
                }`}
              >
                <div className="font-bold text-amber-300 mb-0.5">{p.title}</div>
                <div className="text-[10px] text-zinc-400 line-clamp-1">{p.prompt}</div>
              </button>
            ))}
          </div>

          {/* Terminal Code / Execution Window */}
          <div className="rounded-3xl p-5 bg-black/80 border border-amber-500/30 shadow-2xl font-mono relative overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-zinc-300 pl-2 font-bold">kodit-ai-runtime.sh</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-amber-400">{samplePrompts[selectedPromptIdx].tokens}</span>
                <span className="text-emerald-400">{samplePrompts[selectedPromptIdx].latency}</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="pt-3 space-y-2 text-xs min-h-[140px]">
              <div className="text-zinc-500">
                $ kodit-agent-eval --mode=&quot;{samplePrompts[selectedPromptIdx].title}&quot;
              </div>
              <p className="text-amber-300/90 text-[11px] leading-relaxed">
                &gt; &quot;{samplePrompts[selectedPromptIdx].prompt}&quot;
              </p>
              <pre className="text-emerald-400 font-mono text-[11px] leading-relaxed whitespace-pre-line pt-2">
                {streamedText}
                {isGenerating && <span className="inline-block w-2 h-3 bg-amber-400 ml-1 animate-pulse" />}
              </pre>
            </div>

            {/* Bottom Status */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
              <span>Status: Online // SOC2 Certified</span>
              <span className="text-amber-400">Autonomous Ready</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onSelectProject("Custom Mobile App & AI Architecture")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full button-gold text-black font-bold text-xs tracking-wide shadow-xl transition-all"
            >
              <span>Build This Mobile &amp; AI Solution</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
