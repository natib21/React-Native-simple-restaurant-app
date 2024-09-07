import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import MealItems from "../components/MealItems";
const Meals = ({ route }) => {
  const catId = route.params.catagoryId;

  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.indexOf(catId) >= 0;
  });

  const renderMeal = (itemData) => {
    return <MealItems title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
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
