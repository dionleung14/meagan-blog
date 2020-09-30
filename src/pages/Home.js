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
      setBlogs([...res.data.reverse()]);
    });
  }, []);
  useEffect(() => {
    blogs.forEach((blog) => {
      blog.adjustedTime = blog.userCreated * 1000;
    });
    // blogs.forEach((blog) => {
    //    console.log(typeof blog.userCreated);
    //    console.log(typeof blog.adjustedTime);
    // });
  }, [blogs]);

  // console.log("this is a date: 1600660776394");
  // console.log(Date(1600660776394));
  return (
    <div className="">
      <div className="relative bg-yellow-200">
        <Header />
        <Navbar logged={true} />
      </div>
      <img
        className="mx-auto mb-6 mt-24"
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
                bodyOne={blog.bodyOne}
                bodyTwo={blog.bodyTwo}
                bodyThree={blog.bodyThree}
                bodyFour={blog.bodyFour}
                imageOneURL={blog.imageOneURL}
                imageTwoURL={blog.imageTwoURL}
                imageThreeURL={blog.imageThreeURL}
                imageFourURL={blog.imageFourURL}
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
