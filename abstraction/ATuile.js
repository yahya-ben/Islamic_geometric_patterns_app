// La tuile est le composant de base d'un tuilage. [Add desc]

import "../geometric";
import { polygonRegular } from "../geometric";

export class ATuile {
  // This constructor returns a regular polygon
  constructor(x, y, sides, area) {
    this.points = polygonRegular(sides, area, [x, y]);
  }

  createPatch() {}

  get getPoints() {
    return this.points;
  }
}
