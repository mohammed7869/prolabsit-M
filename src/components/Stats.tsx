"use client";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

const stats = [
    { value: 50, label: "Engineers and Developers", suffix: "+" },
    { value: 100, label: "Customers", suffix: "+" },
    { value: 35, label: "Presence in Countries", suffix: "+" },
    { value: 15, label: "Years in Support", suffix: "+" },
];

export default function Stats() {
    return (
        <section className="py-10 glass-premium border border-[#2FA9DC]/10 mx-4 md:mx-6 rounded-3xl mt-[-50px] relative z-20 shadow-[0_8px_40px_rgba(13,31,103,0.08)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Side Label */}
                    <div className="lg:w-1/4">
                        <h3 className="text-xl font-bold text-[#0d1f67] leading-tight">
                            Trusted by <br />
                            <span className="text-[#4a5568] font-normal">Global Companies</span>
                        </h3>
                    </div>

                    {/* Divider - Hidden on mobile */}
                    <div className="hidden lg:block w-px h-16 bg-[#2FA9DC]/20"></div>

                    {/* Stats Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <Fade cascade damping={0.1} triggerOnce>
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-3xl md:text-5xl font-bold text-[#0d1f67] mb-1 flex justify-center lg:justify-start items-center">
                                            <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy />
                                            <span className="text-[#2FA9DC]">{stat.suffix}</span>
                                        </div>
                                        <div className="text-[#4a5568] text-sm font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
