# Chat App with React Native and Firebase

This is a mobile chat application developed using React Native and Expo, featuring real-time chat functionality, image sharing, location sharing, and offline data storage. Users can personalize their chat experience by choosing background colors.

## Key Features

- **User Customization**: Users can set their display name and choose a background color for the chat screen before joining the chat.

- **Real-time Chat**: Display and participate in real-time chat conversations.

- **Media Sharing**: Send images from the device's image library or take pictures with the device's camera and send them within the chat.

- **Location Sharing**: Share location data via the chat, which is displayed on a map view.

- **Online and Offline Data Storage**: Chat conversations are stored both online using Google Firestore Database and locally on the device.

## Technical Requirements

- **Framework**: Developed using React Native and Expo.

- **Data Storage**:
  - Chat conversations stored in Google Firestore Database.
  - Local data storage for offline access.

- **Authentication**: Users are authenticated anonymously using Google Firebase authentication.

- **Media Handling**:
  - Users can select and send images from the device's image library.
  - Users can take pictures with the device's camera and send them, with images stored in Firebase Cloud Storage.

- **Location Data**: The app can access and send the user's location data within the chat.

- **Chat Interface**: Built using the Gifted Chat library for a rich and user-friendly chat experience.

- **Code Comments**: The codebase is well-documented with comments for easy understanding and maintenance.
