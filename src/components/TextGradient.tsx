"use client";
import { motion } from "framer-motion";

interface TextGradientProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export const TextGradient = ({ children, className = "", animate = true }: TextGradientProps) => {
    return (
        <motion.span
            className={`bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#2FA9DC] bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
            animate={animate ? {
                backgroundPosition: ["0% center", "200% center"]
            } : undefined}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {children}
        </motion.span>
    );
};

export const GlowText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <span className={`relative ${className}`}>
            <span className="relative z-10">{children}</span>
            <span
                className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-[#2FA9DC] to-[#1e7ba8]"
                aria-hidden="true"
            />
        </span>
    );
};
