import React, { Component } from "react";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import ContentWrapper from "../components/ContentWrapper";
import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <PageWrapper>
        <Header />
        <ContentWrapper>
          {/* <ContactForm /> */}
          Hellooooooooooo contact
        </ContentWrapper>
      </PageWrapper>
    );
  }
}
