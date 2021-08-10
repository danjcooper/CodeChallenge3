import React from "react";
import "./style.css";

const Homepage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <>
      <h1 className="heading">Welcome</h1>
      <form>
        <label>Github Username</label>
        <input type="text" placeholder="github username"></input>
        <input type="submit" onClick={handleClick}></input>
      </form>
    </>
  );
};

export default Homepage;
