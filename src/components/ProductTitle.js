import React, { Children } from "react";
// Made title component with included props (product name and title) so now we can use it to make similar product title in the same style
// wee pass props to ProductTitle and the just include them to return position
export default function ProductTitle({ name, title }) {
  return (
    <div className="row" style={{marginRight: '0',
      marginLeft: '0'}}>
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold text-title">
          {name} <strong className="text-yellow">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
