"use client";

import { useState } from "react";

interface ProjectsModalProps {
  initialActiveProject?: string;
}

export default function ProjectsModal({
  initialActiveProject = "Musea",
}: ProjectsModalProps) {
  const [activeProject, setActiveProject] =
    useState<string>(initialActiveProject);

  const projects = [
    {
      name: "Musea",
      description:
        "AI-generated furniture design exploring organic forms and sustainable materials",
      fullDescription:
        "Musea represents a revolutionary approach to furniture design, where artificial intelligence collaborates with human creativity to generate forms that feel both familiar and otherworldly. The collection explores organic geometries inspired by natural growth patterns, utilizing sustainable materials and 3D printing technologies to create pieces that challenge traditional manufacturing paradigms.",
      year: "2024",
      category: "Product Design",
      technologies: ["AI Generation", "3D Printing", "Sustainable Materials"],
      color: "from-pink-200 to-rose-300",
      awards: ["Design Museum Award 2024", "Sustainable Design Excellence"],
    },
    {
      name: "Elara",
      description:
        "Interactive light installation responding to human movement and emotion",
      fullDescription:
        "Elara is an immersive light installation that bridges the gap between human emotion and digital expression. Using advanced computer vision and machine learning algorithms, the installation reads human movement, facial expressions, and proximity to generate real-time light compositions that reflect the emotional state of viewers, creating a deeply personal and transformative experience.",
      year: "2023",
      category: "Interactive Installation",
      technologies: [
        "Computer Vision",
        "Machine Learning",
        "Real-time Rendering",
      ],
      color: "from-purple-200 to-indigo-300",
      awards: ["Interactive Arts Prize 2023", "Innovation in Digital Art"],
    },
    {
      name: "Verve",
      description:
        "Parametric architecture project merging traditional and AI-driven design",
      fullDescription:
        "Verve reimagines architectural spaces through the lens of parametric design enhanced by artificial intelligence. The project develops adaptive building systems that respond to environmental conditions, human usage patterns, and urban dynamics. Each structure becomes a living entity that evolves and optimizes itself over time, representing the future of responsive architecture.",
      year: "2023",
      category: "Architecture",
      technologies: [
        "Parametric Design",
        "Environmental AI",
        "Adaptive Systems",
      ],
      color: "from-blue-200 to-cyan-300",
      awards: ["Architectural Innovation Award", "Green Building Excellence"],
    },
    {
      name: "Zephyr",
      description:
        "Digital art series exploring the intersection of nature and technology",
      fullDescription:
        "Zephyr is a contemplative digital art series that explores the delicate balance between natural phenomena and technological interpretation. Through generative algorithms inspired by wind patterns, water flow, and organic growth, the series creates ever-evolving visual compositions that question our relationship with both nature and artificial intelligence.",
      year: "2022",
      category: "Digital Art",
      technologies: [
        "Generative Algorithms",
        "Data Visualization",
        "Natural Simulation",
      ],
      color: "from-green-200 to-emerald-300",
      awards: ["Digital Arts Foundation Award", "Excellence in Generative Art"],
    },
  ];

  const activeProjectData =
    projects.find((p) => p.name === activeProject) || projects[0];

  return (
    <div className="projects-modal-content">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-medium mb-2">Selected Works</h2>
        <p className="text-lg text-gray-700">
          Exploring the intersection of artificial intelligence and creative
          expression
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-medium mb-4">Projects</h3>
          <div className="space-y-2">
            {projects.map((project) => (
              <button
                key={project.name}
                onClick={() => setActiveProject(project.name)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeProject === project.name
                    ? "bg-white shadow-md border-2 border-black"
                    : "bg-white/50 hover:bg-white/70 border-2 border-transparent"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-600">
                      {project.year} • {project.category}
                    </p>
                  </div>
                  {activeProject === project.name && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Project Image */}
            <div
              className={`w-full h-64 bg-gradient-to-br ${activeProjectData.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}
            >
              {/* Custom visuals for each project */}
              {activeProject === "Musea" && (
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-white/30 rounded-3xl rotate-12 animate-pulse"></div>
                  <div className="w-20 h-32 bg-white/20 rounded-full animate-pulse delay-300"></div>
                  <div className="w-16 h-20 bg-white/25 rounded-2xl -rotate-12 animate-pulse delay-700"></div>
                </div>
              )}
              {activeProject === "Elara" && (
                <div className="grid grid-cols-5 gap-3">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 bg-white/${15 + (i % 4) * 10} rounded-full animate-pulse`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              )}
              {activeProject === "Verve" && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-32 h-6 bg-white/30 rounded animate-pulse"></div>
                    <div className="w-20 h-6 bg-white/25 rounded animate-pulse delay-200"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-24 h-6 bg-white/25 rounded animate-pulse delay-400"></div>
                    <div className="w-28 h-6 bg-white/20 rounded animate-pulse delay-600"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-36 h-6 bg-white/30 rounded animate-pulse delay-800"></div>
                    <div className="w-16 h-6 bg-white/25 rounded animate-pulse delay-1000"></div>
                  </div>
                </div>
              )}
              {activeProject === "Zephyr" && (
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-3 left-3 w-26 h-26 bg-white/15 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-600"></div>
                  <div className="absolute top-9 left-9 w-14 h-14 bg-white/25 rounded-full animate-pulse delay-900"></div>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-medium">
                    {activeProjectData.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {activeProjectData.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  {activeProjectData.category}
                </p>
                <p className="text-gray-800 leading-relaxed">
                  {activeProjectData.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h4 className="font-medium mb-2">Recognition</h4>
                <ul className="space-y-1">
                  {activeProjectData.awards.map((award) => (
                    <li
                      key={award}
                      className="text-gray-700 text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit Button */}
              <button className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                Visit Project
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
