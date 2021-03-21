import React from 'react';

const Step1 = () => {
    return (
        <>

            <div className="breadcrumbs">
                <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li className="active">Check out</li>
                </ol>
            </div>

            <div className="step-one">
                <h2 className="heading">Step1</h2>
            </div>
            <div className="checkout-options">
                <h3>New User</h3>
                <p>Checkout options</p>
                <ul className="nav">
                    <li>
                        <label><input type="checkbox"/> Register Account</label>
                    </li>
                    <li>
                        <label><input type="checkbox"/> Guest Checkout</label>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-times"></i>Cancel</a>
                    </li>
                </ul>
            </div>

            <div className="register-req">
                <p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
            </div>

            <div className="shopper-informations">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="shopper-info">
                            <p>Shopper Information</p>
                            <form>
                                <input type="text" placeholder="Display Name"/>
                                <input type="text" placeholder="User Name"/>
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Confirm password"/>
                            </form>
                            <a className="btn btn-primary" href="#">Get Quotes</a>
                            <a className="btn btn-primary" href="#">Continue</a>
                        </div>
                    </div>
                    <div className="col-sm-5 clearfix">
                        <div className="bill-to">
                            <p>Bill To</p>
                            <div className="form-one">
                                <form>
                                    <input type="text" placeholder="Company Name"/>
                                    <input type="text" placeholder="Email*"/>
                                    <input type="text" placeholder="Title"/>
                                    <input type="text" placeholder="First Name *"/>
                                    <input type="text" placeholder="Middle Name"/>
                                    <input type="text" placeholder="Last Name *"/>
                                    <input type="text" placeholder="Address 1 *"/>
                                    <input type="text" placeholder="Address 2"/>
                                </form>
                            </div>
                            <div className="form-two">
                                <form>
                                    <input type="text" placeholder="Zip / Postal Code *"/>
                                    <select>
                                        <option>-- Country --</option>
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>UK</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>Ucrane</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                    <select>
                                        <option>-- State / Province / Region --</option>
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>UK</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>Ucrane</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                    <input type="password" placeholder="Confirm password"/>
                                    <input type="text" placeholder="Phone *"/>
                                    <input type="text" placeholder="Mobile Phone"/>
                                    <input type="text" placeholder="Fax"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="order-message">
                            <p>Shipping Order</p>
                            <textarea name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
                            <label><input type="checkbox"/> Shipping to bill address</label>
                        </div>	
                    </div>					
                </div>
            </div>
            </>
    );
};

export default Step1;