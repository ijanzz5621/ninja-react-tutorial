// import { MouseEvent } from "react";
import BlogList from "./BlogList";

import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "This is my new website",
      author: "sharizan",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "Welcome to my party!",
      author: "safinaz",
      id: 2,
    },
    {
      title: "Home Decoration",
      body: "Home decoration for a new house",
      author: "dalila",
      id: 3,
    },
    {
      title: "Home Renovation!",
      body: "Home Renovation for a new house",
      author: "sharizan",
      id: 4,
    },
  ]);

  //let name = "Mario";

  // const [name, setName] = useState("Mario");
  // const [age, setAge] = useState("43");

  // const handleClick = () => {
  //   setName("Luigi");
  //   setAge("12");
  //   console.log("hello, " + name);
  // };

  // const handleClickAgain = (name: string, event: MouseEvent) => {
  //   console.log("hello " + name, event);
  // };

  // function handleBlogs() {
  //   setBlogs(blogs);
  // }

  // // temp
  // handleBlogs();

  return (
    <div className="home">
      {/* <h2>Homepage</h2>

      <p>
        {name} is {age} years old
      </p>

      <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={(event) => handleClickAgain("Mario", event)}>
        Click me again
      </button> */}

      <BlogList title="All Blogs" blogs={blogs} />

      {/* filtered blogs */}
      <BlogList
        title="Sharizan's blogs"
        blogs={blogs.filter((blog) => blog.author === "sharizan")}
      />
    </div>
  );
};

export default Home;
