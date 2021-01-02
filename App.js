import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Header from "./Header";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ReadScreen from "./screens/Read";
import WriteScreen from "./screens/write";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <AppContainer />
      </View>
    );
  }
}

const Navigator = createBottomTabNavigator(
  {
    Read: { screen: ReadScreen },
    Write: { screen: WriteScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === "Read") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "Write") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(Navigator);

const styles = StyleSheet.create({});
