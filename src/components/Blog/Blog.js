import React from 'react';
import { Card, Div1, Div2 } from './BlogStyles';
import { Section, SectionTitle, SubSection, Title } from '../../styles/GlobalComponents';
import { blogList } from '../../data/data';

const Blog = () => (
  <div>
    <Section nopadding>
      <SectionTitle main>
        <a href="https://notebase.com/11/all" style={{color:"black"}}>BLOGS</a>
      </SectionTitle>
      {blogList.map((blog) => (
        <Card key={blog.id}>
          <Div1>
            {blog.date}
          </Div1>
          <Div2>
            <Title style={{color: 'black'}}>{blog.title}</Title>
            <a href={blog.link}>Read blog</a>
          </Div2>
        </Card>
      ))}
    </Section>
  </div>
);

export default Blog;