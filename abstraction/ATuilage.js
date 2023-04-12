import "../geometric";
import { tesselateWithSquares } from "../pages/GeometryTest";

export class ATuilage {
  constructor(type, regionW, regionH) {
    // Returns an array
    switch (type) {
      case "square":
        this.points = tesselateWithSquares(0, 0, regionW, regionH, 10);
    }
  }
}
