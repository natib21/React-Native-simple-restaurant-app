import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
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
  return <MealsList items={displayedMeals} />;
};
export default Meals;
