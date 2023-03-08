import { Directions } from "./Directions";

export class Ghost {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}
}
