import { Board } from "./Board";
import { Ghost } from "./Ghost";
import { Directions, Player } from "./Player";

export class Game {
  player: Player = new Player(1, 1, Directions.UP);
  board: Board = new Board();
  count: number = 0;
  isGameOver: boolean = false;
  ghost: Ghost = new Ghost(1, 21, Directions.UP);

  public play() {
    if (!this.isGameOver) {
      this.player.move(this.board);
      this.ghost.move(this.board);
      this.player.eat(this);
      this.checkGameOver();
    }
  }

  public getCopy(): Game {
    const newGame = new Game();
    newGame.board = this.board;
    newGame.player = this.player;
    newGame.count = this.count;
    newGame.isGameOver = this.isGameOver;
    newGame.ghost = this.ghost;
    return newGame;
  }

  public addCount() {
    this.count += 1;
  }

  public checkGameOver() {
    if (!this.board.hasApples()) {
      this.isGameOver = true;
    }
  }
}
