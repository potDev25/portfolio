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
        >
          <div className="flex items-center gap-2">
            <a id="check" href="https://drive.google.com/file/d/15d1bU8oAwnFuKKtgVQU1fUO5Gr4qGjfE/view?usp=sharing" target="_blank" 
            className={`bg-[#4f46e5] text-white font-bold uppercase rounded-md px-4 py-2 text-lg tracking-wider w-[200px] text-center`}>
              Check Resume
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
