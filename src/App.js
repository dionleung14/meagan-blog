import React from "react";
import Home from "./pages/Home";
import SubmitBlog from "./pages/SubmitBlog";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <SubmitBlog />
      </Route>
    </Router>
  );
}

export default App;
