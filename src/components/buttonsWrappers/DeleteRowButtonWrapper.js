import styled from "styled-components";
import Wrapper from "../tableWrapper/TableWrapper";
import {
  backgroundColorDeleteButton,
  spaceBetweenTableAndButtons
} from "../styleVars";

const DeleteRowButtonWrapper = styled.div`
  display: ${({ theme }) => (theme.isDeleteRowButtonHidden ? "none" : "block")};
  position: absolute;
  top: -2px;
  left: ${spaceBetweenTableAndButtons};
  transition: opacity 1s, transform 0.5s;
  transform: translateY(
    ${({ theme }) => 2 + (theme.rowIndex + 1) * theme.cellSize}px
  );

  ${Wrapper}:hover & {
    background-color: ${backgroundColorDeleteButton};
  }

  &:hover {
    opacity: 0.6;
  }
`;
export default DeleteRowButtonWrapper;
