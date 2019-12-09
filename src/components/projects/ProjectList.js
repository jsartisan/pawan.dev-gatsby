import React from "react";

import ProjectListItem from "components/projects/ProjectListItem";

export default function ProjectList({ projects }) {
  return projects.map((project, index) => (
    <ProjectListItem key={`p-${index}`} project={project} />
  ));
}
