import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helix Agent | Autonomous AI Development Environment",
  description:
    "Helix Agent is a next-generation autonomous AI development system designed for intelligent execution, structural analysis, and scalable local-first operation.",

  keywords: [
    "Helix Agent",
    "AI Development",
    "Autonomous AI",
    "Local-first AI",
    "AI Infrastructure",
    "AI Agent",
  ],

  authors: [
    {
      name: "Helix Agent",
    },
  ],

  creator: "Helix Agent",

  openGraph: {
    title: "Helix Agent",
    description:
      "Autonomous Intelligence, Engineered Without Limits.",
    url: "https://helix-agent.ai",
    siteName: "Helix Agent",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Helix Agent",
    description:
      "Autonomous Intelligence, Engineered Without Limits.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}