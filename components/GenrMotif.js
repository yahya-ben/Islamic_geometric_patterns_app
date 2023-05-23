import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CtGenerique from "./CtGenerique";
import Colors from "../constants/colors";
import Slider from "@react-native-community/slider";

const GenrMotif = (props) => {
  const [sliderValue, setSliderValue] = useState(2);

  return (
    <CtGenerique num={1}>
      <View style={styles.item}>
        <Text style={styles.text}>Déformation</Text>
        <Slider
          style={{ flex: 1 }}
          maximumValue={75}
          minimumValue={0}
          minimumTrackTintColor={Colors.first_accent}
          maximumTrackTintColor={Colors.first_accent}
          step={20}
          // value={sliderValue}
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
    width: "80%",
    height: 75,
  },

  text: {
    color: Colors.first_accent,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default GenrMotif;
