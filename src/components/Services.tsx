"use client";
import { Reveal } from "@/components/Reveal";
import { GlowingCard } from "@/components/GlowingCard";
import {
    ArrowUpRight,
    ShieldCheck,
    Cloud,
    Mail,
    Lock,
    Shield,
    Monitor,
    Headphones,
    Network,
    Briefcase,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        icon: ShieldCheck,
        title: "Managed SOC Service",
        description: "Keep your Security Operations Strong and Scalable",
    },
    {
        icon: Cloud,
        title: "Cloud Managed Services",
        description: "Streamline cloud operations with managed services.",
    },
    {
        icon: Mail,
        title: "Email Security",
        description: "Beware of phishing. Protect Email Data. Professional Labs Email Security. protects your inbox",
    },
    {
        icon: Lock,
        title: "Microsoft Cloud App Security",
        description: "Securing User Behavior with Microsoft Cloud App Security",
    },
    {
        icon: Shield,
        title: "Azure Security Service",
        description: "Safeguard your data and applications with Azure's reliable security services.",
    },
    {
        icon: Monitor,
        title: "Azure Virtual Desktop",
        description: "Virtually access a secure remote desktop from anywhere.",
    },
    {
        icon: Headphones,
        title: "IT Help Desk Service",
        description: "Our IT Help Desk Services will manage your IT infrastructure and software",
    },
    {
        icon: Network,
        title: "Network and Security Services",
        description: "Network and Security Services from Pro Labs It",
    },
    {
        icon: Briefcase,
        title: "Modern Workplace",
        description: "Redefine work with an employee-first approach",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase animate-border-glow">
                                • Our Core Services
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0d1f67] leading-[1.2] text-shadow-sm">
                                Comprehensive, scalable it services designed to empower growing businesses
                            </h2>
                        </Reveal>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-6">
                    {/* Auto Scroller Loop (Remaining Portion) */}
                    <div className="flex-1 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <div className="flex h-full">
                            <motion.div
                                className="flex gap-6 pl-6 h-full"
                                animate={{ x: "-50%" }}
                                transition={{
                                    duration: 60,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                                style={{ width: "fit-content" }}
                            >
                                {[...services, ...services].map((service, index) => (
                                    <div key={index} className="w-[350px] flex-shrink-0 h-full">
                                        <GlowingCard className="h-full">
                                            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col justify-between transition-all duration-500 border border-[#2FA9DC]/10 hover:border-[#2FA9DC]/40 card-hover shadow-[0_4px_20px_rgba(13,31,103,0.06)] hover:shadow-[0_12px_40px_rgba(47,169,220,0.15)]">
                                                <div>
                                                    {/* Icon */}
                                                    <div className="mb-8 text-[#2FA9DC] group-hover:text-[#667eea] transition-all duration-500 group-hover:scale-110 origin-left">
                                                        <service.icon className="w-12 h-12 stroke-[1.5]" />
                                                    </div>

                                                    <h3 className="text-xl font-bold text-[#0d1f67] mb-4 group-hover:text-[#2FA9DC] transition-colors duration-300">{service.title}</h3>
                                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="pt-6 border-t border-[#0d1f67]/10">
                                                    <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-sm hover:text-[#2FA9DC] transition-all duration-300 group-hover:gap-4">
                                                        Learn More <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                                    </a>
                                                </div>
                                            </div>
                                        </GlowingCard>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Card (Preserved) */}
                    <div className="w-full xl:max-w-[350px] flex-shrink-0">
                        <div className="relative rounded-[4px] overflow-hidden h-full min-h-[420px] group bg-gray-50">
                            <Image
                                src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/service-cta-img.jpg"
                                alt="Support Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Need Any Help? We're Here To Help You!</h3>
                                <p className="text-gray-200 text-xs mb-6 opacity-90">
                                    Comprehensive protection from evolving threats with risk assessments.
                                </p>
                                <button className="cursor-pointer bg-[#2FA9DC] text-white px-6 py-3 rounded-md font-bold text-sm flex items-center gap-2 hover:bg-[#1e7ba8] transition-colors">
                                    Contact Us <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
