class Circle {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(
    public x: number,
    public y: number
  ) {
    this.x = x;
    this.y = y;
  }
  public calculateArea(): number {
    return this.x * this.y;
  }
}

class Rectangle {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(
    public x: number,
    public y: number
  ) {
    this.x = x;
    this.y = y;
  }
  public calculateArea(): number {
    return this.x * this.y;
  }

  protected print(): string {
    return `${this.x} * ${this.y}`;
  }
}

class Square {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(
    public x: number,
    public y: number
  ) {
    this.x = x;
    this.y = y;
  }
  public calculateArea(): number {
    return this.x * this.y;
  }
  protected print(): string {
    return `${this.x} * ${this.y}`;
  }
}

class Triangle {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(
    public x: number,
    public y: number
  ) {
    this.x = x;
    this.y = y;
  }

  public calculateArea(): number {
    return this.x * this.y;
  }
}
