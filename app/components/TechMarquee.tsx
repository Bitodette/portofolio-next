import Image from "next/image";

const techStack = [
  { name: "JavaScript", logo: "/tech/javascript-svgrepo-com.svg" },
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.png" },
  { name: "Express.js", logo: "/tech/expressjs.png" },
  { name: "Tailwind", logo: "/tech/tailwind.svg" },
  { name: "Python", logo: "/tech/python-svgrepo-com.svg" },
  { name: "Django", logo: "/tech/django.png" },
  { name: "Laravel", logo: "/tech/Laravel.png" },
  { name: "MySQL", logo: "/tech/mysql.png" },
  { name: "PostgreSQL", logo: "/tech/postgresql.png" },
  { name: "Docker", logo: "/tech/docker.png" },
  { name: "Linux", logo: "/tech/linux.png" },
];

const marqueeItems = [...techStack, ...techStack];

export default function TechMarquee() {
  return (
    <section aria-label="Tech stack" className="py-10 w-full">
      <div className="overflow-hidden w-full">
        <div className="marquee-content">
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl border border-black/5 p-4 shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:border-black/20"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={96}
                height={96}
                className="w-full h-full object-contain"
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
