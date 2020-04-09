import React from "react";
import PropTypes from "prop-types";

const Button = ({ symbol, clickFunction }) => (
  <button onClick={clickFunction} className="button">
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired
};

export default Button;
