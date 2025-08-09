import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projectsData"; 

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Preview Image */}
            <img
              src={proj.logo}
              alt={`${proj.title} preview`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Title & Short */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.short}</p>
            </div>

            {/* Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href={proj.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition"
                title="View Project"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={proj.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition"
                title="View Code"
              >
                <FaGithub /> Code
              </a>
            </div>

            {/* Description */}
            <div className="bg-neutral-800 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2 text-lg">Description</h4>
              <p className="text-sm leading-relaxed text-gray-300">{proj.description}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold text-lg mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
