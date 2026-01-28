"use client";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Plus, Minus, Check } from "lucide-react";
import React, { useState } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

const faqs = [
    {
        question: "1. How quickly can we get support if we face a technical issue?",
        answer: "We understand that every minute of downtime impacts your business. That's why our dedicated helpdesk team is available 24/7 to address any technical issues you face. On average, we respond to support requests in under 15 minutes, with critical issues prioritized immediately. Managed IT Services involve proactive monitoring and maintenance of your IT systems.",
        points: [
            "We aim to respond to all technical issues within 24 hours or less",
            "You can reach us via phone, email, or chat, and our expert team will provide assistance"
        ]
    },
    {
        question: "2. Can your services scale as our business grows?",
        answer: "Yes, our solutions are designed to be fully scalable. As your business expands, we can easily adjust your IT infrastructure and support levels to meet new demands.",
        points: []
    },
    {
        question: "3. Can you help us with data backup and disaster recovery?",
        answer: "Absolutely. We implement robust data backup strategies and disaster recovery plans to ensure your business data is safe and recoverable in any scenario.",
        points: []
    },
    {
        question: "4. How do you ensure the security of our systems and data?",
        answer: "We use a multi-layered security approach, including firewalls, encryption, proactive monitoring, and regular vulnerability assessments to protect your assets.",
        points: []
    },
    {
        question: "5. Do you provide on-site IT support, or is everything remote?",
        answer: "We provide both remote and on-site support depending on your needs. Most issues can be resolved remotely, but we are ready to dispatch technicians when physical presence is required.",
        points: []
    }
];

export default function FAQ() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Side: Content */}
                    <div>
                        <Reveal>
                            <span className="inline-block py-2.5 px-5 rounded-full glass-premium text-[#0d1f67] text-xs font-bold tracking-wider uppercase mb-6 animate-border-glow">
                                • Frequently Asked Questions
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0d1f67] leading-[1.2] mb-6 text-shadow-sm">
                                Everything you need to know about our it services and solutions
                            </h2>
                            <p className="text-[#4a5568] text-lg mb-12 leading-relaxed">
                                We've compiled answers to the most common questions about our services, processes, and support so you can make informed decisions with confidence.
                            </p>

                            <div className="flex items-center gap-6 mb-12">
                                {/* Avatars */}
                                <div className="flex items-center -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#2FA9DC] flex items-center justify-center text-white text-xs font-bold">
                                        15K
                                    </div>
                                </div>
                                <div className="text-[#0d1f67]">
                                    <div className="font-bold">99% Client</div>
                                    <div className="text-sm text-[#4a5568]">Satisfaction Rate</div>
                                </div>
                            </div>

                            <button className="bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 flex items-center gap-2 group shadow-[0_4px_30px_rgba(47,169,220,0.3)] hover:shadow-[0_8px_50px_rgba(47,169,220,0.5)] btn-shine">
                                View All Faqs
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </Reveal>
                    </div>

                    {/* Right Side: Accordion */}
                    <div>
                        <Reveal direction="up" delay={0.2}>
                            <RadixAccordion.Root type="single" defaultValue="item-0" collapsible className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <RadixAccordion.Item key={index} value={`item-${index}`} className="border-b border-[#0d1f67]/10 pb-4">
                                        <RadixAccordion.Header>
                                            <RadixAccordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-bold text-[#0d1f67] hover:text-[#2FA9DC] transition-all duration-300 group data-[state=open]:text-[#2FA9DC]">
                                                <span className="text-lg">{faq.question}</span>
                                                <div className="shrink-0">
                                                    <Plus className="h-5 w-5 group-data-[state=open]:hidden transition-transform duration-300" />
                                                    <Minus className="h-5 w-5 hidden group-data-[state=open]:block transition-transform duration-300" />
                                                </div>
                                            </RadixAccordion.Trigger>
                                        </RadixAccordion.Header>
                                        <RadixAccordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                            <div className="pb-4 pt-2 text-[#4a5568] leading-relaxed">
                                                {faq.answer}
                                                {faq.points.length > 0 && (
                                                    <ul className="mt-4 space-y-2">
                                                        {faq.points.map((point, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <Check className="w-4 h-4 text-[#2FA9DC] mt-0.5 shrink-0" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </RadixAccordion.Content>
                                    </RadixAccordion.Item>
                                ))}
                            </RadixAccordion.Root>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
