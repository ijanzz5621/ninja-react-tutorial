// import { MouseEvent } from "react";
import BlogList from "./BlogList";

import { useState, useEffect } from "react";

interface blog {
  id: number;
  title: string;
  author: string;
  body: string;
}

const Home = () => {
  const [blogs, setBlogs] = useState([] as blog[]);
  //const [name, setName] = useState("Sharizan");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null as unknown as string);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

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

  // Can use this useEffect to fetch data
  useEffect(() => {
    // setTimeOut -> to simulate data that slow and only reached after 2 seconds
    setTimeout(() => {
      // get data
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the blog data. status: " + res.status);
          }
          return res.json();
        })
        .then((data) => {
          // set error back to null
          setError(null as unknown as string);
          setBlogs(data);
        })
        .catch((err: Error) => {
          console.log("Error retriving blog data. Error: ", err);
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []); // "[]" leave it empty/remove if to run this functions once during component load

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

      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading blogs: {error}</div>}
      {blogs.length > 0 && (
        <BlogList
          title="Blogs available"
          blogs={blogs}
          handleDelete={handleDelete}
        />
      )}

      {/* filtered blogs */}
      {/* <BlogList
        title="Sharizan's blogs"
        blogs={blogs.filter((blog) => blog.author === "sharizan")}
        handleDelete={handleDelete}
      /> */}

      {/* <button
        onClick={() => {
          setName("Safinaz");
        }}
      >
        Change name value
      </button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
