import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CatagoriesScreen from "./screen/CatagoriesScreen";
import Meals from "./screen/Meals";
const stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#351401" },
          }}
        >
          <stack.Screen
            name="MealsCategories"
            component={CatagoriesScreen}
            options={{
              title: "All Catagories",
            }}
          />
          <stack.Screen name="Meals" component={Meals} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
