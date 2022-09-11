import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TaskItem = ({ itemData, handleRemoveTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text>
        [{itemData.index + 1}]. {itemData.item.text}
      </Text>
      <Text onPress={() => handleRemoveTask(itemData.index)}>
        <AntDesign name="close" size={24} color="red" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TaskItem;
