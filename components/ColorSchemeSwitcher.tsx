"use client";

import { useState, useEffect } from "react";

interface ColorScheme {
  name: string;
  background: string;
  primary: string;
  secondary: string;
  text: string;
  preview: string[];
}

const colorSchemes: ColorScheme[] = [
  {
    name: "Rose Blush",
    background: "#F9F1F0",
    primary: "#FADCD9",
    secondary: "#F8AFA6",
    text: "#000",
    preview: ["#FADCD9", "#F8AFA6", "#F9F1F0", "#000"],
  },
  {
    name: "Ocean Breeze",
    background: "#F0F8FF",
    primary: "#E6F3FF",
    secondary: "#B3D9FF",
    text: "#1a365d",
    preview: ["#E6F3FF", "#B3D9FF", "#F0F8FF", "#1a365d"],
  },
  {
    name: "Forest Zen",
    background: "#F7FDF7",
    primary: "#E8F5E8",
    secondary: "#C6E6C6",
    text: "#1a402a",
    preview: ["#E8F5E8", "#C6E6C6", "#F7FDF7", "#1a402a"],
  },
  {
    name: "Sunset Glow",
    background: "#FFF8F0",
    primary: "#FFE4CC",
    secondary: "#FFB366",
    text: "#8B4513",
    preview: ["#FFE4CC", "#FFB366", "#FFF8F0", "#8B4513"],
  },
  {
    name: "Lavender Dreams",
    background: "#FAF8FF",
    primary: "#E8E0FF",
    secondary: "#C2A8FF",
    text: "#4A148C",
    preview: ["#E8E0FF", "#C2A8FF", "#FAF8FF", "#4A148C"],
  },
  {
    name: "Charcoal Elegance",
    background: "#1a1a1a",
    primary: "#2d2d2d",
    secondary: "#404040",
    text: "#ffffff",
    preview: ["#2d2d2d", "#404040", "#1a1a1a", "#ffffff"],
  },
];

export default function ColorSchemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScheme, setCurrentScheme] = useState(colorSchemes[0]);

  // Apply color scheme to CSS variables
  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement;
    root.style.setProperty("--Background", scheme.background);
    root.style.setProperty("--Primary", scheme.primary);
    root.style.setProperty("--Secondary", scheme.secondary);
    root.style.setProperty("--Text", scheme.text);

    // Store preference
    localStorage.setItem("colorScheme", JSON.stringify(scheme));
  };

  // Load saved color scheme on component mount
  useEffect(() => {
    const saved = localStorage.getItem("colorScheme");
    if (saved) {
      try {
        const savedScheme = JSON.parse(saved);
        setCurrentScheme(savedScheme);
        applyColorScheme(savedScheme);
      } catch (error) {
        console.error("Error loading saved color scheme:", error);
      }
    }
  }, []);

  const handleSchemeChange = (scheme: ColorScheme) => {
    setCurrentScheme(scheme);
    applyColorScheme(scheme);
    setIsOpen(false);
  };

  return (
    <div className="color-scheme-switcher fixed bottom-6 right-6 z-50">
      {/* Scheme Options Panel */}
      {isOpen && (
        <div className="scheme-panel absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-200">
          <h3 className="text-lg font-medium mb-4 text-gray-800">
            Choose Theme
          </h3>
          <div className="space-y-3">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.name}
                onClick={() => handleSchemeChange(scheme)}
                className={`w-full p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  currentScheme.name === scheme.name
                    ? "border-black shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Color Preview */}
                  <div className="flex gap-1">
                    {scheme.preview.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  {/* Scheme Name */}
                  <span className="text-sm font-medium text-gray-700">
                    {scheme.name}
                  </span>
                  {/* Active Indicator */}
                  {currentScheme.name === scheme.name && (
                    <svg
                      className="w-4 h-4 text-green-500 ml-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`scheme-toggle w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group ${
          isOpen ? "scale-110 shadow-xl" : "hover:scale-105"
        }`}
        style={{
          backgroundColor: currentScheme.primary,
          border: `2px solid ${currentScheme.secondary}`,
        }}
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: currentScheme.text }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
