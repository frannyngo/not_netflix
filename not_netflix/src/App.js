import React, { Component } from "react";
import Home from "./pages/Home/Home.js";
import { Nav } from "./components/Nav/Nav.js";
import { Theme } from "./global/Styles";

class App extends Component {
  render() {
    return (
      <Theme>
        <Nav />
        <Home />
      </Theme>
    );
  }
}

export default App;
