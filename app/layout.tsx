import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
