import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import Cart from "../components/shop/cart";
import Checkout from "../components/shop/checkout";
import Login from "../components/shop/login";
import ProductDetails from "../components/shop/productDetails";
import Products from "../components/shop/products";

const Shop = (props) => {
    let { path } = useRouteMatch();
    console.log(path);
  return (
      <Switch>
            <Route exact path = {path}>
                <div>This is Shop Page</div>
            </Route>
            <Route path = {path + "/products"}><Products/></Route>
            <Route path= {path + "/productDetails/:id"} ><ProductDetails products = {props.products}/></Route>
            <Route path = {path + "/checkout"}><Checkout/></Route>
            <Route path = {path + "/cart"}><Cart/></Route>
            <Route path = {path + "/login"}><Login/></Route>
      </Switch>
  )
};

export default Shop;
