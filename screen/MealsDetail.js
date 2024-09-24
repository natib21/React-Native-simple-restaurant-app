import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetailComp from "../components/MealDetailComp";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/iconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

const MealsDetail = ({ route, navigation }) => {
  // const favoriteMeals = useContext(FavoritesContext);

  const favoriteMeals = useSelector((meal) => meal.favoriteMeals.ids);
  const dispatch = useDispatch();
  const catId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === catId);
  const mealIsFavorite = favoriteMeals.includes(catId);
  const changeFavoritesStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMeals.removeFavorites(catId);
      dispatch(removeFavorite({ id: catId }));
    } else {
      // favoriteMeals.addFavorites(catId);
      dispatch(addFavorite({ id: catId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoritesStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetailComp
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.ListOuterCountainer}>
        <View style={styles.ListContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealsDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  ListOuterCountainer: {
    alignItems: "center",
  },
  ListContainer: {
    width: "80%",
  },
});
