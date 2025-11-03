"use client";

import React, { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50">
      <nav className="flex justify-center gap-2 md:gap-8 py-4 text-gray-300 font-medium">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-2 py-1 transition-all duration-300 ${
              active === section
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white border-b-2 border-transparent"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
