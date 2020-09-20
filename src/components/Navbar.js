import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="flex flex-row justify-around bg-red-700 h-12 items-center">
      <div>
        <Link className="bg-green-400 mx-4" to="/">
          Home page
        </Link>
        <Link className="bg-blue-400 mx-4" to="/category-one">
          Category 1
        </Link>
      </div>
      <div>
        <Link className="bg-blue-400 mx-4" to="/category-two">
          Category 2
        </Link>
        <Link className="bg-blue-400 mx-4" to="/category-three">
          Category 3
        </Link>
        {props.logged ? (
          <Link to="/new">New blog</Link>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
}
