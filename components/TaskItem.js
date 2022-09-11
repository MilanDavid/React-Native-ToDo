import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TaskItem = ({ itemData, handleRemoveTask, handleCompleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Pressable onPress={() => handleCompleteTask(itemData.index)}>
        <View style={styles.taskDescriptionContainer}>
          {itemData.item.completed ? (
            <View style={styles.taskCompleted} />
          ) : (
            <View style={styles.toDoTask} />
          )}
          <Text>{itemData.item.text}</Text>
        </View>
      </Pressable>
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
  toDoTask: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  taskCompleted: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  taskDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TaskItem;
