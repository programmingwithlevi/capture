import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//router
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <GlobalStyle />
      
        <Nav />
        
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
        
          <Route path="/ContactUs" exact element={<ContactUs />} /> 
          
          <Route path="/OurWork" element={<OurWork />} />
          <Route path="/work/:id">
            <Route <MovieDetail /> />
          </Route>
        </Routes>    

    </div>
  );
}

export default App;
