import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="w-full text-2xl text-center italic h-32 fixed top-0 bg-green-200">
          Maraki Minimalism
          <Navbar logged={true} />
        </h1>
      </div>
    );
  }
}
