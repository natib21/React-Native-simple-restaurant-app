import { View, FlatList, StyleSheet } from "react-native";
import MealItems from "./MealItems";

const MealsList = ({ items }) => {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
