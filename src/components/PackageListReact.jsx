/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function PackageListReact({ name, description }) {
  console.log(name, description);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <Link to="/detailpage">
          <button>View</button>
        </Link>
      </div>
    </>
  );
}

export default PackageListReact;
