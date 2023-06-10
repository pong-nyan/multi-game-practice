export class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;

  constructor(
    x = Math.random() * 100,
    y = Math.random() * 100,
    radius = 10,
    color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`,
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
}
