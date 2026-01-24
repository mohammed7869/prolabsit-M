"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

// --- Basic Reveal ---
interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    className?: string;
    triggerOnce?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    direction = "up",
    delay = 0.1,
    duration = 0.6,
    className = "",
    triggerOnce = true
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: triggerOnce, margin: "-50px" });

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </div>
    );
};

// --- Stagger Container ---
export const StaggerContainer = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1
}: { children: React.ReactNode, className?: string, delay?: number, staggerDelay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "", direction = "up" }: { children: React.ReactNode, className?: string, direction?: "up" | "left" | "right" | "fade" }) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div variants={variants} className={className}>
            {children}
        </motion.div>
    );
};

// --- Text Reveal (Letter by Letter or Word by Word) ---
export const TextReveal = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
    const words = text.split(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay }
        }
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        },
        hidden: {
            opacity: 0,
            y: 20,
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

// --- Parallax Image ---
export const ParallaxImage = ({ src, alt, className = "", height = "100%" }: { src: string, alt: string, className?: string, height?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`} style={{ height }}>
            <motion.div style={{ y, height: "120%", width: "100%", position: "relative", top: "-10%" }}>
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
}

// --- Scale In ---
export const ScaleIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, delay, ease: "backOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
