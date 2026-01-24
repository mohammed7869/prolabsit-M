import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowUpRight, Phone, Eye, BarChart3, Users } from "lucide-react";

export default function FeatureGrid() {
    return (
        <section className="bg-[#0b0e13] pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="container mx-auto px-4 md:px-6">
                    {/* 4 Column Grid - No Gap to mimic split panel look or small gap */}
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-[500px] rounded-3xl overflow-hidden">

                        {/* Col 1: Be Transparent */}
                        <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-r border-b border-white/5 relative group">
                            <div className="mb-6">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Be Transparent</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    We deserve to have honest, open, and consistent information about our business from leadership. Every employee, no matter the level on the org chart.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#AEE2FF] font-bold text-sm hover:gap-3 transition-all">
                                Learn More <ArrowUpRight className="w-4 h-4" />
                            </a>
                            
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>

                        {/* Col 2: Make Calculated Decisions */}
                         <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-r border-b border-white/5 relative group">
                            <div className="mb-6">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Make Calculated Decisions</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    We collaborate across teams to ensure our decisions are in the best interest of our business. We value calculated, data-driven decisions.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#AEE2FF] font-bold text-sm hover:gap-3 transition-all">
                                Learn More <ArrowUpRight className="w-4 h-4" />
                            </a>
                            
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>

                        {/* Col 3: Value Each Other */}
                        <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-r border-b border-white/5 relative group">
                            <div className="mb-6">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Value Each Other</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    We go out of our way to lift each other up, applaud victories, and communicate with respect and
                                    honesty. We genuinely care about the success of the team, and we strive to motivate one another.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#AEE2FF] font-bold text-sm hover:gap-3 transition-all">
                                Learn More <ArrowUpRight className="w-4 h-4" />
                            </a>
                            
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>
                    
                        
                        {/* Col 4: Contact/Support Card (Unchanged) */}
                        <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:rotate-12 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">24*7 IT Support & Monitoring</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    Our dedicated team continuously monitors your systems to detect issues.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Contact us :</p>
                                        <p className="text-white font-bold">+(123) 456-789</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email us :</p>
                                        <p className="text-white font-bold">info@domain.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-black px-6 py-3 rounded-md font-bold text-sm w-full top-3 flex items-center justify-between group cursor-pointer">
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
