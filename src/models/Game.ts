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
    }
  }
}
