import React from "react";
import { Link } from "react-router-dom";

const BarBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="mainmenu pull-left">
              <ul className="nav navbar-nav collapse navbar-collapse">
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    Shop<i className="fa fa-angle-down"></i>
                  </Link>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <Link to="/shop/products">Products</Link>
                    </li>

                    <li>
                      <Link to="/shop/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/shop/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/shop/login">Login</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/">
                    Blog<i className="fa fa-angle-down"></i>
                  </Link>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <Link to="/blog/blogList">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog/blogSingle">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarBottom;
