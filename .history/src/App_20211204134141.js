import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/GlobalStyle" element={<GlobalStyle />} />
        </Routes>
        <Routes>
          <Route path="./Nav" element={<Nav />} />
        </Routes>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        
      
    </div>
  );
}

export default App;

