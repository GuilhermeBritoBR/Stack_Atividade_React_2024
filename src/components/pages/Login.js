import { StylesContato } from "../../styles/Stylesheet";
import { View } from "react-native";
import ImageBackgroundLogin from "../partials/LoginBackground";
import TextLogin from "../partials/TextLogin";
import TextInputLogin from "../partials/TextInputLogin";

export default function Login() {
  return (
    <View style={StylesContato.containerContact}>
        <ImageBackgroundLogin>
        <View style={StylesContato.TherreContainerContact}>
          <TextLogin />
          <TextInputLogin />
        </View>
        </ImageBackgroundLogin>
    </View>
  );
}
