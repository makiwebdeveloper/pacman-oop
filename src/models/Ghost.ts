import { Directions } from "./enums/Directions";

export class Ghost {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}
}
