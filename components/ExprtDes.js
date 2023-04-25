import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Text,
  Alert,
} from "react-native";
import CtGenerique from "./CtGenerique";
import Colors from "../constants/colors";

const ExprtDes = (props) => {
  return (
    <CtGenerique num={3}>
      <View style={styles.container}>
        <Text style={styles.text}>Type de fichier</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              Alert.alert("Votre design est exporte en PNG");
            }}
          >
            <Text style={styles.btnText}>PNG</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              Alert.alert("Votre design est exporte en SVG");
            }}
          >
            <Text style={styles.btnText}>SVG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CtGenerique>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "75%",
  },

  text: {
    flex: 1,
    color: Colors.first_accent,
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 10,
  },

  btnText: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 14,
  },

  btnContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  btns: {
    width: "40%",
    backgroundColor: Colors.first_accent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default ExprtDes;
