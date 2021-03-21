import React from 'react';
import CategoryTab from './main/categoryTab';
import FeatureItems from './main/featureItems';
import RecommendedItems from './main/recommendedItems';

const Main = () => {
    return (
        <div class="col-sm-9 padding-right">
            <FeatureItems/>
            <CategoryTab/>
            <RecommendedItems/>
        </div>
    );
};

export default Main;