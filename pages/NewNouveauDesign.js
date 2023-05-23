import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Svg, Polygon, G } from "react-native-svg";
import Colors from "../constants/colors";
import { CloseBtn, UndoBtn, RedoBtn } from "../components/ToolBarAssets";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import ImageZoom from "react-native-image-pan-zoom";
import { squareTiling2, tilingWithHexa } from "../core/Tuilage";
import ChxTuile from "../components/ChxTuile";
import GenrMotif from "../components/GenrMotif";
import { motif } from "../core/Motif";
import PersoDes from "../components/PersoDes";
import ExprtDes from "../components/ExprtDes";

const NewNouveauDesing = (props) => {
  // This function is used to generate a tiling based on the tiling type
  const generateTiling = (tileType) => {
    switch (tileType) {
      case "tile1":
        return squareTiling2(600, 600, 50);
      case "tile2":
        return tilingWithHexa(600, 600, 30);
      default:
        return;
    }
  };

  const [fillColor, setFillColor] = useState("none");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [strokeColor, setStrokeColor] = useState(Colors.primary);
  const [gridStroke, setGridStroke] = useState(Colors.primary);

  const grStroke = gridStroke;

  // This function is used to generate a motif
  const generateMotif = (myTiling, angleValue) => {
    return [...myTiling.values()].map((value) => (
      <Polygon
        key={Math.random()}
        points={motif(value, angleValue)}
        fill={fillColor}
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />
    ));
  };

  // const [etatActuel, modifierEtatActuel] = useState();
  const [tileType, setTileType] = useState("tile1");
  const [myTiling, setMyTiling] = useState(generateTiling(tileType));
  const [angleValue, setAngleValue] = useState(25);
  const [myMotif, setMyMotif] = useState(generateMotif(myTiling, angleValue));
  const [idx, setIdx] = useState(0);

  // Update myTiling when tileType changes
  useEffect(() => {
    setMyTiling(generateTiling(tileType));
  }, [tileType]);

  // Update myMotif when myTiling and angleValue changes
  useEffect(() => {
    setMyMotif(generateMotif(myTiling, angleValue));
  }, [myTiling, angleValue]);

  useEffect(() => {
    setMyMotif(generateMotif(myTiling, angleValue));
  }, [fillColor, strokeColor, strokeWidth]);

  // We need a way to get the tile type from the user, we accomplish this by using a function
  // that gets the type from the user
  const getTileType = (tileType) => {
    setTileType(tileType);
  };

  const getAngleValue = (angle) => {
    setAngleValue(angle);
  };

  const getStrokeWidth = (stWidth) => {
    setStrokeWidth(stWidth);
  };

  const getStrokeColor = (stColor) => {
    setStrokeColor(stColor);
  };

  const getFillColor = (fColor) => {
    setFillColor(fColor);
  };

  const getStrokeEnabled = (gridEnabled) => {
    setGridStroke(gridEnabled);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.toolBar}>
        <TouchableOpacity
          style={styles.closeBtnContainer}
          onPress={() => props.navigation.navigate("PageAcceuil", {})}
        >
          <CloseBtn />
        </TouchableOpacity>
        <View style={styles.undoRedoContainer}>
          <TouchableOpacity onPress={() => Alert.alert("Version Beta ;)")}>
            <UndoBtn />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Version Beta ;)")}>
            <RedoBtn />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.playground}>
        <ImageZoom
          cropWidth={600}
          cropHeight={600}
          imageWidth={600}
          imageHeight={600}
          //  minScale = {1.}
          maxScale={2}
        >
          <Svg height={"100%"} width={"100%"}>
            <G fill={"none"} strokeWidth="2" stroke={gridStroke}>
              {[...myTiling.values()].map((value) => (
                <Polygon key={Math.random()} points={value} />
              ))}
            </G>
            <G fill={fillColor} strokeWidth={strokeWidth} stroke={strokeColor}>
              {myMotif}
            </G>
          </Svg>
        </ImageZoom>
      </View>
      <View style={styles.controles}>
        <Swiper
          activeDotColor={Colors.second_accent}
          loop={false}
          onIndexChanged={(index) => setIdx(index)}
        >
          <ChxTuile getter={getTileType} />
          <GenrMotif getter={getAngleValue} />
          <PersoDes
            getter1={getStrokeWidth}
            getter2={getStrokeColor}
            getter3={getFillColor}
            getter4={getStrokeEnabled}
            gridStroke={grStroke}
          />
          <ExprtDes />
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.second_accent,
    alignItems: "center",
    justifyContent: "center",
  },

  toolBar: {
    flex: 2,
    backgroundColor: Colors.first_accent,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  closeBtnContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  undoRedoContainer: {
    alignItems: "center",

    flex: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  playground: {
    flex: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  controles: {
    flex: 6,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  subControl: {
    flex: 1,
  },

  controleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },

  controleTitle: {
    color: Colors.second_accent,
    fontSize: 20,
    fontWeight: "bold",
  },

  scrollContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  scroll: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  ghostContainer: {
    flex: 1,
  },
});

export default NewNouveauDesing;
