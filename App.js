import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBjwwHvb8PJbfW6lNDYhd9OdwfXyIjgQoc",
    authDomain: "chatapp-273e9.firebaseapp.com",
    projectId: "chatapp-273e9",
    storageBucket: "chatapp-273e9.appspot.com",
    messagingSenderId: "743680584887",
    appId: "1:743680584887:web:082ff0888cafe8e4227132",
  };

  // Initialize firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
