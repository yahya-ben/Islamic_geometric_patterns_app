import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export const tiling = {
  tiling_type: "",
  tiling_data: [],
};

const ChoixTuile = (props) => {
  const handleChoix = () => {};
  return (
    <View style={styles.swiperContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Choisir une tuile</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <View>
            <View style={styles.rowContainer}>
              <Tile1
                onPress={() => {
                  tiling.tiling_type = "square";
                  // tiling.tiling_data = new ATuilage("square", 100, 100);
                }}
              />
              <Tile2 />
              <Tile3 />
            </View>
            <View style={styles.rowContainer}>
              <Tile3 />
              <Tile3 />
              <Tile3 />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  contentContainer: {
    flex: 3,
    alignItems: "center",
    marginLeft: 30,
  },

  text: {
    color: "#E8DCCD",
    fontSize: 20,
    fontWeight: "bold",
  },

  rowContainer: {
    flex: 1,
    width: "80%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ChoixTuile;
