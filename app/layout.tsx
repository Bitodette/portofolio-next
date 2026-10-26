import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Faried",
  description:
    "Full-stack web apps, AI experiments, and whatever else I feel like building.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#faf9f5]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
