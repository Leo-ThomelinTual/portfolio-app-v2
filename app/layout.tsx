import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Footer from "./_components/UI/Footer/Footer";

import { Suspense } from "react";
import Loading from "./loading";
import ScrollIndicator from "./_components/Utils/ScrollIndicator/ScrollIndicator";
import Navbar from "./_components/UI/Navbar/Navbar";
import Head from "next/head";
import Cursor from "./_components/Utils/Cursor/Cursor";
import Bubble from "./_components/Utils/Bubble/Bubble";

const jetbrains = JetBrains_Mono({
  variable: "--jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Léo - Web portfolio",
  description: "Web portfolio de Léo Thomelin-Tual | Développeur web frontend et backend junior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jetbrains.className} lang="fr">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body>
        <Cursor />
        <ScrollIndicator />

        <Suspense fallback={<Loading />}>{children}</Suspense>

        <div className="hidden md:flex">
          <Bubble className="-right-40 -bottom-50 h-150 w-150 bg-(--color-primary)" />
          <Bubble className="-left-40 -top-50 h-150 w-150 bg-purple-900" />
        </div>
        <Navbar />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
