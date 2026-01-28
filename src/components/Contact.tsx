"use client";
import { Fade } from "react-awesome-reveal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [phone, setPhone] = useState("");

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Info */}
          <div>
            <Fade direction="left" triggerOnce>
              <span className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase mb-4">
                Get In Touch
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f67] mb-6 text-shadow-sm">
                Contact Our Offices
              </h2>

              <p className="text-[#4a5568] mb-8 leading-relaxed">
                Reach out to us at any of our global offices listed below. We’re happy to assist you.
              </p>

              <div className="space-y-6">

                {/* UAE */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2FA9DC]/20 to-[#667eea]/10 flex items-center justify-center text-[#2FA9DC] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.15)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#0d1f67] font-bold mb-1 group-hover:text-[#2FA9DC] transition-colors duration-300">UAE</h4>
                    <p className="text-[#4a5568]">
                      Office No 1-029, Hilal Bank Building, Near Altawar Center, Al Nadha Street, Al Qusais 2, Dubai
                    </p>
                    <p className="text-[#4a5568]">+971 42866807</p>
                  </div>
                </div>

                {/* Qatar */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2FA9DC]/20 to-[#667eea]/10 flex items-center justify-center text-[#2FA9DC] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.15)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#0d1f67] font-bold mb-1 group-hover:text-[#2FA9DC] transition-colors duration-300">Qatar</h4>
                    <p className="text-[#4a5568]">
                      Office No. Regus 111, Register 04, Floor No. 1, Jaidah Square, No 63, Doha, Qatar
                    </p>
                    <p className="text-[#4a5568]">+974 4426 7463</p>
                  </div>
                </div>

                {/* USA */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2FA9DC]/20 to-[#667eea]/10 flex items-center justify-center text-[#2FA9DC] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.15)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#0d1f67] font-bold mb-1 group-hover:text-[#2FA9DC] transition-colors duration-300">USA (Mailing Address)</h4>
                    <p className="text-[#4a5568]">
                      16192 Coastal Hwy, Lewes, DE 19958, USA
                    </p>
                    <p className="text-[#4a5568]">+1 206 350 9033</p>
                  </div>
                </div>

              </div>
            </Fade>
          </div>

          {/* Right Form */}
          <div className="glass-premium p-8 rounded-2xl shadow-[0_8px_40px_rgba(13,31,103,0.08)]">
            <Fade direction="right" triggerOnce>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0d1f67]">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/80 backdrop-blur-sm border border-[#2FA9DC]/20 rounded-xl px-4 py-3.5 text-[#0d1f67] focus:outline-none focus:border-[#2FA9DC] focus:shadow-[0_0_0_3px_rgba(47,169,220,0.15)] transition-all duration-300 placeholder:text-[#718096]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0d1f67]">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/80 backdrop-blur-sm border border-[#2FA9DC]/20 rounded-xl px-4 py-3.5 text-[#0d1f67] focus:outline-none focus:border-[#2FA9DC] focus:shadow-[0_0_0_3px_rgba(47,169,220,0.15)] transition-all duration-300 placeholder:text-[#718096]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0d1f67]">Phone Number</label>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputClass="!w-full !bg-white/80 !backdrop-blur-sm !border-[#2FA9DC]/20 !text-[#0d1f67] !h-[52px] !rounded-xl"
                    buttonClass="!bg-white/80 !border-[#2FA9DC]/20 !rounded-l-xl"
                    dropdownClass="!bg-white !text-[#0d1f67]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0d1f67]">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/80 backdrop-blur-sm border border-[#2FA9DC]/20 rounded-xl px-4 py-3.5 text-[#0d1f67] focus:outline-none focus:border-[#2FA9DC] focus:shadow-[0_0_0_3px_rgba(47,169,220,0.15)] transition-all duration-300 placeholder:text-[#718096]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white font-bold py-4 rounded-xl transition-all duration-500 shadow-[0_4px_25px_rgba(47,169,220,0.35)] hover:shadow-[0_6px_40px_rgba(47,169,220,0.5)] btn-shine"
                >
                  Send Message
                </button>
              </form>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
