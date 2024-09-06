import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CatagoriesScreen from "./screen/CatagoriesScreen";

const stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="MealsCategories" component={CatagoriesScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
