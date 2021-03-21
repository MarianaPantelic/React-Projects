import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Page404 from "./pages/404";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path = "/shop"><Shop/></Route>
        <Route path = "/blog"><Blog/></Route>
        <Route path = "/404"><Page404/></Route>
        <Route path = "/contact"><Contact/></Route>
      </Switch>
    </Router>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
