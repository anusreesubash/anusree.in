import React from 'react';
import { Job, Company, Position, Description, Duration } from './ResumeStyles';
import { Section, SubSection, SectionTitle, SectionSubtitle, Title } from '../../styles/GlobalComponents';

const Resume = () => (
  <Section nopadding id="projects">
    <SectionTitle main>RESUME</SectionTitle>

    <SubSection>
      <SectionSubtitle main>Employment</SectionSubtitle>
      <Job>
        <Company>Notebase</Company>
        <Position>Co-Founder</Position>
        <Description>Full-stack web development</Description>
        <Duration> December 2020 - Present</Duration>
        <a style={{padding: '5px'}} href="https://www.notebase.com/">view website</a>
      </Job>
      <Job>
        <Company>Strizly</Company>
        <Position>Data Engineer</Position>
        <Description>Data quality tests using apache spark</Description>
        <Duration>April 2020 - November 2020</Duration>
        <a style={{padding: '5px'}} href="https://www.strizly.com/">view website</a>
      </Job>
      <Job>
        <Company>Extramarks Education</Company>
        <Position>Academic Mentor </Position>
        <Duration>August 2019 - December 2019</Duration>
      </Job>
    </SubSection>

    <SubSection>
      <SectionSubtitle main>Technical Skills</SectionSubtitle>
      <p style={{padding: '2px'}}>React.js, Next.js</p>
      <p style={{padding: '2px'}}>PostgreSQL, MySQL</p>
      <p style={{padding: '2px'}}>CSS  HTML </p>
    </SubSection>

    <SubSection>
      <SectionSubtitle main>Education</SectionSubtitle>
      <Job>
        <Company>MSc Mathematics</Company>
        <p>University of Calicut | 2016 - 2018</p>
      </Job>
      <Job>
        <Company>BSc Mathematics</Company>
        <p>St Aloysius College | 2013 - 2016</p>
      </Job>
    </SubSection>
  </Section>
);

export default Resume;