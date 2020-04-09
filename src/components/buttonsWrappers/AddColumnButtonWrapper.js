import styled from "styled-components";
import {
  buttonSize,
  backgroundColorInAddButton,
  spaceBetweenTableAndButtons
} from "../styleVars";

const AddColumnButtonWrapper = styled.div`
  position: absolute;
  top: ${buttonSize + 1}px;
  right: ${spaceBetweenTableAndButtons};
  transition: opacity 1s, transform 0.5s;
  background-color: ${backgroundColorInAddButton};

  &:hover {
    opacity: 0.6;
  }
`;

export default AddColumnButtonWrapper;
