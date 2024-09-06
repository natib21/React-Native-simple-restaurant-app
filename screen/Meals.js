import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, Text } from "react-native";
const Meals = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};
export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
