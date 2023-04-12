import React from "react";
import { Polygon } from "react-native-svg";
import { ATuile } from "../abstraction/ATuile";
import "../geometric";

const VTuile = (props) => {
  const tuile = new ATuile(props.x, props.y, props.sides, props.area * 100);
  return (
    <Polygon
      points={tuile.points}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
  );
};

export default VTuile;
