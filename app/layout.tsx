import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Risk Dashboard",
  description: "Analyze risk and returns for various asset classes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 overflow-x-hidden`}>
        <div className="flex min-h-screen">
          <DashboardSidebar />
          <div className="flex-1 ml-64 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
