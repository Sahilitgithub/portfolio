import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil-it",
  description: "Hello, I am a full-stack web developer. You can hire me to create attractive websites such as E-commerce sites, blogs, real estate websites, portfolios, and custom websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster 
          position="top-center" />
          {children}
        </body>
      </html>
  );
}
