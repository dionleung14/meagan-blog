import React, { Component } from "react";

export default class MissionStatement extends Component {
  render() {
    return (
      <div className="bg-blue-300">
        <h1 className="italic text-xl border border-black border-2 bg-green-200 pl-20">
          Mission Statement
        </h1>
        <div className="flex flex-row items-center">
          <h3 className="bg-green-100 mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            corporis ratione, ullam cum ipsam perferendis inventore nemo officia
            nobis itaque voluptatem optio odio esse libero. Consequatur
            voluptate maxime provident distinctio!
          </h3>
          <img src="http://placeimg.com/640/360/any" alt="header image" />
        </div>
      </div>
    );
  }
}
