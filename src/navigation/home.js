import React from "react";
import HomeScreen from "../screens/Homescreen";
import { createStackNavigator } from '@react-navigation/stack'
import InitScreen from "../screens/InitScreen";
import SearchResults from "../screens/SearchResults";
import SearchLocation from "../screens/SearchLocation/index";
import StartScreen from "../screens/StartScreen"
import SignUp from "../screens/SignUp/index";
import Login from "../screens/Login/index";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"InitScreen"} component={InitScreen} />
      <Stack.Screen name={"StartScreen"} component={StartScreen} />
      <Stack.Screen name={"SignUp"} component={SignUp} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
      <Stack.Screen name={"SearchLocation"} component={SearchLocation} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;