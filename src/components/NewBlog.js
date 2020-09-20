import React, { useState } from "react";
import API from "../utils/API";

export default function NewBlog() {
  const [blogState, setBlogState] = useState({
    title: "",
    body: "",
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
    let { title, body } = blogState;
    let filledBlog = {
      title,
      body,
    };
    API.submitBlog(filledBlog).then((res) => {
      if (res.status === 200) {
        clearTimeout(failureCountdown);
        setBlogState({
          title: "",
          body: "",
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
                placeholder="First name"
                name="title"
                // id="firsts-name"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-1 mt-4">
          <div className="flex flex-col">
            <label htmlFor="subject" className="">
              Subject:
            </label>
            <select
              type="name"
              className="px-2 py-1 text-black"
              id="subject"
              value={blogState.category}
              name="subject"
              onChange={handleInput}
              required
            >
              <option className="" value="Networking">
                Networking
              </option>
              <option value="Inquiry">Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other (specify in message)</option>
            </select>
          </div>
        </div>

        {/* Subject and actual message */}
        <div className="flex flex-col items-start lg:px-6">
          {/* <!-- Message --> */}
          <div className="w-auto">
            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Message:
              </label>
              <textarea
                type="message"
                className="p-2 lg:w-64 w-64 lg:resize text-black"
                id="message"
                maxLength="500"
                value={blogState.body}
                name="body"
                placeholder="Your message here, in 500 characters or fewer!"
                onChange={handleInput}
                required
              />
              {blogState.body.length ? (
                <small>
                  Characters remaining: {500 - blogState.body.length}
                </small>
              ) : (
                <small className="text-dclpal1-300">
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
