import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskInput = (text) => {
    setTaskText(text);
  };

  const handleAddTask = () => {
    setTaskList((prevState) => [
      ...prevState,
      { text: taskText, id: Math.random().toString() },
    ]);
    setTaskText("");
  };

  const handleRemoveTask = (index) => {
    console.log("INDEX: ", index);
    setTaskList((prevState) => prevState.filter((item, idx) => idx != index));
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput
        handleAddTask={handleAddTask}
        handleTaskInput={handleTaskInput}
        taskText={taskText}
      />
      <View style={styles.taskContainer}>
        <FlatList
          data={taskList}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <TaskItem itemData={itemData} handleRemoveTask={handleRemoveTask} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 5,
  },
});
