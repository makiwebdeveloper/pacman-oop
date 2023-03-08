import { Directions } from "./enums/Directions";

export class Player {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}
}
