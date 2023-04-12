import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg } from "react-native-svg";
import { tesselateWithSquares, Square } from "../pages/GeometryTest";

export default Editor = (props) => {
  const width = 400;
  const height = 400;
  const points = tesselateWithSquares(20, 10, 300, 300, 50);
  console.log(points);
  return (
    <View style={styles.centerContainer}>
      <View style={styles.bounds}>
        <Svg width="400" height="400">
          {points.map((coords) => {
            return (
              <Square
                key={Math.random()}
                px={coords.px}
                py={coords.py}
                taille={50}
                // fill="#D7603A"
                stroke="#D7603A"
                strokeWidth={2}
              />
            );
          })}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ///////////////////////////////
  //   Center container

  centerContainer: {
    flex: 7,
    width: "100%",
  },

  bounds: {
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 15,
    borderColor: "#D7603A",
    borderWidth: 5,
    borderRadius: 25,
  },
});
