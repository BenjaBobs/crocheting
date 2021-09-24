import './App.scss';

import { useEffect, useReducer } from 'react';

import { Cell } from './Cell';
import { Grid } from './Grid';

const grid = new Grid(50, 40);

function App() {
  return (
    <div className="grid">
      {grid.cells.flatMap((row, rowIdx) =>
        row.map((cell, columnIdx) => (
          <RenderCell key={`${rowIdx}_${columnIdx}}`} cell={cell} />
        ))
      )}
    </div>
  );
}

function RenderCell(props: { cell: Cell }) {
  const rerender = useReducer((x) => x + 1, 0)[1];

  useEffect(() => {
    props.cell.update = rerender;
    return () => (props.cell.update = undefined);
  }, [rerender, props.cell]);

  const classNames = ["cell"];
  if (props.cell.isMarked) classNames.push("marked");
  if (props.cell.isCrossed) classNames.push("crossed");
  classNames.push(props.cell.isValid ? "valid" : "invalid");

  return (
    <div
      onClick={() => {
        props.cell.toggle();
        rerender();
      }}
      id={`${props.cell.row}_${props.cell.column}`}
      key={`${props.cell.row}_${props.cell.column}`}
      style={{ top: props.cell.row * 32, left: props.cell.column * 32 }}
      className={classNames.join(" ")}
    >
      <span className="cell-text">{props.cell.isCrossed ? "x" : ""}</span>
    </div>
  );
}

export default App;
