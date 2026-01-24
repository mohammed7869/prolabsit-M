"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MosaicImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const MosaicImage = ({ src, alt, className = "" }: MosaicImageProps) => {
    const [blocks, setBlocks] = useState<{ id: number; x: number; y: number }[]>([]);
    const rows = 12;
    const cols = 12;

    useEffect(() => {
        const newBlocks = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                newBlocks.push({ id: r * cols + c, x: c, y: r });
            }
        }
        // Deep shuffle for more chaotic "pixelated" reveal
        for (let i = newBlocks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newBlocks[i], newBlocks[j]] = [newBlocks[j], newBlocks[i]];
        }
        setBlocks(newBlocks);
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Background Image (Base) - invisible, just for layout sizing if needed, or low opacity base */}
            <img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover opacity-0"
            />

            {/* Mosaic Grid */}
            <div className="absolute inset-0 w-full h-full flex flex-wrap content-start">
                {blocks.map((block) => (
                    <motion.div
                        key={block.id}
                        className="absolute overflow-hidden bg-[#0b0e13]"
                        style={{
                            width: `${100 / cols + 0.1}%`, // slight overlap to prevent gaps
                            height: `${100 / rows + 0.1}%`,
                            left: `${(block.x * 100) / cols}%`,
                            top: `${(block.y * 100) / rows}%`,
                        }}
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: Math.random() * 0.8, // Longer spread for the "glitch" feel
                            ease: "easeOut"
                        }}
                    >
                        <div
                            className="w-full h-full absolute top-0 left-0"
                            style={{
                                backgroundImage: `url(${src})`,
                                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                                backgroundPosition: `${(block.x / (cols - 1)) * 100}% ${(block.y / (rows - 1)) * 100}%`,
                                width: `${cols * 100}%`,
                                height: `${rows * 100}%`,
                                transform: `translate(-${block.x * (100 / cols)}%, -${block.y * (100 / rows)}%)` // Correctly positioning the background within the tile
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
