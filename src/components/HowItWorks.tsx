"use client";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Hexagon, Component, Box, Activity } from "lucide-react";

const steps = [
    {
        step: "Step 01",
        title: "Consultation & Assessment",
        description: "Comprehensive protection from evolving threats with risk assessments.",
        tags: ["Discovery", "IT Assessment"],
        icon: Hexagon,
    },
    {
        step: "Step 02",
        title: "Strategic Planning",
        description: "Comprehensive protection from evolving threats with risk assessments.",
        tags: ["Planning", "Tech Roadmap"],
        icon: Component,
    },
    {
        step: "Step 03",
        title: "Deployment & Integration",
        description: "Comprehensive protection from evolving threats with risk assessments.",
        tags: ["Integration", "Implement"],
        icon: Box,
    },
    {
        step: "Step 04",
        title: "Ongoing Support",
        description: "Comprehensive protection from evolving threats with risk assessments.",
        tags: ["Monitoring", "24*7Support"],
        icon: Activity,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • How It Works
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">
                                From discovery to deployment – your seamless tech transformation starts here
                            </h2>
                        </Reveal>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                    {steps.map((item, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <div className="group bg-[#0b0e13] rounded-2xl p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden transition-all hover:bg-[#11141b]">
                                {/* Background Watermark Icon */}
                                <div className="absolute top-4 right-4 text-white/5 group-hover:text-[#AEE2FF]/10 transition-colors">
                                    <item.icon className="w-16 h-16 stroke-[1]" />
                                </div>

                                <div className="relative z-10">
                                    <div className="text-white font-bold text-sm mb-6">{item.step}</div>

                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    <a href="#" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#AEE2FF] transition-colors mb-8">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                                    {item.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-gray-300 uppercase tracking-wide font-medium group-hover:bg-white/5 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                

            </div>
        </section>
    );
}
