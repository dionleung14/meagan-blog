import React from "react";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";

export default function Category(props) {
  return (
    <PageWrapper>
      <Header />
      <h1>You are viewing all blogs in category {props.filter}</h1>
    </PageWrapper>
  );
}
