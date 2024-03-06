import { ImageBackground } from "react-native";
//Navegação
import { Background } from "../../assets/images/images";
import HomeText from "./HomeText";
import HomeButton from "./HomeButton";
import { styles } from "../../styles/Stylesheet";
import { View } from "react-native";

export default function HomeBackground() {

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.Background}
    >
      <View style={styles.quadrado}>
        <HomeText />
        <HomeButton />
      </View>
    </ImageBackground>
  );
}
