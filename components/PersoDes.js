import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CtGenerique from "./CtGenerique";
import Colors from "../constants/colors";
import Slider from "@react-native-community/slider";

const PersoDes = (props) => {
  const [sliderValue, setSliderValue] = useState(2);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    props.getter4(props.gridStroke === "none" ? Colors.primary : "none");
  };
  return (
    <CtGenerique num={2}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.item}>
          <Text style={styles.text}>Stroke width</Text>
          <Slider
            style={{ flex: 1 }}
            maximumValue={5}
            minimumValue={0}
            minimumTrackTintColor={Colors.first_accent}
            maximumTrackTintColor={Colors.first_accent}
            step={1}
            value={sliderValue}
            onValueChange={(sliderValue) => {
              setSliderValue(sliderValue);
              props.getter1(sliderValue);
            }}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Stroke Color</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#9E6F21" }]}
              onPress={() => props.getter2("#9E6F21")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#FFEEB3" }]}
              onPress={() => props.getter2("#FFEEB3")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#B8E7E1" }]}
              onPress={() => props.getter2("#B8E7E1")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#D4FAFC" }]}
              onPress={() => props.getter2("#D4FAFC")}
            ></TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Fill</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#9E6F21" }]}
              onPress={() => props.getter3("#9E6F21")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#FFEEB3" }]}
              onPress={() => props.getter3("#FFEEB3")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#B8E7E1" }]}
              onPress={() => props.getter3("#B8E7E1")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorItem, { backgroundColor: "#D4FAFC" }]}
              onPress={() => props.getter3("#D4FAFC")}
            ></TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Desactiver la grille</Text>
          <Switch
            trackColor={{ false: "#767577", true: Colors.second_accent }}
            thumbColor={isEnabled ? Colors.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </ScrollView>
    </CtGenerique>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "80%",
    height: 60,
    marginVertical: 7,
  },

  scroll: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  text: {
    color: Colors.first_accent,
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 10,
  },

  colorContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  colorItem: {
    flex: 3,
    width: 10,
    height: 30,
  },
});

export default PersoDes;
