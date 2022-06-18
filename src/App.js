import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import { Nav } from "./components/Nav/Nav.js";
import { Theme } from "./global/theme";

class App extends Component {
  render() {
    return (
      <Theme>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Theme>
    );
  }
}

export default App;
