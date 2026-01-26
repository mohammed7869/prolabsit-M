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
        <main className="min-h-screen bg-white">
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
        </main>
    );
}
