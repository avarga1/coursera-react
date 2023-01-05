import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

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

function App() {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Projects projects={projects} />
      <Contact />
    </React.Fragment>
  );
}

export default App;
