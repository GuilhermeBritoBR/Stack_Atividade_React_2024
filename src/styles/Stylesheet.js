import { StyleSheet } from "react-native";

//Estilização da Página Home

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  quadrado: {
    backgroundColor: "#ffffff55",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "60%",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
  },
  Background: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

// Estilização da Página Sobre

export const sobreestilo = StyleSheet.create({
  icon: {
    width: 300,
    height: 300,
    border: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 150,
  },
  secundaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 25,
    fontSize: 30,
  },
  containerSobre: {
    flex: 1,
    backgroundColor: '#ffffff33',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
});

// Estilização da Página Contato

export const StylesContato = StyleSheet.create({
  NomeCaixa: {
    padding: 20,
    fontSize: 20,
    marginTop: 5,
    borderBottomWidth: 1,
    border: "solid",
    borderColor: "black",
  },
  text: {
    marginTop: 25,
    fontSize: 30,
  },
  TherreContainerContact: {
    backgroundColor: "#fff",
    opacity: "0.9",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "60%",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  viewText: {
    marginBottom: 20,
  },
  containerContact: {
    backgroundColor: "#00008f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
