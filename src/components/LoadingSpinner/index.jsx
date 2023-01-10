import React from "react";
import {Spinner} from "reactstrap";

const LoadingSpinner = ({verticalMargin}) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center w-100"
      style={{margin: `${verticalMargin}px 0`}}
    >
      <Spinner style={{color: `var(--es-identity-color)`}}>Loading...</Spinner>
    </div>
  );
};

export default LoadingSpinner;
