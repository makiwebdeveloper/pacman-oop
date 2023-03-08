import { Board } from "./Board";
import { Game } from "./Game";

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

  public move(board: Board) {
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

  public eat(game: Game) {
    if (game.board.cells[this.y][this.x].hasApple) {
      game.board.removeApple(this.x, this.y);
      game.addCount();
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
