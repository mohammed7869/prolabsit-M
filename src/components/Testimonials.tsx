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
                            <div className="w-full max-w-[650px] bg-white/90 backdrop-blur-md rounded-[4px] p-10 md:p-14 text-center border-t border-r border-[#2FA9DC]/20 shadow-2xl">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-[#2FA9DC]/10 border border-[#2FA9DC]/20 text-[#2FA9DC] text-xs font-semibold tracking-wide uppercase mb-6">
                                • Our Testimonials
                            </span>

                            <h2 className="text-2xl md:text-4xl font-bold text-[#2FA9DC] mb-8 leading-tight">
                                Real feedback from businesses who trust our it solutions
                            </h2>

                            <div className="flex justify-center mb-6">
                                <Quote className="w-10 h-10 text-[#2FA9DC] fill-[#2FA9DC]" />
                            </div>

                            <p className="text-[#2FA9DC] text-lg md:text-xl font-medium italic leading-relaxed mb-10 opacity-90">
"Professional Labs help manage our Email and Domain Environment; they haven’t failed us once. Professional Labs helped us by making full use of Microsoft Technologies ensuring secure access from anywhere to our environment in the time of COVID."                            </p>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2FA9DC]/20 to-transparent mb-8"></div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border-2 border-[#2FA9DC]/20 overflow-hidden mb-4">
                                    <img src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/author-1.jpg" alt="Daniel Johnson" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold text-[#2FA9DC] mb-1">ADV. HUSSAIN NALWALA</h4>
                                <p className="text-gray-600 text-sm">Founder of CNS Juris</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
