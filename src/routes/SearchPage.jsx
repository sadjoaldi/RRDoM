/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  return (
    <>
      <h1>Search Results</h1>
      <Link to="/detailpage">
        <button>View</button>
      </Link>
    </>
  );
}

export default SearchPage;
