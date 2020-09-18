import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SubmitBlog from "./pages/SubmitBlog";
import Category from "./pages/Category";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <Navbar logged={loggedIn} />
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
    </Router>
  );
}

export default App;
