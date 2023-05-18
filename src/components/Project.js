import React from "react";

const Project = ({ title, description, liveLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={liveLink}>Live Demo</a>
        <a href={repoLink}>GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
