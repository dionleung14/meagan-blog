import React, { Component } from "react";

export default class ContentWrapper extends Component {
  render(props) {
    return <div className="w-3/4 mx-auto">{this.props.children}</div>;
  }
}
