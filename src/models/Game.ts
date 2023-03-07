import { Board } from "./Board";
import { Directions, Player } from "./Player";

export class Game {
  player: Player = new Player(1, 1, Directions.RIGHT);
  board: Board = new Board();
}
