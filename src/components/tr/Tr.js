import React from "react";
import PropTypes from "prop-types";
import Td from "../td/Td";

const Tr = ({
  tr,
  targetRowIndex,
  updateActiveColIndex,
  updateActiveRowIndex
}) => (
  <tr
    onMouseOver={() => {
      updateActiveRowIndex(targetRowIndex);
    }}
  >
    {tr.cells.map((_, i) => (
      <Td
        key={i}
        targetColumnIndex={i}
        updateActiveColIndex={updateActiveColIndex}
      />
    ))}
  </tr>
);

Tr.propTypes = {
  tr: PropTypes.object.isRequired,
  targetRowIndex: PropTypes.number.isRequired,
  updateActiveColIndex: PropTypes.func.isRequired,
  updateActiveRowIndex: PropTypes.func.isRequired
};

export default Tr;
