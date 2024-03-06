import SobreText from "../partials/SobreText";
import { styles } from "../../styles/Stylesheet";
import { View } from "react-native";
import SobreImage from "../partials/SobreImage";
import { sobreestilo } from "../../styles/Stylesheet";
import SobreImageBackground from "../partials/SobreImageBackground";

export default function Sobre() {
  return (
    <View style={sobreestilo.containerSobre}>
    <SobreImageBackground>
        <View style={sobreestilo.containerSobre}>
          <View style={sobreestilo.secundaryContainer}>
            <SobreImage />
            <SobreText />
          </View>
        </View>
      </SobreImageBackground>
      </View>
  );
}
