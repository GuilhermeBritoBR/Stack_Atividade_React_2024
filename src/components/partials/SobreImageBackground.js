import { ImageBackground } from "react-native";
//Navegação
import { BackgroundSobre } from "../../assets/images/images";
import { styles } from "../../styles/Stylesheet";
import { View } from "react-native";

const SobreImageBackground = ({ children }) => {
  return (
      <ImageBackground
        source={BackgroundSobre}
        resizeMode="cover"
        style={styles.Background}
      >
        {children}
      </ImageBackground>
  );
};
export default SobreImageBackground;
