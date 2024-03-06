import { TextInput, View } from "react-native";
import { StylesContato } from "../../styles/Stylesheet";

export default function TextInputLogin() {
  return (
    <View>
      <TextInput placeholder="E-Mail:" style={StylesContato.NomeCaixa} />

      <TextInput placeholder="Senha:" style={StylesContato.NomeCaixa} secureTextEntry={true} />

    </View>
  );
}
