import React from "react";
import { Spinner } from "reactstrap";

function Loading() {
  return (
    <div className="loading-container">
      <Spinner color="dark" type="grow" className=""></Spinner>
      <Spinner color="dark" type="grow" className=""></Spinner>
      <Spinner color="dark" type="grow" className=""></Spinner>
      <Spinner color="dark" type="grow" className=""></Spinner>
      <Spinner color="dark" type="grow" className=""></Spinner>
    </div>
  );
}

export default Loading;
