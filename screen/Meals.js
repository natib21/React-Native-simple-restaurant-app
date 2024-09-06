import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, Text } from "react-native";
const Meals = ({ route }) => {
  const catId = route.params.catagoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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
