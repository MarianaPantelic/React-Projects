import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';   This line will make the carousel working, but will mess everything else

import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Page404 from "./pages/404";


const App = () => {

  //if we want to fetch the data:

  // useEffect(() => {
      // here we can fetch the data
  //}, [])

  const products = [
    {
      id: 123451,
      title: "title1",
      price: 50,
      imgUrl: "/images/home/product1.jpg"
    },
    {
      id: 123452,
      title: "title2",
      price: 50,
      imgUrl: "/images/home/product2.jpg"
    },
    {
      id: 123453,
      title: "title3",
      price: 50,
      imgUrl: "/images/home/product3.jpg"
    },
    {
      id: 123454,
      title: "title4",
      price: 50,
      imgUrl: "/images/home/product4.jpg"
    },
    {
      id: 123455,
      title: "title5",
      price: 50,
      imgUrl: "/images/home/product5.jpg"
    },
    {
      id: 123456,
      title: "title6",
      price: 50,
      imgUrl: "/images/home/product6.jpg"
    }
  ]

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home products = {products}/>
        </Route>
        <Route path = "/shop"><Shop products = {products}/></Route>
        <Route path = "/blog"><Blog/></Route>
        <Route path = "/contact"><Contact/></Route>
        <Route path = "/404"><Page404/></Route>
        <Route path = "*"><Page404/></Route>
      </Switch>
    </Router>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
