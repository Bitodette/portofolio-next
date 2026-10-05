import { JetBrains_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import LogoHero from "./LogoHero";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
})

const fraunces = Fraunces({
  subsets: ["latin"],
})

export default function Home(){
  const projects = [
    { id: "01", name: "Stepback Store", desc: "asdasdasdasdasdasdadasdasdsdasdadasdasdsad asdasdasdasdasdasdadasdasdsdasdadasdasdsadasdasdasdasdasdasdadasdasdsdasdadasdasdsad.", year: "2025" },
    { id: "02", name: "Spendio", desc: "asdasdasdasdasdasdadasdasdsdasdadasdasdsad asdasdasdasdasdasdadasdasdsdasdadasdasdsadasdasdasdasdasdasdadasdasdsdasdadasdasdsad.", year: "2025" },
    { id: "03", name: "Kelola-in", desc: "asda.", year: "2026" },
    { id: "04", name: "Nandur", desc: "asdasd.", year: "2026" },
    { id: "05", name: "Line Follower", desc: "Building .", year: "2024" },
  ];
  return(
    <main id="top" className="min-h-screen flex flex-col bg-[#faf9f5]">
      <div className="max-w-6xl w-full mx-auto px-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10">
          <div className="w-full flex flex-col sm:self-start">
            <span className={`${jetbrainsMono.className} block uppercase text-[#6b675a] text-sm tracking-widest mb-5`}>
              Hello, I'm
            </span>
            <span className={`${fraunces.className} text-6xl sm:text-8xl  text-[#c15f3c] mb-3`}>
              Faried
            </span>
            <span className={`${fraunces.className} block max-w-md text-3xl sm:text-4xl text-black mb-5`}>
              I just like building stuff, I guess. ¯\_(ツ)_/¯
            </span>
            <span className={`${inter.className} block max-w-md text-lg text-gray-600 sm:text-justify`}>
              Mostly full-stack web apps, AI experiments, and sometimes . Most of these projects started as a midnight "what if?" and somehow became things I use every day.
            </span>
          </div>
          <div className="shrink-0 w-full sm:w-auto flex justify-center sm:mr-10">
            <LogoHero />
          </div>
        
        
        </div>
        
        <div id="projects" className="w-full scroll-mt-24">
          <div className="flex items-baseline justify-between tracking-wide">
            <h2 className={`${jetbrainsMono.className} block mb-2 uppercase text-[#c15f3c] text-sm tracking-widest`}>
              Featured projects
            </h2>
            <Link 
              href="/projects" 
              className={`${jetbrainsMono.className} text-[#6b675a] hover:text-[#c15f3c] text-xs group flex items-center transition-colors`}
            >
              <span>
                All projects
              </span>
              <ChevronRightIcon className="h-3 w-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:ml-1 group-hover:w-3 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link> 
          </div>
            
          {/*List Projects*/}
          <div className="w-full flex flex-col mb-30">
            {projects.map((project) => (
              <a
                key={project.id}
                href="#"
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] sm:grid-cols-[2.5rem_minmax(0,14rem)_minmax(0,1fr)_4rem_1.5rem] items-baseline gap-x-4 sm:gap-x-6 py-6 first:border-t border-b border-[#e2ddd0] hover:bg-[#f2ece2] px-4 transition-colors duration-300"
              >
                {/* number */}
                <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm col-start-1 row-start-1`}>
                  {project.id}
                </span>
                {/* name */}
                <span className={`${fraunces.className} text-lg text-black group-hover:text-[#c15f3c] transition-colors col-start-2 row-start-1 sm:col-start-2 min-w-0`}>
                  {project.name}
                </span>
                {/* arrow */}
                <ChevronRightIcon className="size-3 text-[#6b675a] group-hover:text-[#c15f3c] group-hover:translate-x-1 transition-all duration-300 col-start-3 row-start-1 sm:col-start-5 justify-self-end" />
                {/* desc */}
                <span className={`${inter.className} text-gray-500 text-sm col-start-2 row-start-2 sm:col-start-3 sm:row-start-1 min-w-0 wrap-anywhere line-clamp-2`}>
                  {project.desc}
                </span>
                {/* year */}
                <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm col-start-2 row-start-3 sm:col-start-4 sm:row-start-1 sm:text-right mt-1 sm:mt-0`}>
                  {project.year}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}