import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default BarreOutils = (props) => {
  const handlePress = () => props.navigation.navigate("PageAcceuil", {});

  return (
    <View style={styles.upperContainer}>
      <View style={[styles.closeBtn, styles.btn]}>
        <TouchableOpacity onPress={handlePress}>
          <Image style={styles.image} source={require("../assets/close.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.reUnContainer}>
        <View style={[styles.reUnBtn, styles.btn]}>
          <TouchableOpacity>
            <Image
              style={styles.image_reUn}
              source={require("../assets/undo.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.reUnBtn, styles.btn]}>
          <TouchableOpacity>
            <Image
              style={styles.image_reUn}
              source={require("../assets/redo.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ///////////////////////////////
  //   Upper container

  upperContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 12,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  reUnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  closeBtn: {
    backgroundColor: "#DDC099",
    marginRight: 50,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  reUnBtn: {
    backgroundColor: "#D7603A",
    marginHorizontal: 10,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  btn: {
    width: 45,
    height: 45,
    borderRadius: 3,
  },

  image: {
    width: 26,
    height: 26,
  },

  image_reUn: {
    width: 22,
    height: 22,
  },
});
