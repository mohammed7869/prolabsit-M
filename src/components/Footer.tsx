"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#2FA9DC]/10 pt-20 pb-8 relative overflow-hidden">

            {/* Large Background Text */}
            <div className="absolute top-[-5%] left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
                <div className="text-[12vw] font-black text-[#2FA9DC] whitespace-nowrap uppercase">
                    MAKE SOMETHING GREAT WORK
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                       <Link href="/" className="flex items-center gap-2 mb-6">
  <Image
    src="/logo.png"
    alt="Professional Labs Logo"
    width={180}
    height={180}
    className=" w-auto object-contain"
  />
</Link>

                        <p className="text-gray-600 mb-8 leading-relaxed max-w-sm">
Founded in 1997 and headquarter in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services, Managed Services and Market Research.                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-[#2FA9DC] font-bold text-sm">Follow Us:</span>
                            <div className="flex gap-2">
                                {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded-full border border-[#2FA9DC]/20 flex items-center justify-center text-gray-600 hover:bg-[#2FA9DC] hover:text-white hover:border-[#2FA9DC] transition-all">
                                        <Icon className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[#2FA9DC] font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {["Cloud Solutions", "IT Consulting & Strategy", "Data Backup & Recovery", "Network & Infrastructure"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 hover:text-[#2FA9DC] transition-colors flex items-center gap-2 text-sm">
                                        <span className="w-1 h-1 rounded-full bg-gray-500"></span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[#2FA9DC] font-bold text-lg mb-6">Contact Information</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2FA9DC] flex items-center justify-center text-white">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-gray-600 text-xs mb-1">Phone Number</div>
                                    <div className="text-[#2FA9DC] font-bold text-sm">+971 42866807</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2FA9DC] flex items-center justify-center text-white">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-gray-600 text-xs mb-1">Email Address</div>
                                    <div className="text-[#2FA9DC] font-bold text-sm">Info@professionallabs.Com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[#2FA9DC] font-bold text-lg mb-6">Subscribe To Our Newsletter!</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Subscribe to our newsletter for expert insights, industry news, and practical tips delivered to inbox.
                        </p>
                        <form className="flex w-full">
                            <input
                                type="email"
                                placeholder="Email Address *"
                                className="bg-gray-50 border border-[#2FA9DC]/20 text-[#2FA9DC] text-sm px-4 py-3 outline-none focus:border-[#2FA9DC]/50 w-full rounded-l-[4px]"
                            />
                            <button className="bg-[#2FA9DC] text-white px-6 py-3 font-bold text-sm hover:bg-[#1e7ba8] transition-colors rounded-r-[4px]">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#2FA9DC]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6">
                        {["Home", "About Us", "Services", "Blogs", "Contact"].map((item) => (
                            <Link key={item} href="#" className="text-gray-600 hover:text-[#2FA9DC] text-sm font-medium transition-colors">
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
