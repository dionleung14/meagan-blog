import React from "react";

export default function IndividBlog(props) {
  return (
    <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row justify-evenly">
      <div>
        <h1 className="text-2xl bg-red-100">{props.userCreated}</h1>
        <h1 className="text-lg bg-red-400">Title: {props.title}</h1>
        <h1 className="text-lg bg-red-900">Body: {props.body}</h1>
      </div>
      <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" />
    </div>
  );
}
