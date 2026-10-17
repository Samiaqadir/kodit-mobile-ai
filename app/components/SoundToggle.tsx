"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!soundEnabled) {
      // Initialize Web Audio API on user gesture
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Subtle ambient harmonic drone (432Hz harmonic warm ambient)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(108, ctx.currentTime); // Low warm sub-drone

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(220, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.015, ctx.currentTime + 2); // very soft & calming

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;

        setSoundEnabled(true);
      } catch {
        // Fallback if browser audio is restricted
        setSoundEnabled(false);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscRef.current?.stop();
          audioCtxRef.current?.close();
        }, 600);
      }
      setSoundEnabled(false);
    }
  };

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={soundEnabled ? "Mute Ambient Neural Sound" : "Enable Ambient Neural Sound"}
      className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all duration-300 border ${
        soundEnabled
          ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
          : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:text-zinc-200 hover:border-amber-500/30"
      }`}
    >
      {soundEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline">Audio Engine ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
          <span className="hidden sm:inline">Sound</span>
        </>
      )}
    </button>
  );
}
