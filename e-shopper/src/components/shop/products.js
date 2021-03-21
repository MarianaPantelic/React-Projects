import React from "react";
import PageFooter from "../footer";
import MainProducts from "../mainProducts";
import PageHeader from "../pageHeader";
import SideBar from "../sideBar";

const Products = () => {
  return (
    <>
      <PageHeader/>
      <section id="advertisement">
        <div class="container">
          <img src="/images/shop/advertisement.jpg" alt="" />
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <SideBar />
          </div>
          <MainProducts />
        </div>
      </div>
      <PageFooter />

    </>
  )
};

export default Products;
