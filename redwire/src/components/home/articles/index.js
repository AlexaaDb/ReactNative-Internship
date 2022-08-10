import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="see article"
        onPress={() => navigation.navigate("Article_screen")}
      />
    </View>
  );
};

export default HomeScreen;
