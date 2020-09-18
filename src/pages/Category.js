import React from "react";
import Navbar from "../components/Navbar";

export default function Category(props) {
  return (
    <div>
      <Navbar logged={props.security} />
      You are viewing all blogs in category {props.filter}
    </div>
  );
}
