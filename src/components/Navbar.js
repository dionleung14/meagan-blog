import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/new">New blog</Link>
    </div>
  );
}
