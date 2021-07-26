import React from 'react';
import { Card } from './BlogStyles';
import { Section } from '../../styles/GlobalComponents';
import { blogList } from '../../data/data';

const Blog = () => (
  <div>
    <Section row>
      {blogList.map((blog) => (
        <Card key={blog.id} style={{background: `url(${blog.background})`, backgroundPositionX: 'center'}}>
          <h4>{blog.title}</h4>
          <p>{blog.description}</p>
          <a href={`/blog/${blog.slug}`} style={{fontSize:"medium", fontWeight:"bold", cursor:"pointer"}}>Read more</a>
        </Card>
      ))}
    </Section>
  </div>
);

export default Blog;