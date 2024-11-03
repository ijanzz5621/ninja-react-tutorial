// import { MouseEvent } from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  // rename data to blogs
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id: number) => {
    //const newBlogs = data.filter((blog) => blog.id !== id);
    //setData(newBlogs);
    console.log("id: " + id, " has been deleted!");
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
