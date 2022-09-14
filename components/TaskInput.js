import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import task from "../assets/images/task.png";

const TaskInput = (props) => {
  const [taskText, setTaskText] = useState("");

  const handleTaskInput = (text) => {
    setTaskText(text);
  };

  const handleAddTask = () => {
    props.handleAddTask(taskText);
    setTaskText("");
    props.handleModalIsVisable();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={task} />
        <TextInput
          placeholder="Discribe your task..."
          style={styles.inputField}
          onChangeText={handleTaskInput}
          value={taskText}
        />
        <View style={styles.buttonsContainer}>
          <View>
            <Button
              title="Add Task"
              disabled={taskText.length === 0}
              onPress={handleAddTask}
            />
          </View>
          <View>
            <Button title="Cancel" onPress={props.handleModalIsVisable} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#311b6b",
  },
  inputField: {
    backgroundColor: "white",
    borderRadius: 6,
    width: "90%",
    borderWidth: 1,
    borderColor: "blue",
    padding: 16,
  },
  buttonsContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TaskInput;
