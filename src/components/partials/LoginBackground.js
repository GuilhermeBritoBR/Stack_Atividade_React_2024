import { ImageBackground } from "react-native";
//Navegação
import { BackgroundLogin} from "../../assets/images/images";
import { styles } from "../../styles/Stylesheet";

const ImageBackgroundLogin = ({ children }) => {
  return (
    <ImageBackground
      source={BackgroundLogin}
      resizeMode="cover"
      style={styles.Background}
    >
        {children}
    </ImageBackground>
  );
};
export default ImageBackgroundLogin;
