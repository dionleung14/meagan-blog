import React from "react";
import Navbar from "../components/Navbar";

export default function Category(props) {
  return (
    <div>
      <Navbar logged={true} />
      <h1>You are viewing all blogs in category {props.filter}</h1>
    </div>
  );
}
