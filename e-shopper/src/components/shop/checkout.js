import React from "react";
import ItemSection from "../itemSection";
import PageHeader from "../pageHeader";
import PageFooter from "../footer";
import Step1 from "../step1";

const Checkout = () => {
  return (
    <>
      <PageHeader />
      <section id="cart_items">
        <div className="container">
          <Step1 />
          <div className="review-payment">
            <h2>Review & Payment</h2>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <ItemSection />
              <tr>
                <td colspan="4">&nbsp;</td>
                <td colspan="2">
                  <table className="table table-condensed total-result">
                    <tr>
                      <td>Cart Sub Total</td>
                      <td>$59</td>
                    </tr>
                    <tr>
                      <td>Exo Tax</td>
                      <td>$2</td>
                    </tr>
                    <tr className="shipping-cost">
                      <td>Shipping Cost</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        <span>$61</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div class="payment-options">
            <span>
              <label>
                <input type="checkbox" /> Direct Bank Transfer
              </label>
            </span>
            <span>
              <label>
                <input type="checkbox" /> Check Payment
              </label>
            </span>
            <span>
              <label>
                <input type="checkbox" /> Paypal
              </label>
            </span>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
};

export default Checkout;
