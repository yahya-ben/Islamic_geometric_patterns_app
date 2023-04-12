import React from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import Swiper from "react-native-swiper";
import ExprtDes from "./ExprtDes";
import GenrMotif from "./GenrMotif";
import PersoDes from "./PersoDes";
import { Tile1, Tile2, Tile3 } from "./Items";
import VTuile from "../visualisation/VTuile";
import { ATuile } from "../abstraction/ATuile";

export default Controle = (props) => {
  return (
    <View style={styles.lowerContainer}>
      <Swiper style={styles.wraper} activeDotColor="#E8DCCD">
        <ChoixTuile fun={props.tileHandler} />
        <GenrMotif />
        <PersoDes />
        <ExprtDes />
      </Swiper>
    </View>
  );
};

const ChoixTuile = (props) => {
  const generateTiling = () => {
    props.fun(<VTuile x={0} y={0} sides={4} area={100} />);
  };
  return (
    <View style={styles.swiperContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Choisir une tuile</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <View>
            <View style={styles.rowContainer}>
              <Tile1 onPress={generateTiling} />
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
  lowerContainer: {
    flex: 5,
    paddingHorizontal: 20,
    backgroundColor: "#D7603A",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "95%",
  },

  wrapper: {
    flex: 1,
  },

  swiperContainer: {
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
