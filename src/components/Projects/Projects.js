import React from 'react';

import { ProjectTitle, GridContainer} from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../data/data';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>PROJECTS</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <div style={{padding:'10px'}} key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <div>{project.description}</div>
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;