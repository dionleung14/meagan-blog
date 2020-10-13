import React from "react";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import NewBlog from "../components/NewBlog";

export default function SubmitBlog(props) {
  return (
    <PageWrapper>
      <Header />
      <NewBlog />
    </PageWrapper>
  );
}
