import { Player } from "./Player";

export class Cell {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly isWall: boolean,
    public player: Player | null
  ) {}
}
