import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const TaskInput = (props) => {
  const [taskText, setTaskText] = useState("");

  const handleTaskInput = (text) => {
    setTaskText(text);
  };

  const handleAddTask = () => {
    props.handleAddTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Discribe your task..."
        style={styles.inputField}
        onChangeText={handleTaskInput}
        value={taskText}
      />
      <Button
        title="Add Task"
        disabled={taskText.length === 0}
        onPress={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    padding: 10,
    marginRight: 8,
  },
});

export default TaskInput;
