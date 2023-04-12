import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BarreOutils from "../components/BarreOutils";
import Editor from "../components/Editor";
import Controle from "../components/Controle";
import VTuile from "../visualisation/VTuile";

const NvDsg = (props) => {
  const [isTile, setIsTile] = useState(
    <VTuile x={0} y={0} sides={4} area={100} />
  );

  const recieveData = (childData) => {
    setIsTile(childData);
  };
  return (
    <View style={styles.container}>
      <BarreOutils navigation={props.navigation} />
      <Editor />
      <Controle tileHandler={recieveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8DCCD",
  },
});

export default NvDsg;
