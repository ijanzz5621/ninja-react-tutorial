//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  const title = "Welcome to the new Blog";
  const likes = 50;
  // const person = { name: "Sharizan", age: 43 };
  const link = "https://www.google.com";

  return (
    <>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{ person }</p> Object is not supported */}

        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link} className="href">
          Go to Google
        </a>
      </div>
    </>
  );
}

export default App;
