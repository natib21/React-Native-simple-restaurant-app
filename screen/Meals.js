import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import MealItems from "../components/MealItems";
const Meals = ({ route }) => {
  const catId = route.params.catagoryId;

  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.indexOf(catId) >= 0;
  });

  const renderMeal = (itemData) => {
    const mealItemProp = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return (
      <MealItems
        title={mealItemProp.title}
        imageUrl={mealItemProp.imageUrl}
        duration={mealItemProp.duration}
        complexity={mealItemProp.complexity}
        affordability={mealItemProp.affordability}
      />
    );
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
