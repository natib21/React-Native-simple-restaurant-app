import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CatagoriesScreen from "./screen/CatagoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CatagoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
