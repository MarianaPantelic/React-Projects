import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import CategoryTab from "./main/categoryTab";
import FeatureItems from "./main/featureItems";
import RecommendedItems from "./main/recommendedItems";

const Main = (props) => {
  return (
    <div class="col-sm-9 padding-right">
      <FeatureItems products={props.products} />
      <CategoryTab />
      <RecommendedItems />
    </div>
  );
};

export default Main;
