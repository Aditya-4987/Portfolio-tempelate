"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import ProjectsModal from "./ProjectsModal";

interface WorkSectionProps {
  projectsModalOpen: boolean;
  setProjectsModalOpen: (open: boolean) => void;
  projectsAnimating: boolean;
  onProjectsClick: () => void;
}

export default function WorkSection({
  projectsModalOpen,
  setProjectsModalOpen,
  projectsAnimating,
  onProjectsClick,
}: WorkSectionProps) {
  const [expandedProject, setExpandedProject] = useState<string>("Musea");
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      name: "Musea",
      description:
        "AI-generated furniture design exploring organic forms and sustainable materials",
      color: "from-pink-200 to-rose-300",
    },
    {
      name: "Elara",
      description:
        "Interactive light installation responding to human movement and emotion",
      color: "from-purple-200 to-indigo-300",
    },
    {
      name: "Verve",
      description:
        "Parametric architecture project merging traditional and AI-driven design",
      color: "from-blue-200 to-cyan-300",
    },
    {
      name: "Zephyr",
      description:
        "Digital art series exploring the intersection of nature and technology",
      color: "from-green-200 to-emerald-300",
    },
  ];

  // Auto-cycle through projects
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setExpandedProject((currentProject) => {
          const currentIndex = projects.findIndex(
            (p) => p.name === currentProject,
          );
          const nextIndex = (currentIndex + 1) % projects.length;
          return projects[nextIndex].name;
        });
      }, 3000); // Change project every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, projects]);

  // Calculate total height of all projects based on current expanded state
  const getTotalProjectsHeight = () => {
    let totalHeight = 0;
    projects.forEach((project, index) => {
      const isExpanded = expandedProject === project.name;
      totalHeight += isExpanded ? 350 : 60;
      if (index < projects.length - 1) totalHeight += 20; // spacing between projects
    });
    return totalHeight;
  };

  // Calculate starting Y position to center the projects vertically
  const cardHeight = 726;
  const totalProjectsHeight = getTotalProjectsHeight();
  const startingY = Math.max(60, (cardHeight - totalProjectsHeight) / 2); // At least 60px from top for indicator dots

  return (
    <>
      <section
        className={`card primary-bg relative interactive-card overflow-hidden ${projectsAnimating ? "projects-card-expand" : ""}`}
        onClick={onProjectsClick}
        style={{
          width: "447px",
          height: "726px",
          left: "968px",
          top: "149px",
        }}
      >
        {/* Auto-cycle indicator */}
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                expandedProject === project.name
                  ? "bg-black scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
          {!isHovered && (
            <div className="ml-2 text-xs text-gray-500 animate-pulse">Auto</div>
          )}
        </div>

        {/* Projects Container */}
        <div
          className="projects-container absolute w-full"
          style={{ top: `${startingY}px` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.name;

            // Calculate positions dynamically
            let topPosition = 0;
            for (let i = 0; i < index; i++) {
              const prevIsExpanded = expandedProject === projects[i].name;
              topPosition += prevIsExpanded ? 350 : 60;
              topPosition += 20; // spacing between projects
            }

            return (
              <div
                key={project.name}
                className="project-item absolute transition-all duration-700 ease-out px-6"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setExpandedProject(project.name);
                }}
                style={{
                  left: "0px",
                  top: `${topPosition}px`,
                  width: "100%",
                  height: isExpanded ? "350px" : "60px",
                  zIndex: isExpanded ? 10 : 1,
                }}
              >
                {/* Project Header */}
                <div className="project-header flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-medium transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* Arrow Icon - appears when expanded */}
                  <svg
                    className={`arrow-icon transition-all duration-300 ${
                      isExpanded
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                    style={{
                      width: "26px",
                      height: "26px",
                    }}
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.32105 19.9014C5.98258 19.5629 5.98258 19.0141 6.32105 18.6758L17.8416 7.15518H10.4005C9.92189 7.15518 9.53387 6.76715 9.53387 6.28851C9.53387 5.80987 9.92189 5.42184 10.4005 5.42184H19.9339C20.1637 5.42184 20.3842 5.51316 20.5468 5.67569C20.7092 5.83823 20.8005 6.05865 20.8005 6.28851V15.8219C20.8005 16.3005 20.4124 16.6885 19.9339 16.6885C19.4553 16.6885 19.0672 16.3005 19.0672 15.8219V8.38084L7.54669 19.9014C7.20824 20.2398 6.6595 20.2398 6.32105 19.9014Z"
                      fill="black"
                    />
                  </svg>
                </div>

                {/* Expanded Content */}
                <div
                  className={`project-content transition-all duration-500 overflow-hidden ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    height: isExpanded ? "280px" : "0px",
                  }}
                >
                  {/* Project Image */}
                  <div className="project-image rounded-2xl overflow-hidden mb-4 w-full h-48">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
                    >
                      {/* Decorative elements based on project */}
                      {project.name === "Musea" && (
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white/30 rounded-2xl rotate-12 animate-pulse"></div>
                          <div className="w-12 h-20 bg-white/20 rounded-full animate-pulse delay-300"></div>
                          <div className="w-10 h-14 bg-white/25 rounded-lg -rotate-12 animate-pulse delay-700"></div>
                        </div>
                      )}
                      {project.name === "Elara" && (
                        <div className="grid grid-cols-4 gap-2">
                          {[...Array(16)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 bg-white/${15 + (i % 4) * 8} rounded-full animate-pulse`}
                              style={{ animationDelay: `${i * 150}ms` }}
                            />
                          ))}
                        </div>
                      )}
                      {project.name === "Verve" && (
                        <div className="space-y-3">
                          <div className="w-32 h-3 bg-white/30 rounded animate-pulse"></div>
                          <div className="w-28 h-3 bg-white/25 rounded animate-pulse delay-200"></div>
                          <div className="w-36 h-3 bg-white/20 rounded animate-pulse delay-400"></div>
                          <div className="w-24 h-3 bg-white/35 rounded animate-pulse delay-600"></div>
                        </div>
                      )}
                      {project.name === "Zephyr" && (
                        <div className="relative">
                          <div className="w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
                          <div className="absolute top-2 left-2 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-300"></div>
                          <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-600"></div>
                          <div className="absolute top-6 left-6 w-8 h-8 bg-white/25 rounded-full animate-pulse delay-900"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Border - only show if not expanded and not last item */}
                {index < projects.length - 1 && (
                  <div
                    className="border-bottom absolute transition-all duration-300"
                    style={{
                      left: "24px",
                      right: "24px",
                      bottom: "-10px",
                      height: "1px",
                      background: "var(--Secondary)",
                      opacity: isExpanded ? 0 : 0.5,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Modal */}
      <Modal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
      >
        <ProjectsModal initialActiveProject={expandedProject} />
      </Modal>
    </>
  );
}
