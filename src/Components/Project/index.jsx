import React, { useState } from "react";
import "./Project.css";
import { projects } from "../../data";

const Project = () => {
  const [activeProjects, setActiveProjects] = useState(projects || []);

  return (
    <section id="project">
      <h1 className="title">
        Our <span className="g-text">Projects</span>
      </h1>

      <div className="project_container">
        {activeProjects.length > 0 ? (
          activeProjects.map((project, index) => (
            <div className="project_card" key={index}>
              <div className="image_container">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <h3 className="name">{project.title}</h3>
              <p className="text_muted description">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects available.</p>
        )}
      </div>
    </section>
  );
};

export default Project;
