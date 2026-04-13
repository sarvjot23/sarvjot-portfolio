import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotPlaceholder from "@/components/ui/ChatbotPlaceholder";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvjot Singh | AI Engineer",
  description:
    "Portfolio of Sarvjot Singh — AI Engineer specializing in LLM integration, AI automation workflows, and agentic AI systems.",
  keywords: ["AI Engineer", "LLM", "n8n", "Automation", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotPlaceholder />
        <Analytics />
      </body>
    </html>
  );
}
