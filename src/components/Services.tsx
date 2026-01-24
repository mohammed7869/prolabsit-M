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
        <section id="services" className="py-24 bg-[#0b0e13] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • Our Core Services
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">
                                Comprehensive, scalable it services designed to empower growing businesses
                            </h2>
                        </Reveal>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-6">
                    {/* Auto Scroller Loop (Remaining Portion) */}
                    <div className="flex-1 overflow-hidden relative">
                         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0e13] to-transparent z-10 pointer-events-none" />
                         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0e13] to-transparent z-10 pointer-events-none" />
                        
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
                                            <div className="group bg-[#1a1f29] rounded-[4px] p-8 h-full flex flex-col justify-between transition-all border border-white/5 hover:border-[#AEE2FF]/30">
                                                <div>
                                                    {/* Icon */}
                                                    <div className="mb-8 text-white group-hover:text-[#AEE2FF] transition-colors group-hover:scale-110 duration-300 origin-left">
                                                        <service.icon className="w-12 h-12 stroke-[1.5]" />
                                                    </div>

                                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="pt-6 border-t border-white/10">
                                                    <a href="#" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#AEE2FF] transition-colors group-hover:gap-3">
                                                        Learn More <ArrowUpRight className="w-4 h-4" />
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
                        <div className="relative rounded-[4px] overflow-hidden h-full min-h-[420px] group bg-[#1a1f29]">
                            <Image
                                src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/service-cta-img.jpg"
                                alt="Support Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Need Any Help? We're Here To Help You!</h3>
                                <p className="text-gray-300 text-xs mb-6 opacity-90">
                                    Comprehensive protection from evolving threats with risk assessments.
                                </p>
                                <button className="cursor-pointer bg-[#AEE2FF] text-[#0b0e13] px-6 py-3 rounded-md font-bold text-sm flex items-center gap-2 hover:bg-white transition-colors">
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
