//import React from 'react';

interface Props {
  title: string;
  blogs: blog[];
}

interface blog {
  id: number;
  title: string;
  author: string;
}

const BlogList = ({ title, blogs }: Props) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;