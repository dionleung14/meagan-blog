import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../utils/API";

export default function BlogRFC(props) {
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState({
    title: "",
    bodyOne: "",
    bodyTwo: "",
    bodyThree: "",
    bodyFour: "",
    imageOneURL: "",
    imageTwoURL: "",
    imageThreeURL: "",
    imageFourURL: "",
    timestamp: "",
  });
  useEffect(() => {
    API.getOneBlog(id).then((res) => {
      setBlog({
        ...blog,
        title: res.data.title,
        bodyOne: res.data.bodyOne,
        bodyTwo: res.data.bodyTwo,
        bodyThree: res.data.bodyThree,
        bodyFour: res.data.bodyFour,
        imageOneURL: res.data.imageOneURL,
        imageTwoURL: res.data.imageTwoURL,
        imageThreeURL: res.data.imageThreeURL,
        imageFourURL: res.data.imageFourURL,
        timestamp: res.data.userCreated,
        id: res.data._id,
      });
    });
  }, []);

  let date = new Date(blog.timestamp);
  let dateStr = date.toString();

  // split by spaces to get ["Thu", "Sep", "17", "2020", "11:01:26", "GMT-0700", "(Pacific", "Daylight", "Time)"]
  let dateArr = dateStr.split(" ");

  // get only ["Sep", "17", "2020"]
  let calDate = dateArr.slice(1, 4);

  // get time created as ["11:01:26"]
  let time = dateArr.slice(4, 5);

  const deleteMe = () => {
    // console.log(id);
    API.deleteOneBlog(blog.id).then((res) => {
      // console.log(res);
      history.goBack();
    });
  };

  return (
    <div>
      <Navbar logged={true} />
      <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row justify-evenly">
        <div>
          <h1 className="text-lg bg-red-100 text-left">
            Date: {calDate.join(" ")}{" "}
            <span className="bg-red-600 text-white px-2">
              {/* <Link to="/"> */}
              <button onClick={deleteMe}>Delete me</button>
              {/* </Link> */}
            </span>
          </h1>
          <h3>time: {time}</h3>
          <h1 className="text-lg bg-red-700 text-center">
            Title: {blog.title}
          </h1>
          <div className="flex flex-row text-lg bg-red-200">
            <h1>Body 1: {blog.bodyOne}</h1>
            <img
              className="max-w-lg"
              src={
                blog.imageOneURL
                  ? blog.imageOneURL
                  : "http://placeimg.com/240/240/any"
              }
              alt="blog 1"
            />
          </div>
          <div className="flex flex-row text-lg bg-red-300">
            <img
              className="max-w-lg"
              src={
                blog.imageTwoURL
                  ? blog.imageTwoURL
                  : "http://placeimg.com/240/240/any"
              }
              alt="blog 1"
            />
            <h1>Body 2: {blog.bodyTwo}</h1>
          </div>
          <div className="flex flex-row text-lg bg-red-400">
            <h1>Body 3: {blog.bodyThree}</h1>
            <img
              className="max-w-lg"
              src={
                blog.imageThreeURL
                  ? blog.imageThreeURL
                  : "http://placeimg.com/240/240/any"
              }
              alt="blog 1"
            />
          </div>
          <div className="flex flex-row text-lg bg-red-500">
            <img
              className="max-w-lg"
              src={
                blog.imageFourURL
                  ? blog.imageFourURL
                  : "http://placeimg.com/240/240/any"
              }
              alt="blog 1"
            />
            <h1>Body 4: {blog.bodyFour}</h1>
          </div>
        </div>
        {/* <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" /> */}
      </div>
    </div>
  );
}
