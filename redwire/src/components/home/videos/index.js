import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Tile } from "react-native-elements";

const VideosScreen = ({ navigation }) => {
  const renderVideos = () => <Tile />;

  return (
    <ScrollView>
      <Text>Videos</Text>
      <Button
        title="see video"
        onPress={() => navigation.navigate("Video_screen")}
      />
    </ScrollView>
  );
};

export default VideosScreen;
