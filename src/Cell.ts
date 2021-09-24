import { Grid } from './Grid';

export class Cell {
  constructor(private grid: Grid, public row: number, public column: number) {
    this.isCrossed = row % 2 === 0;
  }

  public update?: () => void;
  public isMarked: boolean = false;
  public isCrossed: boolean = false;
  public isValid: boolean = true;

  public toggle() {
    this.isMarked = !this.isMarked;

    let iterator = this.up();
    while (iterator) {
      iterator.recalculateState();
      iterator = iterator.up();
    }

    this.recalculateState();

    iterator = this.down();
    while (iterator) {
      iterator.recalculateState();
      iterator = iterator.down();
    }

    this.recalculateState();
    iterator = this.up();
    while (iterator) {
      iterator.recalculateState();
      iterator = iterator.up();
    }
  }

  private up() {
    return this.grid.getCell(this.row - 1, this.column);
  }

  private down() {
    return this.grid.getCell(this.row + 1, this.column);
  }

  private left() {
    return this.grid.getCell(this.row, this.column - 1);
  }

  private right() {
    return this.grid.getCell(this.row, this.column + 1);
  }

  private recalculateState() {
    const initialCrossed = this.isCrossed;
    const initialValid = this.isValid;

    if (!this.isMarked) {
      if (this.down()?.isCrossed || this.up()?.isCrossed)
        this.isCrossed = false;
      else this.isCrossed = this.row % 2 === 0;
    } else {
      if (
        !this.up()?.isMarked &&
        this.down()?.isMarked &&
        this.down()?.down()?.isMarked
      ) {
        this.isCrossed = true;
      } else {
        this.isCrossed = false;
      }
    }

    if (!this.isMarked || (this.up()?.isMarked && this.down()?.isMarked)) {
      this.isValid = true;
    } else if (!this.up()?.isMarked) {
      this.isValid = !!(this.down()?.isMarked && this.down()?.down()?.isMarked);
    } else if (!this.down()?.isMarked) {
      this.isValid = !!(this.up()?.isMarked && this.up()?.up()?.isMarked);
    }

    if (this.isCrossed !== initialCrossed || this.isValid !== initialValid) {
      this.update?.();
    }
  }
}
