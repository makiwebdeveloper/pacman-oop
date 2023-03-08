import { Board } from "./Board";
import { Directions } from "./Player";

const directions = [
  Directions.UP,
  Directions.DOWN,
  Directions.LEFT,
  Directions.RIGHT,
];

export class Ghost {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}

  public move(board: Board) {
    if (
      this.direction === Directions.UP &&
      board.cells[this.y - 1][this.x].isWall
    ) {
      this.direction = directions[Math.floor(Math.random() * 4)];
    }
    if (
      this.direction === Directions.DOWN &&
      board.cells[this.y + 1][this.x].isWall
    ) {
      this.direction = directions[Math.floor(Math.random() * 4)];
    }
    if (
      this.direction === Directions.LEFT &&
      board.cells[this.y][this.x - 1].isWall
    ) {
      this.direction = directions[Math.floor(Math.random() * 4)];
    }
    if (
      this.direction === Directions.RIGHT &&
      board.cells[this.y][this.x + 1].isWall
    ) {
      this.direction = directions[Math.floor(Math.random() * 4)];
    }

    switch (this.direction) {
      case Directions.UP:
        if (!board.cells[this.y - 1][this.x].isWall) this.y -= 1;
        break;
      case Directions.DOWN:
        if (!board.cells[this.y + 1][this.x].isWall) this.y += 1;
        break;
      case Directions.LEFT:
        if (!board.cells[this.y][this.x - 1]) {
          this.x = board.cells[this.y].length - 1;
          break;
        }
        if (!board.cells[this.y][this.x - 1].isWall) this.x -= 1;
        break;
      case Directions.RIGHT:
        if (!board.cells[this.y][this.x + 1]) {
          this.x = 0;
          break;
        }
        if (!board.cells[this.y][this.x + 1].isWall) this.x += 1;
        break;
    }
  }
}
