"use client";
import { Reveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const blogs = [
    {
        title: "Cybersecurity in the Age of Remote Work: Preparing for a New Wave",
        badge: "Automation",
        image: "https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/post-1.jpg",
    },
    {
        title: "Unlocking the Power of AI & Automation in IT Service Management",
        badge: "Automation",
        image: "https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/post-2.jpg",
    },
    {
        title: "Why Data Backup & Disaster Recovery Plans Are Essential",
        badge: "Data Backup",
        image: "https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/post-4.jpg",
    },
    {
        title: "The Role of AI & Machine Learning in Cyber Defense",
        badge: "Network Security",
        image: "https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/post-5.jpg",
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase animate-border-glow">
                                • Latest Blogs
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <TextReveal
                                text="From digital transformation to data security – read what's shaping the future of modern it services"
                                className="text-3xl md:text-5xl font-bold text-[#0d1f67] leading-[1.2] text-shadow-sm"
                            />
                        </Reveal>
                    </div>
                </div>

                {/* Blog Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <StaggerItem key={index}>
                            <div className="group h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="glass-premium px-3 py-1.5 rounded-full text-[10px] uppercase font-bold text-[#0d1f67]">
                                            {blog.badge}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-[#0d1f67] mb-4 leading-tight group-hover:text-[#2FA9DC] transition-colors duration-300 cursor-pointer min-h-[50px]">
                                        {blog.title}
                                    </h3>

                                    <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-[10px] uppercase tracking-wider hover:text-[#2FA9DC] transition-all duration-300 group-hover:gap-3">
                                        Learn More <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
