import React from 'react';
import { Carousel } from 'react-bootstrap';

const MainProductDetails = () => {
    return (
        <>
       
            <div className="product-details">
                <div className="col-sm-5">
                    <div className="view-product">
                        <img src="/images/product-details/1.jpg" alt="Product Details 1" />
                        <h3>ZOOM</h3>
                    </div>
                    <div id="similar-product" className="carousel slide" data-ride="carousel">
                        
                            
                            <Carousel>
                                <div className="item" interval = {3000}>
                                    <a href="#"><img src="/images/product-details/similar1.jpg" alt="Similar 1"/></a>
                                    <a href="#"><img src="/images/product-details/similar2.jpg" alt="Similar 2"/></a>
                                    <a href="#"><img src="/images/product-details/similar3.jpg" alt="Similar 3"/></a>
                                </div>
                                <div className="item" interval = {3000}>
                                    <a href="#"><img src="/images/product-details/similar2.jpg" alt="Similar 2"/></a>
                                    <a href="#"><img src="/images/product-details/similar3.jpg" alt="Similar 3"/></a>
                                    <a href="#"><img src="/images/product-details/similar1.jpg" alt="Similar 1"/></a>
                                </div>
                                <div className="item" interval = {3000}>
                                    <a href="#"><img src="/images/product-details/similar3.jpg" alt="Similar 3"/></a>
                                    <a href="#"><img src="/images/product-details/similar1.jpg" alt="Similar 1"/></a>
                                    <a href="#"><img src="/images/product-details/similar2.jpg" alt="Similar 2"/></a>
                                </div>
                                
                            </Carousel>

                            
                            <a className="left item-control" href="#similar-product" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="right item-control" href="#similar-product" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                            </a>
                    </div>

                </div>
                <div className="col-sm-7">
                    <div className="product-information">
                        <img src="/images/product-details/new.jpg" className="newarrival" alt="New" />
                        <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                        <p>Web ID: 1089772</p>
                        <img src="/images/product-details/rating.png" alt="Rating" />
                        <span>
                            <span>US $59</span>
                            <label>Quantity:</label>
                            <input type="text" value="3" />
                            <button type="button" className="btn btn-fefault cart">
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </span>
                        <p><b>Availability:</b> In Stock</p>
                        <p><b>Condition:</b> New</p>
                        <p><b>Brand:</b> E-SHOPPER</p>
                        <a href="#"><img src="/images/product-details/share.png" className="share img-responsive"  alt="Share" /></a>
                    </div>
                </div>
            </div>
            
            <div className="category-tab shop-details-tab">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                        <li><a href="#details" data-toggle="tab">Details</a></li>
                        <li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
                        <li><a href="#tag" data-toggle="tab">Tag</a></li>
                        <li className="active"><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade" id="details" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery1.jpg" alt="Gallery 1" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery2.jpg" alt="Gallery 2" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery3.jpg" alt="Gallery 3" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery4.jpg" alt="Gallery 4" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="companyprofile" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery1.jpg" alt="Gallery 1" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery3.jpg" alt="Gallery 3" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery2.jpg" alt="Gallery 2" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery4.jpg" alt="Gallery 4" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="tag" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery1.jpg" alt="Gallery 1" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery2.jpg" alt="Gallery 2" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery3.jpg" alt="Gallery 3" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src="/images/home/gallery4.jpg" alt="Gallery 4" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade active in" id="reviews" >
                        <div className="col-sm-12">
                            <ul>
                                <li><a href=""><i className="fa fa-user"></i>EUGEN</a></li>
                                <li><a href=""><i className="fa fa-clock-o"></i>12:41 PM</a></li>
                                <li><a href=""><i className="fa fa-calendar-o"></i>31 DEC 2014</a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p><b>Write Your Review</b></p>
                            
                            <form action="#">
                                <span>
                                    <input type="text" placeholder="Your Name"/>
                                    <input type="email" placeholder="Email Address"/>
                                </span>
                                <textarea name="" ></textarea>
                                <b>Rating: </b> <img src="/images/product-details/rating.png" alt="Rating" />
                                <button type="button" className="btn btn-default pull-right">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default MainProductDetails;