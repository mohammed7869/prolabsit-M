"use client";
import { Reveal } from "@/components/Reveal";
import { GlowingCard } from "@/components/GlowingCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowUpRight, Check, CheckCircle2, Hexagon, Star, Box, Layers } from "lucide-react";

const plans = [
    {
        name: "Starter Plan",
        price: "95.00",
        icon: Hexagon,
        description: "Improve system performance with intelligent tools that monitor.",
        features: [
            "Years of experience across IT",
            "Certified industry-leading expertise",
            "Up-to-date knowledge latest tech"
        ]
    },
    {
        name: "Growth Plan",
        price: "149.00",
        icon: Star,
        description: "Improve system performance with intelligent tools that monitor.",
        features: [
            "Years of experience across IT",
            "Certified industry-leading expertise",
            "Up-to-date knowledge latest tech"
        ]
    },
    {
        name: "Enterprise Plan",
        price: "249.00",
        icon: Box,
        description: "Improve system performance with intelligent tools that monitor.",
        features: [
            "Years of experience across IT",
            "Certified industry-leading expertise",
            "Up-to-date knowledge latest tech"
        ]
    },
    {
        name: "Professional Plan",
        price: "559.00",
        icon: Layers,
        description: "Improve system performance with intelligent tools that monitor.",
        features: [
            "Years of experience across IT",
            "Certified industry-leading expertise",
            "Up-to-date knowledge latest tech"
        ]
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-3xl">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                                • Our Pricing Plans
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1]">
                                Strategic pricing options designed for performance, security, and growth
                            </h2>
                        </Reveal>
                    </div>
                    <div className="mb-2">
                        <Reveal direction="left">
                            <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-6 py-3 rounded-[4px] font-bold text-sm flex items-center gap-2 transition-colors">
                                View All Pricing <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Reveal>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <GlowingCard className="h-full">
                                <div className="bg-[#11141b] rounded-md p-8 border border-white/5 h-full flex flex-col group">

                                    {/* Top Section */}
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="inline-block py-1.5 px-4 rounded-full border border-white/10 text-gray-300 text-[11px] font-medium uppercase tracking-wide bg-white/5">
                                            {plan.name}
                                        </span>
                                        <plan.icon className="w-10 h-10 text-gray-500 stroke-[1] group-hover:text-[#AEE2FF] transition-colors" />
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl font-bold text-white">${plan.price}</span>
                                            <span className="text-gray-400 text-sm font-medium mb-1">/Monthly</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
                                        {plan.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-8 flex-1">
                                        <div className="text-white font-bold text-sm mb-4">What's Included:</div>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check className="w-4 h-4 text-[#AEE2FF] mt-0.5 shrink-0" />
                                                    <span className="text-gray-400 text-xs leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <MagneticButton className="w-full bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] py-4 rounded-[4px] font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(174,226,255,0.4)]">
                                        Get Started Now
                                    </MagneticButton>

                                </div>
                            </GlowingCard>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
