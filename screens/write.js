import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../Header";
import db from "../config";
import * as firebase from "@react-native-firebase/app";

export default class Write extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  transferData = async () => {
    db.collections("Story").add({
      author: this.state.author,
      title: this.state.title,
      story: this.state.story,
    });
  };

  render() {
    return (
      <View>
        <Header />
        <TextInput
          style={styles.titleText}
          placeholder="Title"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
        />

        <TextInput
          style={styles.authorText}
          placeholder="Author"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
        />

        <TextInput
          style={styles.storyText}
          placeholder="Write Your Story Here"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          multiline={true}
        />
        <TouchableOpacity
          onPress={() => {
            this.transferData();
          }}
          styles={styles.submit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    alignContent: "center",
    margin: 5,
    padding: 10,
    borderColor: "rbg(0,0,0)",
    borderWidth: 3,
    height: 40,
  },
  authorText: {
    alignContent: "center",
    margin: 5,
    padding: 10,
    borderColor: "rbg(0,0,0)",
    borderWidth: 3,
    height: 45,
  },
  storyText: {
    alignContent: "center",
    margin: 5,
    padding: 10,
    borderColor: "rbg(0,0,0)",
    borderWidth: 3,
    height: 400,
  },
  submit: {
    borderRadius: 5,
    borderWidth: 3,
    borderBottomColor: "rgb(25,0,35)",
  },
});
