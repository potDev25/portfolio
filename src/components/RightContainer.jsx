import React, { useEffect, useState } from "react";
import About from "./About";
import Title from "./Title";
import DivContainer from "./DivContainer";
import { projects } from "../json/projects";
import { jobs } from "../json/jobs";

export default function RightContainer({ setActiveSection }) {
  useEffect(() => {
    // Create an intersection observer to watch for section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When a section is in view, update the state
            setActiveSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe the sections
    const sections = document.querySelectorAll(
      "#about, #experience, #projects"
    );
    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      className="xl:h-[100vh] lg:h-[100vh] pt-[100px] px-2 lg:px-10 xl:px-[110px]xl:overflow-scroll lg:overflow-scroll"
      id="right-container"
    >
      <div className="mx-auto max-w-screen-xl w-full lg:w-[80%]">
        <div id="about">
          <About />
        </div>
        <div className="mx-auto max-w-screen-xl w-full" id="experience">
          <Title title={"Work Experience"} />

          <div className="mt-5">
            {jobs.map((item) => (
              <DivContainer
                company={item.company}
                pointer={item.pointer}
                role={item.role}
                year={item.year}
                projects={true}
                link={item.link}
                description={item.description}
                tech={item.tech}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl w-full" id="projects">
          <Title title={"Projects"} />

          <div className="mt-5">
            {projects.map((item) => (
              <DivContainer
                company={item.company}
                pointer={item.pointer}
                role={item.role}
                year={item.year}
                projects={true}
                link={item.link}
                description={item.description}
                tech={item.tech}
                img={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
