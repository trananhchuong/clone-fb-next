import React from "react";
import PropTypes from "prop-types";

index.propTypes = {};

function index(props) {
  return <div>Home Page</div>;
}

export default index;

export async function getStaticProps(context) {
  const data = [1, 2, 3];
  console.log("=====================")
  console.log("🚀 ~ file: index.js ~ line 14 ~ getStaticProps ~ data", data)
  console.log("=====================")
  return {
    props: {
      data
    }, // will be passed to the page component as props
  };
}
