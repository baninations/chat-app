import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

// list of colors for the apps background UI
const colorsList = {
  a: "#090C08",
  b: "#474056",
  c: "#8A95A5",
  d: "#B9C6AE",
};

const image = require("../assets/background-img.png");

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(colorsList.d);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Let's Chat</Text>
        <View style={styles.controls}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
          />
          <View style={styles.colorsArea}>
            <Text style={styles.backgroundTextChooser}>
              Choose Background Color:
            </Text>
            <View style={styles.colorContainer}>
              <TouchableOpacity
                style={[
                  styles.roundedBtn,
                  color === colorsList.a && styles.selectedBtn,
                  { backgroundColor: colorsList.a },
                ]}
                onPress={() => setColor(colorsList.a)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.roundedBtn,
                  color === colorsList.b && styles.selectedBtn,
                  { backgroundColor: colorsList.b },
                ]}
                onPress={() => setColor(colorsList.b)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.roundedBtn,
                  color === colorsList.c && styles.selectedBtn,
                  { backgroundColor: colorsList.c },
                ]}
                onPress={() => setColor(colorsList.c)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.roundedBtn,
                  color === colorsList.d && styles.selectedBtn,
                  { backgroundColor: colorsList.d },
                ]}
                onPress={() => setColor(colorsList.d)}
              ></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#75708380",
  },
  controls: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "44%",
    width: "88%",
    backgroundColor: "white",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  colorContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "88%",
  },
  button: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "grey",
    width: "88%",
    height: "20%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  colorsArea: {
    marginLeft: 20,
  },
  roundedBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  backgroundTextChooser: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  selectedBtn: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Start;
