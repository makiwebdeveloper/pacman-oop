export enum Directions {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export class Player {
  constructor(
    public x: number,
    public y: number,
    public direction: Directions
  ) {}

  public move() {
    this.x += 1;
  }
}
