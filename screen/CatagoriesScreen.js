import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGrid from "../components/CatagoryGrid";

const CatagoriesScreen = ({ navigation }) => {
  const renderItems = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("Meals", {
        catagoryId: itemData.item.id,
      });
    };

    return (
      <CatagoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItems}
      numColumns={2}
    />
  );
};
export default CatagoriesScreen;
