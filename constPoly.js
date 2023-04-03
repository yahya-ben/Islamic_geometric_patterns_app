// This function creates a regular polygon by returning a set of points

import { splitColor } from "gsap";
import { Polygon } from "react-native-svg";

// this is the format 0,0 10,0 10,10 0,10 0,0"

// n = is the number of gons // x = is the x
function constPolyPoints(width, n, x, y) {
  const rad = width / 2;
  const circumfrence = 2 * Math.PI * rad;
  let offset = Math.round(circumfrence / n);
  const points = [];

  let pair = `${x},${y}`;

  points.push(pair);

  // Store a pair of the type (x,y)
  for (i = 0; i < n; i++) {
    if (i % 2 == 0) {
      pair = `${x + offset}, ${y}`;
    } else {
      pair = `${x}, ${y + offset}`;
    }
    offset += offset;
    points.push(pair);
  }

  // Turn this array into a string
  return points.toString();
}

// Give me the radius of the circle and the number of sides
/**
 * 
 xi = r cos(2πi/n)

And the y-coordinate of the i-th vertex is given by:

yi = r sin(2πi/n)

Where i is an integer between 0 and n-1.

*/

function fun(n, r) {
  let i = 0;
  let x = r * Math.cos((2 * Math.PI * i) / n);
  let y = r * Math.sin((2 * Math.PI * i) / n);
  const points = [];

  points.push(`${x},${y}`);

  for (i = 1; i < n; i++) {
    x = r * Math.cos((2 * Math.PI * i) / n);
    y = r * Math.sin((2 * Math.PI * i) / n);
    points.push(`${Math.round(x)},${Math.round(y)}`);
  }

  return toCString(points);
}

function toCString(a) {
  let str = "";
  for (i = 0; i < a.length; i++) {
    str += a[i];
    str += " ";
  }
  return str;
}

// We can also use a function that generates a Polygon component
function constPol() {
  return <Polygon></Polygon>;
}
