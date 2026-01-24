"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? "bg-[#0b0e13]/90 backdrop-blur-md py-0" : "bg-transparent py-2 lg:py-4"}`}>
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Codeio Logo"
                        width={180}
                        height={180}
                        className=" w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {["Home", "About Us", "Services", "Blog", "Pages", "Contact Us"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-white/90 hover:text-[#AEE2FF] transition-colors relative group py-2"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#AEE2FF] to-[#60a5fa] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Call Us */}
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden xl:block">
                            <p className="text-xs text-gray-400 font-medium mb-0.5">Call Us at:</p>
                            <p className="text-white font-bold tracking-wide">+(123) 456-789</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#AEE2FF]">
                            <Phone className="w-5 h-5" />
                        </div>
                    </div>

                    {/* CTA Button */}
                    <MagneticButton className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(174,226,255,0.3)] hover:shadow-[0_0_35px_rgba(174,226,255,0.5)]">
                        Get a Free Consultation
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </MagneticButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-white bg-white/5 p-2 rounded-lg border border-white/10">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);
