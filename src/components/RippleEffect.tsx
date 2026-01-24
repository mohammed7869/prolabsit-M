"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleEffectProps {
    children: React.ReactNode;
    className?: string;
}

export const RippleEffect = ({ children, className = "" }: RippleEffectProps) => {
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create ripple on movement (throttled by checking if enough time passed)
        const newRipple = { id: Date.now(), x, y };
        setRipples((prev) => [...prev.slice(-3), newRipple]); // Keep only last 4 ripples
    };

    const handleMouseLeave = () => {
        setRipples([]);
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {/* Ripple Waves */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute pointer-events-none"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: 100,
                            height: 100,
                            marginLeft: -50,
                            marginTop: -50,
                            borderRadius: "50%",
                            border: "2px solid rgba(174, 226, 255, 0.5)",
                            background: "radial-gradient(circle, rgba(174, 226, 255, 0.15) 0%, transparent 70%)",
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* SVG Filter for Distortion Effect */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="water-ripple">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.01"
                            numOctaves="3"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="10"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

// Alternative: Pure CSS Wave Animation Overlay
export const WaveOverlay = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
                >
                    {/* Multiple expanding wave rings */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.3 }}
                        >
                            <motion.div
                                className="rounded-full border-2 border-[#AEE2FF]/30"
                                initial={{ width: 0, height: 0, opacity: 0.8 }}
                                animate={{
                                    width: ["0%", "150%"],
                                    height: ["0%", "150%"],
                                    opacity: [0.6, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.6,
                                    ease: "easeOut",
                                }}
                            />
                        </motion.div>
                    ))}

                    {/* Subtle wave distortion overlay */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: `
                                radial-gradient(ellipse at center, transparent 30%, rgba(174, 226, 255, 0.1) 70%),
                                repeating-radial-gradient(
                                    circle at 50% 50%,
                                    transparent 0px,
                                    transparent 10px,
                                    rgba(174, 226, 255, 0.05) 10px,
                                    rgba(174, 226, 255, 0.05) 20px
                                )
                            `,
                            animation: "waveExpand 3s ease-in-out infinite",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
