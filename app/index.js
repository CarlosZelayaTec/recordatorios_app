import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Link } from "expo-router";

export default function App() {
  const [resultado, setResultado] = useState(0);
  const [hexaText, setHexaText] = useState([]);

  const conversion = (hexa) => {
    let decimal = 0;
    const convers = hexa.map((x) => {
      if (
        x === "A" ||
        x === "B" ||
        x === "C" ||
        x === "D" ||
        x === "E" ||
        x === "F"
      ) {
        return parseInt(x, 16);
      } else return x;
    });

    let pos = convers.length - 1;
    convers.forEach((element) => {
      const x = Math.pow(16, pos);
      decimal += x * parseInt(element, 10);
      pos--;
    });

    setResultado(decimal);
  };

  return (
    <View style={styles.container}>
      <Text>Convertidor de HEXADECIMAL A DECIMAL</Text>
      <TextInput
        placeholder="1289ABEF"
        style={styles.input}
        onChangeText={(e) => setHexaText([...e])}
      />
      <Button title="Convertir" onPress={() => conversion(hexaText)} />
      <View>
        <Text>Resultado: {resultado} </Text>
      </View>
      <Link href="/Compras">Ir a compras</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    marginTop: 10,
    width: "50%",
    height: 40,
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
  },
});
