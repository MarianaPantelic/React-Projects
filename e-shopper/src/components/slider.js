import { Carousel } from "react-bootstrap";
import React, { useState }  from "react";



const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)};

    const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction}
      </span>
    );
  };

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Carousel        
            nextLabel={"Next"}
            prevLabel={"Previous"}
            activeIndex={index}
            onSelect={handleSelect}
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")} 
            data-ride="carousel"  id="slider-carousel">
              <div className="item" interval={3000}>
                <div className="col-sm-6">
                  <h1>
                    <span>E</span>-SHOPPER
                  </h1>
                  <h2>Free E-Commerce Template</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                  <button type="button" className="btn btn-default get">
                    Get it now
                  </button>
                </div>

                <div className="col-sm-6">
                  <img
                    src="images/home/girl1.jpg"
                    className="girl img-responsive"
                    alt="Girl 1"
                  />
                  <img
                    src="images/home/pricing.png"
                    className="pricing"
                    alt="Price 1"
                  />
                </div>
              </div>
              <div className="item" interval={3000}>
                <div className="col-sm-6">
                  <h1>
                    <span>E</span>-SHOPPER
                  </h1>
                  <h2>100% Responsive Design</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                  <button type="button" className="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div className="col-sm-6">
                  <img
                    src="images/home/girl2.jpg"
                    className="girl img-responsive"
                    alt="Girl 2"
                  />
                  <img
                    src="images/home/pricing.png"
                    className="pricing"
                    alt="Price 2"
                  />
                </div>
              </div>
              <div className="item" interval={3000}>
                <div className="col-sm-6">
                  <h1>
                    <span>E</span>-SHOPPER
                  </h1>
                  <h2>Free Ecommerce Template</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                  <button type="button" className="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div className="col-sm-6">
                  <img
                    src="images/home/girl3.jpg"
                    className="girl img-responsive"
                    alt="Girl 3"
                  />
                  <img
                    src="images/home/pricing.png"
                    className="pricing"
                    alt="Price 3"
                  />
                </div>
              </div>
              
           
            </Carousel>
            <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
   
          
          </div>
        </div>
        </div>
    </section>
  );
};

export default Slider;
