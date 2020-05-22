import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello react Native</Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */}
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("btn tapped")}
      />
    </SafeAreaView>
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
