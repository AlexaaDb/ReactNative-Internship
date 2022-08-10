import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import SideDrawerCustom from "./utils/customDrawer";
import { Colors } from "./utils/tools";

const Drawer = createDrawerNavigator();

import { Stack, HomeStack, VideosStack } from "./routes/stacks";
import AuthScreen from "./components/auth";
import ProfileScreen from "./components/user/profile/profile";

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawerCustom {...props} />}
    screenOptions={{
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
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth.isAuth ? (
            //we show the whole app
            <>
              <Stack.Screen
                name="Main"
                component={MainDrawer}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            //we show the login
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
