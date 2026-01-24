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
        <section className="py-10 bg-black border-y border-white/5 mx-4 md:mx-6 rounded-3xl mt-[-50px] relative z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Side Label */}
                    <div className="lg:w-1/4">
                        <h3 className="text-xl font-bold text-white leading-tight">
                            Trusted by <br />
                            <span className="text-gray-400 font-normal">Global Companies</span>
                        </h3>
                    </div>

                    {/* Divider - Hidden on mobile */}
                    <div className="hidden lg:block w-px h-16 bg-white/10"></div>

                    {/* Stats Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <Fade cascade damping={0.1} triggerOnce>
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-3xl md:text-5xl font-bold text-white mb-1 flex justify-center lg:justify-start items-center">
                                            <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy />
                                            <span className="text-[#AEE2FF]">{stat.suffix}</span>
                                        </div>
                                        <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
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
