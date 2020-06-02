import * as React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search Screen">
        <Stack.Screen name="Search Screen" component={SearchScreen} />
        <Stack.Screen name="RestaurantProfile" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
