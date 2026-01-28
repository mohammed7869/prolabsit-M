import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import { Marquee } from "@/components/DesignElements";
import Services from "@/components/Services";
import VideoShowcase from "@/components/VideoShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Stats from "@/components/Stats";
// import FeatureGrid from "@/components/FeatureGrid";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import { Marquee } from "@/components/DesignElements";

export default function Home() {
    return (
        <main className="min-h-screen bg-animated-gradient relative overflow-hidden">
            {/* Floating Decorative Orbs */}
            <div className="floating-orb w-[600px] h-[600px] bg-[#2FA9DC]/10 top-[-10%] right-[-10%] pointer-events-none" />
            <div className="floating-orb w-[500px] h-[500px] bg-[#667eea]/8 bottom-[20%] left-[-15%] pointer-events-none" style={{ animationDelay: '2s' }} />
            <div className="floating-orb w-[400px] h-[400px] bg-[#f093fb]/6 top-[40%] right-[-5%] pointer-events-none" style={{ animationDelay: '4s' }} />

            {/* Background Pattern */}
            <div className="fixed inset-0 bg-dots opacity-30 pointer-events-none z-0" />

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Stats />
                <Services />
                <About />
                <FeatureGrid />
                <WhyChooseUs />
                <Marquee />
                {/* <VideoShowcase /> */}

                {/* <HowItWorks /> */}
                {/* <Projects /> */}
                {/* <Features /> */}
                {/* <Pricing /> */}
                <Testimonials />
                <Blog />
                <FAQ />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
