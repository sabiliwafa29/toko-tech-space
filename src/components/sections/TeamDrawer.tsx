"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../ui/Icons";
import { TeamMember } from "@/data/team";

interface TeamDrawerProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamDrawer({ member, onClose }: TeamDrawerProps) {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-out Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xl bg-white text-[#262626] shadow-2xl p-8 md:p-12 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-8">
              <span className="font-XS uppercase tracking-widest text-[#737373]">
                {member.office} Studio
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Close details"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Portrait Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#f4f4f4] mb-8">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
            </div>

            {/* Info */}
            <h2 className="font-XXL">{member.name}</h2>
            <p className="font-M text-[#737373] mt-1 mb-6">{member.role}</p>

            <div className="space-y-6 text-[#262626] font-B leading-relaxed">
              <p>{member.bio}</p>
            </div>

            {/* Credentials / Education */}
            <div className="mt-8 pt-8 border-t border-black/10 space-y-4 font-S text-[#737373]">
              {member.education && (
                <div>
                  <span className="font-semibold text-[#262626] block">Education</span>
                  <span>{member.education}</span>
                </div>
              )}
              {member.credentials && member.credentials.length > 0 && (
                <div>
                  <span className="font-semibold text-[#262626] block">Credentials</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {member.credentials.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full bg-black/5 text-[#262626] text-xs font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
