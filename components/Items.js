import VTuile from "../visualisation/VTuile";
import { Svg } from "react-native-svg";
import { Alert, TouchableOpacity, View } from "react-native";

export const Tile1 = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Svg width="50" height="50" viewBox="-20 -20 20 20">
          <VTuile
            x="-10"
            y="-10"
            sides="4"
            area="2"
            stroke="#DDC099"
            strokeWidth="1.5"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

export const Tile2 = () => {
  return (
    <TouchableOpacity>
      <View>
        <Svg width="50" height="50" viewBox="-20 -20 20 20">
          <VTuile
            x="-10"
            y="-8"
            sides="3"
            area="1.25"
            stroke="#DDC099"
            strokeWidth="1.5"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

export const Tile3 = () => {
  return (
    <TouchableOpacity>
      <View>
        <Svg width="50" height="50" viewBox="-20 -20 20 20">
          <VTuile
            x="-10"
            y="-10"
            sides="5"
            area="2"
            stroke="#DDC099"
            strokeWidth="1.5"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};
