import React from "react";
import { Text } from "react-native";

export const Colors = {
  white: "#ffffff",
  black1: "#131418",
  black2: "#272930",
  black3: "#1a1a21",
  grey: "#c8c8c8",
  red: "#d74444",
};

export const LogoText = (props) => (
  <Text
    style={{
      fontFamily: "Monoton-Regular",
      color: "#ffffff",
      fontSize: 50,
      ...props.style,
    }}
  >
    {"RedWire"}
  </Text>
);
