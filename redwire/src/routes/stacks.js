import React from "react";
import { Platform } from "react-native";
import {
  createNativeStackNavigator,
  HeaderTitle,
} from "@react-navigation/native-stack";
import { Colors, LogoText } from "../utils/tools";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import VideosScreen from "../components/home/videos";
import VideoScreen from "../components/home/videos/video/index";
import HomeScreen from "../components/home/articles";
import ArticleScreen from "../components/home/articles/article";
import { View } from "react-native";

export const Stack = createNativeStackNavigator();

const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export const ScreenOptions = {
  headerMode: "float",
  headerTitleAlign: "center",
  headerTintColor: Colors.red,
  headerStyle: {
    backgroundColor: Colors.black1,
    shadowColor: Colors.red,
    borderBottomWidth: 10,
    borderBottomColor: Colors.red, //nu are linia rosie
    height: Platform.OS === "ios" ? 150 : 60,
  },
  headerTitle: () => <LogoText style={{ fontSize: 25 }} />,
};

export const VideosStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{ ...ScreenOptions }}
    initialRouteName="Videos_screen"
  >
    <Stack.Screen
      name="Videos_screen"
      component={VideosScreen}
      options={{ headerLeft: (props) => <LeftIcon /> }}
    />
  </Stack.Navigator>
);

export const HomeStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{ ...ScreenOptions }}
    initialRouteName="Home_screen"
  >
    <Stack.Screen
      name="Home_screen"
      component={HomeScreen}
      options={{ headerLeft: (props) => <LeftIcon /> }}
    />
    <Stack.Screen name="Article_screen" component={ArticleScreen} />
  </Stack.Navigator>
);
