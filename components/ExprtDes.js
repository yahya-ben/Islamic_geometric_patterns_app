import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const ExprtDes = (props) => {
  return (
    <View style={styles.swiperContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Exporter</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView>{props.tiles}</ScrollView>
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
    // borderColor: "black",
    // borderWidth: 2,
  },
  contentContainer: {
    flex: 3,
    // borderColor: "black",
    // borderWidth: 2,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ExprtDes;
