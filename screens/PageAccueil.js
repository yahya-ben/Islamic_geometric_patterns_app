import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from "react-native";

const PageAccueil = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/new_logo.png")}
          ></Image>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.btn1Container}>
              <Text style={styles.text1}>Nouveau design</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.btn2Container}>
              <Text style={styles.text2}>Designs enregistreés</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#E8DCCD",
  },

  subContainer: {
    width: "100%",
    height: "50%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 2,
    // borderColor: "black",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,

    // borderWidth: 2,
    // borderColor: "black",
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    // borderColor: "black",
    // borderWidth: 2,
  },

  btn1Container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 46,

    borderRadius: 4,
    backgroundColor: "#D7603A",
  },

  btn2Container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 22,

    borderRadius: 4,
    backgroundColor: "#DDC099",
    borderColor: "#D7603A",
    borderWidth: 1,
  },

  image: {
    width: 100,
    height: 100,
  },

  text1: {
    fontSize: 22,
    fontWeight: "500",
    // fontFamily: "sans-serif",
    color: "#E8DCCD",
  },

  text2: {
    fontSize: 16,
    fontWeight: "500",
    // fontFamily: "sans-serif",
    color: "#D7603A",
  },
});

export default PageAccueil;
