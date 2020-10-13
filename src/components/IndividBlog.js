import React from "react";
import { Link } from "react-router-dom";

export default function IndividBlog(props) {
  // whole date as Thu Sep 17 2020 11:01:26 GMT-0700 (Pacific Daylight Time)
  let dbDate = props.userCreated;
  let dateTimeObj = new Date(dbDate);
  let dateStr = dateTimeObj.toString();

  // split by spaces to get ["Thu", "Sep", "17", "2020", "11:01:26", "GMT-0700", "(Pacific", "Daylight", "Time)"]
  let dateArr = dateStr.split(" ");
  // console.log(dateArr);

  // get only ["Sep", "17", "2020"]
  let calDate = dateArr.slice(1, 4);

  // get time created as ["11:01:26"]
  let time = dateArr.slice(4, 5);

  const limit = 200;

  return (
    <div>
      <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row items-center justify-between overflow-auto">
        <div className="w-1/2 border border-white">
          <Link to={`/blog/${props.blogId}`} allProps={props.children}>
            <h1 className="text-2xl bg-red-100">{calDate.join(" ")}</h1>
          </Link>
          {/* <h1 className="text-lg bg-red-400">time: {time}</h1> */}
          <Link to={`/blog/${props.blogId}`} allProps={props.children}>
            <h1 className="text-3xl bg-red-400 text-center italic">
              Title: {props.title}
            </h1>
          </Link>
          <div className="text-lg italic">
            {props.bodyOne.length < limit ? (
              <h1 className="text-lg bg-red-900">Body 1: {props.bodyOne}</h1>
            ) : (
              <h1 className="text-lg bg-red-900">
                Body 1: {props.bodyOne.split("").slice(0, limit)}...
              </h1>
            )}
            {props.bodyTwo.length < limit ? (
              <h1 className="text-lg bg-red-900">Body 2: {props.bodyTwo}</h1>
            ) : (
              <h1 className="text-lg bg-red-900">
                Body 2: {props.bodyTwo.split("").slice(0, limit)}...
              </h1>
            )}
            {props.bodyThree.length < limit ? (
              <h1 className="text-lg bg-red-900">Body 3: {props.bodyThree}</h1>
            ) : (
              <h1 className="text-lg bg-red-900">
                Body 3: {props.bodyThree.split("").slice(0, limit)}...
              </h1>
            )}
            {props.bodyFour.length < limit ? (
              <h1 className="text-lg bg-red-900">Body 4: {props.bodyFour}</h1>
            ) : (
              <h1 className="text-lg bg-red-900">
                Body 4: {props.bodyFour.split("").slice(0, limit)}...
              </h1>
            )}
          </div>
        </div>
        <div className="w-1/2 border border-white relative h-40 flex flex-row justify-evenly">
          {props.imageOneURL ? (
            <div className="relative w-1/4">
              <img className="absolute" src={props.imageOneURL} alt="blog 1" />
            </div>
          ) : (
            <div className="relative w-1/4">
              <img
                className="absolute"
                src="http://placeimg.com/240/240/any"
                alt="blog 1"
              />
            </div>
          )}

          {props.imageTwoURL ? (
            <div className="relative w-1/6">
              <img className="absolute" src={props.imageTwoURL} alt="blog 1" />
            </div>
          ) : (
            <div className="relative w-1/6">
              <img
                className="absolute"
                src="http://placeimg.com/240/240/any"
                alt="blog 1"
              />
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
