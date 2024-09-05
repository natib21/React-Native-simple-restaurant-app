import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGrid from "../components/CatagoryGrid";
const renderItems = (itemData) => {
  return (
    <CatagoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
};
const CatagoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItems}
    />
  );
};
export default CatagoriesScreen;
