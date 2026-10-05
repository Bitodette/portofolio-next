import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { Fraunces } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2ddd0] bg-[#faf9f5]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <Link
          href="/"
          className={`${fraunces.className} text-lg text-black hover:text-[#c15f3c] transition-colors`}
        >
          Faried
        </Link>
      </div>
    </nav>
  );
}
