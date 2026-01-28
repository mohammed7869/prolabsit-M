"use client";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import Stats from "./Stats";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Badge Only (as per screenshot) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <Reveal>
                                <div className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase animate-border-glow">
                                    • Get to Know Professional Labs
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8">
                        <div>
                            <TextReveal
                                text="Delivering scalable & innovative it solutions that empower businesses to embrace digital transform enhance security improve efficiency & accelerate sustainable growth."
                                className="text-3xl md:text-5xl font-bold text-[#0d1f67] mb-8 leading-[1.2] text-shadow-sm"
                            />

                            <Reveal direction="up" delay={0.4}>
                                <p className="text-[#4a5568] text-lg mb-16 leading-relaxed max-w-3xl">
                                    The modern world relies on a complex array of technologies to keep turning, Professional Labs aim is to simplify that complexity. Our expertise helps organizations in accelerating their time to value and achieve significant business impact.
                                    Founded in 1997 and headquarter in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services and Managed Services.                                </p>
                            </Reveal>

                            <Stats />

                            <Link href="/about-us">
                                <button className="bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 flex items-center gap-2 group mt-4 shadow-[0_4px_30px_rgba(47,169,220,0.3)] hover:shadow-[0_8px_50px_rgba(47,169,220,0.5)] btn-shine">
                                    More About Us
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
