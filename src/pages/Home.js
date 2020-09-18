import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IndividBlog from "../components/IndividBlog";
import axios from "axios";
import API from "../utils/API";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    API.getBlogs().then((res) => {
      setBlogs({ ...blogs, res });
    });
  }, []);

  return (
    <div>
      <Navbar />
      {blogs.length ? (
        blogs.map((blog) => {
          return (
            <IndividBlog
              title={blog.title}
              body={blog.body}
              userCreated={blog.userCreated}
            />
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
