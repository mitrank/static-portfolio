"use client";

import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const projects = [
    {
      title: "FinoGrow",
      description:
        "A full-stack personal finance dashboard with bank integration, and interactive charts to deliver real-time transaction and category insights.",
      image: `${baseUrl}/images/finogrow.png`,
      tags: [
        "React",
        "NextJS",
        "NeonDB & Drizzle ORM",
        "Plaid",
        "HonoJS",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      github: "https://github.com/mitrank/finogrow",
      demo: "https://finogrow.vercel.app",
    },
    {
      title: "XORA",
      description:
        "A modern SaaS landing page, featuring responsive design patterns and interactive UI components.",
      image: `${baseUrl}/images/xora.png`,
      tags: ["React", "Vite", "Shadcn UI", "Tailwind CSS"],
      github: "https://github.com/mitrank/xora",
      demo: "https://mitrank.github.io/xora",
    },
    {
      title: "Aora",
      description:
        "A production-ready mobile video sharing app, featuring user authentication, video upload & discovery, search, bookmarks, and modular reusable components.",
      image: `${baseUrl}/images/aora.png`,
      tags: ["React Native", "Expo", "Tailwind CSS", "AppWrite"],
      github: "https://github.com/mitrank/aora-app",
      // demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white w-full min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-4 text-black text-xl font-semibold">
              Featured Projects
            </h2>
            <p className="text-slate-600">
              A selection of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                id={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubLink={project.github}
                demoLink={project.demo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
