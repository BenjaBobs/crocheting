import { Cell } from './Cell';

export class Grid {
  public cells: Cell[][] = [];

  constructor(rows: number = 100, columns: number = 100) {
    this.setDimensions(rows, columns);
  }

  public setDimensions(rows: number, columns: number) {
    // resize arrays first
    for (let row = 0; row < rows; row++) {
      if (!this.cells[row]) this.cells[row] = [];

      for (let column = 0; column < columns; column++) {
        this.cells[row][column] =
          this.cells[row][column] ?? new Cell(this, row, column);
      }

      if (this.cells[row].length > columns)
        this.cells[row] = this.cells[row].slice(0, columns);
    }

    if (this.cells.length > rows) this.cells = this.cells.slice(0, rows);
  }

  public getCell(row: number, column: number): Cell | undefined {
    return this.cells[row]?.[column];
  }
}
