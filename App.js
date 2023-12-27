import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const time = () => {
    setChange("Estoy utilizando el useState");
  };

  const fraccion = (tiempo) => {
    return (
      <>
        <Text>Vamos a ver si esto funciona {change}</Text>
      </>
    );
  };

  const [change, setChange] = useState(
    "Open up App.js to start working on your app!"
  );

  return (
    <View style={styles.container}>
      <Text>{change}</Text>
      {fraccion()}
      <Button onPress={time} title="Press me" />
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
});
