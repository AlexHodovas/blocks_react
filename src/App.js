import React from "react";
import Tables from "../src/components/tables/Tables";

export const amountTables = +process.env.REACT_APP_AMOUNT_TABLES;
export const initialWidth = +process.env.REACT_APP_INITIAL_WIDTH;
export const initialHeight = +process.env.REACT_APP_INITIAL_HEIGHT;
export const cellSize = +process.env.REACT_APP_CELL_SIZE;

const App = () => <Tables />;

export default App;
