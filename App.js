import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Image,
  Alert,
} from "react-native";
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

import NvDsg from "./screens/NvDsg";
import PageAccueil from "./screens/PageAccueil";

// This is a regular functional component
// This component is called the "Main componenent". This will be executed first
// We can add styles in an inline fashion, or using the StyleSheet component and then adding the style to the
// componenet

export default function App() {
  // const [getter, setter] = useState(3);
  // return (
  //   <View
  //     style={[
  //       StyleSheet.absoluteFill,
  //       { alignItems: "center", justifyContent: "center" },
  //     ]}
  //   >
  //     <MyPoly name={`${getter}`} />
  //     <View style={{ flexDirection: "row", padding: 10 }}>
  //       <Button
  //         title="Add + "
  //         onPress={() => {
  //           setter(getter + 1);
  //         }}
  //       />
  //       <Button
  //         title="Sub - "
  //         onPress={() => {
  //           if (getter > 3) setter(getter - 1);
  //           else Alert.alert("Can't go less than n = 3");
  //         }}
  //       />
  //     </View>
  //     <Button title="Creer un motif" />
  //   </View>

  // return <PageAccueil onClick={toNvDsg()} />;

  return <PageAccueil />;
}

/*
Description de l'alogrithme : 

1/ Choisie une tuile (qui n'est qu'un polygone regulier pour le moment)
   Le user choisie aussi l'angle
2/ On recupere donc le nombre de cote de ce polygon pour le construire 
3/ Pour un des cote (preferablement pour le premier cote)
  3.1/ On calcule le midpoint 
  3.2/ On calcule le point d'intersection entre les deux rays Li et Ri+1
  3.3/ On construit donc un motif (qui n'est qu'un polygone inscrit dans la tuile)
4/ On peut alors creer une pattern par tuilage du plan avec le resultat precedant 

*/

// A line can be expressed using two points p1 and p2
// Exmp : p1 = (0,0) p2 = (10,0)
// This function returns a point who's position is the midpoint of the edge composed bt the two lines
function hankin(p1, p2) {}
// Return the midpoint of an edge
const MyMidpoint = () => {};
function calcIntersection() {}
function tesselate() {}

// This function generates a regular polygon component
const MyPoly = (props) => {
  // This is the contact angle (also known as theta)
  // The value 0 means the angle is null. This value is in degrees.
  const angle = 0;
  const width = 150;
  return (
    <Svg width={`${width}`} height="150" viewBox="-100 -100 200 200">
      <G rotation={`${props.name == 4 ? -45 : -90}`}>
        <Polygon
          fill="none"
          stroke="red"
          strokeWidth="5"
          points={`${constPoly(parseInt(props.name), width / 2)}`}
        />
      </G>
    </Svg>
  );
};

// Helper functions

// This function returns a string of points that compose a regular n-gon
function constPoly(n, r) {
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

// This function turns an array of points into an string of points acceptable by the points prop of <Polygon>
function toPoints(a) {
  let str = "";
  for (i = 0; i < a.length; i++) {
    str += a[i];
    str += " ";
  }
  return str;
}

// This is a stylesheet
const styles = StyleSheet.create({
  // container is just a name. You can choose anything.
  container: {
    padding: 50,
  },

  poly: {
    width: 100,
    height: 100,
  },

  input: {
    height: 40,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "green",
  },
});
