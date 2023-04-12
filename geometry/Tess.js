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

import { View } from "react-native";

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

import "../geometric";
import { polygonRegular } from "../geometric";

/*

// notation is object of the form :


	{
		shape_format: [[] , [], ... ],
		trans_fun: [
		   [], <-- ['m' or 'n', 'c' or 'e' or 'h' or 'z', N]
		   [],
		   [],
		   ...
				]
	
	}

So that, a notation of the forme : 3-4-3,3/m30/m(h2) could be converted into :

	{
	shape_format: [[3,4,3], [3]],
	trans_fun : [
	['m','z', 30],
	['m', 'h', 2]
	]
	}

and 4-4-3-3-3/m(h9)/r(h1)/r(h3)

{
shape_format: [[4,4,3,3,3]],
trans_fun: [['m', 'h', 9], ['r', 'h', 1], ['r', 'h', 3]]

}
*/

///////////////////////////////////
///
////// Every function will return a set of points and WILL NOT IN ANY CASE RETURN A COMPONENT
////// Drawing will be handeled in another fashion
///
///////////////////////////////////

function tesselate(width, height, notation) {
  // Checks if the notation is valid
  if (!isValid(notation)) {
    return;
  }

  // Stage 1

  ///// Phase 1 : Draw seed polygon
}

export default Tess = () => {
  console.log(fun());
  return (
    <View
      style={{
        height: 200,
        width: 200,
        borderWidth: 2,
        borderColor: "black",
      }}
    >
      <Svg height="200" width="200" viewBox="-100 -100 200 200">
        {/* <Circle
          cx="0"
          cy="0"
          r="10"
          stroke="black"
          strokeWidth="1"
          fill="red"
        /> */}

        {/* <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" /> */}

        <Polygon
          points={drawPolyAt(0, 0, 50, 0, 3).points}
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        />
        {/* <Polygon
          points="40,5 70,80 25,95"
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        /> */}
      </Svg>
    </View>
  );
};

function drawPolyAt(x_centre, y_centre, r, theta, num_sides) {
  let points = [];

  // x[n] = r * cos(2*pi*n/N + theta) + x_centre
  // y[n] = r * sin(2*pi*n/N + theta) + y_centre

  const rotation_PI = Math.PI / 180;
  for (let i = 0; i < num_sides; i++) {
    x =
      r * Math.cos((2 * Math.PI * i) / num_sides + rotation_PI * theta) +
      x_centre;
    y =
      r * Math.sin((2 * Math.PI * i) / num_sides + rotation_PI * theta) +
      y_centre;
    points.push([parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))]);
  }

  let poly = polygonRegular(num_sides, r, [x_centre, y_centre]);
  console.log(points, poly);
  return { points, poly };
}

// Trying a new library
function fun() {
  let poly = polygonRegular(3, 100, [0, 0]);
}
