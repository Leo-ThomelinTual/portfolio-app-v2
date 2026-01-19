import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import ScrollIndicator from "./components/Utils/ScrollIndicator/ScrollIndicator";
import PurpleBubble from "./components/Utils/Bubbles/Purple";
import BlueBubble from "./components/Utils/Bubbles/Blue";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Léo - Web portfolio",
  description: "Web portfolio de Léo Thomelin-Tual | Développeur web junior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Topbar />
        <ScrollIndicator />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* {children} */}
        <div className="hidden md:flex">
          <PurpleBubble />
          <BlueBubble />
        </div>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
