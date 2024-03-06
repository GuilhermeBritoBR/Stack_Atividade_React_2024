import { TextInput, View } from "react-native";
import { StylesContato } from "../../styles/Stylesheet";

export default function TextInputContato() {
  return (
    <View>
      <TextInput placeholder="Nome:" style={StylesContato.NomeCaixa} />

      <TextInput placeholder="E-Mail:" style={StylesContato.NomeCaixa} />

      <TextInput placeholder="Mensagem:" style={StylesContato.NomeCaixa} />
    </View>
  );
}
