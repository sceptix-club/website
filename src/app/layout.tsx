import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The sceptix club",
  description:
    "A college-level club in St Joseph Engineering College that promotes the use of Free and Open Source Software to Liberate Your Mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}
      <Footer/>
      </body>
    </html>
  );
}
