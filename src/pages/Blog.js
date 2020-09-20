import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "../components/Navbar";
import API from "../utils/API";

export default class Blog extends Component {
  state = { title: "", body: "not true?", boolean: "yessir" };
  componentDidMount() {
    // console.log("mounted");
    // const id = this.props.match.params.blogId;
    console.log(this.props);
    // console.log(id);
    // API.getOneBlog(id);
  }
  render(props) {
    return (
      <div>
        <Navbar logged={true} />
        <div className="bg-gray-600 w-full my-4 px-2 py-4 flex flex-row justify-evenly">
          <div>
            {/* <h1 className="text-2xl bg-red-100">{calDate.join(" ")}</h1> */}
            {/* <h1 className="text-lg bg-red-400">time: {time}</h1> */}
            <h1 className="text-lg bg-red-400 text-center">
              Title: {this.state.title}
            </h1>
            <h1 className="text-lg bg-red-400 text-center">
              Created state 1: {this.state.boolean}
            </h1>
            <h1 className="text-lg bg-red-900">Body: {this.state.body}</h1>
          </div>
          <img
            className=""
            src="http://placeimg.com/240/240/any"
            alt="blog 1"
          />
        </div>
      </div>
    );
  }
}
