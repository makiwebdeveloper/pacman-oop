import { Cell } from "./Cell";

export enum Directions {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export class Player {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}

  public move(board: Cell[][]) {
    switch (this.direction) {
      case Directions.UP:
        if (!board[this.y - 1][this.x].isWall) this.y -= 1;
        break;
      case Directions.DOWN:
        if (!board[this.y + 1][this.x].isWall) this.y += 1;
        break;
      case Directions.LEFT:
        if (!board[this.y][this.x - 1].isWall) this.x -= 1;
        break;
      case Directions.RIGHT:
        if (!board[this.y][this.x + 1].isWall) this.x += 1;
        break;
    }
  }
}
