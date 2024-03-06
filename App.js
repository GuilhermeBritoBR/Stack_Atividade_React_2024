import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importando os componentes
import Home from "./src/components/pages/Home";
import Sobre from "./src/components/pages/Sobre";
import Contato from "./src/components/pages/Contato";
import Login from "./src/components/pages/Login";

//CRIANDO UMA INSTÂNCIA NO STACK NAVIGATOR
//ISSO NOS PERMITE UTILIZAR NA NAVEGAÇÃO
export default function App() {
  //coletando pacote stackNavigator
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
