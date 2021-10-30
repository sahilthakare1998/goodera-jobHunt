import React from "react";
import { Link } from "react-router-dom";
import "./broken-link.css";

const BrokenLink = () => {
  return (
    <>
      <div className="broken-link">
        You have followed a broken link or the information is not currently
        avaialble!
        <div>
          Click here to go to homepage{" "}
          <Link to={{ pathname: "/" }}>Home</Link>
        </div>
      </div>
    </>
  );
};

export default BrokenLink;
