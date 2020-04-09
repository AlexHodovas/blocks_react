import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import AddRowButtonWrapper from "../buttonsWrappers/AddRowButtonWrapper";
import AddColumnButtonWrapper from "../buttonsWrappers/AddColumnButtonWrapper";
import Button from "../button/Button";
import DeleteRowButtonWrapper from "../buttonsWrappers/DeleteRowButtonWrapper";
import DeleteColumnButtonWrapper from "../buttonsWrappers/DeleteColumnButtonWrapper";
import Tr from "../tr/Tr";

const Table = ({ initialWidth, initialHeight, cellSize }) => {
  const [activeColIndex, setActiveColIndex] = useState(0);
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [isDeleteRowButtonHidden, setDeleteRowButtonHidden] = useState(false);
  const [isDeleteColumnButtonHidden, setDeleteColumnButtonHidden] = useState(
    false
  );

  const [cols, setCols] = useState(
    new Array(initialHeight).fill(null).map((_, i) => i)
  );

  const [rows, setRows] = useState(
    new Array(initialWidth).fill({}).map((_, i) => ({
      rowId: i,
      cells: cols
    }))
  );

  const addRow = () => {
    setRows([
      ...rows,
      {
        rowId: rows.length,
        cells: cols
      }
    ]);
  };

  const addColumn = () => {
    setCols([...cols, cols.length]);
  };

  const deleteRow = () => {
    setRows(rows.filter((_, i) => i !== activeRowIndex));
  };

  const deleteColumn = () => {
    setCols(cols.filter((_, i) => i !== activeColIndex));
  };

  const isOnlyOneColumn = () => rows.every(({ cells }) => cells.length === 1);

  const isOnlyOneRow = () => rows.length === 1;

  useEffect(() => {
    setRows(
      new Array(rows.length).fill(null).map((_, i) => ({
        rowId: i,
        cells: cols
      }))
    );
  }, [rows.length, cols]);

  return (
    <>
      <table
        className="table"
        onMouseEnter={() => {
          setDeleteRowButtonHidden(isOnlyOneRow());
          setDeleteColumnButtonHidden(isOnlyOneColumn());
        }}
      >
        <tbody>
          {rows.map((tr, targetRowIndex) => (
            <Tr
              key={tr.rowId}
              tr={tr}
              targetRowIndex={targetRowIndex}
              updateActiveColIndex={setActiveColIndex}
              updateActiveRowIndex={setActiveRowIndex}
            />
          ))}
        </tbody>
      </table>

      <AddRowButtonWrapper>
        <Button
          id="addRowButton"
          clickFunction={addRow}
          symbol={"+"}
          tableHeight={rows.length}
        />
      </AddRowButtonWrapper>

      <AddColumnButtonWrapper>
        <Button
          id="addColumnButton"
          clickFunction={addColumn}
          symbol={"+"}
          tableWidth={cols.length}
        />
      </AddColumnButtonWrapper>

      <ThemeProvider
        theme={{
          colIndex: activeColIndex,
          rowIndex: activeRowIndex,
          cellSize,
          isDeleteRowButtonHidden,
          isDeleteColumnButtonHidden
        }}
      >
        <DeleteColumnButtonWrapper>
          <Button
            id="deleteColumnButton"
            clickFunction={() => {
              deleteColumn();
              setDeleteColumnButtonHidden(true);
            }}
            symbol={"-"}
            tableWidth={cols.length}
            isDeleteColumnButtonHidden={isDeleteColumnButtonHidden}
            isOnlyOneColumn={isOnlyOneColumn}
          />
        </DeleteColumnButtonWrapper>

        <DeleteRowButtonWrapper>
          <Button
            id="deleteRowButton"
            clickFunction={() => {
              deleteRow();
              setDeleteRowButtonHidden(true);
            }}
            symbol={"-"}
            tableHeight={rows.length}
            isDeleteRowButtonHidden={isDeleteRowButtonHidden}
            isOnlyOneRow={isOnlyOneRow}
          />
        </DeleteRowButtonWrapper>
      </ThemeProvider>
    </>
  );
};

Table.propTypes = {
  initialWidth: PropTypes.number.isRequired,
  initialHeight: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired
};

export default Table;
