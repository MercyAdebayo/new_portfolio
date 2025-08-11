import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Mercy Adebayo | Full Stack + AI Engineer",
  description: "Portfolio of Mercy Adebayo – Full Stack Developer with expertise in AI, LLMs, machine learning, and scalable cloud-native systems. Specializing in React, Node.js, Python, and MLOps.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer", 
    "Machine Learning",
    "React",
    "Node.js",
    "Python",
    "MLOps",
    "Cloud Computing",
    "Next.js",
    "TypeScript"
  ],
  authors: [{ name: "Mercy Adebayo" }],
  creator: "Mercy Adebayo",
  publisher: "Mercy Adebayo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercyadebayo.dev",
    title: "Mercy Adebayo | Full Stack + AI Engineer",
    description: "Full Stack Developer with expertise in AI, LLMs, and scalable systems",
    siteName: "Mercy Adebayo Portfolio",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Mercy Adebayo - Full Stack + AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercy Adebayo | Full Stack + AI Engineer",
    description: "Full Stack Developer with expertise in AI, LLMs, and scalable systems",
    images: ["/placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mercyadebayo.dev" />
        <link rel="icon" href="/placeholder.jpg" />
        <link rel="apple-touch-icon" href="/placeholder.jpg" />
        <meta name="theme-color" content="#DA8CEA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        <StructuredData />
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
