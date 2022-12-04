import React, { useEffect, useState } from "react";
import "../media/css/grid.css";
import Grid from "./Grid";
import Header from "./Header";
import Footer from "./Footer";

export default function App({currentAccount, contract}) {
  const gridBase = {
    cells: 5,
    rows: 5
  };

  const [grid, setGrid] = useState(gridBase);
  const [inputCells, setCells] = useState(grid.cells);
  const [inputRows, setRows] = useState(grid.rows);

  const handleGridSize = () => {
    const res = {
      cells: parseInt(inputCells),
      rows: parseInt(inputRows)
    };
    setGrid({ ...res });
  };

  return (
    <div>
        <Header/>
        <p className="text-lg font-semibold text-blue-700 text-center mt-3">Current Account: {currentAccount}</p>
      <Grid
        grid={grid}
        handleGridSize={handleGridSize}
        inputCells={inputCells}
        inputRows={inputRows}
        setCells={setCells}
        setRows={setRows}
        currentAccount={currentAccount}
        contract={contract}
      />
      <Footer/>
    </div>
  );
}
