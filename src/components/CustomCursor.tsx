"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "BUTTON" ||
                (e.target as HTMLElement).tagName === "A" ||
                (e.target as HTMLElement).closest("button") ||
                (e.target as HTMLElement).closest("a")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
            animate={{
                x: mousePosition.x - 20,
                y: mousePosition.y - 20,
                scale: isHovering ? 1.5 : 1,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        >
            <div className="relative w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <div className={`w-1 h-1 bg-white rounded-full transition-all duration-200 ${isHovering ? "w-2 h-2" : ""}`} />
            </div>
        </motion.div>
    );
};
