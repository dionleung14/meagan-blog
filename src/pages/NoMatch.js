import React, { Component } from "react";
import Header from "../components/Header";

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header />
        Cannot find the page you are looking for
      </div>
    );
  }
}
