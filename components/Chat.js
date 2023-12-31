import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import CustomActions from "./CustomActions";
import * as ImagePicker from "expo-image-picker";
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

const Chat = ({ route, navigation, db, isConnected, storage }) => {
  // these variables are getting passed from Start screen
  const { name, color, userID } = route.params;

  const [messages, setMessages] = useState([]);

  // append the new messages to the previous message list
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  // creates custom chat bubble
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach((doc) => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
      });
      setMessages(newMessages);
    });
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{ width: 150, height: 100, borderRadius: 13, margin: 3 }}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  };

  const renderCustomActions = (props) => {
    return <CustomActions storage={storage} {...props} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        user={{
          _id: userID,
          name: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
