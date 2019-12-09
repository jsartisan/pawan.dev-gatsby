import React from "react";

export default function ProjectListItem({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="d-block p-3 shadow-sm mb-4 rounded"
    >
      <div className="d-flex align-items-center">
        <h6 className="flex-grow-1 font-pop font-weight-medium">
          {project.name}
        </h6>
        {project.logo && (
          <img
            alt={project.name}
            src={project.logo}
            style={{
              height: 30,
              padding: project.padding ? project.padding : 0,
              backgroundColor: project.background ? project.background : "#FFF",
              borderRadius: 5,
            }}
          />
        )}
      </div>
    </a>
  );
}
