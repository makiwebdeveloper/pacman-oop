import { Directions } from "./Directions";

export class Player {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}
}
