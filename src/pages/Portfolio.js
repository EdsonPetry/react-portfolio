import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/project1",
    },
    // Add more project objects as needed
  ];

  return (
    <section id="portfolio">
      <div>
        <h2>Portfolio</h2>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
