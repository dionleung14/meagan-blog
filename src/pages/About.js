import React, { Component } from "react";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import ContentWrapper from "../components/ContentWrapper";

export default class About extends Component {
  render() {
    return (
      <PageWrapper>
        <Header />
        <ContentWrapper>Hellooooooooooo about page</ContentWrapper>
      </PageWrapper>
    );
  }
}
