import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { jetbrainsMono, fraunces, inter } from "../fonts";
import { projects } from "../data/projects";

const rowGrid =
  "grid grid-cols-[auto_minmax(0,1fr)_auto] sm:grid-cols-[2.5rem_minmax(0,14rem)_minmax(0,1fr)_4rem_1.5rem] items-baseline gap-x-4 sm:gap-x-6 py-6 first:border-t border-b border-[#e2ddd0] hover:bg-[#f2ece2] px-4 transition-colors duration-300";

export default function ProjectList() {
  return (
    <div className="w-full flex flex-col mb-30">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className={`${rowGrid} group`}
        >
          <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm col-start-1 row-start-1`}>
            {project.id}
          </span>
          <span className={`${fraunces.className} text-lg text-black group-hover:text-[#c15f3c] transition-colors col-start-2 row-start-1 min-w-0`}>
            {project.name}
          </span>
          <ChevronRightIcon className="size-3 text-[#6b675a] group-hover:text-[#c15f3c] group-hover:translate-x-1 transition-all duration-300 col-start-3 row-start-1 sm:col-start-5 justify-self-end" />
          <span className={`${inter.className} text-gray-500 text-sm col-start-2 row-start-2 sm:col-start-3 sm:row-start-1 min-w-0 wrap-anywhere line-clamp-2`}>
            {project.desc}
          </span>
          <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm col-start-2 row-start-3 sm:col-start-4 sm:row-start-1 sm:text-right mt-1 sm:mt-0`}>
            {project.year}
          </span>
        </Link>
      ))}
    </div>
  );
}
