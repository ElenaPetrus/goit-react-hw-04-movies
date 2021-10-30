import React from "react";
import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return <p>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
