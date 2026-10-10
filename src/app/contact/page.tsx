"use client";

import React, { useState } from "react";
import { ButtonArrow } from "@/components/ui/ButtonArrow";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white text-[#262626]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="font-S text-[#737373] uppercase tracking-wider block mb-2">
            Get In Touch
          </span>
          <h1 className="font-3XL">Contact</h1>
          <p className="font-L text-[#737373] max-w-3xl mt-4">
            We welcome conversations about new projects, partnerships, career opportunities, and civic initiatives.
          </p>
        </div>

        {/* Hero Photo Banner */}
        <div className="relative w-full h-[45vh] md:h-[60vh] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lpas.com/wp-content/uploads/2026/01/Contact-LPAS.jpg')`,
            }}
          />
        </div>

        {/* Office Details & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Office Locations */}
          <div className="lg:col-span-5 space-y-12">
            {/* Sacramento */}
            <div className="p-8 rounded-2xl bg-[#f9f9f9] border border-black/5">
              <span className="font-XS uppercase tracking-widest text-[#737373] block mb-2">
                Headquarters
              </span>
              <h2 className="font-XXL mb-3">Sacramento</h2>
              <address className="not-italic font-M text-[#737373] space-y-2 leading-relaxed">
                <p>723 S Street, Suite 150<br />Sacramento, CA 95811</p>
                <p>
                  <a href="tel:916-443-0335" className="hover:text-black transition-colors font-medium text-[#262626]">
                    916 443 0335
                  </a>
                </p>
                <p className="pt-2">
                  <a
                    href="https://maps.google.com/?q=723+S+Street,+Suite+150,+Sacramento,+CA+95811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black underline underline-offset-4"
                  >
                    View on Google Maps →
                  </a>
                </p>
              </address>
            </div>

            {/* Oakland */}
            <div className="p-8 rounded-2xl bg-[#f9f9f9] border border-black/5">
              <span className="font-XS uppercase tracking-widest text-[#737373] block mb-2">
                Bay Area Studio
              </span>
              <h2 className="font-XXL mb-3">Oakland</h2>
              <address className="not-italic font-M text-[#737373] space-y-2 leading-relaxed">
                <p>10 Clay Street, Suite 250<br />Oakland, CA 94607</p>
                <p>
                  <a href="tel:415-213-0335" className="hover:text-black transition-colors font-medium text-[#262626]">
                    415 213 0335
                  </a>
                </p>
                <p className="pt-2">
                  <a
                    href="https://maps.google.com/?q=10+Clay+Street,+Suite+250,+Oakland,+CA+94607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black underline underline-offset-4"
                  >
                    View on Google Maps →
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-2xl border border-black/10 bg-white">
            <span className="font-XS uppercase tracking-widest text-[#737373] block mb-2">
              Start a Conversation
            </span>
            <h2 className="font-XXL mb-6">Send an Inquiry</h2>

            {submitted ? (
              <div className="p-8 rounded-xl bg-black/5 text-[#262626] font-M text-center space-y-2">
                <p className="font-semibold text-lg">Thank you for reaching out.</p>
                <p className="text-[#737373]">Your message has been dispatched to our communications team.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-S font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:border-black font-M transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-S font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:border-black font-M transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-S font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:border-black font-M transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-S font-medium mb-2">Sector of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:border-black font-M bg-white transition-colors">
                    <option value="housing">Residential Housing</option>
                    <option value="interiors">Interior Architecture</option>
                    <option value="higher-education">Higher Education</option>
                    <option value="civic">Civic & Public Facilities</option>
                    <option value="commercial">Commercial / Healthcare</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-S font-medium mb-2">Message or Project Scope</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your project vision, timeline, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:border-black font-M transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#262626] text-white hover:bg-black font-M transition-colors flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-sm">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
