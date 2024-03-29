import { boardScheme } from "../utils/boardScheme";
import { Cell } from "./Cell";
import { BoardNames } from "./enums/BoardNames";

export class Board {
  cells: Cell[][] = [];

  public initBoard() {
    this.cells = boardScheme.map((row, y) =>
      row.map(
        (item, x) =>
          new Cell(
            x,
            y,
            null,
            item === BoardNames.WALL,
            item === BoardNames.APPLE
          )
      )
    );
  }

  public removeApple(x: number, y: number) {
    this.cells[y][x].hasApple = false;
  }

  public hasApples(): boolean {
    let withApples: Cell[] = [];
    this.cells.forEach((row) => {
      withApples = [...withApples, ...row.filter((i) => i.hasApple)];
    });

    if (withApples.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
