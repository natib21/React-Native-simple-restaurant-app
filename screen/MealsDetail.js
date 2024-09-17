import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetailComp from "../components/MealDetailComp";
const MealsDetail = ({ route }) => {
  const catId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === catId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>

      <MealsDetailComp
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
};
export default MealsDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
