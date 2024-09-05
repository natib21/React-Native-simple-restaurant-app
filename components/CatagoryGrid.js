import { Pressable, View, Text } from "react-native";

const CatagoryGrid = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};
export default CatagoryGrid;
