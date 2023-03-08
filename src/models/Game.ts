import { Board } from "./Board";
import { Directions, Player } from "./Player";

export class Game {
  player: Player = new Player(1, 1, Directions.UP);
  board: Board = new Board();
  count: number = 0;
  isGameOver: boolean = false;

  public play() {
    if (!this.isGameOver) {
      this.player.move(this.board);
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
