import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "../Icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative bg-linear-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              Software Developer
            </span>
          </div>
          <h1 className="mb-6 text-slate-600">
            Hi, I'm <span className="text-blue-600">Mitrank Shah</span>
          </h1>
          <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
            I'm a full-stack developer passionate about building beautiful,
            functional web applications that solve real-world problems. I
            specialize in React, Node.js, and modern web technologies.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/mitrank"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-black"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mitrank-shah-b3a8b21b1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-black"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mitrankshah2@gmail.com"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-black"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
