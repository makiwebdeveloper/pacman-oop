import { walls } from "../utils/walls";
import { Cell } from "./Cell";
import { Player } from "./Player";

export class Game {
  board: Cell[][] = [];
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public initBoard() {
    this.board = walls.map((row, y) =>
      row.map((wall, x) => new Cell(x, y, Boolean(wall), null))
    );
  }

  public getCopyGame(): Game {
    const newGame = new Game(this.player);
    newGame.board = this.board;
    return newGame;
  }
}
