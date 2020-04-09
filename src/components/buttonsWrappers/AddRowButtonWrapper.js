import styled from "styled-components";
import {
  buttonSize,
  backgroundColorInAddButton,
  spaceBetweenTableAndButtons
} from "../styleVars";

const AddRowButtonWrapper = styled.div`
  position: absolute;
  bottom: ${spaceBetweenTableAndButtons};
  left: ${buttonSize + 1}px;
  transition: opacity 1s, transform 0.5s;
  background-color: ${backgroundColorInAddButton};

  &:hover {
    opacity: 0.6;
  }
`;

export default AddRowButtonWrapper;
