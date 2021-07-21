import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map(curProj => {
        return (<ProjectItem key={curProj.id} {...curProj}/>)
      })}</div>
    </div>
  );
}

export default ProjectList;
