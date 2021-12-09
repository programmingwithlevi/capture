import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import ReactDom from "react-dom";

//router
import {Route,Switch} from "react-router-dom";

function App() {
  return  (
    <div className="App">
      
        <GlobalStyle />
      
        <Nav />
        
        <Switch>
          <Route path="/"  exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs /> 
          </Route>

          
        </Switch>    

    </div>
  );
}

export default App;

