"use client";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative h-[700px] md:h-[800px] flex items-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
                alt="Office Background"
                fill
                className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex justify-end">
                    {/* Glass Blur Card */}
                    <div className="w-full max-w-[650px] glass-premium rounded-2xl p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(13,31,103,0.12)]">
                        <Reveal>
                            <span className="inline-block py-2.5 px-5 rounded-full bg-gradient-to-r from-[#2FA9DC]/10 to-[#667eea]/10 border border-[#2FA9DC]/20 text-[#0d1f67] text-xs font-bold tracking-wider uppercase mb-6">
                                • Our Testimonials
                            </span>

                            <h2 className="text-2xl md:text-4xl font-bold text-[#0d1f67] mb-8 leading-tight text-shadow-sm">
                                Real feedback from businesses who trust our it solutions
                            </h2>

                            <div className="flex justify-center mb-6">
                                <Quote className="w-10 h-10 text-[#2FA9DC] fill-[#2FA9DC]" />
                            </div>

                            <p className="text-[#0d1f67] text-lg md:text-xl font-medium italic leading-relaxed mb-10 opacity-90">
                                "Professional Labs help manage our Email and Domain Environment; they haven’t failed us once. Professional Labs helped us by making full use of Microsoft Technologies ensuring secure access from anywhere to our environment in the time of COVID."                            </p>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2FA9DC]/20 to-transparent mb-8"></div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border-2 border-[#2FA9DC]/30 overflow-hidden mb-4 shadow-[0_4px_20px_rgba(47,169,220,0.2)]">
                                    <img src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/author-1.jpg" alt="Daniel Johnson" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0d1f67] mb-1">ADV. HUSSAIN NALWALA</h4>
                                <p className="text-[#4a5568] text-sm">Founder of CNS Juris</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
