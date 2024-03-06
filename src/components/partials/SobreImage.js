import { Image, View } from "react-native";
import { Logo } from "../../assets/images/images";
import { sobreestilo } from "../../styles/Stylesheet";

export default function SobreImage() {
  return (
    <View>
      <Image source={Logo} style={sobreestilo.icon} />
    </View>
  );
}
