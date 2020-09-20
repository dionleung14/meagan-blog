import React from "react";
import { Link } from "react-router-dom";

export default function IndividBlog(props) {
  // whole date as Thu Sep 17 2020 11:01:26 GMT-0700 (Pacific Daylight Time)
  let date = props.userCreated;

  // split by spaces to get ["Thu", "Sep", "17", "2020", "11:01:26", "GMT-0700", "(Pacific", "Daylight", "Time)"]
  let dateArr = date.split(" ");

  // get only ["Sep", "17", "2020"]
  let calDate = dateArr.slice(1, 4);

  // get time created as ["11:01:26"]
  let time = dateArr.slice(4, 5);

  return (
    <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row justify-evenly">
      <div>
        <h1 className="text-2xl bg-red-100">{calDate.join(" ")}</h1>
        <h1 className="text-lg bg-red-400">time: {time}</h1>
        <Link to={`/blog/${props.blogId}`} allProps={props}>
          <h1 className="text-lg bg-red-400 text-center">
            Title: {props.title}
          </h1>
        </Link>
        <h1 className="text-lg bg-red-900">Body: {props.body}</h1>
      </div>
      <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" />
    </div>
  );
}
