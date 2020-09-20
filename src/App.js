import React, { useState, useParams } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SubmitBlog from "./pages/SubmitBlog";
// import Blog from "./pages/Blog";
import BlogRFC from "./pages/BlogRFC";
import Category from "./pages/Category";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";

function App() {
  const [loggedIn, setLoggedIn] = useState({ logged: false });
  const handleToggle = () =>
    setLoggedIn((s) => ({ ...s, logged: !loggedIn.logged }));
  // let { id } = useParams();
  return (
    <Router>
      {/* <Navbar logged={loggedIn} /> */}
      <Route exact path="/">
        <Home security={loggedIn} />
      </Route>
      <Route exact path="/category-one">
        <Category security={loggedIn} filter="1" />
      </Route>
      <Route exact path="/category-two">
        <Category security={loggedIn} filter="2" />
      </Route>
      <Route exact path="/category-three">
        <Category security={loggedIn} filter="3" />
      </Route>
      <Route exact path="/new">
        <SubmitBlog security={loggedIn} />
      </Route>
      {/* <Route exact path="/blog/:id">
        <Blog blog="Truth" />
      </Route> */}
      <Route exact path="/blog/:id">
        <BlogRFC blog="Truth" />
      </Route>
    </Router>
  );
}

export default App;
