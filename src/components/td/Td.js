import React from "react";
import PropTypes from "prop-types";

const Td = ({ targetColumnIndex, updateActiveColIndex }) => (
  <td
    className="td"
    onMouseOver={() => {
      updateActiveColIndex(targetColumnIndex);
    }}
    key={targetColumnIndex}
  ></td>
);

Td.propTypes = {
  targetColumnIndex: PropTypes.number.isRequired,
  updateActiveColIndex: PropTypes.func.isRequired
};

export default Td;
