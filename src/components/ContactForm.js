import React, { useState } from "react";
// import FirstHeader from "./FirstHeader";
import API from "../utils/API";
// import ComponentContainer from "./ComponentContainer";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ContactForm(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phNum: "",
    subject: "Networking",
    message: "",
  });

  const [contactMethodState, setContactMethodState] = useState({
    email: false,
    call: false,
    text: false,
  });

  const [formSuccessState, setFormSuccessState] = useState({
    formSuccess: false,
    sendingState: false,
    failure: false,
  });

  const handleNodeMailerSubmit = (event) => {
    event.preventDefault();
    setFormSuccessState({
      ...formSuccessState,
      sendingState: true,
    });
    let failureCountdown = setTimeout(() => {
      console.log("failure");
      setFormSuccessState({
        ...formSuccessState,
        sendingState: false,
        failure: true,
      });
    }, 12000);
    let contactMethodCheck = Object.values(contactMethodState);
    if (!contactMethodCheck.includes(true)) {
      alert("Please select a method for me to reach you");
    } else if (!(formState.emailAddress || formState.phNum)) {
      alert("Please enter either an email or phone number");
    } else {
      let { call, email, text } = contactMethodState;
      let {
        firstName,
        lastName,
        emailAddress,
        phNum,
        subject,
        message,
      } = formState;
      let contactFormFilled = {
        firstName,
        lastName,
        emailAddress,
        phNum,
        subject,
        message,
        call,
        email,
        text,
      };
      API.submitEmail(contactFormFilled).then((res) => {
        if (res.status === 200) {
          // stop the failure countdown
          clearTimeout(failureCountdown);
          // reset the form
          setFormState({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phNum: "",
            subject: "Networking",
            message: "",
          });
          setContactMethodState({
            email: false,
            call: false,
            text: false,
          });
          // alter the success state to show success message
          setFormSuccessState({
            formSuccess: true,
            sendingState: false,
          });
          // after 2 seconds, erase the success message
          setTimeout(() => {
            setFormSuccessState({
              ...formSuccessState,
              formSuccess: false,
            });
          }, 2000);
        } else {
          // change the sending state, erasing progress messsage, and display error message
          setFormSuccessState({
            ...formSuccessState,
            sendingState: false,
            failure: true,
          });
        }
      });
      // .catch((err) => console.log(err))
      // );
      // console.log(contactFormFilled);
    }
    // else {
    //   alert("Please select a method for me to reach you");
    // }
  };

  const handleInput = (event) => {
    event.preventDefault();
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const contactMethodStr = (string) => {
    let firstLet = string.slice(0, 1);
    let rest = string.slice(1);
    let combined = firstLet.toUpperCase().concat(rest);
    let printed = combined + " me!";
    return printed;
  };

  const handleToggle = ({ target }) =>
    setContactMethodState((s) => ({ ...s, [target.name]: !s[target.name] }));

  return (
    <div>
      {/* <ComponentContainer id="contact" darkModeCont={props.darkModeApp.darkMode}> */}
      {/* <FirstHeader
        text="Contact me!"
        darkModeHeader={props.darkModeApp.darkMode}
      /> */}
      <div className="flex justify-around flex-col w-full lg:mt-8 lg:mb-2 my-2 lg:px-6 p-2">
        <h3 className="lg:w-4/5 my-2 lg:pl-20">
          Have any questions? Want to collaborate together? Secretly dying to
          know my favorite song? Hit me up! Send me an email (or use the nifty
          little form below!) and I'll get back to you as soon as I can!
        </h3>
        <h3 className="lg:w-4/5 my-2 lg:pl-20">
          You can find also find me on LinkedIn{" "}
          <a
            className="hover:underline text-dclpal1-300"
            href="https://www.linkedin.com/in/leungdion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , and my email is{" "}
          <span className="hover:underline text-dclpal1-300">
            dioncleung@gmail.com
          </span>
          .
        </h3>

        <form
          className={`lg:w-5/6 w-full lg:mx-auto p-2 border border-dclpal1-300 ${
            props.darkModeApp.darkMode ? "shadow-dcl" : "shadow-2xl"
          }`}
          id="contact-form"
          onSubmit={handleNodeMailerSubmit}
        >
          {/* <!-- First and Last Name --> */}
          <div className="lg:pl-6">
            {/* <!-- First Name --> */}
            <div className="flex flex-col items-start lg:w-4/5">
              <label className="mb-1 mt-4" htmlFor="Name">
                Your name:
              </label>
              <div className="flex flex-row">
                <input
                  className={`w-1/2 px-2 mr-2 rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  type="text"
                  value={formState.firstName}
                  onChange={handleInput}
                  placeholder="First name"
                  name="firstName"
                  required
                />
                {/* <!-- Last Name --> */}
                <input
                  type="text"
                  className={`w-1/2 px-2 mr-2 rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  id="last-name"
                  onChange={handleInput}
                  placeholder="Last name"
                  value={formState.lastName}
                  name="lastName"
                />
              </div>
            </div>
          </div>

          {/* <!-- Email and phone number --> */}
          <div className="lg:pl-6">
            <div className="flex flex-col">
              <label className="mb-1 mt-4" htmlFor="inputEmail">
                Email address:
              </label>
              <div className="flex lg:flex-row flex-col items-center">
                <input
                  type="email"
                  className={`px-2 mr-2 rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  id="inputEmail"
                  value={formState.emailAddress}
                  placeholder="example@email.com"
                  aria-describedby="emailHelp"
                  onChange={handleInput}
                  name="emailAddress"
                />
                <small id="emailHelp" className="form-text text-muted">
                  I'll never share your email with anyone else.
                </small>
              </div>
            </div>
            {/* <!-- Phone number --> */}
            <div className="flex flex-col">
              <label className="mb-1 mt-4" htmlFor="phoneNumber">
                Phone number:
              </label>
              <div className="flex lg:flex-row flex-col items-center">
                <input
                  type="phonenumber"
                  className={`px-2 mr-2 rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  id="phoneNumber"
                  placeholder="555-123-4567"
                  value={formState.phNum}
                  onChange={handleInput}
                  name="phNum"
                />
                <small id="emailHelp" className="form-text">
                  I'll never share your phone number with anyone else either.
                </small>
              </div>
            </div>
          </div>

          {/* Subject and actual message */}
          <div className="flex flex-col items-start lg:px-6">
            {/* Subject */}
            <div className="mb-1 mt-4">
              <div className="flex flex-col">
                <label htmlFor="subject" className="">
                  Subject:
                </label>
                <select
                  type="name"
                  className={`px-2 py-1 rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  id="subject"
                  value={formState.subject}
                  name="subject"
                  onChange={handleInput}
                  required
                >
                  <option className="focus:bg-white" value="Networking">
                    Networking
                  </option>
                  <option value="Inquiry">Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other (specify in message)</option>
                </select>
              </div>
            </div>

            {/* <!-- Message --> */}
            <div className="w-full">
              <div className="flex flex-col">
                <label htmlFor="message" className="">
                  Message:
                </label>
                <textarea
                  type="message"
                  className={`p-2 lg:w-64 lg:min-w-full lg:max-w-full lg:min-h-0 lg:resize rounded border border-dclpal1-300 ${
                    props.darkModeApp.darkMode
                      ? "focus:bg-dclpal1-500 text-white bg-dclpal1-100"
                      : "focus:bg-dclpal1-400 text-black"
                  }`}
                  id="message"
                  maxLength="500"
                  value={formState.message}
                  name="message"
                  placeholder="Your message here, in 500 characters or fewer!"
                  onChange={handleInput}
                  required
                />
                {formState.message.length ? (
                  <small>
                    Characters remaining: {500 - formState.message.length}
                  </small>
                ) : (
                  <small
                    className={
                      props.darkModeApp.darkMode
                        ? "text-dclpal1-100"
                        : "text-white"
                    }
                  >
                    I'm a hidden message!
                  </small>
                )}
                {/* <small>
                  Characters remaining: {500 - formState.message.length}
                </small> */}
              </div>
            </div>
          </div>

          {/* <!-- Preferred method of contact checkboxes --> */}
          <div className="lg:pl-6 mb-4">
            <h1 className="mb-1 mt-4">
              How would you like me to respond? Check all that apply:
            </h1>
            <div>
              {Object.keys(contactMethodState).map((key) => (
                <div className="lg:pl-6 pl-4 checkbox-options" key={key}>
                  <input
                    className="mr-2"
                    type="checkbox"
                    onChange={handleToggle}
                    name={key}
                    checked={contactMethodState[key]}
                  />
                  <label>{contactMethodStr(key)}</label>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <div className="lg:pl-6">
            <button
              type="submit"
              className={`rounded py-2 px-6 border border-dclpal1-300 text-xl ${
                props.darkModeApp.darkMode
                  ? "bg-dclpal1-100 text-white hover:bg-dclpal1-500"
                  : "text-black hover:bg-dclpal1-400"
              }`}
            >
              Send!
            </button>
            {formSuccessState.formSuccess ? (
              <span className="ml-2">
                Your message has been sent successfully!
              </span>
            ) : (
              " "
            )}
            {formSuccessState.sendingState ? (
              <span className="ml-2">Sending... please wait</span>
            ) : (
              " "
            )}
            {formSuccessState.failure ? (
              <span className="ml-2">
                Something went wrong, please refresh and try again
              </span>
            ) : (
              " "
            )}
            <br />
            <br />
          </div>
        </form>
      </div>

      {/* Copied from tailwind docs */}
      {/*<form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
        </form>*/}
      {/* </ComponentContainer> */}
    </div>
  );
}
