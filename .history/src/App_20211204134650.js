import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="GlobalStyle" element={<GlobalStyle />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ContactUs />} /> 
        </Routes>
      
    </div>
  );
}

export default App;

