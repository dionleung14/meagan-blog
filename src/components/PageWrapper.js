import React, { Component } from "react";

export default class PageWrapper extends Component {
  render(props) {
    return <div className="mt-40">{this.props.children}</div>;
  }
}
