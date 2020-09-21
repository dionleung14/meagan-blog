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
        timestamp: res.data.userCreated,
        id: res.data._id,
      });
    });
  }, []);

  let date = Date(blog.timestamp);

  // split by spaces to get ["Thu", "Sep", "17", "2020", "11:01:26", "GMT-0700", "(Pacific", "Daylight", "Time)"]
  let dateArr = date.split(" ");

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
          <Link to="/">
            <h1 className="text-lg bg-red-400 text-center">
              Title: {blog.title}
            </h1>
          </Link>
          <h1 className="text-lg bg-red-900">Body 1: {blog.bodyOne}</h1>
          <h1 className="text-lg bg-red-900">Body 2: {blog.bodyTwo}</h1>
          <h1 className="text-lg bg-red-900">Body 3: {blog.bodyThree}</h1>
          <h1 className="text-lg bg-red-900">Body 4: {blog.bodyFour}</h1>
        </div>
        <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" />
      </div>
    </div>
  );
}
