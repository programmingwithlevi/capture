import React from "react";
//import pages
import AboutUs from '../src/pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

//router
import {Route,Switch,useLocation} from "react-router-dom";
//animaitom
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return  (
    <div className="App">
      
        <GlobalStyle />
      
        <Nav />
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/"  exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs /> 
          </Route>

          
        </Switch>    
        </AnimatePresence>
    </div>
  );
}

export default App;

