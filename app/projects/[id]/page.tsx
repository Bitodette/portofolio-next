import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../../data/projects";
import { jetbrainsMono, inter, fraunces } from "../../fonts";

const sectionLabel = "block uppercase text-[#6b675a] text-xs tracking-widest mb-3";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return {};
  }
  return {
    title: `${project.name} · Faried`,
  };
}

function ProjectSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <p className={`${jetbrainsMono.className} ${sectionLabel}`}>
        {label}
      </p>
      {children}
    </section>
  );
}

export default async function ProjectDetail(
  props: PageProps<"/projects/[id]">
) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  const hasSpecs = project.specs && project.specs.length > 0;

  return (
    <main className="flex flex-col bg-[#faf9f5]">
      <div className="max-w-6xl w-full mx-auto px-7 py-10">
        <div className="flex items-baseline justify-between tracking-wide">
          <p className={`${jetbrainsMono.className} block uppercase text-[#c15f3c] text-sm tracking-widest`}>
            {project.id}
          </p>
          <Link
            href="/projects"
            className={`${jetbrainsMono.className} text-[#6b675a] hover:text-[#c15f3c] text-xs group flex items-center transition-colors underline decoration-[#6b675a]/40 underline-offset-4 hover:decoration-[#c15f3c]`}
          >
            <ChevronLeftIcon className="h-3 w-0 opacity-0 translate-x-2 transition-all duration-300 group-hover:mr-1 group-hover:w-3 group-hover:opacity-100 group-hover:translate-x-0" />
            <span>
              All projects
            </span>
          </Link>
        </div>

        <div className="border-t border-[#e2ddd0] mt-3 pt-10 pb-16">
          <h1 className={`${fraunces.className} text-5xl sm:text-7xl text-black`}>
            {project.name}
          </h1>
          <p className={`${jetbrainsMono.className} text-[#6b675a] text-sm mt-6`}>
            {project.year}
          </p>

          {project.stack && project.stack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`${jetbrainsMono.className} text-xs uppercase tracking-wider text-[#6b675a] bg-white border border-[#e2ddd0] rounded px-2.5 py-1`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.plain && (
            <ProjectSection label="In a nutshell">
              <p className={`${inter.className} text-lg text-gray-600 leading-relaxed`}>
                {project.plain}
              </p>
            </ProjectSection>
          )}

          <p className={`${inter.className} text-lg text-gray-600 mt-8 leading-relaxed`}>
            {project.desc}
          </p>

          {project.why && (
            <ProjectSection label="Why I built this">
              <p className={`${inter.className} text-lg text-gray-600 leading-relaxed`}>
                {project.why}
              </p>
            </ProjectSection>
          )}

          {project.problem && (
            <ProjectSection label="What it solves">
              <p className={`${inter.className} text-lg text-gray-600 leading-relaxed`}>
                {project.problem}
              </p>
            </ProjectSection>
          )}

          {hasSpecs && (
            <section className="mt-10">
              <p className={`${jetbrainsMono.className} ${sectionLabel}`}>
                How it&apos;s built
              </p>
              <dl>
                {project.specs!.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid sm:grid-cols-[10rem_minmax(0,1fr)] gap-x-6 gap-y-1 items-baseline py-4 border-t border-[#e2ddd0]${index === project.specs!.length - 1 ? " border-b" : ""}`}
                  >
                    <dt className={`${jetbrainsMono.className} text-xs uppercase tracking-widest text-[#6b675a]`}>
                      {spec.label}
                    </dt>
                    <dd className={`${inter.className} text-gray-600 leading-relaxed`}>
                      {spec.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {project.result && (
            <ProjectSection label="Result">
              <p className={`${inter.className} text-lg text-gray-600 leading-relaxed`}>
                {project.result}
              </p>
            </ProjectSection>
          )}

          {project.images && project.images.length > 0 && (
            <section className="mt-14">
              <p className={`${jetbrainsMono.className} ${sectionLabel}`}>
                Screenshots
              </p>
              <div className="flex flex-col gap-6">
                {project.images.map((src, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${project.name} image ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-lg border border-[#e2ddd0] bg-white"
                  />
                ))}
              </div>
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section className="mt-12">
              <p className={`${jetbrainsMono.className} ${sectionLabel}`}>
                Links
              </p>
              <div className="flex flex-col items-start gap-2">
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-[#c15f3c] hover:text-[#a04d30] transition-colors inline-flex items-center gap-2"
                    >
                      <span className={`${fraunces.className} text-xl`}>
                        {link.label}
                      </span>
                      <ArrowTopRightOnSquareIcon className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      aria-disabled="true"
                      title={link.note}
                      className="inline-flex items-center gap-2 text-[#b5ad99] select-none cursor-not-allowed"
                    >
                      <span className={`${fraunces.className} text-xl line-through decoration-[#d5cfc0]`}>
                        {link.label}
                      </span>
                      {link.note && (
                        <em className={`${jetbrainsMono.className} text-xs not-italic`}>
                          ({link.note})
                        </em>
                      )}
                    </span>
                  )
                )}
              </div>
            </section>
          )}

          {project.certificate && (
            <section className="mt-12">
              <p className={`${jetbrainsMono.className} ${sectionLabel}`}>
                Certificate
              </p>
              <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-[#c15f3c] hover:text-[#a04d30] transition-colors inline-flex items-center gap-2"
              >
                <span className={`${fraunces.className} text-xl`}>
                  View certificate (PDF)
                </span>
                <ArrowTopRightOnSquareIcon className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </section>
          )}
        </div>

        <Link
          href={`/projects/${nextProject.id}`}
          className="group border-t border-[#e2ddd0] pt-8 pb-4 flex items-baseline justify-between w-full"
        >
          <span className={`${jetbrainsMono.className} uppercase text-[#6b675a] text-sm tracking-widest`}>
            Next project
          </span>
          <span className={`${fraunces.className} text-2xl sm:text-3xl text-[#6b675a] group-hover:text-[#c15f3c] transition-colors flex items-center gap-2`}>
            {nextProject.name}
            <ChevronRightIcon className="size-4 text-[#6b675a] group-hover:text-[#c15f3c] group-hover:translate-x-1 transition-all duration-300 self-center" />
          </span>
        </Link>
      </div>
    </main>
  );
}
