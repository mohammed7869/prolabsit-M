import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowUpRight, Phone, Eye, BarChart3, Users } from "lucide-react";

export default function FeatureGrid() {
    return (
        <section className="pb-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="container mx-auto px-4 md:px-6">
                    {/* 4 Column Grid - No Gap to mimic split panel look or small gap */}
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-[500px] rounded-3xl overflow-hidden">

                        {/* Col 1: Be Transparent */}
                        <StaggerItem className="bg-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between border-r border-b border-[#0d1f67]/5 relative group card-hover transition-all duration-500 hover:shadow-[0_8px_40px_rgba(47,169,220,0.12)]">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2FA9DC]/10 to-[#667eea]/5 border border-[#2FA9DC]/20 rounded-xl flex items-center justify-center mb-6 text-[#2FA9DC] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.1)]">
                                    <Eye className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1f67] mb-4 group-hover:text-[#2FA9DC] transition-colors duration-300">Be Transparent</h3>
                                <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                                    We deserve to have honest, open, and consistent information about our business from leadership. Every employee, no matter the level on the org chart.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-sm hover:text-[#2FA9DC] hover:gap-4 transition-all duration-300">
                                Learn More <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </a>

                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>

                        {/* Col 2: Make Calculated Decisions */}
                        <StaggerItem className="bg-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between border-r border-b border-[#0d1f67]/5 relative group card-hover transition-all duration-500 hover:shadow-[0_8px_40px_rgba(47,169,220,0.12)]">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2FA9DC]/10 to-[#667eea]/5 border border-[#2FA9DC]/20 rounded-xl flex items-center justify-center mb-6 text-[#2FA9DC] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.1)]">
                                    <BarChart3 className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1f67] mb-4 group-hover:text-[#2FA9DC] transition-colors duration-300">Make Calculated Decisions</h3>
                                <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                                    We collaborate across teams to ensure our decisions are in the best interest of our business. We value calculated, data-driven decisions.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-sm hover:text-[#2FA9DC] hover:gap-4 transition-all duration-300">
                                Learn More <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </a>

                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>

                        {/* Col 3: Value Each Other */}
                        <StaggerItem className="bg-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between border-r border-b border-[#0d1f67]/5 relative group card-hover transition-all duration-500 hover:shadow-[0_8px_40px_rgba(47,169,220,0.12)]">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2FA9DC]/10 to-[#667eea]/5 border border-[#2FA9DC]/20 rounded-xl flex items-center justify-center mb-6 text-[#2FA9DC] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.1)]">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1f67] mb-4 group-hover:text-[#2FA9DC] transition-colors duration-300">Value Each Other</h3>
                                <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                                    We go out of our way to lift each other up, applaud victories, and communicate with respect and
                                    honesty. We genuinely care about the success of the team, and we strive to motivate one another.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#0d1f67] font-bold text-sm hover:text-[#2FA9DC] hover:gap-4 transition-all duration-300">
                                Learn More <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </a>

                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>


                        {/* Col 4: Contact/Support Card */}
                        <StaggerItem className="bg-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between border-b border-[#0d1f67]/5 relative overflow-hidden group card-hover transition-all duration-500 hover:shadow-[0_8px_40px_rgba(47,169,220,0.12)]">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2FA9DC]/10 to-[#667eea]/5 border border-[#2FA9DC]/20 rounded-xl flex items-center justify-center mb-6 text-[#2FA9DC] group-hover:rotate-12 transition-all duration-300 shadow-[0_4px_15px_rgba(47,169,220,0.1)]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1f67] mb-4 group-hover:text-[#2FA9DC] transition-colors duration-300">24*7 IT Support & Monitoring</h3>
                                <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                                    Our dedicated team continuously monitors your systems to detect issues.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <p className="text-xs text-[#718096] font-bold uppercase mb-1">Contact us :</p>
                                        <p className="text-[#0d1f67] font-bold">971 42866807</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#718096] font-bold uppercase mb-1">Email us :</p>
                                        <p className="text-[#0d1f67] font-bold">info@domain.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <button className="bg-gradient-to-r from-[#2FA9DC] via-[#1e7ba8] to-[#0d4f6e] hover:from-[#1e7ba8] hover:via-[#2FA9DC] hover:to-[#667eea] text-white px-6 py-3 rounded-xl font-bold text-sm w-full flex items-center justify-between group cursor-pointer transition-all duration-500 shadow-[0_4px_20px_rgba(47,169,220,0.3)] hover:shadow-[0_6px_30px_rgba(47,169,220,0.5)]">
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Support Person Image Overlay */}
                            <div className="absolute bottom-0 right-[-20px] w-64 h-64 z-0 pointer-events-none opacity-80 group-hover:scale-105 transition-transform duration-500 origin-bottom-right">
                                <img src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/company-benefits-contact-img.png" alt="Support" className="w-full h-full object-contain object-bottom" />
                            </div>
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
