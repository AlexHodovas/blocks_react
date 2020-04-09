import React from "react";
import Table from "../table/Table";
import TableWrapper from "../tableWrapper/TableWrapper";
import { amountTables, initialWidth, initialHeight, cellSize } from "../../App";

const Tables = () => {
  const arrayOfTables = new Array(amountTables).fill(null);
  let shiftX = null;
  let shiftY = null;
  let target = null;

  const findTargetForMoving = e => {
    let target = e.target;
    if (target.tagName === "BUTTON") {
      return;
    }
    if (target.tagName === "TD" || target.tagName === "TABLE") {
      target = e.target.parentNode.parentNode.parentNode.parentNode;
    }
    return target;
  };

  const findShiftX = (e, target) =>
    e.clientX - target.getBoundingClientRect().left;

  const findShiftY = (e, target) =>
    e.clientY - target.getBoundingClientRect().top;

  const moveAt = (pageX, pageY, shiftX, shiftY, target) => {
    if (pageX - shiftX < 0 || pageY - shiftY < 0) {
      return;
    }
    target.style.transform = `translate(${pageX - shiftX}px, ${pageY -
      shiftY}px)`;
  };

  const onMouseMove = e => {
    moveAt(e.pageX, e.pageY, shiftX, shiftY, target);
  };

  return (
    <>
      {arrayOfTables.map((_, i) => (
        <TableWrapper
          key={i}
          onDragStart={e => {
            e.preventDefault();
          }}
          onMouseDown={e => {
            target = findTargetForMoving(e);

            if (target) {
              shiftX = findShiftX(e, target);
              shiftY = findShiftY(e, target);
              moveAt(e.pageX, e.pageY, shiftX, shiftY, target);
              document.addEventListener("mousemove", onMouseMove);
              target.onmouseup = function() {
                document.removeEventListener("mousemove", onMouseMove);
                target.onmouseup = null;
              };
            }
          }}
        >
          <Table
            initialWidth={initialWidth}
            initialHeight={initialHeight}
            cellSize={cellSize}
          />
        </TableWrapper>
      ))}
    </>
  );
};

export default Tables;
