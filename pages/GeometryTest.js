import * as React from "react";
import Svg, { G, Path, Polygon, Polyline, Line } from "react-native-svg";
import { View, Text } from "react-native";
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
/* What do you want to do ??

- Given a boundary, I want to be able to fill it with a regular tiling
- The tiling would be generated when the user choose it
- The user can zoom and pan, the tiling should always fill the plane 
- We can then use the Hankin method to generate motifs for seperate tiles and then copy them to the others
- The user can control the contact's angle and can also choose to add another intersection or apply rosettes
- The user can disable the tilings and keep the motifs
- The user can choose from a predefined set of patterns to be applied on the motifs 
  - The user can choose to fill the faces
  - The user can choose to broaden the stroke and/or alter its color
  - The pallete of colors can be randomized so on each face of the motifs can take a color
- Finally, the user can save his work or/and export in svg and png
- The user can specify the dimensions of the output and level of detail

*/

// A function that takes in the width and height of the plane to fill, as well as the shape that composes the
// tiling.

function tileMyPlane(width, height, shape) {}

// This function draws a square at a particular point of the plane
function drawSquare(px, py, side_len) {
  let pts = [
    [px, py],
    [px + side_len, py],
    [px + side_len, py + side_len],
    [px, py + side_len],
  ];

  // let flat_points = pts.map((pair) => {
  //   new Pt(pair);
  // });

  // let square = new Poly(flat_points);

  return pts;
}

// Input should be boundries of the plane and square side size
// Output should be an array of arrays where the internal arrays are coords points
/*
px = position x initiale
py = position y initiale
width = largeur du conteneur
height = longeur du conteneur
side_len = taille du carre
*/
// Je pense qu'on peut faire mieux !! Observez le resultat
export function tesselateWithSquares(px, py, width, height, side_len) {
  let n = (width - px) / side_len;
  let m = (height - py) / side_len;
  let pf = px;
  let pts = [{ px, py }];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 1; j++) {
      px += side_len;
      pts.push({ px, py });
    }

    py += side_len;
    px = pf;
    pts.push({ px, py });
  }
  // Remove last element
  pts.pop();
  return pts;
}

export const Square = ({ px, py, taille, fill, stroke, strokeWidth }) => {
  return (
    <Polygon
      px={px}
      py={py}
      // taille={taille}
      points={drawSquare(parseInt(px), parseInt(py), parseInt(taille))}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};

{
  /* <Square
          px="0"
          py="0"
          taille={taille}
          fill="lime"
          stroke="black"
          strokeWidth="2"
        /> */
}

// For a given regular polygon, return array of midpoints
// A polygon is just an array of points
export function midpoints(pts) {
  let arr_pts = structuredClone(pts[0]);
  let dx;
  let dy;
  let midpoints;

  for (let i = 1; i < arr_pts.length; i++) {
    dx = (arr_pts[i][0] - arr_pts[i - 1][0]) / 2;
    dy = (arr_pts[i][1] - arr_pts[i - 1][1]) / 2;

    midpoints.push({ dx, dy });
  }
}
