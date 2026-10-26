import { ChevronRightIcon } from "@heroicons/react/24/outline";
import LogoHero from "./LogoHero";
import Link from "next/link";
import TechMarquee from "./components/TechMarquee";
import ProjectList from "./components/ProjectList";
import { jetbrainsMono, inter, fraunces } from "./fonts";

export default function Home(){
  return(
    <main className="min-h-screen flex flex-col bg-[#faf9f5]">
      <div className="max-w-6xl w-full mx-auto px-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10">
          <div className="w-full flex flex-col sm:self-start">
            <span className={`${jetbrainsMono.className} block uppercase text-[#6b675a] text-sm tracking-widest mb-5`}>
              Hello, I&apos;m
            </span>
            <span className={`${fraunces.className} text-6xl sm:text-8xl  text-[#c15f3c] mb-3`}>
              Faried
            </span>
            <span className={`${fraunces.className} block max-w-md text-3xl sm:text-4xl text-black mb-5`}>
              I just like building stuff, I guess. ¯\_(ツ)_/¯
            </span>
            <span className={`${inter.className} block max-w-md text-lg text-gray-600 sm:text-justify`}>
              Mostly full-stack web apps, AI experiments, and whatever else seems fun to build. Most of these projects started as a midnight &quot;what if?&quot; and somehow became things I use every day.
            </span>
          </div>
          <div className="hidden sm:flex shrink-0 sm:w-auto justify-center sm:mr-10">
            <LogoHero />
          </div>


        </div>

        <TechMarquee />

        <div className="w-full">
          <div className="flex items-baseline justify-between tracking-wide">
            <h2 className={`${jetbrainsMono.className} block mb-2 uppercase text-[#c15f3c] text-sm tracking-widest`}>
              Featured projects
            </h2>
            <Link
              href="/projects"
              className={`${jetbrainsMono.className} text-[#6b675a] hover:text-[#c15f3c] text-xs group flex items-center transition-colors underline decoration-[#6b675a]/40 underline-offset-4 hover:decoration-[#c15f3c]`}
            >
              <span>
                All projects
              </span>
              <ChevronRightIcon className="h-3 w-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:ml-1 group-hover:w-3 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>

          <ProjectList />
        </div>
      </div>
    </main>
  );
}
