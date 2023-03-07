import { Board } from "./Board";
import { Directions, Player } from "./Player";

export class Game {
  player: Player = new Player(1, 1, Directions.RIGHT);
  board: Board = new Board();
  
  

  public getCopy(): Game {
    const newGame = new Game();
    newGame.board = this.board;
    newGame.player = this.player;
    return newGame;
  }
}
