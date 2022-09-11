import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (taskText) => {
    setTaskList((prevState) => [
      ...prevState,
      { text: taskText, id: Math.random().toString(), completed: false },
    ]);
  };

  const handleCompleteTask = (index) => {
    setTaskList((prevState) =>
      prevState.map((item, idx) =>
        idx === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemoveTask = (index) => {
    setTaskList((prevState) => prevState.filter((item, idx) => idx != index));
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput handleAddTask={handleAddTask} />
      <View style={styles.taskContainer}>
        <FlatList
          data={taskList}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <TaskItem
              itemData={itemData}
              handleRemoveTask={handleRemoveTask}
              handleCompleteTask={handleCompleteTask}
            />
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
