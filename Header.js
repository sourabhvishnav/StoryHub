import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.headTxt}>Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignContent: "top",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "rgb(234,159,139)",
  },
  headTxt: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 7.5,
  },
});
