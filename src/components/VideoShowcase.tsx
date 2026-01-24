"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export default function VideoShowcase() {
    return (
        <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
                alt="Video Background"
                fill
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
                {/* Floating Card - Bottom Left */}
                <div className="absolute bottom-0 left-4 md:left-6 max-w-[350px] w-full">
                    <Reveal direction="up" delay={0.2}>
                        <div className="bg-gradient-to-b from-[#1a2e35]/90 to-[#0e1a1f]/95 backdrop-blur-sm border-t border-r border-white/10 rounded-tr-[2rem]">
                            <div className="p-8 pb-10 flex flex-col items-center text-center">
                                {/* Play Button */}
                                <div className="w-16 h-16 rounded-full bg-[#AEE2FF] flex items-center justify-center text-[#0b0e13] mb-6 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_20px_rgba(174,226,255,0.5)]">
                                    <Play className="w-6 h-6 fill-current" />
                                </div>

                                <h3 className="text-white text-xl font-bold leading-relaxed">
                                    Take a closer look at how our innovative it solutions are transforming industries
                                </h3>
                            </div>

                            {/* Bottom Action Bar */}
                            <div className="bg-[#AEE2FF] py-4 text-center cursor-pointer hover:bg-[#90d5ff] transition-colors">
                                <span className="text-[#0b0e13] font-bold text-sm tracking-wide uppercase">
                                    Watch & Discover More
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
