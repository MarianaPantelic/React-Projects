import React from "react";
import PageFooter from "../footer";
import RecommendedItems from "../main/recommendedItems";
import PageHeader from "../pageHeader";
import SideBar from "../sideBar";
import MainProductDetails from "../mainProductDetails"

const ProductDetails = () => {
  return (
    <>

      <PageHeader/>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <SideBar />
          </div>
          <div className="col-sm-9 padding-right">
            <MainProductDetails />
            <RecommendedItems/>
          </div>
        </div>
        
      </div>

      <PageFooter />
    </>
  )
};

export default ProductDetails;
