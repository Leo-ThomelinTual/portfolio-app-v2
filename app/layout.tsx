import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Common/UI/Footer/Footer";
import Topbar from "./components/Common/UI/Topbar/Topbar";

import { Suspense } from "react";
import Loading from "./loading";
import ScrollIndicator from "./components/Common/Utils/ScrollIndicator/ScrollIndicator";
import PurpleBubble from "./components/Common/Utils/Bubbles/Purple";
import BlueBubble from "./components/Common/Utils/Bubbles/Blue";
import Navbar from "./components/Common/UI/Navbar/Navbar";

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
        <Topbar />
        <ScrollIndicator />

        <Suspense fallback={<Loading />}>{children}</Suspense>

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
