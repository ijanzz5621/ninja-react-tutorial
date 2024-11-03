//import React from 'react';

interface Props {
  title: string;
  blogs: blog[];
  handleDelete: (id: number) => void;
}

interface blog {
  id: number;
  title: string;
  author: string;
}

const BlogList = ({ title, blogs, handleDelete }: Props) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
