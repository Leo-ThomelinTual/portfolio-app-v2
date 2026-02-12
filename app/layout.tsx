import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Footer/Footer";
// import Topbar from "./components/Topbar/Topbar";
// import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import ScrollIndicator from "./components/Utils/ScrollIndicator/ScrollIndicator";
import PurpleBubble from "./components/Utils/Bubbles/Purple";
import BlueBubble from "./components/Utils/Bubbles/Blue";
import NavbarNew from "./components/Navbar/NavbarNew";
import TopbarNew from "./components/Topbar/TopbarNew";

const jetbrains = JetBrains_Mono({
  variable: "--jetbrains-mono",
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
    <html className={jetbrains.className} lang="fr">
      <body>
        {/*<Topbar />*/}
        <TopbarNew />
        <ScrollIndicator />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* {children} */}
        <div className="hidden md:flex">
          <PurpleBubble />
          <BlueBubble />
        </div>
        {/*<Navbar />*/}
        <NavbarNew />
        <Footer />
      </body>
    </html>
  );
}
