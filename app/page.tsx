"use client";

import { useState } from "react";
import Header from "../components/Header";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import ColorSchemeSwitcher from "../components/ColorSchemeSwitcher";

export default function Portfolio() {
  // Global modal and animation states
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [aboutAnimating, setAboutAnimating] = useState(false);
  const [contactAnimating, setContactAnimating] = useState(false);
  const [projectsAnimating, setProjectsAnimating] = useState(false);

  // Global handlers for header navigation
  const handleAboutClick = () => {
    setAboutAnimating(true);
    setTimeout(() => {
      setAboutModalOpen(true);
      setAboutAnimating(false);
    }, 600);
  };

  const handleContactClick = () => {
    setContactAnimating(true);
    setTimeout(() => {
      setContactModalOpen(true);
      setContactAnimating(false);
    }, 500);
  };

  const handleProjectsClick = () => {
    setProjectsAnimating(true);
    setTimeout(() => {
      setProjectsModalOpen(true);
      setProjectsAnimating(false);
    }, 700);
  };
  return (
    <div className="portfolio-container">
      {/* Header */}
      <Header
        onProjectsClick={handleProjectsClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />

      {/* Main Slogan/Intro Section */}
      <section
        className="card primary-bg interactive-card"
        style={{
          width: "565px",
          height: "479px",
          left: "24px",
          top: "146px",
        }}
      >
        {/* Decorative Flower Icon */}
        <svg
          className="flower-icon"
          style={{
            position: "absolute",
            right: "30px",
            top: "34px",
            width: "119px",
            height: "119px",
          }}
          viewBox="0 0 119 120"
          fill="none"
        >
          <g clipPath="url(#clip0_0_44)">
            <path
              d="M89.5 60C89.5 46.8 78.7 36 65.5 36C52.3 36 41.5 46.8 41.5 60C41.5 73.2 52.3 84 65.5 84C78.7 84 89.5 73.2 89.5 60Z"
              fill="#F8AFA6"
              opacity="0.3"
            />
            <path
              d="M65.5 45C70.5 45 74.5 49 74.5 54C74.5 59 70.5 63 65.5 63C60.5 63 56.5 59 56.5 54C56.5 49 60.5 45 65.5 45Z"
              fill="#F8AFA6"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_44">
              <rect
                width="119"
                height="119"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Main Title */}
        <div
          className="main-title"
          style={{
            position: "absolute",
            left: "24px",
            top: "225px",
            width: "475px",
          }}
        >
          <h1 className="text-5xl leading-none">
            <span className="font-bold">Artist Redefining </span>
            <span className="font-normal italic">Architecture</span>
            <span className="font-bold"> with AI-Driven Design</span>
          </h1>
        </div>
      </section>

      {/* Portrait Image */}
      <div
        className="portrait-container card overflow-hidden interactive-card portrait-gradient"
        style={{
          width: "330px",
          height: "476px",
          left: "614px",
          top: "149px",
        }}
      >
        <div className="w-full h-full flex items-end justify-center p-6">
          <div className="w-full max-w-64 h-80 bg-gradient-to-t from-white/20 to-transparent rounded-2xl flex items-end justify-center p-4">
            <div className="w-32 h-32 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <WorkSection
        projectsModalOpen={projectsModalOpen}
        setProjectsModalOpen={setProjectsModalOpen}
        projectsAnimating={projectsAnimating}
        onProjectsClick={handleProjectsClick}
      />

      {/* Contact Sections */}
      <ContactSection
        aboutModalOpen={aboutModalOpen}
        setAboutModalOpen={setAboutModalOpen}
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
        aboutAnimating={aboutAnimating}
        contactAnimating={contactAnimating}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />

      {/* Color Scheme Switcher */}
      <ColorSchemeSwitcher />
    </div>
  );
}
