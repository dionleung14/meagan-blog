import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IndividBlog from "../components/IndividBlog";
import axios from "axios";
import API from "../utils/API";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("hello");
    // axios.get("/all").then((err, data) => console.log(data));
    API.getBlogs.then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Navbar />
      {blogs.map((blog) => {
        return (
          <IndividBlog
            title={blog.title}
            body={blog.body}
            userCreated={blog.userCreated}
          />
        );
      })}
    </div>
  );
}
