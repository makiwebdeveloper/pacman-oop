import { Board } from "./Board";
import { Directions } from "./enums/Directions";
import { Ghost } from "./Ghost";
import { Player } from "./Player";

export class Game {
  board: Board = new Board();
  player: Player = new Player(1, 1, Directions.STOP);
  ghosts: Ghost[] = [];
  score: number = 0;
  isGameOver: boolean = false;

  public play() {
    if (!this.isGameOver) {
      this.player.move(this.board);
      this.player.eat(this);
      this.ghosts.forEach((ghost) => {
        ghost.move(this.board);
      });
      this.checkGameOver();
    }
  }

  public copyGame(): Game {
    const newGame = new Game();
    newGame.board = this.board;
    newGame.player = this.player;
    newGame.score = this.score;
    newGame.isGameOver = this.isGameOver;
    newGame.ghosts = this.ghosts;
    return newGame;
  }

  public addScore() {
    this.score += 1;
  }

  public checkGameOver() {
    if (
      !this.board.hasApples() ||
      this.ghosts.find(
        (ghost) => ghost.x === this.player.x && ghost.y === this.player.y
      ) ||
      this.ghosts.find(
        (ghost) =>
          ghost.x === this.player.x &&
          ghost.y === this.player.y + 1 &&
          ghost.direction === Directions.UP &&
          this.player.direction !== Directions.UP
      ) ||
      this.ghosts.find(
        (ghost) =>
          ghost.x === this.player.x &&
          ghost.y === this.player.y - 1 &&
          ghost.direction === Directions.DOWN &&
          this.player.direction !== Directions.DOWN
      ) ||
      this.ghosts.find(
        (ghost) =>
          ghost.x === this.player.x - 1 &&
          ghost.y === this.player.y &&
          ghost.direction === Directions.RIGHT &&
          this.player.direction !== Directions.RIGHT
      ) ||
      this.ghosts.find(
        (ghost) =>
          ghost.x === this.player.x + 1 &&
          ghost.y === this.player.y &&
          ghost.direction === Directions.LEFT &&
          this.player.direction !== Directions.LEFT
      )
    ) {
      this.isGameOver = true;
    }
  }

  public addGhosts(ghosts: Ghost[]) {
    this.ghosts = ghosts;
  }
}
