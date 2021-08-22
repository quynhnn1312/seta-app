import React from "react";
import { Spinner } from "reactstrap";

function Loading() {
  return (
    <div className="loading">
      <Spinner color="white" className="spinner" />
    </div>
  );
}

export default Loading;
