import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://sceptix.in"),
    title: "The sceptix club",
    description:
        "A college-level club in St Joseph Engineering College that promotes the use of Free and Open Source Software to Liberate Your Mind.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "The sceptix club",
        description:
            "A college-level club in St Joseph Engineering College that promotes the use of Free and Open Source Software to Liberate Your Mind.",
        url: "https://sceptix.in/",
        siteName: "sceptix.in",
        locale: "en-IN",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
  }





export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en" className="custom-scrollbar">
            <Script defer src={process.env.WEBSITE_SRC} data-website-id={process.env.WEBSITE_ID}></Script>

            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
