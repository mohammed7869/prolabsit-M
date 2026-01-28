"use client";
import { Reveal } from "@/components/Reveal";
import { GlowingCard } from "@/components/GlowingCard";
import { ArrowUpRight, ShieldCheck, FileSearch, Settings, Lock, Wrench } from "lucide-react";

const features = [
    {
        icon: FileSearch,
        title: "Prolabs Identity Audit",
        description: "Comprehensive Active Directory & Entra ID health and security assessment in one report. Highlights misconfigurations, risks, and performance gaps with clear, prioritized remediation actions."
    },
    {
        icon: ShieldCheck,
        title: "Prolabs ACL Guardian",
        description: "Detects and cleans up risky permissions, including Anonymous/unsafe SIDs and broken ACLs across AD objects. Safely normalizes access control to reduce privilege exposure and harden your directory."
    },
    {
        icon: Settings,
        title: "Prolabs GPO Guardian",
        description: "Finds GPO permission issues, orphaned/broken links, and inconsistent delegation that can weaken security. Repairs common misconfigurations and helps restore least-privilege control over Group Policy."
    },
    {
        icon: Lock,
        title: "Prolabs TLS Guardian",
        description: "Scans Windows servers for weak SSL/TLS protocols, ciphers, and insecure configuration baselines. Produces a remediation-ready plan to harden TLS settings without breaking critical workloads."
    },
    {
        icon: Wrench,
        title: "Prolabs ServiceDesk Toolkit",
        description: "Streamlines common helpdesk tasks like password resets, MFA resets, unlocks, and account recovery for AD and Entra ID. Standardizes operations with guardrails, logging, and faster resolution times"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase animate-border-glow">
                                • Why Choose Us
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0d1f67] leading-[1.2] text-shadow-sm">
                                From consultation to implementation – we deliver end to end it excellence that supports
                            </h2>
                        </Reveal>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
                    {features.map((feature, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <GlowingCard className="h-full">
                                <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-500 border border-[#2FA9DC]/10 hover:border-[#2FA9DC]/40 card-hover shadow-[0_4px_20px_rgba(13,31,103,0.06)] hover:shadow-[0_12px_40px_rgba(47,169,220,0.15)]">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6 text-[#2FA9DC] group-hover:text-[#667eea] transition-all duration-500 group-hover:scale-110 origin-left">
                                            <feature.icon className="w-10 h-10 stroke-[1.5]" />
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0d1f67] mb-4 min-h-[50px] leading-tight group-hover:text-[#2FA9DC] transition-colors duration-300">{feature.title}</h3>

                                        <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-[#0d1f67]/10">
                                        <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-sm hover:text-[#2FA9DC] transition-all duration-300 group-hover:gap-4">
                                            Learn More <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </GlowingCard>
                        </Reveal>

                    ))}
                </div>

                {/* Bottom Footer Text */}



                {/* Additional Image Section */}
                <div className="mt-20 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                    <img
                        src="/Picture2.png"
                        alt="Why Choose Us Illustration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

            </div>
        </section>
    );
}
