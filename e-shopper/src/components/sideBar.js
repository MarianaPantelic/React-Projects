import React from 'react';
import PriceRange from "./sidebar/priceRange"
import Brands from './sidebar/brands';
import Category from './sidebar/cathegory';
import Shipping from './sidebar/shipping';

const SideBar = () => {
    return (
        
        <div className="left-sidebar">
            <Category/>
            <Brands/>
            <PriceRange/>
            <Shipping/>
        </div>
    
    );
};

export default SideBar;