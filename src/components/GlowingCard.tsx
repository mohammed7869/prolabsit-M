"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowingCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export const GlowingCard = ({ children, className = "", glowColor = "rgba(174, 226, 255, 0.15)" }: GlowingCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - left,
            y: e.clientY - top
        });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden ${className}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300"
                style={{
                    background: isHovered
                        ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`
                        : "none",
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* Gradient Border */}
            <motion.div
                className="absolute inset-0 rounded-[inherit] p-px"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(174, 226, 255, 0.3), transparent 40%)`
                        : "transparent"
                }}
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
