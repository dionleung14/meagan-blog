import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../utils/API";

export default function BlogRFC(props) {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  useEffect(() => {
    API.getOneBlog(id).then((res) => {
      setBlog({
        ...blog,
        title: res.data.title,
        body: res.data.body,
      });
    });
  }, []);
  return (
    <div>
      <Navbar logged={true} />
      <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row justify-evenly">
        <div>
          {/* <h1 className="text-2xl bg-red-100">{calDate.join(" ")}</h1> */}
          {/* <h1 className="text-lg bg-red-400">time: {time}</h1> */}
          <h1 className="text-lg bg-red-400 text-center">
            Title: {blog.title}
          </h1>
          <h1 className="text-lg bg-red-900">Body: {blog.body}</h1>
        </div>
        <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" />
      </div>
    </div>
  );
}
