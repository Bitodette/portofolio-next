import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ProjectArchive from "../components/ProjectArchive";
import { projects } from "../data/projects";
import { jetbrainsMono, fraunces } from "../fonts";

export default function Projects() {
  const sortedYears = projects.map((p) => p.year).sort();
  const yearRange =
    sortedYears[0] === sortedYears[sortedYears.length - 1]
      ? sortedYears[0]
      : `${sortedYears[0]}–${sortedYears[sortedYears.length - 1]}`;

  return (
    <main className="flex flex-col bg-[#faf9f5]">
      <div className="max-w-6xl w-full mx-auto px-7 py-10">
        <div className="flex items-baseline justify-between tracking-wide">
          <div>
            <p className={`${jetbrainsMono.className} block mb-3 uppercase text-[#c15f3c] text-sm tracking-widest`}>
              Projects
            </p>
            <h1 className={`${fraunces.className} text-4xl sm:text-6xl text-black`}>
              Things I built
            </h1>
          </div>
          <Link
            href="/"
            className={`${jetbrainsMono.className} text-[#6b675a] hover:text-[#c15f3c] text-xs group flex items-center transition-colors underline decoration-[#6b675a]/40 underline-offset-4 hover:decoration-[#c15f3c]`}
          >
            <ChevronLeftIcon className="h-3 w-0 opacity-0 translate-x-2 transition-all duration-300 group-hover:mr-1 group-hover:w-3 group-hover:opacity-100 group-hover:translate-x-0" />
            <span>
              Back home
            </span>
          </Link>
        </div>
        <p className={`${jetbrainsMono.className} text-[#6b675a] text-sm mt-5`}>
          {yearRange} · {projects.length} projects
        </p>

        <ProjectArchive />
      </div>
    </main>
  );
}
