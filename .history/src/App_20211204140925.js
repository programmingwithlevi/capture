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
      
        
          <GlobalStyle />
        
        
          <Nav />
        
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<ContactUs />} /> 
        </Routes>
        <Routes>
          <Route path="/" exact element={<OurWork />} />
        </Routes>    

    </div>
  );
}

export default App;

