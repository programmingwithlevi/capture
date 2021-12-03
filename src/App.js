import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
//import Nav from "../capture/src/components/Nav.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <AboutUs />
    </div>
  );
}

export default App;

