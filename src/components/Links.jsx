import React, { useEffect, useState } from "react";

export default function Links({ activeId }) {
  const [hovered, setHovered] = useState(null);
  const hash = window.location.hash;

  // Use useEffect to update the hovered state based on activeId
  useEffect(() => {
    if (activeId === "projects") {
      setHovered(2);
    } else if (activeId === "about") {
      setHovered(0);
    } else if (activeId === "experience") {
      setHovered(1);
    }
  }, [activeId]); // Dependency array ensures this runs when activeId changes

  return (
    <div className="hidden lg:block xl:block">
      <ul className="lists-links">
        <li
          onMouseEnter={() => setHovered(0)}
          onClick={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-2">
            <div
              className={`bg-[#94a3b8] h-[1.5px] transition-all duration-300 ${
                hovered === 0 || hovered === null || hash === "#about"
                  ? "w-[100px]"
                  : "w-[50px]"
              }`}
            ></div>
            <a
              onClick={() => setHovered(0)}
              href="#about"
              className={`${
                hovered === 0 || hovered === null || hash === "#about"
                  ? " text-white"
                  : ""
              }`}
            >
              About
            </a>
          </div>
        </li>
        <li
          onMouseEnter={() => setHovered(1)}
          onClick={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-2">
            <div
              className={`bg-[#94a3b8] h-[1.5px] transition-all duration-300 ${
                hovered === 1 || hash === "#experience"
                  ? "w-[100px]"
                  : "w-[50px]"
              }`}
            ></div>
            <a
              onClick={() => setHovered(1)}
              href="#experience"
              className={`${
                hovered === 1 || hash === "#experience" ? " text-white" : ""
              }`}
            >
              Experience
            </a>
          </div>
        </li>
        <li
          onMouseEnter={() => setHovered(2)}
          onClick={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-2">
            <div
              className={`bg-[#94a3b8] h-[1.5px] transition-all duration-300 ${
                hovered === 2 || hash === "#projects" ? "w-[100px]" : "w-[50px]"
              }`}
            ></div>
            <a
              onClick={() => setHovered(2)}
              href="#projects"
              className={`${hovered === 2 || hash === "#projects" ? " text-white" : ""}`}
            >
              Projects
            </a>
          </div>
        </li>
        <li
          onMouseEnter={() => setHovered(3)}
          onClick={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-2">
            <div
              className={`bg-[#94a3b8] h-[1.5px] transition-all duration-300 ${
                hovered === 3 ? "w-[100px]" : "w-[50px]"
              }`}
            ></div>
            <a href="https://drive.google.com/file/d/1l64dHGgXR7unnvLoctJDlEv7l4a0GVb0/view?usp=sharing" target="_blank" className={`${hovered === 3 ? " text-white" : ""}`}>
              Resume
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
