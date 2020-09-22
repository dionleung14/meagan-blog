import React, { useState } from "react";
import API from "../utils/API";
// import axios from "axios";

export default function NewBlog() {
  const [blogState, setBlogState] = useState({
    title: "",
    bodyOne: "",
    bodyTwo: "",
    bodyThree: "",
    bodyFour: "",
    // category: "",
    imageOneURL: "",
    imageTwoURL: "",
    imageThreeURL: "",
    imageFourURL: "",
  });

  const [imageState, setImageState] = useState({
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
  });

  const [formSuccessState, setFormSuccessState] = useState({
    formSuccess: false,
    sendingState: false,
    failure: false,
  });

  const cloudName = "leungdion";
  const resourceType = "image";
  const cloudPreset = "meaganblog";
  const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  const handleNewBlog = (event) => {
    event.preventDefault();
    // display sending message
    setFormSuccessState({
      ...formSuccessState,
      sendingState: true,
    });
    // hardcoded self-check, 12 second countdown for sending a blog
    let failureCountdown = setTimeout(() => {
      setFormSuccessState({
        ...formSuccessState,
        sendingState: false,
        failure: true,
      });
      console.log("failure");
    }, 12000);
    // send the image to cloudinary
    // let uploadImage = new FormData();
    // uploadImage.append("file", imageState.imageOne);
    // uploadImage.append("upload_preset", cloudPreset);
    // fetch(cloudinaryURL, {
    //   method: "POST",
    //   body: uploadImage,
    // })
    //   .then((response) => {
    //     return response.text();
    //   })
    //   .then((data) => {
    //     let returnedData = JSON.parse(data);
    // get the URL back and put it in blogState as imageOneURL
    // setBlogState({
    //   ...blogState,
    //   imageOneURL: returnedData.url,
    // });
    // })
    // .then(() => {
    let {
      title,
      bodyOne,
      bodyTwo,
      bodyThree,
      bodyFour,
      imageOneURL,
      imageTwoURL,
      imageThreeURL,
      imageFourURL,
    } = blogState;
    // let { imageOneURL } = imageState;
    let filledBlog = {
      title,
      bodyOne,
      bodyTwo,
      bodyThree,
      bodyFour,
      imageOneURL,
      imageTwoURL,
      imageThreeURL,
      imageFourURL,
    };
    API.submitBlog(filledBlog).then((res) => {
      if (res.status === 200) {
        clearTimeout(failureCountdown);
        // setBlogState({
        //   title: "",
        //   bodyOne: "",
        //   bodyTwo: "",
        //   bodyThree: "",
        //   bodyFour: "",
        //   imageOneURL: "",
        // });
        setImageState({
          imageOne: "",
          // imageOneURL: "",
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
    // });
    // });
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

  const handleNewPhoto = (event) => {
    event.preventDefault();
    // let returnURL = "";
    let uploadImage = new FormData();
    // for (let i = 0; i < imageState.length; i++) {
    // for (const [key, value] of Object.entries(imageState)) {
    //   uploadImage.append("file", value);
    //   uploadImage.append("upload_preset", cloudPreset);
    // }
    // console.log("finished appending");
    // console.log(uploadImage.entries());
    uploadImage.append("file", imageState.imageOne);
    // uploadImage.append("file", imageState.imageTwo);
    // uploadImage.append("file", imageState.imageThree);
    // uploadImage.append("file", imageState.imageFour);
    uploadImage.append("upload_preset", cloudPreset);
    fetch(cloudinaryURL, {
      method: "POST",
      body: uploadImage,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        // returnURL = data.url;
        // console.log(data.url);
        // console.log(JSON.parse(data));
        let returnedData = JSON.parse(data);
        // a string!!!
        setBlogState({
          ...blogState,
          imageOneURL: returnedData.url,
        });
      });
    // console.log(returnURL);
  };

  const imageChange = (event) => {
    setImageState({
      ...imageState,
      [event.target.name]: event.target.files[0],
    });

    // console.log("event.target.value is " + event.target.value);
    // console.log("event.target.files is " + event.target.files[0]);
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
          <div className="w-auto flex flex-row">
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
            {/* <input type="file" name="imageOne" onChange={imageChange} /> */}
          </div>
          <div className="w-auto flex flex-row">
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
                // required
              />
              {blogState.bodyTwo.length ? (
                <small>Characters typed: {blogState.bodyTwo.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
            {/* <input type="file" /> */}
          </div>
          <div className="w-auto flex flex-row">
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
                // required
              />
              {blogState.bodyThree.length ? (
                <small>Characters typed: {blogState.bodyThree.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
            {/* <input type="file" /> */}
          </div>
          <div className="w-auto flex flex-row">
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
                // required
              />
              {blogState.bodyFour.length ? (
                <small>Characters typed: {blogState.bodyFour.length}</small>
              ) : (
                <small className="text-dclpal1-300">
                  I'm a hidden message!
                </small>
              )}
            </div>
            {/* <input type="file" /> */}
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
      <form
        className="lg:w-5/6 w-full lg:mx-auto p-2 border border-gray-300 bg-green-300"
        id="contact-form"
        onSubmit={handleNewPhoto}
      >
        <div className="w-auto flex flex-row">
          <input type="file" name="imageOne" onChange={imageChange} />
        </div>
        <div className="w-auto flex flex-row">
          <input type="file" name="imageTwo" onChange={imageChange} />
        </div>
        <div className="w-auto flex flex-row">
          <input type="file" name="imageThree" onChange={imageChange} />
        </div>
        <div className="w-auto flex flex-row">
          <input type="file" name="imageFour" onChange={imageChange} />
        </div>
        <button
          type="submit"
          className="rounded py-2 px-6 bg-dclpal1-400 hover:bg-dclpal1-200 text-xl hover:text-white"
        >
          Upload image(s)
        </button>
      </form>
    </div>
  );
}
