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
  {
    name: "Disentangled Multimodal Model",
    description: "A multimodal machine learning model designed to learn disentangled and interpretable representations on clinical and biomedical data. Used to classify disease subtypes specific to breast cancer.",
    repoLink: "https://github.com/taib9/disentangled-mml",
  },
  {
    name: "Calendar App",
    description:
      "A sleek calendar application to manage events and tasks efficiently. Also find upcoming games, movies, and events.",
    repoLink: "https://github.com/tbaoiom/calendar-app",
    liveLink: "https://calendar-app-delta-roan.vercel.app/",
    imageSrc: "/images/calendar-app-screenshot.png",
    techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "NextAuth.js",
    "TMDB API",
    "RAWG API",
    "Ticketmaster API",
    "Lucide React",
    "date-fns"
  ]
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