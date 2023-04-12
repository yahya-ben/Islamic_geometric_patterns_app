import {
  Point as Pt,
  Vector as Vec,
  Circle as Circ,
  Line as L,
  Ray,
  Segment,
  Arc,
  Polygon as Poly,
  Matrix,
  Box,
  PlanarSet,
} from "@flatten-js/core";
/*

notation {
    seed: number_of_sides,
    shape_placement: [
        [],
        [],
        [],
    ],
    ts: [[]],
}

*/

function tesselate(width, height, notation) {
  // Checks if the notation is valid
  if (!isValid(notation)) {
    return;
  }

  let seed = notation.seed;
  let phase_2 = notation.shape_placement[0];
  let num_stages = notation.shape_placement.length - 1; // Other than phase 2
  let tiles = new Map();

  // Phase 1
  // Place seed poly at the center
  let seed_poly = placePolyAt(x, y, seed);
  tiles.set(1, seed_poly);

  // Phase 2
  for (let i = 0; i < phase_2.length; i++) {
    if (phase_2[i] == 0) {
      continue;
    }
    placeAlongPolyEdge(tiles.get(1), i);
  }

  for (let j = 0; j < num_stages; j++) {}
}

function drawPoly(num_sides) {}
function placePolyAt(x, y, polygon) {}
function placeAlongPolyEdge(refPoly, edge) {}

let pt = new Pt(1, 2);
