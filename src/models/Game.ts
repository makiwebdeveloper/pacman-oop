import { Board } from "./Board";
import { Directions, Player } from "./Player";

export class Game {
  player: Player = new Player(1, 1, Directions.UP);
  board: Board = new Board();
  count: number = 0;

  public getCopy(): Game {
    const newGame = new Game();
    newGame.board = this.board;
    newGame.player = this.player;
    newGame.count = this.count;
    return newGame;
  }

  public addCount() {
    this.count += 1;
  }
}
