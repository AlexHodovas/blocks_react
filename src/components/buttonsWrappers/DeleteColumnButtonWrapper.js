import styled from "styled-components";
import Wrapper from "../tableWrapper/TableWrapper";
import { backgroundColorDeleteButton } from "../styleVars";

const DeleteColumnButtonWrapper = styled.div`
  display: ${({ theme }) =>
    theme.isDeleteColumnButtonHidden ? "none" : "block"};
  position: absolute;
  top: -2px;
  transition: opacity 1s, transform 0.5s;
  transform: translateX(
    ${({ theme }) => theme.colIndex * theme.cellSize + 2}px
  );

  ${Wrapper}:hover & {
    background-color: ${backgroundColorDeleteButton};
  }

  &:hover {
    opacity: 0.6;
  }
`;
export default DeleteColumnButtonWrapper;
