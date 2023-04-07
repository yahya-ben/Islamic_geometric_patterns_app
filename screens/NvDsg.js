import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import ChoixTuile from "../components/ChoixTuile";
import ExprtDes from "../components/ExprtDes";
import GenrMotif from "../components/GenrMotif";
import PersoDes from "../components/PersoDes";

const NvDsg = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}></View>
      <View style={styles.centerContainer}>
        <View style={styles.bounds}></View>
      </View>
      <View style={styles.lowerContainer}>
        <Swiper style={styles.wraper}>
          <ChoixTuile />
          <GenrMotif />
          <PersoDes />
          <ExprtDes />
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    backgroundColor: "#E8DCCD",
  },

  ///////////////////////////////
  //   Upper container

  upperContainer: {
    flex: 2,
    backgroundColor: "red",
  },

  ///////////////////////////////
  //   Center container

  centerContainer: {
    flex: 7,
    // backgroundColor: "blue",
  },

  bounds: {
    flex: 1,
    margin: 15,

    borderColor: "#D7603A",
    borderWidth: 5,
    borderRadius: 25,
  },

  ///////////////////////////////
  //   Lower container

  lowerContainer: {
    flex: 5,
    // paddingHorizontal: 15,

    backgroundColor: "#D7603A",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

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

export default NvDsg;
