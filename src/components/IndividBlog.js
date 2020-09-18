import React from "react";

export default function IndividBlog(props) {
  return (
    <div className="bg-gray-600 w-1/3 m-2 px-2 py-4">
      <h1 className="text-2xl">Title: {props.title}</h1>
      <h1 className="text-lg">Uploaded on: {props.userCreated}</h1>
      <h1>Body: {props.body}</h1>
    </div>
  );
}
