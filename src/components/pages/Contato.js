import SobreText from "../partials/SobreText";
import { StylesContato } from "../../styles/Stylesheet";
import { View } from "react-native";
import SobreImage from "../partials/SobreImage";
import TextInputContato from "../partials/TextInputContato";
import TextContato from "../partials/TextContato";
import ImageBackgroundContact from "../partials/ImageBackgroundContact";

export default function Contato() {
  return (
    <View style={StylesContato.containerContact}>
        <ImageBackgroundContact>
        <View style={StylesContato.TherreContainerContact}>
          <TextContato />
          <TextInputContato />
        </View>
        </ImageBackgroundContact>
    </View>
  );
}
