import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      image: '/path/to/project1.jpg',
      description: 'This is a description of project 1',
      link: '/project1'
    },
    {
      title: 'Project 2',
      image: '/path/to/project2.jpg',
      description: 'This is a description of project 2',
      link: '/project2'
    },
    // add more projects here
  ];

  return (
    <div className="grid">
      {projects.map(project => (
        <div className="card" key={project.title}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
