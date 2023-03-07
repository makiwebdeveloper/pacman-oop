import { boardScheme } from "../utils/boardScheme";
import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];

  public initBoard() {
    this.cells = boardScheme.map((row, y) =>
      row.map((item, x) => new Cell(x, y, null, item === "#", item === "*"))
    );
  }
}
