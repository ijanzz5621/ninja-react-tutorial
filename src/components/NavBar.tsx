// import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The DOJO Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
