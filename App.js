import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

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

  const handleModalIsVisable = () => {
    setModalIsVisable(!modalIsVisable);
  };

  return (
    <React.StrictMode>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Task" onPress={handleModalIsVisable} />
        {modalIsVisable && (
          <TaskInput
            handleAddTask={handleAddTask}
            visible={modalIsVisable}
            handleModalIsVisable={handleModalIsVisable}
          />
        )}
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
    </React.StrictMode>
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
