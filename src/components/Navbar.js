import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/new">New blog</Link>
    </div>
  );
}
