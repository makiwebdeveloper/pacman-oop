import { Player } from "./Player";

export class Cell {
  constructor(
    readonly x: number,
    readonly y: number,
    public player: Player | null,
    readonly isWall: boolean,
    public hasApple: boolean
  ) {}
}
