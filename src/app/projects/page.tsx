import ProjectCard from "../projects/ProjectCard";
import Navbar from "../components/navbar";

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing projects and experience.",
    repoLink: "https://github.com/tbaoiom/site",
  },
  {
    name: "Trivia RPG",
    description:
      "An interactive trivia adventure built with React and TailwindCSS. Get high scores by answering video game related trivia questions correctly.",
    repoLink: "https://github.com/tbaoiom/trivia-rpg",
    liveLink: "https://trivia-rpg-f3is.vercel.app/",
    imageSrc: "/images/trivia-rpg-screenshot.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vercel"],
  },
  // more projects here as objects
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-blue-500 dark:bg-gray-900 text-white transition-colors duration-500">
      <Navbar />
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
    </div>
  );
}