import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../Header";

export default class Read extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={{ textAlign: "center" }}>Read Story</Text>
      </View>
    );
  }
}
