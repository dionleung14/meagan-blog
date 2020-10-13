import React, { useState } from "react";
import API from "../utils/API";
import moment from "moment";
// import axios from "axios";

export default function NewBlog() {
  const [blogState, setBlogState] = useState({
    title: "",
    tags: "",
    bodyOne: "",
    bodyTwo: "",
    bodyThree: "",
    bodyFour: "",
    // category: "",
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
  });

  const [previewSourceOne, setPreviewSourceOne] = useState();
  const [previewSourceTwo, setPreviewSourceTwo] = useState();
  const [previewSourceThree, setPreviewSourceThree] = useState();
  const [previewSourceFour, setPreviewSourceFour] = useState();
  // pv1: "",
  // pv2: "",
  // pv3: "",
  // pv4: "",

  // const [imageURL, setImageURL] = useState({});

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
  const previewFileOne = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceOne(reader.result);
    };
  };
  const previewFileTwo = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceTwo(reader.result);
    };
  };
  const previewFileThree = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceThree(reader.result);
    };
  };
  const previewFileFour = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceFour(reader.result);
    };
  };

  const settingBlogState = async (key, url) => {
    setBlogState({
      ...blogState,
      // imageURL.urlArr.push(returnedData.url)
      [key]: url,
    });
    return blogState;
  };

  // const handleNewPhotos = (event) => {
  //   event.preventDefault();
  //   const files = document.querySelector("[type=file]").files;
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i++) {

  //     formData.append("file", files[i]);
  //     formData.append("upload_preset", cloudPreset);

  //     fetch(cloudinaryURL, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => {
  //         return response.text();
  //       })
  //       .then((data) => {
  //         let returnedData = JSON.parse(data);
  //         console.log(returnedData.url);
  //         // console.log("before setting state: ", blogState);
  //         // a string!!!
  //         // let blogStateKey = [key] + "URL"
  //         // await settingBlogState(key, returnedData.url);
  //         setBlogState({
  //           ...blogState,
  //           // imageURL.urlArr.push(returnedData.url)
  //           [key]: returnedData.url,
  //         // });
  //       });
  //   }
  // };

  // const handleNewPhoto = async (event) => {
  //   event.preventDefault();
  //   // let returnURL = "";
  //   for (const [key, value] of Object.entries(imageState)) {
  //     // let stateKey = key + "URL";
  //     if (value) {
  //       let uploadImage = new FormData();
  //       uploadImage.append("file", value);
  //       uploadImage.append("upload_preset", cloudPreset);
  //       fetch(cloudinaryURL, {
  //         method: "POST",
  //         body: uploadImage,
  //       })
  //         .then((response) => {
  //           return response.text();
  //         })
  //         .then(async (data) => {
  //           let returnedData = JSON.parse(data);
  //           console.log(key + " -------- " + returnedData.url);
  //           console.log("before setting state: ", blogState);
  //           // a string!!!
  //           // let blogStateKey = [key] + "URL"
  //           await settingBlogState(key, returnedData.url);
  //           // return setBlogState({
  //           //   ...blogState,
  //           //   // imageURL.urlArr.push(returnedData.url)
  //           //   [key]: returnedData.url,
  //           // });
  //         })
  //         .then((state) => {
  //           console.log("after setting state: ", blogState);
  //           console.log(state);
  //           // return
  //         });
  //     }
  //   }

  // for (let i = 0; i < imageState.length; i++) {
  // for (const [key, value] of Object.entries(imageState)) {
  //   uploadImage.append("file", value);
  //   uploadImage.append("upload_preset", cloudPreset);
  // }
  // console.log("finished appending");
  // console.log(uploadImage.entries());

  // uploadImage.append("file", imageState.imageOne);

  // uploadImage.append("file", imageState.imageTwo);
  // uploadImage.append("file", imageState.imageThree);
  // uploadImage.append("file", imageState.imageFour);

  // uploadImage.append("upload_preset", cloudPreset);
  // fetch(cloudinaryURL, {
  //   method: "POST",
  //   body: uploadImage,
  // })
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((data) => {
  //     // returnURL = data.url;
  //     // console.log(data.url);
  //     // console.log(JSON.parse(data));
  //     let returnedData = JSON.parse(data);
  //     // a string!!!
  //     setBlogState({
  //       ...blogState,
  //       imageOneURL: returnedData.url,
  //     });
  //   });
  // console.log(returnURL);
  // };

  const handleNewPhoto1 = (event) => {
    event.preventDefault();
    if (imageState.imageOne) {
      let uploadImage = new FormData();
      uploadImage.append("file", imageState.imageOne);
      uploadImage.append("upload_preset", cloudPreset);
      fetch(cloudinaryURL, {
        method: "POST",
        body: uploadImage,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let returnedData = JSON.parse(data);
          setBlogState({
            ...blogState,
            imageOneURL: returnedData.url,
          });
        });
    }
  };
  const handleNewPhoto2 = (event) => {
    event.preventDefault();
    if (imageState.imageOne) {
      let uploadImage = new FormData();
      uploadImage.append("file", imageState.imageTwo);
      uploadImage.append("upload_preset", cloudPreset);
      fetch(cloudinaryURL, {
        method: "POST",
        body: uploadImage,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let returnedData = JSON.parse(data);
          setBlogState({
            ...blogState,
            imageTwoURL: returnedData.url,
          });
        });
    }
  };
  const handleNewPhoto3 = (event) => {
    event.preventDefault();
    if (imageState.imageThree) {
      let uploadImage = new FormData();
      uploadImage.append("file", imageState.imageThree);
      uploadImage.append("upload_preset", cloudPreset);
      fetch(cloudinaryURL, {
        method: "POST",
        body: uploadImage,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let returnedData = JSON.parse(data);
          setBlogState({
            ...blogState,
            imageThreeURL: returnedData.url,
          });
        });
    }
  };
  const handleNewPhoto4 = (event) => {
    event.preventDefault();
    if (imageState.imageFour) {
      let uploadImage = new FormData();
      uploadImage.append("file", imageState.imageFour);
      uploadImage.append("upload_preset", cloudPreset);
      fetch(cloudinaryURL, {
        method: "POST",
        body: uploadImage,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          let returnedData = JSON.parse(data);
          setBlogState({
            ...blogState,
            imageFourURL: returnedData.url,
          });
        });
    }
  };

  const imageChangeOne = (event) => {
    setImageState({
      ...imageState,
      [event.target.name]: event.target.files[0],
    });
    previewFileOne(event.target.files[0]);
  };
  const imageChangeTwo = (event) => {
    setImageState({
      ...imageState,
      [event.target.name]: event.target.files[0],
    });
    previewFileTwo(event.target.files[0]);
  };
  const imageChangeThree = (event) => {
    setImageState({
      ...imageState,
      [event.target.name]: event.target.files[0],
    });
    previewFileThree(event.target.files[0]);
  };
  const imageChangeFour = (event) => {
    setImageState({
      ...imageState,
      [event.target.name]: event.target.files[0],
    });
    previewFileFour(event.target.files[0]);
  };

  const fillerText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ullam fugit, quisquam voluptatem hic maiores libero eius quis mollitia, assumenda esse earum, praesentium totam odio optio nisi sint eum eveniet nesciunt itaque? Saepe suscipit labore iste quaerat officiis excepturi, veritatis voluptatibus quod harum eos ratione consequatur similique dolores enim incidunt ipsam neque aperiam. Sit aperiam ipsum reiciendis similique vitae. Animi aperiam debitis deserunt officia ullam culpa nisi! Rem ipsum atque laboriosam?";

  return (
    <div className="bg-blue-300 flex flex-row">
      <div className="w-1/2">
        <form
          className="lg:w-5/6 w-full lg:mx-auto p-2 bg-red-300"
          id="contact-form"
          onSubmit={handleNewBlog}
        >
          {/* <!-- Blog title --> */}
          <div className="lg:pl-6">
            <div className="flex flex-col items-start lg:w-4/5">
              <label className="mb-1 mt-4" htmlFor="title">
                Blog Title:
              </label>
              <div className="flex flex-row">
                <input
                  className="w-3/4 px-2 mr-2 text-black"
                  type="text"
                  value={blogState.title}
                  onChange={handleInput}
                  placeholder="Blog title"
                  name="title"
                  id="title"
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="pl-6">
            <div className="flex flex-col items-start lg:w-4/5">
              <label className="mb-1 mt-4" htmlFor="title">
                Tags, separated by commas
              </label>
              <div className="flex flex-row">
                <input
                  className="w-3/4 px-2 mr-2 text-black"
                  type="text"
                  value={blogState.tags}
                  onChange={handleInput}
                  placeholder="Tags"
                  name="tags"
                  id="tags"
                />
              </div>
            </div>
          </div>
          <br />

          <div className="flex flex-col items-start lg:px-6">
            {/* <!-- First text --> */}
            <div className="w-full flex flex-row">
              <div className="flex flex-col">
                <label htmlFor="bodyOne" className="">
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
                  id="bodyOne"
                />
                {blogState.bodyOne.length ? (
                  <small>Characters typed: {blogState.bodyOne.length}</small>
                ) : (
                  " "
                )}
              </div>
              {/* <input type="file" name="imageOne" onChange={imageChange} /> */}
            </div>
            {/* First photo */}
            <form onSubmit={handleNewPhoto1}>
              <input type="file" name="imageOne" onChange={imageChangeOne} />
              <button
                className="hover:text-white px-2 border border-black border-2"
                type="submit"
              >
                Upload photo 1
              </button>
              {blogState.imageOneURL ? (
                <span>Image 1 successfully uploaded</span>
              ) : (
                ""
              )}
            </form>
            <br />
            {/* Second portion */}
            <div className="w-auto flex flex-row">
              {/* Second text */}
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
                  " "
                )}
              </div>
              {/* <input type="file" /> */}
            </div>
            {/* Second photo */}
            <form onSubmit={handleNewPhoto2}>
              <input type="file" name="imageTwo" onChange={imageChangeTwo} />
              <button
                className="hover:text-white px-2 border border-black border-2"
                type="submit"
              >
                Upload photo 2
              </button>
              {blogState.imageTwoURL ? (
                <span>Image 2 successfully uploaded</span>
              ) : (
                ""
              )}
            </form>
            <br />
            {/* Third portion */}
            <div className="w-auto flex flex-row">
              {/* Third text */}
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
                  " "
                )}
              </div>
              {/* <input type="file" /> */}
            </div>
            {/* Third photo */}
            <form onSubmit={handleNewPhoto3}>
              <input
                type="file"
                name="imageThree"
                onChange={imageChangeThree}
              />
              <button
                className="hover:text-white px-2 border border-black border-2"
                type="submit"
              >
                Upload photo 3
              </button>
              {blogState.imageThreeURL ? (
                <span>Image 3 successfully uploaded</span>
              ) : (
                ""
              )}
            </form>
            <br />
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
                  " "
                )}
              </div>
              {/* <input type="file" /> */}
            </div>
            <form onSubmit={handleNewPhoto4}>
              <input type="file" name="imageFour" onChange={imageChangeFour} />
              <button
                className="hover:text-white px-2 border border-black border-2"
                type="submit"
              >
                Upload photo 4
              </button>
              {blogState.imageFourURL ? (
                <span>Image 4 successfully uploaded</span>
              ) : (
                ""
              )}
            </form>
          </div>

          {/* <!-- Submit button --> */}
          <div className="lg:pl-6">
            <button
              type="submit"
              className="rounded py-2 px-6 bg-dclpal1-400 hover:bg-dclpal1-200 text-xl hover:text-white"
            >
              Submit new blog!
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
          </div>
        </form>
      </div>
      <div className="w-1/2 border border-white">
        <div className="bg-gray-600 w-full px-2 py-4 flex flex-row justify-evenly">
          <div className="bg-red-600 w-full">
            <h1 className="relative text-2xl bg-red-100 text-left">
              {moment().format("dddd, MMMM Do, h:mm:ss a")}
              <span className="absolute right-0 bg-red-600 text-white px-2">
                <button>Delete me</button>
              </span>
            </h1>
            <h1 className="text-3xl italic bg-red-700 text-center">
              {blogState.title ? blogState.title : "Title"}
            </h1>
            <div className="flex flex-row text-lg bg-red-200">
              <p>{blogState.bodyOne ? blogState.bodyOne : fillerText}</p>
              <img
                className="w-1/6"
                src={
                  previewSourceOne
                    ? previewSourceOne
                    : "http://placeimg.com/240/240/any"
                }
                alt="blog photo 1"
              />
            </div>
            <div className="flex flex-row text-lg bg-red-300">
              <img
                className="w-1/6"
                src={
                  previewSourceTwo
                    ? previewSourceTwo
                    : "http://placeimg.com/240/240/any"
                }
                alt="blog photo 2"
              />
              <p>{blogState.bodyTwo ? blogState.bodyTwo : fillerText}</p>
            </div>
            <div className="flex flex-row text-lg bg-red-400">
              <p>{blogState.bodyThree ? blogState.bodyThree : fillerText}</p>
              <img
                className="w-1/6"
                src={
                  previewSourceThree
                    ? previewSourceThree
                    : "http://placeimg.com/240/240/any"
                }
                alt="blog photo 3"
              />
            </div>
            <div className="flex flex-row text-lg bg-red-500">
              <img
                className="w-1/6"
                src={
                  previewSourceFour
                    ? previewSourceFour
                    : "http://placeimg.com/240/240/any"
                }
                alt="blog photo 4"
              />
              <p>{blogState.bodyFour ? blogState.bodyFour : fillerText}</p>
            </div>
          </div>
          {/* <img className="" src="http://placeimg.com/240/240/any" alt="blog 1" /> */}
        </div>
      </div>
    </div>
  );
}
