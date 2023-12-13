interface Ifigure {
  x: number;
  y: number;
  calculateArea(): number;
}

// когда добавляю в интерфейс print он мне ругается, что принт в классе протектед, а в интерфейсе публик, поэтому убрал, но не уверен правильно ли это

class Figura implements Ifigure {
  public x: number;
  public y: number;

  protected set _x(x: number) {
    this.x = x;
  }

  protected set _y(y: number) {
    this.y = y;
  }

  public constructor() {}

  calculateArea(): number {
    return this.x * this.y;
  }

  protected print(): string {
    return `${this.x} * ${this.y}`;
  }
}

class Circle extends Figura {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(x: number, y: number) {
    super();
    super._x = x;
    super._y = y;
  }
}

class Rectangle extends Figura {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(x: number, y: number) {
    super();
    super._x = x;
    super._y = y;
  }

  public print(): string {
    return super.print();
  }
}

class Square extends Figura {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(x: number, y: number) {
    super();
    super._x = x;
    super._y = y;
  }

  public print(): string {
    return super.print();
  }
}

class Triangle extends Figura {
  readonly color: string = "black";
  readonly name: string = "Circle";
  constructor(x: number, y: number) {
    super();
    super._x = x;
    super._y = y;
  }
}

