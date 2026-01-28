"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0d1f67] via-[#1a2d7a] to-[#0a1545] pt-20 pb-8 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(47, 169, 220, 0.15) 2px, transparent 0)', backgroundSize: '50px 50px' }}></div>

            {/* Decorative Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#2FA9DC]/10 blur-[100px] animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#667eea]/10 blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#2FA9DC]/5 to-[#667eea]/5 blur-[150px]"></div>

            {/* Geometric Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2FA9DC] to-transparent opacity-50"></div>
            <div className="absolute top-0 right-20 w-px h-32 bg-gradient-to-b from-[#2FA9DC]/50 to-transparent"></div>
            <div className="absolute top-0 right-40 w-px h-20 bg-gradient-to-b from-[#667eea]/50 to-transparent"></div>

            {/* Large Background Text */}
            {/* <div className="absolute top-[-5%] left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
                <div className="text-[12vw] font-black text-white whitespace-nowrap uppercase">
                    MAKE SOMETHING GREAT WORK
                </div>
            </div> */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/logo1.png"
                                alt="Professional Labs Logo"
                                width={180}
                                height={180}
                                className=" w-auto object-contain"
                            />
                        </Link>

                        <p className="text-gray-300 mb-8 leading-relaxed max-w-sm">
                            Founded in 1997 and headquarter in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services, Managed Services and Market Research.                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold text-sm">Follow Us:</span>
                            <div className="flex gap-2">
                                {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#2FA9DC] hover:to-[#667eea] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_25px_rgba(47,169,220,0.5)]">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {["Cloud Solutions", "IT Consulting & Strategy", "Data Backup & Recovery", "Network & Infrastructure"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-[#2FA9DC] transition-colors flex items-center gap-2 text-sm group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#2FA9DC] group-hover:shadow-[0_0_8px_rgba(47,169,220,0.8)] transition-all"></span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2FA9DC] to-[#667eea] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(47,169,220,0.4)] group-hover:shadow-[0_6px_30px_rgba(47,169,220,0.6)] transition-all duration-300">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Phone Number</div>
                                    <div className="text-[#2FA9DC] font-bold text-sm">+971 42866807</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2FA9DC] to-[#667eea] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(47,169,220,0.4)] group-hover:shadow-[0_6px_30px_rgba(47,169,220,0.6)] transition-all duration-300">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Email Address</div>
                                    <div className="text-[#2FA9DC] font-bold text-sm">Info@professionallabs.Com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-lg mb-6">Subscribe To Our Newsletter!</h3>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Subscribe to our newsletter for expert insights, industry news, and practical tips delivered to inbox.
                        </p>
                        <form className="flex w-full">
                            <input
                                type="email"
                                placeholder="Email Address *"
                                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 text-sm px-4 py-3.5 outline-none focus:border-[#2FA9DC] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(47,169,220,0.2)] w-full rounded-l-xl transition-all duration-300"
                            />
                            <button className="bg-gradient-to-r from-[#2FA9DC] to-[#667eea] hover:from-[#667eea] hover:to-[#2FA9DC] text-white px-6 py-3.5 font-bold text-sm transition-all duration-500 rounded-r-xl shadow-[0_4px_20px_rgba(47,169,220,0.4)] hover:shadow-[0_6px_30px_rgba(102,126,234,0.5)]">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6">
                        {["Home", "About Us", "Services", "Blogs", "Contact"].map((item) => (
                            <Link key={item} href="#" className="text-gray-400 hover:text-[#2FA9DC] text-sm font-medium transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">Copyright © 2026 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
