import React from "react";
// Made title component with included props (product name and title) so now we can use it to make similar product look
// wee pass props to title and the just include them to return position
export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold"></h1>
        {name} <strong className="text-yellow">{title}</strong>
      </div>
    </div>
  );
}
