import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../Header";

export default class Write extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={{ textAlign: "center" }}>Write Story</Text>
      </View>
    );
  }
}
