import ProjectCard from "../projects/ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing projects and experience.",
    repoLink: "https://github.com/tbaoiom/site",
  },
  // more projects here as objects
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </main>
  );
}
