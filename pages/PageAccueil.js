import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { Logo } from "../components/ToolBarAssets";

const PageAccueil = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Logo />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate("NewNouveauDesing", {})}
          >
            <View style={styles.btn1Container}>
              <Text style={styles.text1}>Nouveau design</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Alert.alert("Version Beta ;)")}
          >
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
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#E8DCCD",
  },

  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D7603A",
  },
});

export default PageAccueil;
