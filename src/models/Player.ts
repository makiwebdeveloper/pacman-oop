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
        if (!board[this.y][this.x - 1]) {
          this.x = board[this.y].length;
          break;
        }
        if (!board[this.y][this.x - 1].isWall) this.x -= 1;
        break;
      case Directions.RIGHT:
        if (!board[this.y][this.x + 1]) {
          this.x = 0;
          break;
        }
        if (!board[this.y][this.x + 1].isWall) this.x += 1;
        break;
    }
  }

  public changeDirection(key: string) {
    switch (key) {
      case "ArrowUp":
        this.direction = Directions.UP;
        break;
      case "ArrowDown":
        this.direction = Directions.DOWN;
        break;
      case "ArrowLeft":
        this.direction = Directions.LEFT;
        break;
      case "ArrowRight":
        this.direction = Directions.RIGHT;
        break;
    }
  }
}
