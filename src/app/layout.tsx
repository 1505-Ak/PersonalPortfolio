import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Computer Science Student",
  description: "Personal portfolio showcasing my skills in Machine Learning, Software Engineering, and Data Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
          {children}
        </main>
      </body>
    </html>
  );
} 