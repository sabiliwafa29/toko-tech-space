"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Radio, CheckCircle2, MessageSquare, Terminal, AlertCircle } from "lucide-react";
import { spaceAudio } from "../audio/SpaceAudioEngine";

export function TransmissionConsole() {
  const [formData, setFormData] = useState({
    callsign: "",
    frequency: "",
    objective: "",
  });
  const [status, setStatus] = useState<"idle" | "transmitting" | "success">("idle");
  const [consoleLog, setConsoleLog] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.callsign || !formData.frequency || !formData.objective) return;

    spaceAudio.playWarpFx();
    setStatus("transmitting");
    setConsoleLog([
      `[${new Date().toISOString().substring(11, 19)}] INITIALIZING QUANTUM HANDSHAKE...`,
      `[${new Date().toISOString().substring(11, 19)}] ENCRYPTING PAYLOAD FOR CALLSIGN: ${formData.callsign}`,
    ]);

    setTimeout(() => {
      setConsoleLog((prev) => [
        ...prev,
        `[${new Date().toISOString().substring(11, 19)}] UPLINK TO RELAY: tokotechkekinian.biz.id CONNECTED`,
        `[${new Date().toISOString().substring(11, 19)}] TRANSMISSION SECURED: 200 OK`,
      ]);
      setStatus("success");
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Toko Tech Kekinian (Space Division)! Saya ${formData.callsign || "Pengunjung"} ingin konsultasi proyek: "${formData.objective || "Digital Platform"}"`
  );

  return (
    <section id="transmission" className="relative py-28 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full cosmic-glass border border-cyan-500/30 text-xs text-cyan-300 font-mono mb-4">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>SECTOR 05 // DEEP-SPACE TRANSMISSION CONSOLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight text-white mb-4">
          TRANSMIT YOUR <span className="cosmic-cyan-gradient">MISSION BRIEF</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open a direct quantum communication line with our engineering squadron. We reply within 1 orbit cycle (24 hours).
        </p>
      </div>

      <div className="rounded-3xl p-6 sm:p-10 md:p-12 cosmic-glass border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Holographic Border Top Flare */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-3">
              TRANSMISSION RECEIVED & LOGGED
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 font-light">
              Our flight commanders have queued your objective. A response will be dispatched to your frequency shortly.
            </p>

            {/* Terminal Log */}
            <div className="bg-[#030014] border border-white/10 rounded-xl p-4 text-left font-mono text-xs text-cyan-400/90 mb-8 max-w-lg mx-auto space-y-1">
              {consoleLog.map((log, lIdx) => (
                <div key={lIdx}>{log}</div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/6285156027984?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-xs tracking-wider transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>EXPEDITE VIA WHATSAPP (INSTANT RELAY)</span>
              </a>

              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Callsign / Name */}
              <div>
                <label className="block text-xs font-mono font-semibold text-zinc-300 tracking-wider mb-2">
                  // CALLSIGN / IDENTITY
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Commander Sarah / Acme Corp"
                  value={formData.callsign}
                  onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all font-mono placeholder:text-zinc-600"
                />
              </div>

              {/* Frequency / Contact */}
              <div>
                <label className="block text-xs font-mono font-semibold text-zinc-300 tracking-wider mb-2">
                  // COMM FREQUENCY (EMAIL OR WHATSAPP)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. captain@domain.com or +62 812..."
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all font-mono placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Objective / Message */}
            <div>
              <label className="block text-xs font-mono font-semibold text-zinc-300 tracking-wider mb-2">
                // MISSION OBJECTIVE (PROJECT BRIEF & SPECIFICATIONS)
              </label>
              <textarea
                required
                rows={4}
                placeholder="Detail your technology requirements, target launch timeframe, or architectural challenges..."
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all font-mono placeholder:text-zinc-600 resize-none"
              />
            </div>

            {/* Submit & Alternate Channel */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>DIRECT SATELLITE LINK ACTIVE</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/6285156027984?text=Halo%20Toko%20Tech%20Kekinian%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek%20baru.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-300 font-mono text-xs transition-all"
                  title="Direct WhatsApp link"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WHATSAPP RELAY</span>
                </a>

                <button
                  type="submit"
                  disabled={status === "transmitting"}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black font-bold font-mono text-xs tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "transmitting" ? "TRANSMITTING..." : "DISPATCH MISSION"}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
