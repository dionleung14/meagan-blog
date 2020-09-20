import React from "react";
import Navbar from "../components/Navbar";
import NewBlog from "../components/NewBlog";

export default function SubmitBlog(props) {
  return (
    <div>
      <Navbar logged={true} />
      <NewBlog />
    </div>
  );
}
