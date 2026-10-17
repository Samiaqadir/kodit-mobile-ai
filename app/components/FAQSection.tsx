"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Card3D from "./Card3D";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlight: string;
}

const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "MOBILE PERFORMANCE",
    question: "How do you achieve 120 FPS performance in Cross-Platform Mobile Apps?",
    answer:
      "We utilize the Skia 2D hardware-accelerated rendering engine alongside Hermes V8 bytecode pre-compilation. By moving computationally expensive operations off the JS bridge and executing layout recalculations directly on the native UI thread with zero garbage collection spikes, we guarantee locked 120 FPS ProMotion refresh rates on both iOS and Android.",
    highlight: "Locked 120 FPS on Native UI Thread",
  },
  {
    id: "faq-2",
    category: "ON-DEVICE AI",
    question: "Can AI models run completely offline on iOS and Android devices?",
    answer:
      "Yes. For privacy-critical and low-latency applications, we quantize models (e.g. YOLO-v10-Nano, MobileBERT, Whisper-tiny) into INT8/INT4 formats and execute them directly on Apple Neural Engine (CoreML) and Android Neural Networks API (NNAPI / Qualcomm NPU). This yields sub-millisecond execution times with zero internet connectivity and zero cloud server costs.",
    highlight: "Sub-1ms CoreML/NPU Execution with 0 KB Cloud Leak",
  },
  {
    id: "faq-3",
    category: "SPRINT TIMELINE",
    question: "What is your typical sprint velocity from Architecture Blueprint to App Store Launch?",
    answer:
      "A complete MVP with production mobile interfaces, backend microservices, and AI integrations is delivered in 4 to 8 weeks. Enterprise deployments requiring multi-agent orchestration, custom vector databases, and biometric compliance typically take 8 to 12 weeks with weekly bi-directional sprints and TestFlight / Google Play Beta builds.",
    highlight: "Production MVP in 4–8 Weeks with Bi-Weekly Beta Releases",
  },
  {
    id: "faq-4",
    category: "DATA SECURITY",
    question: "How do you protect proprietary enterprise data when integrating LLMs and RAG?",
    answer:
      "We implement sovereign vector architectures. Your documents and embeddings are stored inside private VPCs (Pinecone, Qdrant, or self-hosted pgvector). None of your customer or organizational data is ever shared with public foundation model training sets. Furthermore, all mobile biometrics and cryptographic keys are isolated within the device's hardware Secure Enclave.",
    highlight: "Hardware Secure Enclave + Private Sovereign Vector Vaults",
  },
  {
    id: "faq-5",
    category: "STORE APPROVAL",
    question: "Do you handle Apple App Store and Google Play Store submission and compliance?",
    answer:
      "Yes, from start to finish. We configure provisioning profiles, Apple Human Interface compliance, Google Play target API level audits, privacy manifest declarations, and export compliance. We maintain a 100% first-pass store acceptance rate across all client applications.",
    highlight: "100% First-Pass App Store Acceptance Guaranteed",
  },
  {
    id: "faq-6",
    category: "LIFECYCLE & SLA",
    question: "What maintenance, model fine-tuning, and support do you provide post-launch?",
    answer:
      "We provide continuous 99.9% uptime SLA monitoring, automatic iOS/Android OS version migration updates, vector index pruning, and recurring model fine-tuning based on live user telemetry. You receive dedicated DevOps and AI engineering support without having to hire an in-house infrastructure team.",
    highlight: "99.9% Uptime SLA + Automated OS & Model Upgrades",
  },
];

export default function FAQSection({
  onOpenConsultation,
}: {
  onOpenConsultation?: () => void;
}) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 max-w-5xl mx-auto border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="relative flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Technical Knowledge Base</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          FREQUENTLY ASKED: <span className="animate-shimmer-gold">MOBILE & AI QUESTIONS</span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Clear answers on our mobile engineering runtime, offline AI execution, security enclaves,
          sprint velocity, and production App Store approvals.
        </p>
      </div>

      {/* Accordion List */}
      <div className="relative space-y-4">
        {faqList.map((item) => {
          const isOpen = openId === item.id;
          return (
            <Card3D key={item.id} intensity={6} className="w-full">
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-black border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                    : "bg-black/60 border-white/10 hover:border-amber-500/25"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-amber-500/20 border-amber-500/50 text-amber-300 rotate-180"
                        : "bg-zinc-900 border-white/10 text-zinc-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-300" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 space-y-3 animate-fade-in">
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                      {item.answer}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-xs font-mono text-amber-300">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Card3D>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-black to-zinc-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">
            Have a custom mobile or AI architectural requirement?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400">
            Our principal mobile engineers and AI researchers are ready to review your technical specs.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all shrink-0 flex items-center gap-2"
        >
          <Zap className="w-3.5 h-3.5 fill-black" />
          <span>Talk to an AI & Mobile Architect</span>
        </button>
      </div>
    </section>
  );
}
