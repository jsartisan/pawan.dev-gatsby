import React from "react";

import ProjectListItem from "components/projects/ProjectListItem";

export default function ProjectList({ projects }) {
  return projects.map(project => <ProjectListItem project={project} />);
}
