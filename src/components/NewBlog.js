import React, { useState } from "react";
import API from "../utils/API";

export default function NewBlog() {
  const [blogState, setBlogState] = useState({
    title: "",
    bodyOne: "",
    bodyTwo: "",
    bodyThree: "",
    bodyFour: "",
    category: "",
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

  const handleNewBlog = (event) => {
    event.preventDefault();
    setFormSuccessState({
      ...formSuccessState,
      sendingState: true,
    });
    let failureCountdown = setTimeout(() => {
      console.log("failure");
    }, 12000);
    let { title, bodyOne, bodyTwo, bodyThree, bodyFour } = blogState;
    let filledBlog = {
      title,
      bodyOne,
      bodyTwo,
      bodyThree,
      bodyFour,
    };
    API.submitBlog(filledBlog).then((res) => {
      if (res.status === 200) {
        clearTimeout(failureCountdown);
        setBlogState({
          title: "",
          bodyOne: "",
          bodyTwo: "",
          bodyThree: "",
          bodyFour: "",
        });
        setContactMethodState({
          email: false,
          call: false,
          text: false,
        });
        setFormSuccessState({
          formSuccess: true,
          sendingState: false,
        });
        setTimeout(() => {
          setFormSuccessState({
            ...formSuccessState,
            formSuccess: false,
          });
        }, 2000);
      } else {
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
    // else {
    //   alert("Please select a method for me to reach you");
    // }
  };

  const handleInput = (event) => {
    event.preventDefault();
    setBlogState({
      ...blogState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form
        className="lg:w-5/6 w-full lg:mx-auto p-2 border border-gray-300 bg-red-300"
        id="contact-form"
        onSubmit={handleNewBlog}
      >
        {/* <!-- First and Last Name --> */}
        <div className="lg:pl-6">
          {/* <!-- First Name --> */}
          <div className="flex flex-col items-start lg:w-4/5">
            <label className="mb-1 mt-4" htmlFor="Name">
              Blog Title:
            </label>
            <div className="flex flex-row">
              <input
                className="w-1/2 px-2 mr-2 text-black"
                type="text"
                value={blogState.title}
                onChange={handleInput}
                placeholder="Blog title"
                name="title"
                required
              />
            </div>
          </div>
        </div>

        {/* Subject and actual message */}
        <div className="flex flex-col items-start lg:px-6">
          {/* <!-- Message --> */}
          <div className="w-auto">
            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Blog body 1:
              </label>
              <textarea
                type="message"
                className="p-2 lg:w-64 w-64 lg:resize text-black"
                value={blogState.bodyOne}
                name="bodyOne"
                placeholder="First chunk of text"
                onChange={handleInput}
                required
              />
              {blogState.bodyOne.length ? (
                <small>Characters typed: {blogState.bodyOne.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Blog body 2:
              </label>
              <textarea
                type="message"
                className="p-2 lg:w-64 w-64 lg:resize text-black"
                value={blogState.bodyTwo}
                name="bodyTwo"
                placeholder="Second chunk of text"
                onChange={handleInput}
                required
              />
              {blogState.bodyTwo.length ? (
                <small>Characters typed: {blogState.bodyTwo.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Blog body 3:
              </label>
              <textarea
                type="message"
                className="p-2 lg:w-64 w-64 lg:resize text-black"
                value={blogState.bodyThree}
                name="bodyThree"
                placeholder="Third chunk of text"
                onChange={handleInput}
                required
              />
              {blogState.bodyThree.length ? (
                <small>Characters typed: {blogState.bodyThree.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Blog body 4:
              </label>
              <textarea
                type="message"
                className="p-2 lg:w-64 w-64 lg:resize text-black"
                value={blogState.bodyFour}
                name="bodyFour"
                placeholder="Fourth chunk of text"
                onChange={handleInput}
                required
              />
              {blogState.bodyFour.length ? (
                <small>Characters typed: {blogState.bodyFour.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <div className="lg:pl-6">
          <button
            type="submit"
            className="rounded py-2 px-6 bg-dclpal1-400 hover:bg-dclpal1-200 text-xl hover:text-white"
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
  );
}
