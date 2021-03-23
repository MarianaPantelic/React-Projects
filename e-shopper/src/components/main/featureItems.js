import React from "react";
import { Link, useParams } from "react-router-dom";

const FeatureItems = (props) => {
  return (
    <div className="features_items">
      <h2 className="title text-center">Features Items</h2>
      {props.products.map((element) => (
        <Link
          to={"/shop/productDetails/" + element.id}
          key={element.id}
          className="col-sm-4"
        >
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src={element.imgUrl} alt={element.id} />
                <h2>${element.price}</h2>
                <p>{element.title}</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
              <div className="product-overlay">
                <div className="overlay-content">
                  <h2>${element.price}</h2>
                  <p>{element.title}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <a href="#">
                    <i className="fa fa-plus-square"></i>Add to wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-square"></i>Add to compare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
      {/*       <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product1.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product2.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product3.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product4.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
            <img src="images/home/new.png" className="new" alt="" />
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product5.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
            <img src="images/home/sale.png" className="new" alt="" />
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4"> 
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product6.jpg" alt="" />
              <h2>$56</h2>
              <p>Easy Polo Black Edition</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default FeatureItems;
