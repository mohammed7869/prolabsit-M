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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-[#2FA9DC]/10 border border-[#2FA9DC]/20 text-[#2FA9DC] text-xs font-semibold tracking-wide uppercase">
                                • Why Choose Us
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#2FA9DC] leading-[1.2]">
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
                                <div className="group bg-gray-50 rounded-[4px] p-6 h-full flex flex-col justify-between transition-all border border-[#2FA9DC]/10">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6 text-[#2FA9DC] group-hover:text-[#1e7ba8] transition-colors">
                                            <feature.icon className="w-10 h-10 stroke-[1] opacity-90" />
                                        </div>

                                        <h3 className="text-lg font-bold text-[#2FA9DC] mb-4 min-h-[50px] leading-tight">{feature.title}</h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-[#2FA9DC]/10">
                                        <a href="#" className="flex items-center gap-2 text-[#2FA9DC] font-bold text-sm hover:text-[#1e7ba8] transition-colors group-hover:gap-3">
                                            Learn More <ArrowUpRight className="w-4 h-4" />
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
