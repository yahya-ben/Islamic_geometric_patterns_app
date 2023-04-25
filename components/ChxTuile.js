import React from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Svg, Rect, Polygon } from "react-native-svg";
import CtGenerique from "./CtGenerique";
import Colors from "../constants/colors";

const ChxTuile = (props) => {
  return (
    <CtGenerique num={0}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            props.getter("tile1");
          }}
        >
          <Svg width={50} height={50}>
            <Rect
              x="0"
              y="0"
              width="50"
              height="50"
              stroke={Colors.first_accent}
              strokeWidth="5"
              fill="none"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            props.getter("tile2");
          }}
        >
          <Svg width={50} height={50}>
            <Polygon
              points={[
                [12.985942929326223, 45.80895725143908],
                [37.014057070673765, 45.80895725143908],
                [49.02811414134754, 25],
                [37.01405707067377, 4.191042748560918],
                [12.985942929326233, 4.191042748560918],
                [0.9718858586524526, 24.999999999999996],
              ]}
              stroke={Colors.first_accent}
              strokeWidth="3"
              fill="none"
            />
          </Svg>
        </TouchableOpacity>
      </ScrollView>
    </CtGenerique>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },

  scroll: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default ChxTuile;
