import React from "react";

export default function IndividBlog(props) {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <h1>Uploaded on: {props.userCreated}</h1>
      <h1>Body: {props.body}</h1>
    </div>
  );
}
