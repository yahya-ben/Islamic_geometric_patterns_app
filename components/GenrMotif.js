import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CtGenerique from "./CtGenerique";
import Colors from "../constants/colors";
import Slider from "@react-native-community/slider";

// I want to add a slider to increase or descrease
// Why not merge the GenrMotif and Perso into one ?? Okay, will see

const GenrMotif = (props) => {
  const [sliderValue, setSliderValue] = useState(2);

  return (
    <CtGenerique num={1}>
      <View style={styles.item}>
        <Text style={styles.text}>Contact Angle</Text>
        <Slider
          style={{ flex: 1 }}
          maximumValue={75}
          minimumValue={1}
          minimumTrackTintColor={Colors.first_accent}
          maximumTrackTintColor={Colors.first_accent}
          step={2}
          value={sliderValue}
          onValueChange={(sliderValue) => {
            setSliderValue(sliderValue);
            props.getter(sliderValue);
          }}
        />
      </View>
    </CtGenerique>
  );
};

const styles = StyleSheet.create({
  item: {
    // margin: 10,
    width: "80%",
    height: 75,
    // backgroundColor: "green",
  },

  text: {
    color: Colors.first_accent,
    fontWeight: "500",
    fontSize: 14,
    // marginBottom: 10,
  },
});

export default GenrMotif;
