interface ProjectCardProps {
  name: string;
  description: string;
  repoLink: string;
}

export default function ProjectCard({ name, description, repoLink }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-md p-6 shadow-sm hover:shadow-md transition cursor-pointer">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Repo
      </a>
    </div>
  );
}
