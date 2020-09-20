import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MissionStatement from "../components/MissionStatement";
import ContentWrapper from "../components/ContentWrapper";
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
    <div className="">
      <Header />
      <Navbar logged={true} />
      <img
        className="mx-auto my-6"
        src="http://placekitten.com/1200/300"
        alt="header"
      />
      <ContentWrapper>
        <MissionStatement />
        {blogs.length ? (
          blogs.map((blog) => {
            return (
              <IndividBlog
                title={blog.title}
                category={blog.category}
                body={blog.body}
                userCreated={blog.userCreated}
                blogId={blog._id}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </ContentWrapper>
    </div>
  );
}
