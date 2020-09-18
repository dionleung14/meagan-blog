import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IndividBlog from "../components/IndividBlog";
import API from "../utils/API";

export default function Home(props) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    API.getBlogs().then((res) => {
      setBlogs([...res.data]);
    });
  }, []);

  return (
    <div>
      <Navbar logged={props.security} />
      <div className="flex flex-wrap">
        {blogs.length ? (
          blogs.map((blog) => {
            return (
              <IndividBlog
                title={blog.title}
                category={blog.category}
                body={blog.body}
                userCreated={blog.userCreated}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}
