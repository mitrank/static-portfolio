import React from "react";
import { ExternalLink, Github } from "./Icons";
import Image from "next/image";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  tags,
  githubLink,
  demoLink,
}) => {
  return (
    <div
      key={id}
      className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-black">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 border border-slate-300 rounded-md text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
