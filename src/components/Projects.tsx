"use client";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowUpRight, ArrowRight, Hexagon, Star } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#0b0e13] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text & Features */}
                    <div>
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                                • Our Projects
                            </span>
                            <TextReveal
                                text="From concept to completion delivering results that matter"
                                className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-16"
                            />

                            {/* Feature Grid */}
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                                <StaggerItem>
                                    <div className="mb-4 text-white group-hover:text-[#AEE2FF] transition-colors">
                                        <Hexagon className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-3">24/7 Managed IT Support</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Our around-the-clock managed IT support ensures your systems run smoothly.
                                    </p>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="mb-4 text-white group-hover:text-[#AEE2FF] transition-colors">
                                        <Star className="w-10 h-10 stroke-[1.5]" />
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-3">Future Ready Solutions</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Empower your business with technology that's built to adapt, scale, and thrive.
                                    </p>
                                </StaggerItem>
                            </StaggerContainer>

                            <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-8 py-4 rounded-[4px] font-bold transition-all flex items-center gap-2 group">
                                View All Projects
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Reveal>
                    </div>

                    {/* Right Column: Project Cards Stack */}
                    <div className="flex flex-col gap-8">

                        {/* Card 1 */}
                        <Reveal direction="left" delay={0.1}>
                            <div className="relative h-[480px] rounded-[32px] overflow-hidden group">
                                <Image
                                    src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/project-image-1.jpg"
                                    alt="CloudOps Transformation"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Glass Styling Overlay */}
                                <div className="absolute top-8 right-8 bottom-8 left-[30%] bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">CloudOps Transformation</h3>
                                        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                                            CloudOps transformation Home Project Information Client:Global Manufacturing Inc. [...]
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-wide">Cost-Saving</span>
                                            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-wide">Cybersecurity</span>
                                        </div>
                                    </div>

                                    <button className="bg-[#AEE2FF] text-[#0b0e13] px-6 py-3 rounded-[4px] font-bold text-sm w-fit flex items-center gap-2 hover:bg-white transition-colors mt-6">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>

                        {/* Card 2 */}
                        <Reveal direction="left" delay={0.2}>
                            <div className="relative h-[480px] rounded-[32px] overflow-hidden group">
                                <Image
                                    src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/project-image-2.jpg"
                                    alt="Retail POS System"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Glass Styling Overlay */}
                                <div className="absolute top-8 right-8 bottom-8 left-[30%] bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Retail POS System Overhaul</h3>
                                        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                                            Retail POS System Overhaul Home Project Information Client:Global Manufacturing Inc. [...]
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-wide">Cloud Mode</span>
                                            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs text-white uppercase tracking-wide">Cost-Saving</span>
                                        </div>
                                    </div>

                                    <button className="bg-[#AEE2FF] text-[#0b0e13] px-6 py-3 rounded-[4px] font-bold text-sm w-fit flex items-center gap-2 hover:bg-white transition-colors mt-6">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>

                {/* Footer Link */}
                <div className="text-center mt-20">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <span className="bg-[#AEE2FF] text-[#0b0e13] text-[10px] font-bold px-2 py-0.5 rounded-sm">Free</span>
                        <span>Let's make something great work together. – <span className="text-white underline decoration-gray-500 underline-offset-4 cursor-pointer hover:text-[#AEE2FF] font-medium">Get Free Quote.</span></span>
                    </div>
                </div>

            </div>
        </section>
    );
}
