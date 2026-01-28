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
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-premium shadow-[0_4px_30px_rgba(13,31,103,0.08)] py-0" : "bg-transparent py-2 lg:py-4"}`}>
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
                            className="text-sm font-semibold text-[#0d1f67] hover:text-[#2FA9DC] transition-all duration-300 relative group py-2"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2FA9DC] to-[#667eea] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Call Us */}
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden xl:block">
                            <p className="text-xs text-[#718096] font-medium mb-0.5">Call Us at:</p>
                            <p className="text-[#0d1f67] font-bold tracking-wide">971 42866807</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2FA9DC]/20 to-[#667eea]/10 flex items-center justify-center border border-[#2FA9DC]/30 text-[#2FA9DC] group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-5 h-5" />
                        </div>
                    </div>

                    {/* CTA Button */}
                    <MagneticButton className="bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white px-6 py-3 rounded-full font-bold transition-all duration-500 flex items-center gap-2 group shadow-[0_4px_25px_rgba(47,169,220,0.35)] hover:shadow-[0_6px_40px_rgba(47,169,220,0.5)] btn-shine">
                        Get a Free Consultation
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </MagneticButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-[#0d1f67] bg-gradient-to-br from-[#2FA9DC]/10 to-[#667eea]/10 p-2.5 rounded-xl border border-[#2FA9DC]/20 hover:border-[#2FA9DC]/40 transition-all duration-300">
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
