import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Prolabs IT Solutions | Premium IT Services & Technology Solutions",
    description: "Transform your business with cutting-edge IT solutions. We deliver cloud infrastructure, cybersecurity, managed IT services, and 24/7 support for enterprises worldwide.",
    keywords: "IT Solutions, Cloud Services, Cybersecurity, Managed IT, Technology Consulting, Enterprise Solutions",
    openGraph: {
        title: "Prolabs IT Solutions | Premium IT Services",
        description: "Transform your business with cutting-edge IT solutions.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${dmSans.className} antialiased`}>
                <ScrollProgress />
                <CustomCursor />
                {children}
                <BackToTop />
            </body>
        </html>
    );
}
