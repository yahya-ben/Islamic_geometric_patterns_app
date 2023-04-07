// This class represents a Point
export class Point {
  p1 = 0;
  p2 = 0;

  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  get getP1() {
    return this.p1;
  }

  get getP2() {
    return this.p2;
  }

  set setP1(p1) {
    this.p1 = p1;
  }

  set setP2(p2) {
    this.p2 = p2;
  }

  // Turns a Point to string of points
  get toPair() {
    return "" + this.p1 + "," + this.p2;
  }
}
