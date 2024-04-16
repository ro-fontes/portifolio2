import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Providers>
        <body
          suppressHydrationWarning
          className={`${inter.className} bg-LIGHT_MAIN_BG dark:bg-DARK_MAIN_BG font-inter antialiased transition-all duration-500`}
        >
          <Header />

          {children}

          <Footer />
        </body>
      </Providers>
    </html>
  );
}
