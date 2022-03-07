import React from "react";
import NotFound from "./../../images/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <>
      <div>
        <img className="img" src={NotFound} />
      </div>
    </>
  );
};

export default PageNotFound;
