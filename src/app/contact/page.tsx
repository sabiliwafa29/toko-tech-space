"use client";

import React, { useState } from "react";
import { sound, audioEngine } from "@/lib/audioEngine";

export default function ContactPage() {
  const [operatorName, setOperatorName] = useState("");
  const [returnChannel, setReturnChannel] = useState("");
  const [sector, setSector] = useState("Bespoke Fabrication");
  const [message, setMessage] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmittedHash, setTransmittedHash] = useState<string | null>(null);

  const handleInputFocus = () => {
    sound.playClick(1500);
  };

  const handleTyping = (setter: (val: string) => void, val: string) => {
    sound.playKeyClick();
    setter(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!operatorName || !returnChannel || !message) return;

    setIsTransmitting(true);
    sound.playTone(920, 0.3, "sine");

    setTimeout(() => {
      setIsTransmitting(false);
      const randomHash = "0x" + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join("").toUpperCase();
      setTransmittedHash(randomHash);
      audioEngine.playTone(1320, 0.4, "triangle");
    }, 1200);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-16 py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              COMMUNICATIONS TERMINAL // SECURE DISPATCH
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            CONTACT <span className="text-cyan-400">DISPATCH</span>
          </h1>
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Open a cryptographic communication channel with our hardware engineers, acoustic lab technicians, or procurement team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive Dispatch Terminal */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl relative overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-neutral-400 ml-2">TTY-CONSOLE // PORT 8044</span>
              </div>
              <span className="text-cyan-400 font-bold">256-BIT ENCRYPTED</span>
            </div>

            {transmittedHash ? (
              <div className="p-8 rounded-2xl border border-green-500/30 bg-green-950/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-400 text-green-400 flex items-center justify-center mx-auto text-xl font-mono">
                  ✓
                </div>
                <h3 className="text-xl font-bold font-display uppercase text-white">
                  TRANSMISSION PACKET RECEIVED
                </h3>
                <p className="font-mono text-xs text-neutral-300">
                  Your payload has been queued in the laboratory triage buffer. Our duty engineers will respond within 4 hours.
                </p>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-cyan-300">
                  PACKET HASH: {transmittedHash}
                </div>
                <button
                  onClick={() => {
                    setTransmittedHash(null);
                    setOperatorName("");
                    setReturnChannel("");
                    setMessage("");
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-mono text-xs font-bold uppercase hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  DISPATCH ANOTHER PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Operator Name */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                      OPERATOR CALLSIGN / NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={operatorName}
                      onFocus={handleInputFocus}
                      onChange={(e) => handleTyping(setOperatorName, e.target.value)}
                      placeholder="e.g. Maya Chen"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Return Frequency / Email */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                      RETURN FREQUENCY / EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={returnChannel}
                      onFocus={handleInputFocus}
                      onChange={(e) => handleTyping(setReturnChannel, e.target.value)}
                      placeholder="e.g. operator@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* Sector Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                    FLEET SECTOR INQUIRY
                  </label>
                  <select
                    value={sector}
                    onFocus={handleInputFocus}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                  >
                    <option value="Bespoke Fabrication">Bespoke Fabrication (Custom Deck-01 / Chassis)</option>
                    <option value="Enterprise Fleet">Enterprise Fleet Deployment & Quantum Nodes</option>
                    <option value="Acoustic Bench Session">Schedule In-Person Laboratory Bench Session</option>
                    <option value="Developer SDK & API">Developer SDK & Neural Intent Protocol</option>
                    <option value="General Dispatch">General Inquiry</option>
                  </select>
                </div>

                {/* Message Payload */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                    PAYLOAD SPECIFICATION / MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onFocus={handleInputFocus}
                    onChange={(e) => handleTyping(setMessage, e.target.value)}
                    placeholder="Enter project parameters, delivery constraints, or acoustic requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-black font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:scale-[1.01]"
                >
                  {isTransmitting ? "ENCRYPTING & DISPATCHING PACKET..." : "TRANSMIT SECURE PAYLOAD →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Lab Telemetry & Direct Frequencies */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
              DIRECT LABORATORY FREQUENCIES
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl border border-white/5 bg-black/40">
                <span className="text-neutral-500 block text-[10px] uppercase">
                  JAKARTA GENERAL DISPATCH
                </span>
                <span className="text-white font-bold text-sm select-all">
                  lab@tokotechkekinian.biz.id
                </span>
                <p className="text-neutral-400 text-[11px] mt-1">
                  Hardware procurement, custom CNC fabrication, order logistics.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/5 bg-black/40">
                <span className="text-neutral-500 block text-[10px] uppercase">
                  TOKYO ACOUSTIC & DSP R&D
                </span>
                <span className="text-white font-bold text-sm select-all">
                  audio@tokotechkekinian.biz.id
                </span>
                <p className="text-neutral-400 text-[11px] mt-1">
                  FPGA state-machine licensing, neural signal synthesis, developer SDK.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>PGP PUBLIC FINGERPRINT:</span>
                <span className="text-white">4B92 E10F 89A2 3C41</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>DNS IDENTITY:</span>
                <span className="text-cyan-400">tokotechkekinian.biz.id</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>STATUS:</span>
                <span className="text-green-400">LISTENERS ACTIVE (24/7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
