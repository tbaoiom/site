"use client";

import Navbar from "./components/navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />

      <main className="max-w-4xl mx-auto p-8 space-y-12">
        {/* Header */}
        <header className="flex items-center space-x-8">
          <div>
            <h1 className="text-4xl font-bold">Tai Bui</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Student / Developer</p>
          </div>

          <img
            src="/pfp.png"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover"
          />
        </header>

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-lg leading-relaxed">
            I'm Tai, a passionate student set to graduate in the spring of 2024. When I'm not buried in textbooks, you'll find me diving headfirst into the world of development, crafting websites, and bringing game projects to life in my spare moments. I've always been drawn to the idea of creating digital experiences. Games are my ultimate escape—they inspire me with their creativity. But I also enjoy software development and am learning constantly, turning ideas into reality. This is my website where I showcase my projects. Whether it's building captivating websites or concocting immersive game worlds, I'm all about blending my hobby with my passion for software development. Thanks for stopping by! Hopefully, we can connect.
          </p>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
          <div className="space-y-6">
            {[
              { year: "2019", event: "Started attending University of Colorado, Denver, Bachelor's in Computer Science and minor in Biology." },
              { year: "2023", event: "Intern at CU DIncuvator, A CU Denver Organization on Campus" },
              { year: "2024", event: "One of many winners of the CU BOLD Design-a-thon, with the project, TravelMate." },
              { year: "2025", event: "Started a Master's program in Computer Science at the University of Colorado, Denver" },
            ].map(({ year, event }) => (
              <div key={year} className="flex space-x-4">
                <div className="font-mono text-gray-500 dark:text-gray-400 w-20">{year}</div>
                <div>{event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Socials */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Socials</h2>
          <div className="flex space-x-8 items-center">
            <a
              href="https://github.com/tbaoiom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <GithubIcon />
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tai-bui9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-500 transition"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

// Icons for social links
function GithubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.76-1.604-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.654.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.813 1.103.813 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.414v1.561h.047c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.268 2.371 4.268 5.455v6.285zM5.337 7.433a2.07 2.07 0 11.001-4.141 2.07 2.07 0 01-.001 4.141zm1.778 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.451C0 23.207.792 24 1.771 24h20.451c.98 0 1.778-.793 1.778-1.778V1.771C24 .792 23.206 0 22.225 0z" />
    </svg>
  );
}
