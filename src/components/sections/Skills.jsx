"use client";

import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Redux",
    ],
    backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "DynamoDB",
      "Python",
      "Flask",
      "FastAPI",
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "VS Code",
      "PuTTY",
      "BurpSuite",
      "BitBucket",
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & Others" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 w-full min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 pt-10">
            <h2 className="mb-4 text-black text-xl font-semibold">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 pt-5">
              Here are some of the technologies I work with regularly
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-center mb-8 bg-slate-200 rounded-lg p-1 w-full max-w-md mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer flex-1 px-4 py-2 rounded-md transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {skills[activeTab].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-md text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
