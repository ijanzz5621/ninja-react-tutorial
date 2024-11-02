import { MouseEvent } from "react";

const Home = () => {
  const handleClick = () => {
    console.log("hello, ninjas, ");
  };

  const handleClickAgain = (name: string, event: MouseEvent) => {
    console.log("hello " + name, event);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(event) => handleClickAgain("Mario", event)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
