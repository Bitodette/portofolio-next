import Link from "next/link";
import { projects } from "../data/projects";
import { jetbrainsMono, fraunces, inter } from "../fonts";

export default function ProjectArchive() {
  return (
    <div className="border-b border-[#e2ddd0] mb-30">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-8 border-t border-[#e2ddd0] py-10"
        >
          <div className="min-w-0">
            <div className="flex items-baseline justify-between mb-4">
              <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm tracking-widest`}>
                {project.id}
              </span>
              <span className={`${jetbrainsMono.className} text-[#6b675a] text-sm tracking-widest`}>
                {project.year}
              </span>
            </div>
            <h2 className={`${fraunces.className} text-4xl sm:text-5xl text-black group-hover:text-[#c15f3c] group-hover:translate-x-1 transition-all duration-300`}>
              {project.name}
            </h2>
            <p className={`${inter.className} text-gray-500 max-w-xl mt-4 line-clamp-2 min-w-0 wrap-anywhere`}>
              {project.desc}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={`${fraunces.className} hidden sm:block text-[7rem] leading-none text-[#eae3d5] group-hover:text-[#f3dccd] transition-colors duration-500`}
          >
            {project.id}
          </span>
        </Link>
      ))}
    </div>
  );
}
