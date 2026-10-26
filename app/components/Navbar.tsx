import Link from "next/link";
import { fraunces } from "../fonts";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2ddd0] bg-[#faf9f5]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <Link
          href="/"
          className={`${fraunces.className} text-2xl text-black hover:text-[#c15f3c] transition-colors`}
        >
          Faried
        </Link>
      </div>
    </nav>
  );
}
