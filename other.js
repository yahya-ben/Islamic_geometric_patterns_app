import { Button, TouchableHighlightBase, View } from "react-native";
import { Point } from "./geometry/Point.js";

export default function App() {
  const points = [];
  return (
    <View>
      <MyPoly edges="5">{}</MyPoly>
      <View>
        <View>
          <Button />
          <Button />
        </View>
        <Button />
      </View>
    </View>
  );
}

const MyPoly = ({ edges }) => {};

// What do you want
/* 

So when the user generates a polygon, we should get the 

*/

// This function returns a string of points that compose a regular n-gon
// !!! This algo needs improvements
function constPoly(n, r, x, y) {
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

  return toPoints(points);
}

class Vertex {}
class Edge {}
class Line {}

// An implementation of the DCEL is important ?! Is there any easy alternatives ??
class Map {}
