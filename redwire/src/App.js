import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { autoSignIn } from "./store/actions";
import { StyleSheet, Text, View } from "react-native";
import SideDrawerCustom from "./utils/customDrawer";
import { Colors } from "./utils/tools";
//import { firebase, usersCollection, auth } from "../../firebase";

const Drawer = createDrawerNavigator();

import { Stack, HomeStack, VideosStack, ScreenOptions } from "./routes/stacks";
import AuthScreen from "./components/auth";
import ProfileScreen from "./components/user/profile/profile";
import VideoScreen from "./components/home/videos/video";
import Splash from "./components/auth/splash";

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawerCustom {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.black1,
      },
    }}
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideosStack} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.dispatch(autoSignIn()).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {this.props.auth.isAuth ? (
            //we show the whole app

            <>
              <Stack.Screen
                name="Main"
                component={MainDrawer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VideoScreen"
                component={VideoScreen}
                options={{ ...ScreenOptions, headerBackTitleVisible: false }}
              />
            </>
          ) : //we show the login
          this.state.loading ? (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Splash"
              component={Splash}
            />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="AuthScreen"
              component={AuthScreen}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
