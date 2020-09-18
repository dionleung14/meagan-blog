import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="flex flex-row justify-around">
      <Link to="/">Home page</Link>
      <Link to="/category-one">Category 1</Link>
      <Link to="/category-two">Category 2</Link>
      <Link to="/category-three">Category 3</Link>
      {props.logged ? <Link to="/new">New blog</Link> : <div></div>}
    </div>
  );
}
