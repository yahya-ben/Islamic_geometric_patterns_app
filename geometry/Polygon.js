export class Polygon {
  points = [];

  // This method generates a polygon of n sides
  static polyConstructor(n, r) {
    let points = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
      x = r * Math.cos((2 * Math.PI * i) / n);
      y = r * Math.sin((2 * Math.PI * i) / n);
      points.push(new Point(Math.round(x), Math.round(y)));
    }

    return points;
  }

  // Constructs polygon from points
  constructor(...points) {
    for (let i = 0; i < points.length; i++) this.points.push(points[i]);
  }

  // This method return an array of points
  get getPoints() {
    return this.points;
  }

  // This method return an array of points but in an acceptable SVG format
  get getSVGPoly() {
    return this.points.map((a) => a.toPair);
  }

  // This method return an array of points compatible with the points props in Polygon
  get SVGPolytoString() {
    let str = "";
    this.getSVGPoly.forEach((pair) => {
      str += pair;
      str += " ";
    });
    return str;
  }
}
