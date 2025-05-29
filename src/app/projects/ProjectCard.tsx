import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  imageSrc?: string;
  techStack?: string[];
}

export default function ProjectCard({
  name,
  description,
  repoLink,
  liveLink,
  imageSrc,
  techStack = [],
}: ProjectCardProps) {
  return (
    <div className="
        border-2 
        border-blue-300 dark:white
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        hover:shadow-2xl 
        hover:border-white
        transition-all 
        duration-300
      ">
      {imageSrc && (
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={`${name} screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Live Demo
            </a>
          )}
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}