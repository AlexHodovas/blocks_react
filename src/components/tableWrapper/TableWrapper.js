import styled from "styled-components";
import { cellSizePX } from "../styleVars";

const TableWrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: ${cellSizePX};
  cursor: grab;
`;
export default TableWrapper;
