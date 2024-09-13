import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
const MealsDetail = ({ route, navigation }) => {
  const catId = route.params.catagoryId;
  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View>
      <Text>Meals details Page</Text>
    </View>
  );
};
export default MealsDetail;
