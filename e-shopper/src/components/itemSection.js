import React from "react";

const ItemSection = () => {
  return (
    <>
      <thead>
        <tr className="cart_menu">
          <td className="image">Item</td>
          <td className="description"></td>
          <td className="price">Price</td>
          <td className="quantity">Quantity</td>
          <td className="total">Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cart_product">
            <a href="#">
              <img src="/images/cart/one.png" alt="One" />
            </a>
          </td>
          <td className="cart_description">
            <h4>
              <a href="#">Colorblock Scuba</a>
            </h4>
            <p>Web ID: 1089772</p>
          </td>
          <td className="cart_price">
            <p>$59</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <a className="cart_quantity_up" href="#">
                {" "}
                +{" "}
              </a>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                value="1"
                autocomplete="off"
                size="2"
              />
              <a className="cart_quantity_down" href="#">
                {" "}
                -{" "}
              </a>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">$59</p>
          </td>
          <td className="cart_delete">
            <a className="cart_quantity_delete" href="#">
              <i className="fa fa-times"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td className="cart_product">
            <a href="#">
              <img src="/images/cart/two.png" alt="Two" />
            </a>
          </td>
          <td className="cart_description">
            <h4>
              <a href="#">Colorblock Scuba</a>
            </h4>
            <p>Web ID: 1089772</p>
          </td>
          <td className="cart_price">
            <p>$59</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <a className="cart_quantity_up" href="#">
                {" "}
                +{" "}
              </a>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                value="1"
                autocomplete="off"
                size="2"
              />
              <a className="cart_quantity_down" href="#">
                {" "}
                -{" "}
              </a>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">$59</p>
          </td>
          <td className="cart_delete">
            <a className="cart_quantity_delete" href="#">
              <i className="fa fa-times"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td className="cart_product">
            <a href="">
              <img src="/images/cart/three.png" alt="#" />
            </a>
          </td>
          <td className="cart_description">
            <h4>
              <a href="">Colorblock Scuba</a>
            </h4>
            <p>Web ID: 1089772</p>
          </td>
          <td className="cart_price">
            <p>$59</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <a className="cart_quantity_up" href="#">
                {" "}
                +{" "}
              </a>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                value="1"
                autocomplete="off"
                size="2"
              />
              <a className="cart_quantity_down" href="#">
                {" "}
                -{" "}
              </a>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">$59</p>
          </td>
          <td className="cart_delete">
            <a className="cart_quantity_delete" href="#">
              <i className="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ItemSection;
