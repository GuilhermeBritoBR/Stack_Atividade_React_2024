import { ImageBackground } from "react-native";
//Navegação
import { Background, BackgroundContact } from "../../assets/images/images";
import { styles } from "../../styles/Stylesheet";

const ImageBackgroundContact = ({ children }) => {
  return (
    <ImageBackground
      source={BackgroundContact}
      resizeMode="cover"
      style={styles.Background}
    >
        {children}
    </ImageBackground>
  );
};
export default ImageBackgroundContact;
