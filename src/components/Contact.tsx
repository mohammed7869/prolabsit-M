"use client";
import { Fade } from "react-awesome-reveal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [phone, setPhone] = useState("");

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Info */}
          <div>
            <Fade direction="left" triggerOnce>
              <span className="text-[#2FA9DC] font-semibold text-sm tracking-wider uppercase mb-2 block">
                Get In Touch
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#2FA9DC] mb-6">
                Contact Our Offices
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us at any of our global offices listed below. We’re happy to assist you.
              </p>

              <div className="space-y-6">

                {/* UAE */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2FA9DC]/10 flex items-center justify-center text-[#2FA9DC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#2FA9DC] font-bold mb-1">UAE</h4>
                    <p className="text-gray-600">
                      Office No 1-029, Hilal Bank Building, Near Altawar Center, Al Nadha Street, Al Qusais 2, Dubai
                    </p>
                    <p className="text-gray-600">+971 42866807</p>
                  </div>
                </div>

                {/* Qatar */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2FA9DC]/10 flex items-center justify-center text-[#2FA9DC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#2FA9DC] font-bold mb-1">Qatar</h4>
                    <p className="text-gray-600">
                      Office No. Regus 111, Register 04, Floor No. 1, Jaidah Square, No 63, Doha, Qatar
                    </p>
                    <p className="text-gray-600">+974 4426 7463</p>
                  </div>
                </div>

                {/* USA */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2FA9DC]/10 flex items-center justify-center text-[#2FA9DC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#2FA9DC] font-bold mb-1">USA (Mailing Address)</h4>
                    <p className="text-gray-600">
                      16192 Coastal Hwy, Lewes, DE 19958, USA
                    </p>
                    <p className="text-gray-600">+1 206 350 9033</p>
                  </div>
                </div>

              </div>
            </Fade>
          </div>

          {/* Right Form (unchanged) */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-[#2FA9DC]/10">
            <Fade direction="right" triggerOnce>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-[#2FA9DC]/20 rounded-lg px-4 py-3 text-[#2FA9DC] focus:outline-none focus:border-[#2FA9DC] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-[#2FA9DC]/20 rounded-lg px-4 py-3 text-[#2FA9DC] focus:outline-none focus:border-[#2FA9DC] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Phone Number</label>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputClass="!w-full !bg-white !border-[#2FA9DC]/20 !text-[#2FA9DC] !h-[48px] !rounded-lg"
                    buttonClass="!bg-white !border-[#2FA9DC]/20 !rounded-l-lg"
                    dropdownClass="!bg-white !text-[#2FA9DC]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-[#2FA9DC]/20 rounded-lg px-4 py-3 text-[#2FA9DC] focus:outline-none focus:border-[#2FA9DC] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2FA9DC] hover:bg-[#1e7ba8] text-white font-bold py-4 rounded-lg transition-all"
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
