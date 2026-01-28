"use client";

import { useState } from "react";
import { RotatingText, TypewriterText } from "@/components/DesignElements";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveOverlay } from "@/components/RippleEffect";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    const floatAnimation: Variants = {
        animate: {
            y: [-15, 15, -15],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const [isImageHovered, setIsImageHovered] = useState(false);

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Gradients/Glows */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#2FA9DC]/10 via-[#667eea]/5 to-transparent blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#667eea]/10 via-[#f093fb]/5 to-transparent blur-[120px] rounded-full pointer-events-none"
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-[#2FA9DC] to-[#667eea] rounded-full pointer-events-none opacity-40"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + (i % 4) * 20}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 5 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            {/* Badge */}
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 w-fit animate-border-glow">
                                <Image
                                    src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/asterik-stare.svg"
                                    alt="icon"
                                    width={12}
                                    height={12}
                                    className="w-3 h-3"
                                />
                                <span className="text-[#0d1f67] text-sm font-semibold tracking-wide">
                                    Smarter IT. Stronger Business.
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[68px] font-bold text-[#0d1f67] leading-[1.1] mb-6 block text-shadow-sm">
                                Professional Managed Security and IT Support Services Provider <br className="hidden lg:block" />
                                <span className="gradient-text-premium">
                                    {/* <TypewriterText text="scalable it solutions" delay={1} /> */}
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={fadeUp} className="text-lg text-[#4a5568] mb-10 max-w-lg leading-relaxed">
                                Professional Labs aim is to simplify that complexity. <br />
                            </motion.p>

                            <motion.div variants={fadeUp} className="mb-10">
                                <Image
                                    src="/Picture1.png"
                                    alt="Hero Illustration"
                                    width={400}
                                    height={300}
                                    className="rounded-xl w-full max-w-md"
                                />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                <MagneticButton className="cursor-pointer bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white px-9 py-4 rounded-full font-bold transition-all duration-500 flex items-center gap-2 group shadow-[0_4px_30px_rgba(47,169,220,0.4)] hover:shadow-[0_8px_50px_rgba(47,169,220,0.6)] btn-shine">
                                    Get a Free Consultation
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </MagneticButton>

                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        {/* Entrance Animation Wrapper */}
                        <motion.div
                            variants={slideInRight}
                            className="relative w-full max-w-[600px] aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="relative w-full h-full rounded-3xl overflow-visible group"
                            >
                                {/* Background Shape */}
                                <div className="absolute top-10 right-[-40px] w-full h-full -z-10 animate-pulse">
                                    <Image
                                        src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/themes/codeio/assets/images/hero-image-bg-shape.svg"
                                        alt="Background Shape"
                                        width={600}
                                        height={600}
                                        className="w-full h-full opacity-60"
                                    />
                                </div>

                                <div
                                    className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                                    onMouseEnter={() => setIsImageHovered(true)}
                                    onMouseLeave={() => setIsImageHovered(false)}
                                >
                                    {/* Blue Overlay on Hover */}
                                    <div className="absolute inset-0 bg-[#2FA9DC] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none" />

                                    {/* Water Wave Ripple Effect */}
                                    <WaveOverlay isHovered={isImageHovered} />

                                    <Image
                                        src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/hero-image.jpg"
                                        alt="IT Solutions Team"
                                        fill
                                        className={`object-cover transition-transform duration-700 ${isImageHovered ? 'scale-105' : 'scale-100'}`}
                                        priority
                                    />
                                </div>

                                {/* Rotating Text Badge */}
                                <div className="absolute bottom-8 left-8 z-20">
                                    <RotatingText />
                                </div>


                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
