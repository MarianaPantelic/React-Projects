import React from "react";
import PageFooter from "../footer";
import ItemSection from "../itemSection";
import Options from "../options";
import PageHeader from "../pageHeader";

const Cart = () => {
  return (
    <>
      <PageHeader />
      <section id="cart_items">
        <div class="container">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">Shopping Cart</li>
            </ol>
          </div>
          <div class="table-responsive cart_info">
            <table class="table table-condensed">
              <ItemSection />
            </table>
          </div>
          <Options />
        </div>
      </section>
      <PageFooter />
    </>
  );
};

export default Cart;
