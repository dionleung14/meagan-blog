import axios from "axios";
const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://dcl-portfolio-mail-handler.herokuapp.com";

export default {
  // submitMessage: function (messageData) {
  //   return axios.post("/submit", messageData);
  // },
  getBlogs: function () {
    return axios.get(`${BASE_URL}/all`);
  },
  submitBlog: function (newBlog) {
    return axios.post(`${BASE_URL}/blog`, newBlog);
  },
};
