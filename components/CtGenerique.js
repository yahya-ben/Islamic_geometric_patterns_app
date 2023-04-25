import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const CtGenerique = (props) => {
  const titles = [
    "Choisir une tuile",
    "Generer le motif",
    "Personnaliser le design",
    "Exporter",
  ];
  return (
    <View style={styles.subControl}>
      <View style={styles.controleContainer}>
        <Text style={styles.controleTitle}>{titles[props.num]}</Text>
      </View>
      <View style={styles.scrollContainer}>
        {/* <ScrollView contentContainerStyle={styles.scroll}> */}
        {props.children}
        {/* </ScrollView> */}
      </View>
      <View style={styles.ghostContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  subControl: {
    flex: 1,
  },

  controleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },

  controleTitle: {
    color: Colors.second_accent,
    fontSize: 20,
    fontWeight: "bold",
  },

  scrollContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  scroll: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  ghostContainer: {
    flex: 2,
    paddingTop: 5,
  },
});

export default CtGenerique;
