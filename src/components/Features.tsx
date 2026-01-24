"use client";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

const features = [
    {
        tag: "Flexible Storage",
        title: "Scale Cloud Infrastructure",
        description: "Easily scale your operation up down with flexible cloud solution design.",
        points: ["Elastic resource scale on demand", "Seamless integration with systems"],
    },
    {
        tag: "System Analysis",
        title: "Performance Optimize Tool",
        description: "Improve system performance with intelligent tools.",
        points: ["Real-time analytics monitor speed", "Auto diagnostics peak system"],
    },
    {
        tag: "Tech Assistance",
        title: "Fast & Reliable Support",
        description: "Get responsive support whenever you need it, with expert technicians.",
        points: ["24/7 expert assistance", "Multi-channel support phone, email"],
    },
    {
        tag: "Integration",
        title: "Seamless Integration",
        description: "Integrate your IT system effortlessly with existing workflows apps.",
        points: ["Effortlessly connect to IT solutions", "Simple operation & data platform"],
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <Reveal direction="up">
                        <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                            • Our Features
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1]">
                            Comprehensive, intelligent, and scalable IT features designed to power your digital transformation
                        </h2>
                    </Reveal>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-white/10 rounded-xl overflow-hidden bg-[#11141b]">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-[#0b0e13] border-b xl:border-b-0 xl:border-r border-white/10 last:border-r-0 relative flex flex-col">
                            {/* Text Content */}
                            <div className="p-8 pb-0 flex-1">
                                <span className="inline-block py-1.5 px-3 rounded-full border border-white/10 text-gray-400 text-[11px] font-medium uppercase tracking-wide mb-6 group-hover:bg-[#AEE2FF] group-hover:text-black transition-colors">
                                    {feature.tag}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                <ul className="space-y-3 mb-10">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image - Bottom Half */}
                            <div className="relative h-48 w-full mt-auto overflow-hidden">
                                <Image
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1600880292203-757bb62b4baf' : index === 1 ? '1606857521015-7f9fcf423740' : index === 2 ? '1573164713714-d95e436ab8d6' : '1557804506-669a67965ba0'}?auto=format&fit=crop&q=80&w=600`}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
