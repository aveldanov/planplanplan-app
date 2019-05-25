import React from 'react';
import ProjectSummary from './ProjectSummary';

//Destruturing 
// projects === props.projects
const ProjectList = ({ projects }) => {
  // console.log(projects);

  return (
    <div className="project-list section">

      {/* checking if we have projects then - do mapping */}
      {projects && projects.map((project) => {
        return (
          <ProjectSummary
            key={project.id}
            project={project} />
        )
      })}


    </div>
  )
}

export default ProjectList
