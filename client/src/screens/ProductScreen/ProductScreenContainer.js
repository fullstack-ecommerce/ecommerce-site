import React from "react";
import RenderProductScreen from "./RenderProductScreen";

const ProductScreenContainer = (props) => {
  return (
    <div>
      <RenderProductScreen product={props.product} />
    </div>
  );
};

export default ProductScreenContainer;
