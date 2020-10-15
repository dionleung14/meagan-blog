import React, { useState, useParams } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SubmitBlog from "./pages/SubmitBlog";
// import Blog from "./pages/Blog";
import About from "./pages/About";
import BlogRFC from "./pages/BlogRFC";
import Category from "./pages/Category";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
// import logo from "./logo.svg";

function App() {
  const [loggedIn, setLoggedIn] = useState({ logged: false });
  const handleToggle = () =>
    setLoggedIn((s) => ({ ...s, logged: !loggedIn.logged }));
  // let { id } = useParams();
  return (
    <Router>
      <Switch>
        {/* <Navbar logged={loggedIn} /> */}
        <Route exact path="/">
          <Home security={loggedIn} />
        </Route>
        <Route exact path="/about">
          <About security={loggedIn} filter="1" />
        </Route>
        <Route exact path="/contact">
          <Contact security={loggedIn} filter="2" />
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
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
