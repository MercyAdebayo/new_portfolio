
// import type { Metadata } from "next";
// import { ReactNode } from "react";
// import "./globals.css";
// import Navbar from "@/components/Navbar";

// export const metadata: Metadata = {
//   title: "Mercy Adebayo | Full Stack + AI Engineer",
//   description:
//     "Portfolio of Mercy Adebayo – Full Stack Developer with expertise in AI, LLMs, and scalable systems.",
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" className="h-full">
//       <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
//         <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
//           <Navbar />
//         </header>

//         <main className="flex-1">{children}</main>

//         <footer className="sticky bottom-0 z-50 text-center text-sm text-zinc-500 bg-zinc-950/90 backdrop-blur border-t border-zinc-800 py-2">
//           © {new Date().getFullYear()} Mercy Adebayo. All rights reserved.
//         </footer>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
          <Navbar />
        </header>

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
