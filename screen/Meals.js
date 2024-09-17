import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useEffect } from "react";
import MealItems from "../components/MealItems";
const Meals = ({ route, navigation }) => {
  const catId = route.params.catagoryId;

  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catagoryTitle = CATEGORIES.find((cata) => catId == cata.id).title;
    navigation.setOptions({
      title: catagoryTitle,
    });
  }, [catId, navigation]);
  const renderMeal = (itemData) => {
    const mealItemProp = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      id: itemData.item.id,
    };
    return (
      <MealItems
        id={mealItemProp.id}
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
